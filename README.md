## Installation

```bash
$ yarn install
```

## Database

- Prepare database (Whenever prisma schema is updated)
  Note that this command generates the prisma client as well.

```shell
$ npx prisma generate
```

- Push the initial schema to the database

```shell
$ npx prisma db push
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
