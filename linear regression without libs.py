import csv
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# Read data
with open("data.csv") as f:
    data = list(csv.reader(f))[1:]

# Separate X and y
X = np.array([float(r[0]) for r in data])
y = np.array([float(r[1]) for r in data])

print(data[:5])

# Train-test split
Xtr, Xt, ytr, yt = train_test_split(X, y, test_size=0.2, random_state=42)

# Linear Regression using Gradient Descent
theta0 = 0.0
theta1 = 0.0

learning_rate = 0.00001
epochs = 1000
m = len(Xtr)

for i in range(epochs):
    # Prediction
    pred = theta0 + theta1 * Xtr

    # Error
    error = pred - ytr

    # Gradients
    dtheta0 = (2 / m) * np.sum(error)
    dtheta1 = (2 / m) * np.sum(error * Xtr)

    # Update parameters
    theta0 = theta0 - learning_rate * dtheta0
    theta1 = theta1 - learning_rate * dtheta1

# Model parameters
print("\nModel Parameters")
print("Theta0 =", theta0)
print("Theta1 =", theta1)

# Testing
pred = theta0 + theta1 * Xt

print("\nActual vs Predicted")
for a, p in zip(yt, pred):
    print("Actual =", a, "Predicted =", p)

# Predict new house prices
print("\nPredictions for New House Sizes")
for size in [1500, 1700, 2500]:
    price = theta0 + theta1 * size
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
plt.plot(X, theta0 + theta1 * X, label="Regression Line")
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