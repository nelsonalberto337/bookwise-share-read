📚 Bookwise – Personal Book Management App
Bookwise is a full-stack web application that allows users to manage their personal book collection. Users can add books, track reading status, search, and categorize books into To-Read, Reading, and Completed tabs.

🚀 Features
📖 Add books with title, author, genre, image URL, notes, and reading status

🔍 Search books by title or author

📂 Categorize books into “To-Read”, “Reading”, or “Completed”

🖼️ Book cover image preview

✅ Responsive design with Tailwind CSS

🧠 Built with MERN stack + TypeScript

🛠️ Tech Stack
Frontend	Backend	Database
React + TypeScript	Node.js + Express + TypeScript	MongoDB (local)
Tailwind CSS	RESTful APIs	Mongoose ORM

📁 Folder Structure
css
Copy
Edit
bookwise/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.ts
│   │   ├── models/
│   │   │   └── Book.ts
│   │   ├── routes/
│   │   │   └── bookRoutes.ts
│   │   ├── controllers/
│   │   │   └── bookController.ts
│   │   └── index.ts
├── frontend/
│   └── src/
│       └── components/
│           ├── Library.tsx
│           ├── AddBookModal.tsx
│           └── Header.tsx




⚙️ Setup Instructions
1. Clone the repo
git clone https://github.com/yourusername/bookwise.git
cd bookwise

2. Backend Setup
cd backend
npm install

Create a .env file in backend/ and add:
MONGO_URI=mongodb://localhost:27017/bookwise

Run backend server:
npx ts-node src/index.ts

3. Frontend Setup
cd frontend

npm install
npm run dev
