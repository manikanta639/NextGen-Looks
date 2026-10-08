import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score

df = pd.read_csv("data.csv")

X = df.iloc[:, :-1]
y = df.iloc[:, -1]

# Encode labels
labels = np.unique(y)
y = np.array([np.where(labels == v)[0][0] for v in y])

# Train-Test Split
Xtr, Xt, ytr, yt = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# XGBoost
model = XGBClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=3,
    random_state=42,
    eval_metric="logloss"
)

model.fit(Xtr, ytr)

pred = model.predict(Xt)

print("Actual   :", yt)
print("Predicted:", pred)
print("Accuracy :", accuracy_score(yt, pred))