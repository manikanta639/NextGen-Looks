import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
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

model = RandomForestClassifier(
    n_estimators=10,
    random_state=42
)

model.fit(Xtr, ytr)

pred = model.predict(Xt)

print("Actual   :", yt)
print("Predicted:", pred)
print("Accuracy :", accuracy_score(yt, pred))