Here's the updated **GitHub README** with authentication features included:  

---

# **File Sharing App with Authentication** 🔐  

A secure file-sharing application that allows users to **upload, store, and share files** with authentication for added security.  

## 🚀 **Features**  

✅ **User Authentication** – Secure login/signup using JWT authentication.  
✅ **File Upload & Storage** – Upload files to the server with metadata stored in **MongoDB Atlas**.  
✅ **Download Links** – Generates unique **download links** for shared files.  
✅ **Access Control** – Ensures only authenticated users can manage and download files.  

## 🛠 **Tech Stack**  

- **Backend**: Node.js, Express, Mongoose, JWT Authentication  
- **Frontend**: React, Axios, dotenv  
- **Database**: MongoDB Atlas  
- **Storage**: Local Storage  

## 🔧 **Installation & Setup**  

### **Prerequisites**  

- [Node.js](https://nodejs.org/)  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  

### **1. Clone the Repository**  

```bash
git clone https://github.com/yourusername/your-repository.git
cd your-repository
```

### **2. Install Dependencies**  

#### Backend  

```bash
cd server
npm install
```

#### Frontend  

```bash
cd ../client
npm install
```

### **3. Configure Environment Variables**  

Create a `.env` file in the `server` directory and add:  

```
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=your_preferred_port
JWT_SECRET=your_secret_key
[Other environment variables]
```

Create a `.env` file in the `client` directory:  

```
REACT_APP_API_URL=your_backend_api_url
[Other environment variables]
```

### **4. Start the Application**  

#### Start Backend  

```bash
cd server
npm start
```

#### Start Frontend  

```bash
cd ../client
npm start
```


## 🎯 **Usage**  

1. **Sign up/Login** to access the platform.  
2. **Upload files** securely to the server.  
3. **Copy & share** the generated **download link**.  

##  **Video**  

https://github.com/user-attachments/assets/61ef531e-7400-4e27-8b78-59b21f7d1bfd

## 🤝 **Contributing**  

1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-branch`).  
3. Commit changes (`git commit -am 'Add new feature'`).  
4. Push to the branch (`git push origin feature-branch`).  
5. Create a **Pull Request**.  

## 📜 **License**  

This project is licensed under the **[MIT License](LICENSE)**.  

---
