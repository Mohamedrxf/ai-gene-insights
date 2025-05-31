
export interface GeneMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export class GeneBotService {
  getGeneResponse(userInput: string): string {
    const input = userInput.toLowerCase();
    
    // Gene basics
    if (input.includes('what is gene') || input.includes('define gene')) {
      return "A gene is a specific sequence of DNA that contains instructions for making proteins. Genes determine traits like eye color, height, and susceptibility to diseases. Humans have about 20,000-25,000 genes.";
    }
    
    // Gene expression
    if (input.includes('gene expression') || input.includes('how genes work')) {
      return "Gene expression is the process where genetic information is used to create proteins. It involves transcription (DNA → RNA) and translation (RNA → protein). This process can be regulated to control when and how much protein is made.";
    }
    
    // Gene mutations
    if (input.includes('mutation') || input.includes('genetic change')) {
      return "Gene mutations are changes in DNA sequence that can be beneficial, harmful, or neutral. They can be inherited from parents or acquired during life. Examples include sickle cell anemia (harmful) and lactose tolerance (beneficial).";
    }
    
    // Gene therapy
    if (input.includes('gene therapy') || input.includes('genetic treatment')) {
      return "Gene therapy involves introducing genetic material into a patient's cells to treat disease. It can replace faulty genes, introduce new genes to fight disease, or turn off genes that cause problems.";
    }
    
    // Gene testing
    if (input.includes('genetic test') || input.includes('gene test')) {
      return "Genetic testing analyzes DNA to identify changes in genes that may cause disease. It can predict disease risk, confirm diagnoses, guide treatment decisions, and provide information about inherited conditions.";
    }
    
    // Gene inheritance
    if (input.includes('inherit') || input.includes('heredity') || input.includes('family')) {
      return "Genes are inherited from parents through chromosomes. You receive one copy of each gene from each parent. Some traits are controlled by single genes (like blood type), while others involve multiple genes.";
    }
    
    // Specific genes
    if (input.includes('brca') || input.includes('cancer gene')) {
      return "BRCA1 and BRCA2 are genes that normally help prevent breast and ovarian cancer. Mutations in these genes significantly increase cancer risk. Genetic testing can identify these mutations for prevention planning.";
    }
    
    if (input.includes('huntington') || input.includes('hd gene')) {
      return "Huntington's disease is caused by mutations in the HTT gene. It's an autosomal dominant disorder, meaning only one copy of the mutated gene is needed to cause the disease. Symptoms typically appear in mid-adulthood.";
    }
    
    if (input.includes('cystic fibrosis') || input.includes('cftr')) {
      return "Cystic fibrosis is caused by mutations in the CFTR gene, which affects chloride transport across cell membranes. It's an autosomal recessive disorder, requiring two copies of the mutated gene.";
    }
    
    // Gene regulation
    if (input.includes('regulation') || input.includes('control') || input.includes('turn on')) {
      return "Gene regulation controls when, where, and how much of a gene product is made. It involves promoters, enhancers, transcription factors, and epigenetic modifications. This allows cells to respond to environmental changes.";
    }
    
    // Gene interaction
    if (input.includes('interaction') || input.includes('epistasis')) {
      return "Gene interactions occur when multiple genes affect the same trait. Epistasis is when one gene masks or modifies the expression of another. These interactions create the complexity we see in inherited traits.";
    }
    
    // Gene sequencing
    if (input.includes('sequencing') || input.includes('genome') || input.includes('dna sequence')) {
      return "Gene sequencing determines the exact order of DNA bases in genes. The Human Genome Project sequenced all human genes. Modern techniques like NGS (Next Generation Sequencing) make it faster and cheaper.";
    }
    
    // Default response for gene-related questions
    if (input.includes('gene') || input.includes('genetic') || input.includes('dna') || input.includes('chromosome')) {
      return "I can help you with gene-related questions! Ask me about gene function, mutations, inheritance, specific genetic conditions, gene therapy, genetic testing, or any other genetic topics you're curious about.";
    }
    
    // Non-gene related
    return "I specialize in gene-related questions! Please ask me about genes, DNA, genetic disorders, inheritance, gene therapy, genetic testing, or related genetic topics. How can I help you understand genetics better?";
  }
}
