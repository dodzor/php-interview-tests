CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  rating FLOAT NOT NULL
);

INSERT INTO movies (title, category, rating) VALUES
('The Dark Knight', 'Action', 9.0),
('The Godfather', 'Drama', 9.2),
('The Lord of the Rings: The Return of the King', 'Adventure', 8.9),
('The Matrix', 'Action', 8.7),
('The Silence of the Lambs', 'Drama', 8.6),
('The Godfather: Part II', 'Drama', 9.0),
('The Lord of the Rings: The Two Towers', 'Adventure', 8.7),
('The Lord of the Rings: The Fellowship of the Ring', 'Adventure', 8.8),
('The Lord of the Rings: The Two Towers', 'Adventure', 8.7);

# Move all data to new database
# Step 1: Create new database
mysql -u root -e "CREATE DATABASE tests;"

# Step 2: Copy structure and data
mysqldump -u root contact_form | mysql -u root tests

# Step 3: Verify data was copied
mysql -u root -e "USE tests; SHOW TABLES;"

# Step 4: Drop old database (optional)
mysql -u root -e "DROP DATABASE contact_form;"