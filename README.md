# Micro-frontends / Microservices application

The main objective of this repository is to create a implementation of a simple e-commerce application, but involving micro-front-ends, CI / CD, deploy using AWS, focusing on learning new technologies.

---

## 📂 App structure

The app will consist in a set of simple micro-(frontends | services):

- **Authentication app**: implemented with **NestJS** on server side and **ReactJS** on client side. The idea is to have an independent, pluggable authentication module that can be accessed independently or within the main app via module federation. It also exposes some components to be used in other parts of the system.

- **Catalog micro-frontend app**: implemented with **Kotlin / Spring Boot** on server side and **ReactJS** on client side with its own routing structure;

- **Cart micro-frontend app**: implemented with **ReactJS** for now;;

- **Shared components micro-frontend app**: implemented with **ReactJS** for now;

\***OBS**: All the frontend pieces will be connected using Webpack's Module Federation.

---

## 🚀 Running the app

Install the dependencies with `npm install` or `yarn install` in the project root folder.

After that you can start each application separately running `npm start` or `yarn start` inside each folder on `packages` dir OR you can run the same command in the root folder to start all apps in parallel.

---

### 🐋 Docker

In the future the entire application can be started by running `docker-compose up` in the root folder. This will run the database, services and clients in a docker environment, but for now only the **auth** app is dockerized.
