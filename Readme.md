# Quiz Dashboard Backend

Use the package manager npm to install the backend.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the frontend.

```bash
git clone https://github.com/Norhanahmedsaber/LMSDashBoardClientSide.git
cd LMSDashBoardClientSide
npm install
```

## Configuration

```bash
REACT_APP_BASE_URL=http://localhost:8000
```

Create a .env file in the root directory with the following content:

## .env

```bash
PORT=8000
MONGODB_URI=your_mongodb_uri
BASE_URL=http://localhost:8000
```

## Usage

```bash
npm start
```

# Features

- RESTful API for quizzes and announcements management
- MongoDB for data storage
- Error Handling for API responses

## Project Structure

```bash
LMSDashBoardServerSide/
├── controllers/       # Controllers for handling routes
├── models/            # MongoDB models (Quiz, Announcement)
├── routes/            # API route definitions
├── utils/
├── .env
└── package.json
```

## Backend Repository

For the server-side of the application, please visit the [LMSDashBoarClientSide](https://github.com/Norhanahmedsaber/LMSDashBoardClientSide) repository.
