-- Create the sales table
CREATE TABLE sales (
    sale_id SERIAL PRIMARY KEY,
    product_id INT,
    customer_id INT,
    sale_date DATE,
    amount DECIMAL(10, 2)
);

-- Insert sample data
INSERT INTO sales (product_id, customer_id, sale_date, amount)
SELECT
    (RANDOM() * 100)::INT,
    (RANDOM() * 1000)::INT,
    CURRENT_DATE - (RANDOM() * 365)::INT,
    (RANDOM() * 100)::DECIMAL(10, 2)
FROM generate_series(1, 1000000);


