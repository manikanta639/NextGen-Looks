import pandas as pd
import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression

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

# Logistic Regression using ML library
lr = 0.01
iterations = 1000

model = LogisticRegression(max_iter=iterations,random_state=42)

model.fit(Xtr,ytr)

# Prediction probabilities
p = model.predict_proba(Xt)[:,1]

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