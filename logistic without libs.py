import pandas as pd
import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score

df = pd.read_csv("data.csv")

X = df.iloc[:,:-1]
y = df.iloc[:,-1]

u = np.unique(y)
y = np.where(y == u[0], 0, 1)

# Scaling
sc = StandardScaler()
X = sc.fit_transform(X)

# Train-test split
Xtr,Xt,ytr,yt = train_test_split(X,y,test_size=0.2,random_state=42,stratify=y)

# Logistic Regression from scratch
w = np.zeros(Xtr.shape[1])
b = 0
lr = 0.01
iterations = 1000

def sigmoid(z):
    return 1 / (1 + np.exp(-np.clip(z,-500,500)))

for i in range(iterations):

    p = sigmoid(Xtr @ w + b)

    error = p - ytr

    dw = Xtr.T @ error / len(Xtr)
    db = np.mean(error)

    w -= lr * dw
    b -= lr * db

# Prediction probabilities
p = sigmoid(Xt @ w + b)

print("Probabilities:")
print(p)

# Classification
pred = (p >= 0.5).astype(int)

print("\nActual   :",list(yt))
print("Predicted:",list(pred))
print("Accuracy :",accuracy_score(yt,pred))

# Threshold analysis
print("\nThreshold Analysis")

for threshold in [0.3,0.5,0.7]:

    pred = (p >= threshold).astype(int)

    print("Threshold:",threshold,"Accuracy:",accuracy_score(yt,pred))