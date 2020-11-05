# Kaksha

-   **Kaksha is a digital classroom platform with LIVE updates when a user enters or leave the classroom**
-   **The project is hosted at [http://kaksha.ramkrishnan.live](http://kaksha.ramkrishnan.live)**
-   **It also maintains logs and generates report on the fly**
-   **Kaksha is developed using the MERN stack - MongoDB, Express, React, Node.js and Socket.io**
-   **This document covers the web part of the application**

---

## Pre-requisites

To run the project locally, you need to have the following:

-   npm - [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## Get the project

-   **Clone the project**

    `git clone https://github.com/ramkrishnan6/kaksha-web.git`

-   **Change directory**

    `cd kaksha-web`

## Install necessary packages

`npm install`

## Initial Configuration

-   Open `src/constants/api.js` file and change the `API_URL` as per your configuration of the backend which is required for this app

## Run the application (development server)

-   `npm start`

---

## Routes

-   Home - `/`
-   User Register - `/register`
-   User Login - `/login`
-   User Dashboard - `/dashboard` (Protected)
-   Start or Join class - `/room/<custom_id>` (Protected)
-   Report of all classes - `/report` (Protected)
-   Component responsible for handling Private Routes is at `src/PrivateRoute.js`

---

## Styling

-   This project uses **react-bootstrap** package \*\*\*\*
-   ClassRoom component uses custom styling defined in `/src/css/ClassRoom.css`
-   NotFound component uses custom styling defined in `/src/css/NotFound.css`

---

## Components

### Home

-   Renders the home page

### Register

-   Renders the register page

### Login

-   Renders the login page

### Dashboard

-   Renders the dashboard page
-   Components used inside Dashboard:
    -   GenerateClass - only for teachers

### Header

-   Renders the navbar. Used in all the pages

### ClassRoom

-   One of the most important component of the app, responsible for rendering more components and establishing socket connection with other clients and server
-   List of components used inside ClassRoom:
    -   TeacherControls
    -   LeaveClassButton
    -   ClassEndModal

### Report

-   Shows the report of all the classes with user logs
-   List of components used inside Report:
    -   ClassLog

### ClassLog

-   Shows the log of a class, like start date, end date and current status
-   List of components used inside ClassLog:
    -   ClassUserLog

### ClassUserLog

-   Shows the logs of all the users of the class in which it is rendered.
-   Logs include - in, out, user's name and time

### GenerateClass

-   Responsible for generating a class link as per teacher's custom input
-   Also gives an option to generate a random class name

### NotFound

-   Shows a simple 404 page not found

---

## Socket.io

-   The connection happens in the ClassRoom component

### Listeners:

-   `user-connected` - when a user connects
-   `user-disconnected` - when a user disconnects
-   `leave-room` - defines when to leave the room

### Events:

-   `join-room` - when the user has joined the classroom

---
