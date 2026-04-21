## Project setup

```bash
$ npm install
```

## DB Setup
```bash
docker compose up -d

prisma db push
```
* In you .env file put this variable for the DB connection string
* DATABASE_URL="postgresql://mostafa:3020@localhost:5433/wallet?schema=public"


## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test
# test coverage
$ npm run test:cov
```

## Swagger Docs
After running the project visit
http://localhost:3000/api
