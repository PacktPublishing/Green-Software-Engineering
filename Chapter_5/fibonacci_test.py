import sys
from codecarbon import EmissionsTracker
import time

# Recursive version of the Fibonacci sequence
def fibonacci_recursive(n):
    if n <= 1:
        return n
    else:
        return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)

# Iterative version of the Fibonacci sequence
def fibonacci_iterative(n):
    a, b = 0, 1
    for i in range(n):
        a, b = b, a + b
    return a

# Function to measure energy consumption and execution time
def test_algorithm(func, n, description):
    print(f"Testing {description}:")
    tracker = EmissionsTracker(tracking_mode='process',log_level='debug',project_name=description)
    tracker.start()
    start_time = time.time()
    result = func(n)
    end_time = time.time()
    emissions = tracker.stop()
    execution_time = end_time - start_time
    print(f"Result: {result}, Emissions: {emissions} kg, Execution time: {execution_time} seconds\n")

# Main function to run the tests based on command line input
def main():
    if len(sys.argv) < 2:
        print("Usage: python fibonacci_test.py [recursive|iterative]")
        sys.exit(1)
    
    method = sys.argv[1]
    n = 40  # Example: Fibonacci sequence up to the 20th number

    if method == "recursive":
        test_algorithm(fibonacci_recursive, n, "Recursive Fibonacci")
    elif method == "iterative":
        test_algorithm(fibonacci_iterative, n, "Iterative Fibonacci")
    else:
        print("Invalid method. Please choose 'recursive' or 'iterative'.")

if __name__ == "__main__":
    main()