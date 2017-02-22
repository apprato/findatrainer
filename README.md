# findatrainer

## Development
meteor npm install
meteor npm start


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

### Deploy from EC2 deploy node to staging

mup setup
mup deploy
mup start


## Production
....

