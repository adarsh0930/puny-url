# 🔗 Puny URL

A minimalistic and efficient URL shortener built with Node.js, Express, and SQLite. This application allows users to shorten long URLs and redirect to the original URLs using the generated short codes.

## 🚀 Features

- Generate short URLs for any valid long URL
- Redirect short URLs to their original destinations
- Simple and intuitive frontend interface
- Lightweight backend using SQLite for storage

## 🖼️ Demo

![Puny URL Demo](/puny-url-demo.gif)


## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Node.js, Express
- **Database:** SQLite

## 📁 Project Structure

puny-url/
├── url-shortener-frontend/ # Frontend files
│ ├── index.html
│ ├── styles.css
│ └── script.js
├── create-short-url.js # Endpoint to create short URLs
├── get-original-url.js # Endpoint to retrieve original URLs
├── generateUniqueId.js # Utility to generate unique IDs
├── database.js # SQLite database setup
├── index.js # Main server file
├── package.json
└── README.md

bash
Copy
Edit

## ⚙️ Setup Instructions

### Prerequisites

- Node.js installed on your machine

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/adarsh0930/puny-url.git
   cd puny-url
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

Create a .env file in the root directory and add:

env
Copy
Edit
SQLITE_PATH=./database.sqlite
Start the server:

bash
Copy
Edit
node index.js
The server will run on http://localhost:3000.

Access the frontend:

Open url-shortener-frontend/index.html in your browser to use the application.

---  

📚 Key Learnings
- Building a RESTful API using Express
- Handling URL routing and redirection
- Working with SQLite as a lightweight database solution
- Creating a clean separation between frontend and backend code
- Generating unique short codes safely and efficiently

---  

🚧 Future Improvements
- Add a user interface for viewing and managing created URLs
- Store creation timestamps and click analytics for short URLs
- Add custom alias support for short URLs
- Implement validation and error handling on the frontend
