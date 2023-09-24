export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","assets/JHDeerin_Resume_Web.pdf","assets/img/aboutPhoto.jpg","assets/img/contactPhoto.jpg","assets/img/galaxy_sim_ultramin.gif","assets/img/homePhoto.jpg","assets/img/jake_signature_white.png","assets/img/mac_tutoring.jpg","assets/img/notes_page.png","assets/img/project_bitspike.jpg","assets/img/redesigned_website.jpg","assets/img/resumePhoto.jpg","assets/img/tab_complete_commands_min.gif","clear_styles.css","favicon.png","styles.css"]),
	mimeTypes: {".pdf":"application/pdf",".jpg":"image/jpeg",".gif":"image/gif",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.d912916f.js","app":"_app/immutable/entry/app.aa7b6151.js","imports":["_app/immutable/entry/start.d912916f.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.4913631f.js","_app/immutable/chunks/paths.3aa0afe5.js","_app/immutable/entry/app.aa7b6151.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.7b5b7eb1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
