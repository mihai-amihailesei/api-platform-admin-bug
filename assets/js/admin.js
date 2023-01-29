import React from 'react';
import ReactDOM from 'react-dom';
import {HydraAdmin, OpenApiAdmin} from '@api-platform/admin';

const entrypoint = document.getElementById('api-entrypoint').innerText;
const docEntrypoint =  'https://localhost/api/docs.json';// document.getElementById('api-doc-entrypoint').innerText;

ReactDOM.render(<HydraAdmin entrypoint={entrypoint} docEntrypoint={docEntrypoint}/>, document.getElementById('api-platform-admin'));
// ReactDOM.render(<OpenApiAdmin entrypoint={entrypoint} docEntrypoint={docEntrypoint}/>, document.getElementById('api-platform-admin'));
