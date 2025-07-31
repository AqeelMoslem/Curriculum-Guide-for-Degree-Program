# 🎓 Curriculum Guide for Degree Program

## 📘 Overview

This system helps manage academic programs by organizing courses, tracking student progress, and monitoring degree requirements.

Designed for universities or colleges, it supports:
- Course catalog with prerequisites
- Degree requirement tracking
- Student progress monitoring
- GPA calculation
- Optional course scheduling

---

## 🧱 Core Models

### 📚 Course
- `name`: Course title (e.g., "Programming 101")
- `credits`: Credit hours
- `description`: Short summary of the course
- `prereqs`: List of prerequisite courses
- `program`: Linked academic program
- `students`: Enrolled students

### 🎓 Program
- `name`: Program title (e.g., "BSc in Computer Science")
- `courses`: All courses in the program
- `credits`: Total credits required to graduate
- `students`: Enrolled students

### 👤 Student
- `name`: Student full name
- `email`: Contact email
- `courses`: Courses student is enrolled in
- `gpa`: Grade Point Average
- `program`: Student's academic program

---

## ✨ Features

- ✅ **Course Catalog**: Browse all courses and their prerequisites
- ✅ **Prerequisite Checks**: Enroll students only if prerequisites are met
- ✅ **Degree Tracking**: Show remaining courses and credits needed
- ✅ **Progress Monitoring**: Visual student progress through the program
- ✅ **GPA Calculation**: Calculate GPA based on course performance
- ✅ **Course Scheduling (Optional)**: Organize courses per semester

---

## 📐 Architecture Overview

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Course    │    │   Program   │    │   Student   │
│             │    │             │    │             │
│ • name      │◄───│ • name      │◄───│ • name      │
│ • credits   │    │ • courses[] │    │ • email     │
│ • prereqs[] │    │ • credits   │    │ • courses[] │
│ • program   │    │ • students[]│    │ • gpa       │
│ • students[]│    │             │    │ • program   │
└─────────────┘    └─────────────┘    └─────────────┘
```
---

## 🛠️ Future Additions

- Role-based access (Admin / Student)
- Grade input and transcript generation
- Export to PDF for academic reports
- Mobile version or student portal

---

## 🚀 Want to Build It?

You can extend this with:
- SQL database schema
- REST API endpoints
- Frontend using React or Flutter

Let us know how you'd like to start!
