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
<img width="1398" alt="Screenshot 2025-04-02 at 15 07 30" src="https://github.com/user-attachments/assets/619c6871-3575-4189-a8ba-d77caae707f7" />

### ✅ Filter by Launch Year
- Sidebar filter to show missions by year
- “All” resets the filter
<img width="1398" alt="Screenshot 2025-04-02 at 15 07 56" src="https://github.com/user-attachments/assets/8c8548c1-78c4-4b41-800f-d3ae6df6d388" />

### ✅ Mission Details View
- Click a mission to open `/mission/:id`
- Displays detailed mission information
- Full layout with image, success status, rocket, launch site & more
- Easy back navigation
<img width="1398" alt="Screenshot 2025-04-02 at 15 08 02" src="https://github.com/user-attachments/assets/9a207ce1-dd23-478c-bcd0-3a8bc771b3a2" />

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
