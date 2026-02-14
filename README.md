# MediBuddy Frontend

This is the React (Vite) frontend for the MediBuddy Healthcare System.

---

## Installation

1. Clone the repository:

   git clone https://github.com/Nunamewisdom/Medibuddy-Frontend.git

2. Navigate into the folder:

   cd Medibuddy-Frontend

3. Install dependencies:

   npm install

4. Start development server:

   npm run dev

Frontend runs at:

http://localhost:5173

---

## Backend Requirement

Make sure backend is running at:

http://localhost:5000

---

## OTP Development Mode

For development, OTP is NOT sent via SMS.

Instead:

1. Click "Send OTP"
2. Check backend terminal
3. Copy the OTP printed in the console
4. Enter it in the verify page

Twilio is disabled in development to avoid SMS charges.

---

## Features

- OTP Authentication
- Profiles CRUD
- Medications CRUD
- Appointments CRUD
- Protected routes
