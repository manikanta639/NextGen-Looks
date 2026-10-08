import csv
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# Read data
with open("data.csv") as f:
    data = list(csv.reader(f))[1:]

# Separate X and y
X = np.array([float(r[0]) for r in data]).reshape(-1, 1)
y = np.array([float(r[1]) for r in data])

print(data[:5])

# Train-test split
Xtr, Xt, ytr, yt = train_test_split(X, y, test_size=0.2, random_state=42)

# Linear Regression using ML library
model = LinearRegression()
model.fit(Xtr, ytr)

# Model parameters
print("\nModel Parameters")
print("Theta0 =", model.intercept_)
print("Theta1 =", model.coef_[0])

# Testing
pred = model.predict(Xt)

print("\nActual vs Predicted")
for a, p in zip(yt, pred):
    print("Actual =", a, "Predicted =", p)

# Predict new house prices
print("\nPredictions for New House Sizes")
new_sizes = np.array([1500, 1700, 2500]).reshape(-1, 1)
new_predictions = model.predict(new_sizes)

for size, price in zip([1500, 1700, 2500], new_predictions):
    print(size, "sq.ft. =", price, "Lakhs")

# Evaluation metrics
mae = mean_absolute_error(yt, pred)
mse = mean_squared_error(yt, pred)
rmse = np.sqrt(mse)
r2 = r2_score(yt, pred)

print("\nEvaluation Metrics")
print("MAE =", mae)
print("MSE =", mse)
print("RMSE =", rmse)
print("R2 =", r2)

# Graph 1: Regression Line
plt.scatter(X, y, label="Actual Data")
plt.plot(X, model.predict(X), label="Regression Line")
plt.xlabel("House Size")
plt.ylabel("House Price")
plt.title("Simple Linear Regression")
plt.legend()
plt.show()
# Graph 2: Actual vs Predicted
plt.scatter(yt, pred)
plt.xlabel("Actual")
plt.ylabel("Predicted")
plt.title("Actual vs Predicted")
plt.show()