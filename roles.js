"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkOULT3V2Ujs = require('./chunk-OULT3V2U.js');
require('./chunk-ZT4C7KCQ.js');

// src/public/rest/roles.ts
var getRoles = async (query, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "roles", {
  method: "get",
  pathTemplate: "/api/v1/roles",
  query,
  options
});
var getRole = async (id, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "roles", {
  method: "get",
  pathTemplate: "/api/v1/roles/{id}",
  pathVariables: { id },
  options
});
function clearCache() {
  return _chunkOULT3V2Ujs.clearApiCache.call(void 0, "roles");
}
var rolesExport = { getRoles, getRole, clearCache };
var roles_default = rolesExport;





exports.clearCache = clearCache; exports.default = roles_default; exports.getRole = getRole; exports.getRoles = getRoles;
