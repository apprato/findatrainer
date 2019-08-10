# findatrainer

## Development

meteor npm install
meteor npm start

### Npm modules

This should be in package.json i think.
meteor add email
meteor add meteorhacks:ssr
meteor add ajduke:bootstrap-tagsinput # typeahead: enabled
meteor add bootstrp:tagsinput
meteor npm install react-datepicker --save # datepicker


#### Browser Policy
See imports/startup/server/browser-policy.js

## Staging

TBC

### Setup EC2 deploy node

Create Ubuntu EC2
git clone ssh://git@bitbucket.org/magescale/map_report.git
cd findatrainer
git fetch && git checkout master
cd ..
sh /bin/install.sh
npm install

### Deploy from EC2 deploy node to staging - see bin/deploy.sh for details

mup setup
mup deploy
mup start
cd /home/ubuntu/f indatrainer/.deploy

### Setup server for mup to push to

sudo apt-get update
sudo apt-get install -y npm
curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash
nvm install 4.4.7
nvm use 4.4.7
sudo apt-get install -y awscli
sudo npm install -g mupx
sudo npm install -g mupx-letsencrypt
sudo npm install mup
curl https://install.meteor.com | /bin/sh
sudo ln -s /usr/bin/nodejs /usr/bin/node
sudo visudo

- add:
  gymeed ALL=(ALL) NOPASSWD: ALL
  %sudo ALL=(ALL) NOPASSWD:ALL
  mup --config mup.js.local.staging --settings settings-staging.json setup

### Deploy from local to server

$  cd .deploy
$  DEBUG=* mup --config mup.js.local.staging --settings settings-staging.json deploy



## Production

....
