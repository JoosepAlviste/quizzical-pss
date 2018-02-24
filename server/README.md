# NodejsWebApp1

## Requirements

What things you need to install the software and how to install them:

> Step 1: **MySQL: **  You can download  ** [Oracle MySql](https://dev.mysql.com/downloads/mysql/)** 
> Step 2 :  **Node: **  You can download  ** [Node](https://nodejs.org/en/download/)** 

 

## Set up

**First Step:**  Navigate to the server folder. If you commant `dir` for windows or `ls` for linux you will get:
![enter image description here](https://lh3.googleusercontent.com/Dagxin5QKc5q6PVjBnutIHYRnDAF71jTHXiaCWq5LKPIgfk7nmGHfdRCRigZf5Sqnn-SBnZeFEsT)

>Now in you go `cd config` and If you commant `dir` for windows or `ls`for linux you will get: 

**Second Step:**  Configuring. 
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
