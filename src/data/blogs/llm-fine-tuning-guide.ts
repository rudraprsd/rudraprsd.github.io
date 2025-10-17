import { Blog } from './types';

export const llmFineTuningGuide: Blog = {
  id: "llm-fine-tuning-guide",
  title: "Fine-tuning Large Language Models",
  description: "Practical guide to fine-tuning LLMs for specific tasks",
  date: "2023-12",
  tags: ["LLM", "Fine-tuning", "NLP"],
  content: `# Fine-tuning Large Language Models

## Introduction
Fine-tuning allows you to adapt pre-trained language models to your specific use case without training from scratch.

## Why Fine-tune?
- **Task-specific performance**: Better than zero-shot prompting
- **Cost-effective**: Cheaper than training from scratch
- **Less data required**: Leverages pre-trained knowledge

## Techniques

### 1. Full Fine-tuning
Update all model parameters:

\`\`\`python
from transformers import AutoModelForCausalLM, AutoTokenizer, Trainer

model = AutoModelForCausalLM.from_pretrained("gpt2")
tokenizer = AutoTokenizer.from_pretrained("gpt2")

# Prepare dataset
train_dataset = prepare_dataset(train_data, tokenizer)

# Training arguments
training_args = TrainingArguments(
    output_dir="./results",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    learning_rate=5e-5,
    logging_steps=100,
)

# Train
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
)

trainer.train()
\`\`\`

### 2. LoRA (Low-Rank Adaptation)
Efficient fine-tuning by updating only small adapter layers:

\`\`\`python
from peft import get_peft_model, LoraConfig, TaskType

lora_config = LoraConfig(
    task_type=TaskType.CAUSAL_LM,
    r=8,  # Rank
    lora_alpha=32,
    lora_dropout=0.1,
    target_modules=["q_proj", "v_proj"]
)

model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b")
model = get_peft_model(model, lora_config)

print(f"Trainable parameters: {model.num_parameters()}")
# Only ~0.1% of parameters are trainable!
\`\`\`

### 3. QLoRA (Quantized LoRA)
Even more memory-efficient:

\`\`\`python
from transformers import BitsAndBytesConfig

bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.float16,
)

model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-2-7b",
    quantization_config=bnb_config,
    device_map="auto"
)
\`\`\`

## Data Preparation

### Format for instruction tuning:
\`\`\`python
def format_instruction(example):
    return f"""### Instruction:
{example['instruction']}

### Input:
{example['input']}

### Response:
{example['output']}"""

# Apply to dataset
train_data = train_data.map(
    lambda x: {"text": format_instruction(x)}
)
\`\`\`

## Best Practices

### 1. Learning Rate
- Start small: 1e-5 to 5e-5
- Use learning rate scheduler
- Monitor loss curves

### 2. Batch Size
- Larger batches → more stable training
- Use gradient accumulation if memory limited:

\`\`\`python
training_args = TrainingArguments(
    per_device_train_batch_size=1,
    gradient_accumulation_steps=32,  # Effective batch size = 32
)
\`\`\`

### 3. Evaluation
\`\`\`python
def compute_metrics(eval_pred):
    predictions, labels = eval_pred
    # Implement task-specific metrics
    return {
        "accuracy": accuracy_score(labels, predictions),
        "f1": f1_score(labels, predictions, average='weighted')
    }
\`\`\`

## Resource Requirements

| Model Size | Method | VRAM | Training Time |
|-----------|---------|------|---------------|
| 7B | Full FT | 80GB | 10 hours |
| 7B | LoRA | 24GB | 3 hours |
| 7B | QLoRA | 12GB | 4 hours |
| 13B | QLoRA | 16GB | 8 hours |

## Common Pitfalls
1. **Overfitting**: Use validation set, early stopping
2. **Catastrophic forgetting**: Mix original pre-training data
3. **Poor prompts**: Test different instruction formats
4. **Learning rate too high**: Model diverges quickly

## Conclusion
Fine-tuning LLMs is now accessible to most practitioners. Start with QLoRA for best memory efficiency, and scale up as needed.
`
};
