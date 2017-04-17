/* eslint-disable no-useless-return */
import fs from 'fs';
import path from 'path';
import jsdom from 'jsdom';

import getHeight from './getHeight';

jsdom.env({
  html: fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'),
  done(err, window) {
    if (err) {
      console.error(err);
      return;
    }
    const { document } = window;
    const height = getHeight(document, document.body);
    console.log(height);
  },
});
