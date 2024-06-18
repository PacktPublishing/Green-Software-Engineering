from sklearn.datasets import load_iris 

from sklearn.model_selection import train_test_split 

from sklearn.ensemble import RandomForestClassifier 

from codecarbon import EmissionsTracker 

  

# Load the iris dataset 

iris = load_iris() 

X = iris.data 

y = iris.target 

  

# Split the dataset into training and testing sets 

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) 

  

# Initialize the RandomForestClassifier 

clf = RandomForestClassifier(n_estimators=100, random_state=42) 

  

# Start tracking the carbon emissions 

tracker = EmissionsTracker(project_name="Iris RandomForest Demo") 

  

# Start the tracker 

tracker.start() 

  

# Train the model 

clf.fit(X_train, y_train) 

  

# Stop the tracker 

emissions = tracker.stop() 

  

# Evaluate the model 

accuracy = clf.score(X_test, y_test) 

print(f"Model Accuracy: {accuracy * 100:.2f}%") 

  

# Print the emission report 

print(f"Total CO2 Emissions: {emissions} kg") 