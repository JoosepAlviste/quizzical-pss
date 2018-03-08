echo "Copy files to api droplet.."
rsync -r --delete-after --quite $SERVER_SECRET_ENV root@159.65.226.145:quizzical

echo "Copying Successful"
echo "Restarting Server "

ssh  root@159.65.226.145 "pm2 kill; cd quizzical/server; pm2 start server.js"

echo "Server is running Successfully!"
