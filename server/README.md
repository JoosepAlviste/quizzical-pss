# NodejsWebApp1

## Requirements

* MySQL
* Node
* NPM


## Set up

Configuring.

```bash
cp config/config.example.json config/config.json
```

Insert your database info to the config/config.json file.

Install packages

```
npm install
```

Create database if it doesn't exist yet:

```
npm run db:create
```

Migrate database

```
npm run db:migrate
```
