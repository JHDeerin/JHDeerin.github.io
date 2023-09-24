import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.b4f5992e.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.7b5b7eb1.js"];
export const stylesheets = [];
export const fonts = [];
