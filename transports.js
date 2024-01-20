"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _DMU5PHUVjs = require('./chunks/DMU5PHUV.js');
require('./chunks/MBVF2FVP.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/transports.ts
var deleteEmailConfig = async (options) => _DMU5PHUVjs.invokeFetch.call(void 0, "transports", {
  method: "delete",
  pathTemplate: "/api/v1/transports/email-config",
  options
});
var getEmailConfig = async (options) => _DMU5PHUVjs.invokeFetch.call(void 0, "transports", {
  method: "get",
  pathTemplate: "/api/v1/transports/email-config",
  options
});
var patchEmailConfig = async (body, options) => _DMU5PHUVjs.invokeFetch.call(void 0, "transports", {
  method: "patch",
  pathTemplate: "/api/v1/transports/email-config",
  body,
  contentType: "application/json",
  options
});
var sendTestEmail = async (body, options) => _DMU5PHUVjs.invokeFetch.call(void 0, "transports", {
  method: "post",
  pathTemplate: "/api/v1/transports/email-config/actions/send-test-email",
  body,
  contentType: "application/json",
  options
});
var validateEmailConfig = async (options) => _DMU5PHUVjs.invokeFetch.call(void 0, "transports", {
  method: "post",
  pathTemplate: "/api/v1/transports/email-config/actions/validate",
  options
});
var verifyEmailConfigConnection = async (options) => _DMU5PHUVjs.invokeFetch.call(void 0, "transports", {
  method: "post",
  pathTemplate: "/api/v1/transports/email-config/actions/verify-connection",
  options
});
function clearCache() {
  return _DMU5PHUVjs.clearApiCache.call(void 0, "transports");
}
var transportsExport = {
  deleteEmailConfig,
  getEmailConfig,
  patchEmailConfig,
  sendTestEmail,
  validateEmailConfig,
  verifyEmailConfigConnection,
  clearCache
};
var transports_default = transportsExport;









exports.clearCache = clearCache; exports.default = transports_default; exports.deleteEmailConfig = deleteEmailConfig; exports.getEmailConfig = getEmailConfig; exports.patchEmailConfig = patchEmailConfig; exports.sendTestEmail = sendTestEmail; exports.validateEmailConfig = validateEmailConfig; exports.verifyEmailConfigConnection = verifyEmailConfigConnection;
