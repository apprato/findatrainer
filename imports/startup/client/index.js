import { Bert } from 'meteor/themeteorchef:bert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routes.js';

Bert.defaults.style = 'growl-top-right';
/*
DocHead.addMeta({
  'http-equiv': 'Content-Security-Policy',
  content: "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.comdata:"
});
*/
