import React, { useState } from 'react';
import axios from 'axios';
import { Dna } from 'lucide-react'; // lucide-react for DNA logo

interface PredictionResponse {
  disease?: string;
  message?: string;
  confidence: number;
  error?: string;
}

const App: React.FC = () => {
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
        coexp,
        ppi,
        pathway
      });

      if (response.data.error) {
        setResult(`Error: ${response.data.error}`);
      } else if (response.data.disease) {
        setResult(`🧬 Predicted Disease: ${response.data.disease}\n🔬 Confidence: ${(response.data.confidence * 100).toFixed(2)}%`);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <div className="flex flex-col items-center mb-6">
          <Dna className="h-12 w-12 text-blue-600" />
          <h1 className="text-2xl font-semibold text-gray-800 mt-2">Gene Disease Predictor</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-sm text-gray-700">Gene A</label>
            <select value={geneA} onChange={(e) => setGeneA(e.target.value)} className="w-full mt-1 border rounded-md p-2 focus:ring-2 focus:ring-blue-400">
              {geneOptions.map((gene) => (
                <option key={gene} value={gene}>{gene}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-700">Gene B</label>
            <select value={geneB} onChange={(e) => setGeneB(e.target.value)} className="w-full mt-1 border rounded-md p-2 focus:ring-2 focus:ring-blue-400">
              {geneOptions.map((gene) => (
                <option key={gene} value={gene}>{gene}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-700">Co-expression</label>
            <select value={coexp} onChange={(e) => setCoexp(e.target.value)} className="w-full mt-1 border rounded-md p-2 focus:ring-2 focus:ring-blue-400">
              {coexpOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-700">PPI Link</label>
            <select value={ppi} onChange={(e) => setPpi(e.target.value)} className="w-full mt-1 border rounded-md p-2 focus:ring-2 focus:ring-blue-400">
              {ppiOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-700">Shared Pathways</label>
            <select value={pathway} onChange={(e) => setPathway(e.target.value)} className="w-full mt-1 border rounded-md p-2 focus:ring-2 focus:ring-blue-400">
              {pathwayOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            {loading ? 'Predicting...' : 'Predict'}
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md text-gray-800 whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
