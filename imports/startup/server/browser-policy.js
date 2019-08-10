import { BrowserPolicy } from 'meteor/browser-policy-common';
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
BrowserPolicy.content.allowFontOrigin("data:");
BrowserPolicy.content.allowOriginForAll('*.ssl-images-amazon.com');
BrowserPolicy.content.allowOriginForAll('https://fonts.gstatic.com');

// Perhaps a bit too open, @TODO review
BrowserPolicy.framing.allowAll()
BrowserPolicy.content.allowSameOriginForAll('*')
BrowserPolicy.content.allowDataUrlForAll('*')
BrowserPolicy.content.allowOriginForAll('*')
