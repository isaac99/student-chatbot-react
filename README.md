# Getting Started:

### 1. make sure you have xcode developer tools installed
### 2. make sure you have docker for desktop installed
### 3. make sure you have node installed (use homebrew, brew install node)

## Node API and Postgres DB:

### 1. Run API and Postgres DB as Docker containers: 
```bash docker compose up -d --build```

### 2. Start up frontend, it will automatically connect:
```bash cd frontend && yarn install && yarn start```
- Note: you only need to run yarn install the first time you start the frontend or if you add a new package.

### 3. To stop the containers:
```bash docker compose down```

### 4. To remove the containers:
```bash docker compose down --volumes```

### 5. To develop the api locally:
```bash cd api && yarn install && yarn start```
- make sure you have the container stopped or this will not work because there will be a port conflict
