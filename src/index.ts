import wasm from './wasm';
import { instantiate, __AdaptedExports } from '../build/release';

// Initialization.

let exports: typeof __AdaptedExports;

export const ready = /* #__PURE__ */ new Promise<void>(async (resolve, reject) => {
	try {
		const module = await WebAssembly.compile(await wasm);
		exports = await instantiate(module as BufferSource, {});
		resolve();
	} catch (e) {
		reject(e);
	}
});

// Wrapper API.

/**
 * Returns the sum of two 32-bit signed integers.
 * @param a Integer in the range -2,147,483,648 to +2,147,483,647.
 * @param b Integer in the range -2,147,483,648 to +2,147,483,647.
 */
export function add(a: number, b: number): number {
    if (!exports) {
        throw new Error('WebAssembly not yet initialized: await "ready" export.');
    }
    return exports.add(a, b);
}
