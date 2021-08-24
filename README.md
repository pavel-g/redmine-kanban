# Redmine kanban

## Frontend

For docker:

```bash
# Build and run:
cd frontend
npm install
npm run build
docker build -f Dockerfile-local-build -t redmine-kanban-frontend .
docker run --name redmine-kanban-frontend -e REDMINE_KANBAN_FRONTEND_REDMINE_PUBLIC_URL=http://redmine.example.org -e REDMINE_KANBAN_FRONTEND_API_URL=http://localhost:3001 -p 3000:80 redmine-kanban-frontend:latest

# Stop and rm:
docker stop redmine-kanban-frontend
docker rm redmine-kanban-frontend
```

Local:

```bash
# Build and run:
cd frontend
npm install
REDMINE_KANBAN_FRONTEND_REDMINE_PUBLIC_URL=http://redmine.example.org REDMINE_KANBAN_FRONTEND_API_URL=http://localhost:3001 npm run generate-envjs
npm run start
```