import React, { useState } from 'react';

const Predictor = () => {
  const [geneA, setGeneA] = useState('');
  const [geneB, setGeneB] = useState('');
  const [coexp, setCoexp] = useState('');
  const [ppi, setPPI] = useState('');
  const [pathway, setPathway] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:7860/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gene_a: geneA,
        gene_b: geneB,
        coexp: coexp,
        ppi: ppi,
        pathway: pathway,
      }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <h2>Gene Disease Predictor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Gene A"
          value={geneA}
          onChange={(e) => setGeneA(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Gene B"
          value={geneB}
          onChange={(e) => setGeneB(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Co-expression"
          value={coexp}
          onChange={(e) => setCoexp(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="PPI Link"
          value={ppi}
          onChange={(e) => setPPI(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Shared Pathways"
          value={pathway}
          onChange={(e) => setPathway(e.target.value)}
          required
        />
        <button type="submit">Predict Disease</button>
      </form>
      {result && <div>{result}</div>}
    </div>
  );
};

export default Predictor;
