import { Blog } from './types';

export const productionMlSystems: Blog = {
  id: "production-ml-systems",
  title: "Building Production-Ready ML Systems",
  description: "Best practices for deploying machine learning models at scale",
  date: "2024-01",
  tags: ["MLOps", "Production", "Engineering"],
  content: `# Building Production-Ready ML Systems

## The Gap Between Research and Production
Moving from a Jupyter notebook to production is a significant challenge. Here's what you need to consider.

## Key Components

### 1. Model Versioning
Use MLflow or similar tools to track experiments:

\`\`\`python
import mlflow
import mlflow.pytorch

mlflow.set_experiment("sentiment-analysis")

with mlflow.start_run():
    # Log parameters
    mlflow.log_param("learning_rate", 0.001)
    mlflow.log_param("batch_size", 32)
    mlflow.log_param("epochs", 10)
    
    # Train model
    model = train_model(params)
    
    # Log metrics
    mlflow.log_metric("accuracy", accuracy)
    mlflow.log_metric("f1_score", f1)
    
    # Log model
    mlflow.pytorch.log_model(model, "model")
\`\`\`

### 2. Data Pipeline
Ensure reproducible data processing:

\`\`\`python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
import joblib

# Define preprocessing pipeline
preprocessing_pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('feature_selector', SelectKBest(k=10))
])

# Fit and save
preprocessing_pipeline.fit(X_train)
joblib.dump(preprocessing_pipeline, 'preprocessing.pkl')

# Load in production
pipeline = joblib.load('preprocessing.pkl')
X_processed = pipeline.transform(X_new)
\`\`\`

### 3. Model Serving
FastAPI example for model deployment:

\`\`\`python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import torch

app = FastAPI()

# Load model at startup
model = torch.load('model.pt')
model.eval()

class PredictionRequest(BaseModel):
    text: str

class PredictionResponse(BaseModel):
    prediction: str
    confidence: float

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    try:
        # Preprocess
        processed = preprocess(request.text)
        
        # Predict
        with torch.no_grad():
            output = model(processed)
            prediction = torch.argmax(output, dim=1)
            confidence = torch.softmax(output, dim=1).max().item()
        
        return PredictionResponse(
            prediction=class_names[prediction],
            confidence=confidence
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
\`\`\`

### 4. Monitoring
Track model performance in production:

\`\`\`python
import prometheus_client as prom

# Define metrics
prediction_latency = prom.Histogram(
    'model_prediction_latency_seconds',
    'Time spent processing prediction'
)

prediction_counter = prom.Counter(
    'model_predictions_total',
    'Total number of predictions'
)

@prediction_latency.time()
def make_prediction(input_data):
    prediction_counter.inc()
    return model.predict(input_data)
\`\`\`

## Best Practices

### Testing
1. **Unit tests** - Test data processing functions
2. **Integration tests** - Test full pipeline
3. **Model tests** - Validate predictions on test set
4. **Performance tests** - Ensure latency requirements

### Deployment Strategies
- **Blue-Green**: Deploy new version alongside old
- **Canary**: Gradually roll out to subset of traffic
- **A/B Testing**: Compare model versions

### Error Handling
\`\`\`python
def robust_predict(input_data):
    try:
        # Validate input
        if not validate_input(input_data):
            return {"error": "Invalid input", "code": 400}
        
        # Make prediction
        prediction = model.predict(input_data)
        
        # Validate output
        if not validate_output(prediction):
            return {"error": "Invalid prediction", "code": 500}
        
        return {"prediction": prediction, "code": 200}
    
    except Exception as e:
        log_error(e)
        return {"error": "Internal error", "code": 500}
\`\`\`

## Checklist for Production
- [ ] Model versioning system
- [ ] Automated testing
- [ ] Monitoring and alerting
- [ ] Logging infrastructure
- [ ] Rollback strategy
- [ ] Documentation
- [ ] Performance benchmarks
- [ ] Security review

## Conclusion
Production ML is about reliability, not just accuracy. Build systems that can be maintained, monitored, and improved over time.
`
};
