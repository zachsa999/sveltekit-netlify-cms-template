export const manifest = {
	appDir: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","favicon.png"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-0bf4faba.js","imports":["_app/immutable/start-0bf4faba.js","_app/immutable/chunks/index-4a50e133.js","_app/immutable/chunks/singletons-0c4ab1ce.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
					id: "",
					pattern: /^\/$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":2},
					endpoint: null
				}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
