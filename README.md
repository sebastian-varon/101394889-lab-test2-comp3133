# SpaceX Launch Explorer 🌌

An Angular 17+ single-page application (SPA) that displays and explores SpaceX missions using the public SpaceX REST API.

Built as part of COMP3133 Lab Test 2 by **Student ID: 101394889**

---

## 🚀 Live Demo

👉 [https://101394889-lab-test2-comp3133.vercel.app](https://101394889-lab-test2-comp3133.vercel.app)

---

## 🔧 Tech Stack

- **Angular 17** with Standalone Components & Routing
- **Angular Material** (v17, Material 3 Theming)
- **RxJS & HttpClient** for API calls
- **SpaceX API v3**: [https://api.spacexdata.com/v3/launches](https://api.spacexdata.com/v3/launches)
- **Deployed on Vercel**

---

## 📁 Features

### ✅ Mission List View
- Fetches and displays all past SpaceX launches
- Responsive card layout with:
  - Flight number
  - Mission name & year
  - Patch image
  - Rocket info
  - Details
  - External links: Wikipedia / Video / Article

### ✅ Filter by Launch Year
- Sidebar filter to show missions by year
- “All” resets the filter

### ✅ Mission Details View
- Click a mission to open `/mission/:id`
- Displays detailed mission information
- Full layout with image, success status, rocket, launch site & more
- Easy back navigation

---

## 💡 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/101394889-lab-test2-comp3133.git

# Go into the project
cd 101394889-lab-test2-comp3133

# Install dependencies
npm install

# Run the app
ng serve --port 4200
