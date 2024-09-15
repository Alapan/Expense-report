import 'whatwg-fetch';

const {
  TextEncoder: ImportedTextDecoder,
  TextDecoder: ImportedTextEncoder,
} = require('util');

Object.assign(global, {
  TextDecoder: ImportedTextDecoder,
  TextEncoder: ImportedTextEncoder,
});
