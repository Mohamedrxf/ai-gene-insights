import React, { useState } from 'react';
import axios from 'axios';

interface PredictionResponse {
  disease?: string;
  message?: string;
  confidence: number;
  error?: string;
}

const App: React.FC = () => {
  // Define dropdown options for each input
  const geneOptions = ['KRAS', 'CTNNB1', 'CHEK2', 'TP53'];
  const coexpOptions = ['High', 'Medium', 'Low'];
  const ppiOptions = ['Yes', 'No'];
  const pathwayOptions = ['Yes', 'No'];

  const [geneA, setGeneA] = useState(geneOptions[0]);
  const [geneB, setGeneB] = useState(geneOptions[1]);
  const [coexp, setCoexp] = useState(coexpOptions[0]);
  const [ppi, setPpi] = useState(ppiOptions[0]);
  const [pathway, setPathway] = useState(pathwayOptions[0]);
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await axios.post<PredictionResponse>('http://127.0.0.1:5000/predict', {
        gene_a: geneA,
        gene_b: geneB,
        coexp: coexp,
        ppi: ppi,
        pathway: pathway
      });

      if (response.data.error) {
        setResult(`Error: ${response.data.error}`);
      } else if (response.data.disease) {
        setResult(`Predicted Disease: ${response.data.disease} (Confidence: ${(response.data.confidence * 100).toFixed(2)}%)`);
      } else if (response.data.message) {
        setResult(`${response.data.message} (Confidence: ${(response.data.confidence * 100).toFixed(2)}%)`);
      } else {
        setResult('Unexpected response from server.');
      }
    } catch (error: any) {
      setResult(`Error: ${error.response?.data?.error || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Gene Disease Predictor</h1>
      <form onSubmit={handleSubmit}>
        <label>Gene A:</label>
        <select
          value={geneA}
          onChange={(e) => setGeneA(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
          required
        >
          {geneOptions.map((gene) => (
            <option key={gene} value={gene}>{gene}</option>
          ))}
        </select>

        <label>Gene B:</label>
        <select
          value={geneB}
          onChange={(e) => setGeneB(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
          required
        >
          {geneOptions.map((gene) => (
            <option key={gene} value={gene}>{gene}</option>
          ))}
        </select>

        <label>Co-expression:</label>
        <select
          value={coexp}
          onChange={(e) => setCoexp(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
          required
        >
          {coexpOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <label>PPI Link:</label>
        <select
          value={ppi}
          onChange={(e) => setPpi(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
          required
        >
          {ppiOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <label>Shared Pathways:</label>
        <select
          value={pathway}
          onChange={(e) => setPathway(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
          required
        >
          {pathwayOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <button
          type="submit"
          disabled={loading}
          style={{ padding: 10, width: '100%', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          {loading ? 'Predicting...' : 'Predict'}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: 20, fontWeight: 'bold', whiteSpace: 'pre-wrap' }}>
          {result}
        </div>
      )}
    </div>
  );
};

export default App;
