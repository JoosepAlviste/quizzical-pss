# Node js Web App - Server

## Requirements

What things you need to install the software and how to install them:

> Step 1: **MySQL: **  You can download  ** [Oracle MySql](https://dev.mysql.com/downloads/mysql/)** 
> 
> Step 2 :  **Node: **  You can download  ** [Node](https://nodejs.org/en/download/)** 
> 

 

## Set up

 1. -**First Step**  Navigate to the server folder. If you commant `dir` for windows or `ls` for linux you will get:
![enter image description here](https://lh3.googleusercontent.com/Dagxin5QKc5q6PVjBnutIHYRnDAF71jTHXiaCWq5LKPIgfk7nmGHfdRCRigZf5Sqnn-SBnZeFEsT)

	>Now in you go `cd config` and If you commant `dir` for windows or `ls`for linux you will get: 
	>![enter image description here](https://lh3.googleusercontent.com/0FOTwLhjXPgtxZgEHCw32tceHI3jKOqgrfgelBRMfq4xYODg0sVdFrdynphojf0FcGjW2DBxjHX_)
 2. **Second Step:**  Configuring. 
	```bash
	cp config/config.example.json config/config.json
	```
 3. -**Third Step:** Insert your database info to the config/config.json file. 	 ![enter image description here](https://lh3.googleusercontent.com/OMkq2-tDHoU2igSx_xjmOnXnPOQNje_vAo4k7GU6afjzr871bWDTGkxbCq-wY8gCkcrpv2EpxBtw)
 4. Install packages

	```
	npm install
	```
 5. Create database if it doesn't exist yet:

	```
	npm run db:create
	```
 6.  Migrate database                                         
		```
		npm run db:migrate
		```
 7.	Run the server:
	 ```
	 node server.js
	 ```
	 > Now you are able to see the server running ![enter image description here](https://lh3.googleusercontent.com/Cd8bcSTsKhzxw0TwogFYjj-5x1zTnVT0M26R8SN2cWSHTmgS-KFl9AOtozdNB0vuHtD6WgGqYKW8)

## Arthur
    
| Name    | Email  |
|--|--|
| `Alexandros Patsanis` | `alexpatsanis@gmail.com` |
| `Iosif ` | `Iosif.Kakalelis.4464@student.uu.se` |

> For any questions  contant us 
