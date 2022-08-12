const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","favicon.png"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-0e5b3874.js","imports":["_app/immutable/start-0e5b3874.js","_app/immutable/chunks/index-03969575.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
