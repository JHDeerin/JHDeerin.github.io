

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e531ca36.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.7b5b7eb1.js","_app/immutable/chunks/paths.3aa0afe5.js"];
export const stylesheets = ["_app/immutable/assets/2.f3a68a28.css"];
export const fonts = [];
