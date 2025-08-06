# 🎓 Curriculum Guide for Degree Program

This app allows you to:

- View all available academic programs
- Select a program and see only its unique courses
- Change or remove your selected program
- All data is stored in MongoDB
- The UI is modern and responsive

---

## Models

### Course
- `name`: Course name
- `description`: Short description
- `prereqs`: Prerequisites
- `program`: Linked program

### Program
- `name`: Program name
- `courses`: All courses in the program

---

## How it works

1. The home page lists all programs from the database.
2. Clicking a program shows only its courses for selection.
3. You can change or remove your selection at any time.

---

## Tech Stack

- Node.js, Express, MongoDB (Mongoose)
- Server-side React (jsx-view-engine)
- Modern CSS (see `public/style.css`)

---

## 🚧 Future Work

- Student model and authentication
- Prerequisite checks for enrollment
- Degree requirement tracking
- Progress monitoring and GPA calculation
- Grade input and transcript generation
- Role-based access (Admin/Student)
- Export to PDF for academic reports
- Mobile version or student portal
