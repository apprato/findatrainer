# Findatrainer
2 sided marketplace prototype, modelled on the signup flow from upwork for both sides.
It features an online directory with pager, Category & Listing Pages for bother sides. An admin area to create job, 3 page signup workflow for both sides of the marketplace, Simple chat between client and trainer, User Login area, Change & Lost Password.

## Development

meteor npm install
meteor npm start

### Deploy from local to server
```
$  cd .deploy
$  DEBUG=* mup --config mup.js.local.staging --settings settings-staging.json deploy
```
#### Browser Policy
See imports/startup/server/browser-policy.js

## Staging

### Setup EC2 deploy node

Create Ubuntu EC2
```
git clone ssh://git@bitbucket.org/magescale/map_report.git
cd findatrainer
git fetch && git checkout master
cd ..
sh /bin/install.sh
npm install