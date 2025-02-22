# Taskify - Laravel & Next.js Application

Taskify is a full-stack task management application built with Laravel (backend) and Next.js (frontend). This guide walks you through setting up and running the project.

## Features
- User Authentication (Login, Register, Logout) with Laravel Sanctum
- Task Management (Create, Read, Update, Delete)
- Task Statuses (Pending, In-Progress, Completed)
- Pagination for Task Listings
- API Integration with Next.js Frontend

---

## Project Structure
```
/taskify
│── /backend      # Laravel Backend
│── /frontend     # Next.js Frontend
│── docker-compose.yml
│── README.md
```

---

## Backend Setup (Laravel)
###  Environment Configuration
In order to use this project you will need to create a `.env` file in the `backend/` folder and configure your database:
```ini
APP_NAME=Taskify
APP_ENV=local
APP_KEY=base64:YOUR_APP_KEY_HERE
APP_DEBUG=true
APP_URL=http://127.0.0.1:8000

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=taskify
DB_USERNAME=root
DB_PASSWORD=root

SANCTUM_STATEFUL_DOMAINS=localhost:3000
SESSION_DOMAIN=localhost
```

### You can now run the Application with Docker
Navigate to the project root and run:
```sh
docker-compose up --build
```
This will:
- Start MySQL, Laravel backend, and Next.js frontend in Docker containers.
- Laravel API will be available at `http://localhost:8000`
- Frontend will be available at `http://localhost:3000`

### Run Migrations & Seed Database
Open a terminal in the backend container and run:
```sh
docker exec -it <backend_container_id> bash
php artisan migrate --seed
```

---

## Frontend Setup (Next.js)
###  Environment Configuration
Create a `.env.local` file in the `frontend/` folder:
```ini
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Start the Development Server
```sh
cd frontend
npm install --legacy-peer-deps
npm run dev
```
Now, open `http://localhost:3000` to see the application.

---

## API Routes
| Endpoint          | Method | Description            |
|------------------|--------|------------------------|
| `/api/auth/register` | POST | User Registration |
| `/api/auth/login`    | POST | User Login |
| `/api/auth/logout`   | POST | User Logout |
| `/api/tasks`        | GET | Get all tasks (Paginated) |
| `/api/tasks`        | POST | Create a new task |
| `/api/tasks/{id}`   | GET | Get a single task |
| `/api/tasks/{id}`   | PUT | Update a task |
| `/api/tasks/{id}`   | DELETE | Delete a task |

---

## Deployment
### Hosting Backend on Render
1. Create an account on [Render](https://render.com/).
2. Create a **new Web Service** and connect the GitHub repository.
3. Select **PHP 8.2** as the environment.
4. Add environment variables from `.env`.
5. Deploy the backend.

### Hosting Frontend on Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the frontend directory.
3. Follow the prompts to deploy.

---

## Troubleshooting
###  If Laravel API is not responding
- Check logs with: `docker logs <backend_container_id>`
- Make sure `.env` variables are correct.
- Restart containers: `docker-compose restart`

### If Next.js Frontend Fails to Fetch Data
- Ensure `NEXT_PUBLIC_API_URL` is correct.
- Try clearing cache: `rm -rf .next && npm run dev`

---

## Contributors
- **Victor** - Project Creator

---

## License
This project is licensed under the MIT License.

