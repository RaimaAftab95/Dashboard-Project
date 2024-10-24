CREATE TABLE temporary_hgo_signup (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,

    enrollment VARCHAR(255) UNIQUE NOT NULL,  -- Unique enrollment number generated for HGO
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    focalPerson VARCHAR(255),
    password VARCHAR(255) NOT NULL,  -- Hashed password
    pkrIban VARCHAR(255),
    pkrAccountTitle VARCHAR(255),
    pkrBankName VARCHAR(255),
    pkrBranchName VARCHAR(255),
    pkrSwiftCode VARCHAR(255),
    fcyIban VARCHAR(255),
    fcyAccountTitle VARCHAR(255),
    fcyBankName VARCHAR(255),
    fcyBranchName VARCHAR(255),
    fcySwiftCode VARCHAR(255),
    e_hajj_iban VARCHAR(255),
    user_type ENUM('Monazam', 'HGO') DEFAULT 'HGO', -- For clarity, though it will always be 'HGO' here
    monazam_id INT,  -- References the Monazam under which this HGO falls
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',  -- Status of the signup request
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
update table SELECT * FROM hajj_organization.temporary_hgo_signup;
ALTER TABLE temporary_hgo_signup
ADD accountName VARCHAR(255) NOT NULL 