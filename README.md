

# 🕋 HOAP Dashboard - Role-Based Hajj Organization Portal
📌 **Demo Video:** [Click here to watch](https://drive.google.com/file/d/1EKJ1TFfBHeuSpvaTvr29bYpP7jZ0ZTnf/view?usp=sharing)
## 📌 Project Overview  
HOAP (Hajj Organization Portal) is a **role-based** admin dashboard designed to efficiently manage Hajj operations. The frontend is built using **React and Bootstrap**, while the backend is powered by a **local SQL Server**, managed by the backend developer. The UI dynamically renders components based on user roles to ensure a tailored experience for different users.

## 🚀 Features  
- ✅ **Role-Based Access Control (RBAC)**: Different views for **HGO Users** and **Monazam Users**.  
- ✅ **Dynamic UI Rendering**: Components load based on user **Role ID**.  
- ✅ **Authentication & Authorization**: Users see only the features relevant to their role.  
- ✅ **Responsive Design**: Optimized for both **desktop** and **mobile** users with **Bootstrap**.

## 🛠️ Tech Stack  
- **Frontend**: React, Bootstrap  
- **Routing**: React Router  
- **Backend**: Local SQL Server (Managed by Backend Developer)  

## 💂️ Role-Based Access  
- **HGO Users**: Access specific dashboard features relevant to Hajj operations.  
- **Monazam Users**: View a different set of components based on their role.  
- The system dynamically renders content based on the **Role ID**.

## 📂 Project Structure  
```
📚 hoap-dashboard  
 ┣ 📚 src  
 ┃ ┣ 📚 components   # Reusable UI components  
 ┃ ┣ 📚 pages        # Role-based dashboard pages  
 ┃ ┗ 📚 assets       # Static assets (icons, images, etc.)  
 ┣ 📚 public        # Public assets (index.html, favicon, etc.)  
 ┣ 📚 README.md      # Project documentation  
 ┣ 📚 package.json   # Dependencies and scripts  
 ┗ 📚 .gitignore     # Ignored files in Git  
```

## 🔧 Setup & Installation  
### 1️⃣ Clone the Repository  
```sh  
git clone https://github.com/yourusername/hoap-dashboard.git  
cd hoap-dashboard  
```  
### 2️⃣ Install Dependencies  
```sh  
npm install  # or yarn install  
```  
### 3️⃣ Start the Development Server  
```sh  
npm start  # or yarn start  
```  
The project will be available at `http://localhost:3000/`.  

## 🛠️ API & Database Integration  
- The frontend connects to the **local SQL Server database** handled by the backend team.  
- API endpoints for authentication and role-based data retrieval are managed by the backend.

## 👥 Contributing  
If you'd like to contribute, feel free to fork the repository and submit a pull request.  
