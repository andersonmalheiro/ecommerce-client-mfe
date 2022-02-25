# Micro-frontends / Microservices application

The main objective of this repository is to create a full-stack implementation of a simple e-commerce application, but involving micro-front-ends and services, CI / CD, deploy using AWS, focusing on learning new technologies.

---

## 📂 App structure

The app will consist in a set of simple micro-(frontends | services):

- **Authentication app**: implemented with **NestJS** on server side and **ReactJS** on client side. The idea is to have an independent, pluggable authentication module that can be accessed independently or within the main app via module federation. It also exposes some components to be used in other parts of the system.

- **Catalog micro-frontend app**: implemented with **Kotlin / Spring Boot** on server side and **ReactJS** on client side with its own routing structure;

- **Cart micro-frontend app**: (_to be defined_);

- **Shared components micro-frontend app**: implemented with **ReactJS** for now;

\***OBS**: All the frontend pieces will be connected using Webpack's Module Federation.

---

## 🚀 Running the app

For the frontend you will need to go inside each app on the `frontend/packages` folder and install their dependencies with `npm install` or `yarn install`

After that you can start each application separately running `npm start` or `yarn start` inside each folder OR you can go to the `frontend` folder and run all apps in parallel with the same command.

---

### 🐋 Docker

In the future the entire application can be started by running `docker-compose up` in the root folder. This will run the database, services and clients in a docker environment, but for now only the **auth** app is dockerized.

### 🔐 Auth

For the auth app configuration, copy the `.env.example` in the root folder and rename it to `.env`. Inside it you will find the environment variables necessary to the database image and database connections work. So with that in mind, you need to change the values to the ones that best suit your situation.

You can start it alone by running `docker-compose up server` and it will be available on `http://localhost:8080`
