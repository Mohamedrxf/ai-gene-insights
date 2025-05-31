export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  mood?: 'curious' | 'concerned' | 'academic' | 'casual';
  intent?: 'question' | 'diagnosis' | 'education' | 'research';
  multimedia?: {
    type: 'image' | 'chart' | 'diagram';
    src: string;
    alt: string;
  };
}

export interface UserContext {
  previousQuestions: string[];
  topicsDiscussed: string[];
  userExpertiseLevel: 'beginner' | 'intermediate' | 'expert';
  sessionFocus: string[];
}

export class GeneticAIService {
  private context: UserContext = {
    previousQuestions: [],
    topicsDiscussed: [],
    userExpertiseLevel: 'beginner',
    sessionFocus: []
  };

  detectMood(input: string): 'curious' | 'concerned' | 'academic' | 'casual' {
    const concernedWords = ['worried', 'scared', 'risk', 'afraid', 'dangerous'];
    const academicWords = ['research', 'study', 'analysis', 'mechanism', 'pathway'];
    const casualWords = ['just wondering', 'curious', 'heard about', 'interesting'];

    if (concernedWords.some(word => input.toLowerCase().includes(word))) return 'concerned';
    if (academicWords.some(word => input.toLowerCase().includes(word))) return 'academic';
    if (casualWords.some(word => input.toLowerCase().includes(word))) return 'casual';
    return 'curious';
  }

  detectIntent(input: string): 'question' | 'diagnosis' | 'education' | 'research' {
    if (input.toLowerCase().includes('what is') || input.toLowerCase().includes('explain')) return 'education';
    if (input.toLowerCase().includes('do i have') || input.toLowerCase().includes('am i at risk')) return 'diagnosis';
    if (input.toLowerCase().includes('research') || input.toLowerCase().includes('latest studies')) return 'research';
    return 'question';
  }

  updateContext(userInput: string, topic: string) {
    this.context.previousQuestions.push(userInput);
    if (!this.context.topicsDiscussed.includes(topic)) {
      this.context.topicsDiscussed.push(topic);
    }
    this.context.sessionFocus.push(topic);
    
    // Keep only last 10 questions for performance
    if (this.context.previousQuestions.length > 10) {
      this.context.previousQuestions = this.context.previousQuestions.slice(-10);
    }
  }

  getContextualResponse(userInput: string): { text: string; multimedia?: any } {
    const input = userInput.toLowerCase();
    const mood = this.detectMood(userInput);
    const intent = this.detectIntent(userInput);
    
    // Determine topic for context
    let topic = 'general';
    if (input.includes('gene interaction') || input.includes('epistasis')) topic = 'gene_interaction';
    else if (input.includes('mutation') || input.includes('variant')) topic = 'mutation';
    else if (input.includes('disease') || input.includes('disorder')) topic = 'disease';
    else if (input.includes('predict') || input.includes('risk')) topic = 'prediction';
    
    this.updateContext(userInput, topic);
    
    // Generate contextual response based on mood, intent, and history
    return this.generateResponse(input, mood, intent, topic);
  }

  private generateResponse(input: string, mood: string, intent: string, topic: string): { text: string; multimedia?: any } {
    // Gene Interaction responses
    if (topic === 'gene_interaction') {
      if (intent === 'education') {
        return {
          text: this.getEducationalResponse(mood, 'Gene interactions, also called epistasis, occur when the expression of one gene affects the expression of another gene. This creates complex networks that influence traits and disease susceptibility. Our AI analyzes these intricate relationships to predict health outcomes.'),
          multimedia: {
            type: 'image' as const,
            src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
            alt: 'Gene interaction network visualization'
          }
        };
      }
      return {
        text: this.getContextualReply(mood, 'Gene interactions are fascinating! They help us understand how multiple genes work together to influence your health. Would you like to know about specific gene pairs or how we analyze these interactions?')
      };
    }

    // Disease Prediction responses
    if (topic === 'prediction' || input.includes('predict')) {
      if (this.context.topicsDiscussed.includes('gene_interaction')) {
        return {
          text: this.getContextualReply(mood, 'Building on our previous discussion about gene interactions, our prediction model analyzes how combinations of genetic variants increase or decrease disease risk. We focus on cardiovascular diseases, diabetes, and cancer predisposition with 85%+ accuracy.')
        };
      }
      return {
        text: this.getContextualReply(mood, 'Our AI predicts disease risk by analyzing your genetic profile against thousands of known disease-associated variants. We consider gene-gene interactions, environmental factors, and family history to provide personalized risk assessments.')
      };
    }

    // Mutation/Variant responses
    if (topic === 'mutation') {
      return {
        text: this.getContextualReply(mood, 'Genetic variants can be beneficial, neutral, or harmful. Our system evaluates each variant\'s impact on protein function and disease risk. Single nucleotide polymorphisms (SNPs) are the most common type we analyze.')
      };
    }

    // Disease-specific responses
    if (topic === 'disease') {
      if (input.includes('cancer')) {
        return {
          text: this.getContextualReply(mood, 'Cancer genetics involves tumor suppressor genes like p53 and BRCA1/2, and oncogenes like RAS. Our AI analyzes hereditary cancer syndromes and somatic mutations to assess cancer predisposition and guide prevention strategies.')
        };
      }
      if (input.includes('heart') || input.includes('cardiovascular')) {
        return {
          text: this.getContextualReply(mood, 'Cardiovascular diseases involve genes like APOE, LDLR, and PCSK9 that affect cholesterol metabolism. Our system evaluates your genetic risk for coronary artery disease, cardiomyopathy, and arrhythmias.')
        };
      }
      return {
        text: this.getContextualReply(mood, 'Genetic disorders can be monogenic (single gene) or complex (multiple genes). Our AI specializes in analyzing complex diseases where gene interactions play crucial roles in determining your health outcomes.')
      };
    }

    // How it works responses
    if (input.includes('how') && input.includes('work')) {
      return {
        text: this.getContextualReply(mood, 'Our system uses advanced machine learning to analyze genetic networks: 1) We process your genomic data, 2) Identify relevant gene variants, 3) Analyze interaction patterns, 4) Calculate disease risk scores, 5) Generate personalized recommendations. The entire process takes minutes!')
      };
    }

    // Default contextual response
    if (this.context.previousQuestions.length > 0) {
      const recentTopics = this.context.sessionFocus.slice(-3).join(', ');
      return {
        text: this.getContextualReply(mood, `That's an interesting follow-up! Given our discussion about ${recentTopics}, I'd be happy to dive deeper into any aspect of genetic analysis. What specific area would you like to explore further?`)
      };
    }

    return {
      text: this.getContextualReply(mood, 'Welcome to our advanced genetic analysis platform! I can help you understand gene interactions, disease prediction, genetic variants, and much more. What specific aspect of genetics interests you today?')
    };
  }

  private getContextualReply(mood: string, baseText: string): string {
    switch (mood) {
      case 'concerned':
        return `I understand this can feel overwhelming. ${baseText} Remember, genetic predisposition doesn't mean certainty - it's about informed prevention and early detection.`;
      case 'academic':
        return `${baseText} I can provide more technical details about methodologies, statistical models, or recent research findings if you're interested.`;
      case 'casual':
        return `Great question! ${baseText} Feel free to ask about anything else that comes to mind!`;
      default:
        return baseText;
    }
  }

  private getEducationalResponse(mood: string, content: string): string {
    if (mood === 'academic') {
      return `${content} The computational methods involve network analysis, machine learning algorithms like random forests and neural networks, and statistical models for risk calculation.`;
    }
    return content;
  }

  getContext(): UserContext {
    return { ...this.context };
  }

  resetContext(): void {
    this.context = {
      previousQuestions: [],
      topicsDiscussed: [],
      userExpertiseLevel: 'beginner',
      sessionFocus: []
    };
  }
}
