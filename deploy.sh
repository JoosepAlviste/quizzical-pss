#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'Develop' ] ; then
    read -r -d '' SSH_COMMAND << EOM
    cd /server &&
    git pull 
EOM
    ssh -o "StrictHostKeyChecking no" -i deploy/deploy-key deploy@159.65.226.145 $SSH_COMMAND
else
    echo "Not deploying, since this branch isn't Develop."
fi