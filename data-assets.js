"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _DMU5PHUVjs = require('./chunks/DMU5PHUV.js');
require('./chunks/MBVF2FVP.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/data-assets.ts
var deleteDataAssets = async (body, options) => _DMU5PHUVjs.invokeFetch.call(void 0, "data-assets", {
  method: "delete",
  pathTemplate: "/api/v1/data-assets",
  body,
  contentType: "application/json",
  options
});
var createDataAsset = async (body, options) => _DMU5PHUVjs.invokeFetch.call(void 0, "data-assets", {
  method: "post",
  pathTemplate: "/api/v1/data-assets",
  body,
  contentType: "application/json",
  options
});
var getDataAsset = async (dataAssetId, query, options) => _DMU5PHUVjs.invokeFetch.call(void 0, "data-assets", {
  method: "get",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  query,
  options
});
var patchDataAsset = async (dataAssetId, body, options) => _DMU5PHUVjs.invokeFetch.call(void 0, "data-assets", {
  method: "patch",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  body,
  contentType: "application/json",
  options
});
var updateDataAsset = async (dataAssetId, body, options) => _DMU5PHUVjs.invokeFetch.call(void 0, "data-assets", {
  method: "put",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _DMU5PHUVjs.clearApiCache.call(void 0, "data-assets");
}
var dataAssetsExport = {
  deleteDataAssets,
  createDataAsset,
  getDataAsset,
  patchDataAsset,
  updateDataAsset,
  clearCache
};
var data_assets_default = dataAssetsExport;








exports.clearCache = clearCache; exports.createDataAsset = createDataAsset; exports.default = data_assets_default; exports.deleteDataAssets = deleteDataAssets; exports.getDataAsset = getDataAsset; exports.patchDataAsset = patchDataAsset; exports.updateDataAsset = updateDataAsset;
