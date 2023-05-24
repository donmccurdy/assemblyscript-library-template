// src/wasm-compat.ts — Legacy bundler WASM loader.
const WASM_BASE64 = '';
const wasm = /* #__PURE__ */ fetch('data:application/wasm;base64' + WASM_BASE64);
export default wasm;
