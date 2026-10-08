import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor
from sklearn.metrics import mean_squared_error, r2_score

df = pd.read_csv("data.csv")

X = df.iloc[:, :-1]
y = df.iloc[:, -1]

# Train-Test Split
Xtr, Xt, ytr, yt = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# XGBoost
model = XGBRegressor(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=3,
    random_state=42,
    eval_metric="rmse"
)

model.fit(Xtr, ytr)

pred = model.predict(Xt)

print("Actual   :", yt)
print("Predicted:", pred)
print("MSE      :", mean_squared_error(yt, pred))
print("RMSE     :", np.sqrt(mean_squared_error(yt, pred)))
print("R2       :", r2_score(yt, pred))