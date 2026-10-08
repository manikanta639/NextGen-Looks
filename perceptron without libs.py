import pandas as pd
import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score

df = pd.read_csv("data.csv")

X = df.iloc[:,:-1]
y = df.iloc[:,-1]

Xtr,Xt,ytr,yt = train_test_split(X,y,test_size=0.2,random_state=42,stratify=y)

sc = StandardScaler()

Xtr = sc.fit_transform(Xtr)
Xt = sc.transform(Xt)

# Perceptron from scratch
lr = 0.01
epochs = 100

weights = np.zeros(Xtr.shape[1])
bias = 0

def step(z):
    return 1 if z >= 0 else 0

for epoch in range(epochs):
    for i in range(len(Xtr)):
        z = np.dot(Xtr[i],weights) + bias
        pred = step(z)
        error = ytr.iloc[i] - pred
        weights = weights + lr * error * Xtr[i]
        bias = bias + lr * error

pred = np.array([step(np.dot(x,weights) + bias) for x in Xt])

print("Actual   :",list(yt))
print("Predicted:",list(pred))
print("Accuracy :",accuracy_score(yt,pred))

print("\nLearning Rate / Epoch Analysis")

for lr in [0.001,0.01,0.1]:

    weights = np.zeros(Xtr.shape[1])
    bias = 0

    for epoch in range(100):
        for i in range(len(Xtr)):
            z = np.dot(Xtr[i],weights) + bias
            p = step(z)
            error = ytr.iloc[i] - p
            weights = weights + lr * error * Xtr[i]
            bias = bias + lr * error

    p = np.array([step(np.dot(x,weights) + bias) for x in Xt])

    print("LR:",lr,"Accuracy:",accuracy_score(yt,p))

for ep in [10,50,100]:

    weights = np.zeros(Xtr.shape[1])
    bias = 0

    for epoch in range(ep):
        for i in range(len(Xtr)):
            z = np.dot(Xtr[i],weights) + bias
            p = step(z)
            error = ytr.iloc[i] - p
            weights = weights + 0.01 * error * Xtr[i]
            bias = bias + 0.01 * error

    p = np.array([step(np.dot(x,weights) + bias) for x in Xt])

    print("Epochs:",ep,"Accuracy:",accuracy_score(yt,p))