// src/wasm-default.ts — Web & modern bundler WASM loader.
const wasm = /* #__PURE__ */ fetch(/* #__PURE__ */ new URL('./release.wasm', import.meta.url));
export default wasm;
