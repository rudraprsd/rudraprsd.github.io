import { Project } from './types';

// Simple markdown-based project (no custom component needed)
export const chatbotNLP: Project = {
  id: "chatbot-nlp",
  title: "NLP-Powered Chatbot",
  description: "Conversational AI using BERT and GPT for natural language understanding",
  date: "2024-02",
  tags: ["NLP", "Transformers", "Python", "FastAPI"],
  githubUrl: "https://github.com/yourusername/chatbot-nlp",
  draft: true,
  
  // Simple markdown content - perfect for straightforward projects
  content: `# NLP-Powered Chatbot

## Overview
An intelligent chatbot system leveraging state-of-the-art NLP models for natural conversation.

## Key Features
- **Intent Recognition**: BERT-based intent classification with 96% accuracy
- **Entity Extraction**: Identifies key information in user queries
- **Context Management**: Maintains conversation history for coherent responses
- **Multi-language Support**: English, Spanish, French, and German

## Architecture

\`\`\`python
class ChatbotEngine:
    def __init__(self):
        self.intent_classifier = BertForSequenceClassification.from_pretrained('bert-base')
        self.entity_recognizer = SpacyNER()
        self.response_generator = GPT2Model()
        
    def process_message(self, message: str, context: Dict) -> str:
        intent = self.classify_intent(message)
        entities = self.extract_entities(message)
        response = self.generate_response(intent, entities, context)
        return response
\`\`\`

## Performance Metrics
- Average response time: 120ms
- Intent accuracy: 96.3%
- User satisfaction: 4.7/5.0
- Conversations handled: 10K+ daily

## Tech Stack
- Python 3.11
- PyTorch
- Transformers (Hugging Face)
- FastAPI
- Redis (for session management)
- Docker

## Future Enhancements
- Voice input/output integration
- Sentiment analysis for personalized responses
- Integration with external APIs (weather, news, etc.)
- Multi-modal support (images, documents)
`
};
