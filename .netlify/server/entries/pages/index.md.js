var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_3e01a4ca = require("../../_app/immutable/chunks/index-3e01a4ca.js");
const metadata = {
  "label": "Home",
  "title": "SvelteKit Netlify CMS"
};
const Routes = (0, import_index_3e01a4ca.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Visit <a href="${"https://kit.svelte.dev"}" rel="${"nofollow"}">kit.svelte.dev</a> to read the SvelteKit docs.</p>
<p>Go to <a href="${"https://www.netlifycms.org"}" rel="${"nofollow"}">netlifycms.org</a> to check out the static git based cms!</p>
<p>Integrates with <a href="${"https://mdsvex.com"}" rel="${"nofollow"}">mdsvex.com</a> for powerful clean markdown. This is based on <a href="${"https://mdxjs.com/docs/what-is-mdx/#mdx-syntax"}" rel="${"nofollow"}">mdx</a>, view this site for the syntax.</p>`;
});
