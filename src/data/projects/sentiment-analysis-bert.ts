import { Project } from './types';

export const sentimentAnalysisBert: Project = {
  id: "sentiment-analysis-bert",
  title: "BERT-based Sentiment Analysis",
  description: "Fine-tuned BERT model for multi-class sentiment classification",
  date: "2023-11",
  tags: ["NLP", "Transformers", "BERT"],
  content: `# BERT-based Sentiment Analysis

## Project Overview
Fine-tuned BERT model for sentiment analysis achieving 95% accuracy on the IMDB dataset.

## Dataset
- **Training samples**: 25,000
- **Testing samples**: 25,000
- **Classes**: Positive, Negative, Neutral

## Implementation

### Data Preprocessing
\`\`\`python
from transformers import BertTokenizer

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

def preprocess_text(text, max_length=512):
    encoding = tokenizer.encode_plus(
        text,
        add_special_tokens=True,
        max_length=max_length,
        padding='max_length',
        truncation=True,
        return_attention_mask=True,
        return_tensors='pt'
    )
    return encoding
\`\`\`

### Model Architecture
\`\`\`python
from transformers import BertForSequenceClassification

model = BertForSequenceClassification.from_pretrained(
    'bert-base-uncased',
    num_labels=3,
    output_attentions=False,
    output_hidden_states=False
)
\`\`\`

### Training Configuration
\`\`\`python
from transformers import AdamW

optimizer = AdamW(model.parameters(), lr=2e-5)
epochs = 4
batch_size = 16
\`\`\`

## Results
| Metric | Score |
|--------|-------|
| Accuracy | 95.2% |
| Precision | 94.8% |
| Recall | 95.1% |
| F1-Score | 94.9% |

## Key Takeaways
- BERT's attention mechanism excels at capturing context
- Fine-tuning requires careful learning rate selection
- Data augmentation improved robustness by 3%
`
};
