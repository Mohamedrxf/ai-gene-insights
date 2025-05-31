import pandas as pd
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Embedding, Flatten, Dense, Concatenate
from tensorflow.keras.optimizers import Adam

# Load dataset
data = pd.read_csv(r"C:\Users\Gayathri\Downloads\gene_interaction_dataset.csv")  

# Backup original for later lookup
original_df = data.copy()

# Label encoding
le_geneA = LabelEncoder()
le_geneB = LabelEncoder()
le_coexp = LabelEncoder()
le_ppi = LabelEncoder()
le_pathway = LabelEncoder()

data["Gene_A"] = le_geneA.fit_transform(data["Gene A"].astype(str))
data["Gene_B"] = le_geneB.fit_transform(data["Gene B"].astype(str))
data["Coexp"] = le_coexp.fit_transform(data["Co-expression"].astype(str))
data["PPI"] = le_ppi.fit_transform(data["PPI Link"].astype(str))
data["Pathway"] = le_pathway.fit_transform(data["Shared Pathways"].astype(str))

# Features and target
X = data[["Gene_A", "Gene_B", "Coexp", "PPI", "Pathway"]]
y = data["Output"].astype(int)

# Model inputs
input_gene_a = Input(shape=(1,), name="Gene_A")
input_gene_b = Input(shape=(1,), name="Gene_B")
input_coexp = Input(shape=(1,), name="Coexp")
input_ppi = Input(shape=(1,), name="PPI")
input_pathway = Input(shape=(1,), name="Pathway")

# Embedding layers
gene_vocab_size = max(len(le_geneA.classes_), len(le_geneB.classes_)) + 1
gene_embedding = Embedding(input_dim=gene_vocab_size, output_dim=8)

gene_a_embed = Flatten()(gene_embedding(input_gene_a))
gene_b_embed = Flatten()(gene_embedding(input_gene_b))

# Concatenate all features
merged = Concatenate()([gene_a_embed, gene_b_embed, input_coexp, input_ppi, input_pathway])

# Dense layers
x = Dense(16, activation='relu')(merged)
x = Dense(8, activation='relu')(x)
output = Dense(1, activation='sigmoid')(x)

# Build and compile model
model = Model(inputs=[input_gene_a, input_gene_b, input_coexp, input_ppi, input_pathway], outputs=output)
model.compile(optimizer=Adam(learning_rate=0.001), loss="binary_crossentropy", metrics=["accuracy"])

# Train model
model.fit(
    [X["Gene_A"], X["Gene_B"], X["Coexp"], X["PPI"], X["Pathway"]],
    y,
    epochs=30,
    batch_size=2,
    validation_split=0.1,
    verbose=2
)

# Flask API
app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict_disease():
    data_in = request.json
    try:
        geneA_enc = le_geneA.transform([data_in['gene_a'].strip()])[0]
        geneB_enc = le_geneB.transform([data_in['gene_b'].strip()])[0]
        coexp_enc = le_coexp.transform([data_in['coexp'].strip()])[0]
        ppi_enc = le_ppi.transform([data_in['ppi'].strip()])[0]
        pathway_enc = le_pathway.transform([data_in['pathway'].strip()])[0]
    except Exception as e:
        return jsonify({"error": f"Invalid input value(s): {str(e)}"}), 400
    
    input_dict = {
        'Gene_A': np.array([geneA_enc]),
        'Gene_B': np.array([geneB_enc]),
        'Coexp': np.array([coexp_enc]),
        'PPI': np.array([ppi_enc]),
        'Pathway': np.array([pathway_enc])
    }

    pred_prob = model.predict(input_dict)[0][0]
    pred_class = 1 if pred_prob >= 0.5 else 0

    if pred_class == 1:
        match = original_df[
            (original_df['Gene A'].str.strip() == data_in['gene_a'].strip()) &
            (original_df['Gene B'].str.strip() == data_in['gene_b'].strip()) &
            (original_df['Co-expression'].str.strip() == data_in['coexp'].strip()) &
            (original_df['PPI Link'].str.strip() == data_in['ppi'].strip()) &
            (original_df['Shared Pathways'].str.strip() == data_in['pathway'].strip())
        ]
        if not match.empty:
            disease_name = match['Shared Diseases'].values[0]
            return jsonify({"disease": disease_name, "confidence": float(pred_prob)}), 200
        else:
            return jsonify({"message": "Disease likely, but specific name not found.", "confidence": float(pred_prob)}), 200
    else:
        return jsonify({"message": "No disease found.", "confidence": float(pred_prob)}), 200

if __name__ == '__main__':
    app.run(debug=True)
