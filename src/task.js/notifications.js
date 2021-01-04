// import { notice, error } from '@pnotify/core/dist/PNotify.js';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
// import { defaults } from '@pnotify/core';
// defaults.sticker = false;
// defaults.closer = false;
// defaults.delay = 2000;

import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import 'material-design-icons/iconfont/material-icons.css';
const { notice } = require('@pnotify/core');
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

function errorMsg() {
  notice({
    text: 'Необходимо сделать запрос более специфичным',
  });
}

export default { errorMsg };
