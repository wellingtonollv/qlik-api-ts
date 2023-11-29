import {
  clearApiCache,
  invokeFetch
} from "./chunk-3YE7EI7I.mjs";
import "./chunk-WM7FQU2U.mjs";

// src/public/rest/themes.ts
var getThemes = async (options) => invokeFetch("themes", {
  method: "get",
  pathTemplate: "/api/v1/themes",
  options
});
var uploadTheme = async (body, options) => invokeFetch("themes", {
  method: "post",
  pathTemplate: "/api/v1/themes",
  body,
  options
});
var deleteTheme = async (id, options) => invokeFetch("themes", {
  method: "delete",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  options
});
var getTheme = async (id, options) => invokeFetch("themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  options
});
var patchTheme = async (id, body, options) => invokeFetch("themes", {
  method: "patch",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  body,
  options
});
var downloadTheme = async (id, options) => invokeFetch("themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}/file",
  pathVariables: { id },
  options
});
var downloadFileFromTheme = async (id, filepath, options) => invokeFetch("themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}/file/{filepath}",
  pathVariables: { id, filepath },
  options
});
function clearCache() {
  return clearApiCache("themes");
}
var themesExport = {
  getThemes,
  uploadTheme,
  deleteTheme,
  getTheme,
  patchTheme,
  downloadTheme,
  downloadFileFromTheme,
  clearCache
};
var themes_default = themesExport;
export {
  clearCache,
  themes_default as default,
  deleteTheme,
  downloadFileFromTheme,
  downloadTheme,
  getTheme,
  getThemes,
  patchTheme,
  uploadTheme
};
