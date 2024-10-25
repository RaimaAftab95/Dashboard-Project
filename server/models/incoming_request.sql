CREATE TABLE incoming_request (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hgo_id INT NOT NULL,    -- The HGO making the request
  monazam_id INT NOT NULL, -- The parent Monazam of the HGO
  date DATE NOT NULL,
  narration VARCHAR(250) NOT NULL,
  currency ENUM('PKR', 'USD') NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending', -- Default to 'pending'
  FOREIGN KEY (hgo_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (monazam_id) REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
