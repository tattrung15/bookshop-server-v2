## Installation

```bash
$ yarn install
```

## Database

- Prepare database (Whenever prisma schema is updated)
  Note that this command generates the prisma client as well.

```shell
$ yarn prisma migrate dev
```

- Reset your database **if you want to erase all data in your database and recreate it**
  See [official doc](https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-reset) for details.
  This command resets the database, applies migrations, and generates client. You can skip client generation and seeding with `--skip-generate` and `--skip-seed`, respectively.

```shell
$ yarn prisma migrate reset
```

- Truncate tables

```shell
$ yarn db:clear
```

- Insert seed data

```shell
$ yarn db:seed
```

- Insert test-seed data

```shell
$ yarn db:test-seed
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
