# Node js Web App - Server

## Requirements

Things you need to have set up and how to install them:

1. **MySQL:** You can download here: **[Oracle MySql](https://dev.mysql.com/downloads/mysql/)** 
2. **Node:** You can download here: **[Node](https://nodejs.org/en/download/)** 


## Set up

**First:** Navigate to the server folder. If you execute `dir` for windows or `ls` for linux you will get:

![screenshot](https://lh3.googleusercontent.com/Dagxin5QKc5q6PVjBnutIHYRnDAF71jTHXiaCWq5LKPIgfk7nmGHfdRCRigZf5Sqnn-SBnZeFEsT)

Now type `cd config` to go into the `config` directory and if you run `dir` for windows or `ls`for linux you will get: 

![screenshot](https://lh3.googleusercontent.com/0FOTwLhjXPgtxZgEHCw32tceHI3jKOqgrfgelBRMfq4xYODg0sVdFrdynphojf0FcGjW2DBxjHX_)
	
**Second:**  Configuring. 

```bash
cp config/config.example.json config/config.json
```

**Third:** Insert your database info to the `config/config.json` file.

![enter image description here](https://lh3.googleusercontent.com/OMkq2-tDHoU2igSx_xjmOnXnPOQNje_vAo4k7GU6afjzr871bWDTGkxbCq-wY8gCkcrpv2EpxBtw)

**Fourth:** Install packages

	npm install
	
**Fifth:** Create database if it doesn't exist yet:

    npm run db:create
    
**Sixth:** Migrate database                                         

    npm run db:migrate
		
**Seventh** Run the server:

	 node server.js
	 
> Now you are able to see the server running ![enter image description here](https://lh3.googleusercontent.com/Cd8bcSTsKhzxw0TwogFYjj-5x1zTnVT0M26R8SN2cWSHTmgS-KFl9AOtozdNB0vuHtD6WgGqYKW8)

## Authors
    
| Name    | Email  |
|--|--|
| `Alexandros Patsanis` | `alexpatsanis@gmail.com` |
| `Iosif ` | `Iosif.Kakalelis.4464@student.uu.se` |

> For any questions  contact us 
