(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"1d4f73d8868ea73e934cf76da4d2351f","url":"404.html"},{"revision":"a3c99f9b147469899458e2ea4c3dd12e","url":"assets/css/styles.b562f4b2.css"},{"revision":"bf426b440c5bd2ac8878d659b27a0920","url":"assets/js/131.bf11f230.js"},{"revision":"499644309805fe3caa7e19cd3ee1ab4c","url":"assets/js/17896441.d6d91d07.js"},{"revision":"b8953a8d69bba12918511cce37eb59d5","url":"assets/js/1be78505.8b98d796.js"},{"revision":"188cce63f2b6a97931e5f666d31503f3","url":"assets/js/230.046b420f.js"},{"revision":"d0bf2e623bc6f7a2bc8af23ae819056c","url":"assets/js/246e058b.3f37e529.js"},{"revision":"800a8f8835ba0ec797409cdce66c09df","url":"assets/js/283.dd64fe30.js"},{"revision":"fe7122849dc7373cbc3b6efda211fa42","url":"assets/js/2ba15dff.af687108.js"},{"revision":"aec8c0b1026c07040c8f4fbf5971431a","url":"assets/js/3a3e313f.0100dd2e.js"},{"revision":"d18ffabeac513860f26afbfeba9d5fac","url":"assets/js/47e6fc9a.cc76a7ef.js"},{"revision":"d3305d31e8f54375f91959e79e6be5a2","url":"assets/js/5604ffad.c86af151.js"},{"revision":"4ccff354337408b6cb9b63f06ba1585d","url":"assets/js/5adcbed8.4f7e730e.js"},{"revision":"60cfd7aea4da711c227bcbd7dd79691e","url":"assets/js/6b9e3271.fce41041.js"},{"revision":"debe584842e09a989f08ce44b4812ae8","url":"assets/js/854505b7.3b6e7382.js"},{"revision":"92754c4ccbdf7147391e2ee935cc8bb7","url":"assets/js/87d33de7.a3a6bb49.js"},{"revision":"996bcc59b122395069aba9bb36d1ab83","url":"assets/js/935f2afb.3da161ba.js"},{"revision":"7553d54c206c92caab757d5077a3a9d2","url":"assets/js/944df76b.a6daa8b1.js"},{"revision":"64b9141b373fb5b3dea23ff8f1910b16","url":"assets/js/972.b2f32cbb.js"},{"revision":"161e0bb792048d1558a967fcaf29363f","url":"assets/js/982c54c0.34fef7e2.js"},{"revision":"495e7da74fe2d6f674c2e76c049fdf81","url":"assets/js/abab8b21.5e512f69.js"},{"revision":"85d2ed33ecaa6c95b44cd4c1b76d751b","url":"assets/js/bcce3113.7da2a373.js"},{"revision":"9f09abd2174db00601c1b26d9cf26cc9","url":"assets/js/c0e20c00.ae7e2db5.js"},{"revision":"baedc47b16e3399ff032748d5b4211a2","url":"assets/js/c61ee146.9f8c5610.js"},{"revision":"93acbb80cb062f9474d89595f8d8b597","url":"assets/js/dfe5b690.e939e4c4.js"},{"revision":"a8ccf0c9e98e137425be017a6a923961","url":"assets/js/e3f6bbac.cfccf53a.js"},{"revision":"b3bab2e272b31d9e0ad851d8b4c667f6","url":"assets/js/eb6a5da1.ec638277.js"},{"revision":"2d71fd8abbda1409bf53d7f65b20a29a","url":"assets/js/f118e68c.488fc72a.js"},{"revision":"8415c9daed05f8118382e20b7bf71602","url":"assets/js/f4cb7206.a907d0dc.js"},{"revision":"adc195dcfa2076248d9172c8eacf6b8e","url":"assets/js/f839e195.38dbbe23.js"},{"revision":"a3a925981c278dd51c369be8c7b75110","url":"assets/js/main.e6967a96.js"},{"revision":"a0a31723cbeb7cdf9b6523c61900aa4a","url":"assets/js/runtime~main.01fb01d2.js"},{"revision":"2e9f5760c5d2e101e22ec6c20b36253b","url":"course-info/assessments.html"},{"revision":"0f09742354863cd745e308147585f000","url":"course-info/collaboration.html"},{"revision":"0b10e53e5404d1b2bd4e001b920f4c6f","url":"course-info/course-setup.html"},{"revision":"fbd18e686e05bf769f4c75f5a2059f32","url":"course-info/course-what.html"},{"revision":"d34d8add9d00c1a19876b97718497389","url":"index.html"},{"revision":"2524df02c6e551be5aef857403777080","url":"manifest.json"},{"revision":"2dbc8e435456bc80abda000c02fed5d9","url":"tutorials-azure/my-test-file.html"},{"revision":"90094ad280744a61315013da1a090039","url":"tutorials-azure/test-file.html"},{"revision":"0de1c2c3131fbfc1794f299622d40147","url":"tutorials-docker/test-file.html"},{"revision":"dda437405887208cfd59d19da65331e5","url":"tutorials-github/getting-started.html"},{"revision":"cbc26c35e3043c7be71d51e9e79d6f93","url":"tutorials-github/git-basic-commands.html"},{"revision":"ba499a92ccbdcc21af1a9f0670e37c3b","url":"tutorials-github/git-branching.html"},{"revision":"11e5a6e7c75c967c4440bbf3efcf45d9","url":"tutorials-github/git-github-beginners.html"},{"revision":"aa2544909cbd471aed035cdc487822fa","url":"tutorials-github/github-actions.html"},{"revision":"67f4287924bbd573107862531256fc67","url":"tutorials-github/github-pull-request.html"},{"revision":"6279dc318c6720ccd8d8421604bdda54","url":"tutorials-github/markdown-intro.html"},{"revision":"3af4beb7904b1c8dce3f0155bdff6257","url":"tutorials-github/markdown-syntax.html"},{"revision":"50e2f4dedc031e4e59e0043fa709842b","url":"tutorials-github/quickstart-repositories.html"},{"revision":"d85e92c080cad7c1d92671fdc32d5a5e","url":"tutorials-github/repositories.html"},{"revision":"c223ec382ebd07dc58f3f38c4451b2ae","url":"tutorials-github/version-control.html"},{"revision":"ad642590961fc65cd3461828f9a16f61","url":"weekly-schedule.html"},{"revision":"6e35cdd75e6e04451ca19499cd4b3e85","url":"assets/images/alerts-rendered-f1f5f6569d9da09968e7df7614422902.png"},{"revision":"d635308ea9ac4799e52f4952c18d7c36","url":"assets/images/code-block-rendered-3506276612021273f0f396723d048c2e.png"},{"revision":"c4b571d52d0611038c78c7e35d081ef3","url":"assets/images/code-block-syntax-highlighting-rendered-15a5882c53778bd407e368ebfd71ff5a.png"},{"revision":"1787b6fa2130cefe68c525e12757637b","url":"assets/images/code-button-329fa7770d2505d8c9fbed3d8f63df85.png"},{"revision":"6f7e96449844fd63b3a5f3cbdbb072f1","url":"assets/images/create-commit-open-readme-707336aa30c1b8b9e12953735cce2948.png"},{"revision":"56741b30f879d703088038c2c824b7e0","url":"assets/images/create-commit-review-55fb59ceecadf620dc0b3b0bf4df6667.png"},{"revision":"f7565ba9a1531a6e993c35c058a69b27","url":"assets/images/create-repository-name-e475b376cd3b0a219f324e9d9871ddf5.png"},{"revision":"c6459e7f176c81000fcddbcd5f79fcab","url":"assets/images/edit-file-edit-button-887165ee92ff09bc6c49613064788dc2.png"},{"revision":"d4d74fc3f7fe0805f994af2f0b6a5812","url":"assets/images/edit-readme-preview-changes-8ab997c76cf182be2fbc15c9b5a09235.png"},{"revision":"289e96ea48398f3e3d9bb5af97dca299","url":"assets/images/emoji-rendered-339e1ea533c76f920d76d98132199319.png"},{"revision":"34e9ff51f1e1a44f6df644a13f5151de","url":"assets/images/footnote-rendered-c6f2eaf1a0dce3116a7e6ffa0c5c31da.png"},{"revision":"0a363a6f048c1c9b467ee4bb8a92e774","url":"assets/images/git-commit-flow-dca8e46dad0cec37ef5eef394b0b2341.png"},{"revision":"39330fec0ccd44a57e916d061046e439","url":"assets/images/github_discussions-4df6570c21f5b792b263d7eb47d6586d.jpg"},{"revision":"c21540b74ba3f058b40d2241cdfe6735","url":"assets/images/headings-rendered-9ffbd15b1e3937e8899ba48f4244266d.png"},{"revision":"bf42a6daddd2e18a4f5f90f31ede641f","url":"assets/images/headings-toc-a1cd9eff9f2999b7428d5bd6c03c4141.png"},{"revision":"8f8ff72249d781061934615fc889e01f","url":"assets/images/https-url-clone-cli-1fd264c8cf475dceaf4ec288d97853ca.png"},{"revision":"98445c8c6e0b555650ba324253a6868d","url":"assets/images/inline-code-rendered-07e0ef8ad25df752a178cf57b520c891.png"},{"revision":"bf55b7deafefd3370c91e995529645b5","url":"assets/images/k8s_icon-b73ba6eb74dbed1f78378579015aaba3.png"},{"revision":"fa199bb9e26bd583c0cf014e5a897170","url":"assets/images/not_icon-91d0d67837931a6275a2039fc8ec2856.jpg"},{"revision":"4ce03d83a352bc45369ba698b21612bd","url":"assets/images/online_icon-dc3bd35f3ed2912c96f3a9b9700c07cf.jpg"},{"revision":"ae394ccadee40d63a82f7c3f52ac1c6c","url":"assets/images/policies_image-c6241333abcc8349526be865abae1892.jpg"},{"revision":"113ea6be75b088524daaf783c98ca0b1","url":"assets/images/pre_icon-c503469e4d58f7f4918fe74d92f7f64f.jpg"},{"revision":"295dccdb35c8a87d28a1c62184ca0ffe","url":"assets/images/quoted-text-rendered-b370b8e2bad7315f4eb4906922b1e0e6.png"},{"revision":"542b1ee0daa4b1aefcaf79f01f0e23b2","url":"assets/images/readme-links-132c13b657beff5175162a1976429d81.png"},{"revision":"e936450d41b60631ef85261b5ee95ff7","url":"assets/images/repo-create-global-nav-update-f68e18c856680ff8d5685e85e5641a5e.png"},{"revision":"e505c7d8d0ab1983932e9ebde91d6cdf","url":"assets/images/success_icon-9067ef51715e3d405384fceee48350b3.png"},{"revision":"3ebfd4406ff0534b94f2c2f8cb74b68a","url":"assets/images/supported-color-models-rendered-2390df6b73e486e2b41c2324d6ee9f10.png"},{"revision":"0097b6b39e8b3d14b91ab5764bdf444f","url":"assets/images/task-list-rendered-simple-1aa28f8bc57d0ec1289e67020d03d2e8.png"},{"revision":"7fb36798169b5b2afe3d12a92fa568d2","url":"assets/images/wisdom_icon-6dda5c2a86756fdc0829bbfc21a59930.png"},{"revision":"38590ad621ca584d91d9933fd5d897dd","url":"assets/images/wynk_icon-fe9d183b17d2eaa554f7586928d5443b.jpg"},{"revision":"16cdf395878a5ade4fc4e809ae0263ed","url":"img/about/azure_icon.jpg"},{"revision":"3fab82464cef837180da9105ba44072e","url":"img/about/docker_icon.png"},{"revision":"72895138eed3ef1b2410cd3eaacd19a1","url":"img/about/git_icon.png"},{"revision":"39330fec0ccd44a57e916d061046e439","url":"img/about/github_discussions.jpg"},{"revision":"e12418bffe62b232611540381e2331c4","url":"img/about/github_icon.png"},{"revision":"c8e6c72c9bf9afefb9ba35acaeebde31","url":"img/about/info_icon.png"},{"revision":"bf55b7deafefd3370c91e995529645b5","url":"img/about/k8s_icon.png"},{"revision":"11f6ac07cae2c4586ead16677835ef15","url":"img/about/nocheat_icon.jpg"},{"revision":"fa199bb9e26bd583c0cf014e5a897170","url":"img/about/not_icon.jpg"},{"revision":"4ce03d83a352bc45369ba698b21612bd","url":"img/about/online_icon.jpg"},{"revision":"6f62421cfe6e40b3193a8881e0eb4c1a","url":"img/about/plagairism_icon.png"},{"revision":"ae394ccadee40d63a82f7c3f52ac1c6c","url":"img/about/policies_image.jpg"},{"revision":"113ea6be75b088524daaf783c98ca0b1","url":"img/about/pre_icon.jpg"},{"revision":"e505c7d8d0ab1983932e9ebde91d6cdf","url":"img/about/success_icon.png"},{"revision":"7fb36798169b5b2afe3d12a92fa568d2","url":"img/about/wisdom_icon.png"},{"revision":"38590ad621ca584d91d9933fd5d897dd","url":"img/about/wynk_icon.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"d7e3179946ffbe47a9c75841554ff91f","url":"img/oer-instructions/commit-changes.png"},{"revision":"972a5a5d918a2c2a708e929c2ee801cc","url":"img/oer-instructions/commit-dialog.png"},{"revision":"7685ba4492fa1eb5044c77f38028f109","url":"img/oer-instructions/github-actions-extension.png"},{"revision":"bdf6c435a6b835dff58f3938c7040c14","url":"img/oer-instructions/github-actions.png"},{"revision":"5b54abe425c5d5e06a722956d91e901e","url":"img/oer-instructions/github-check_change.png"},{"revision":"afe774d7fc75aad0ef523c8a96724076","url":"img/oer-instructions/github-codespace-2.png"},{"revision":"4ce3488bede3244a0d5aef1c87a601a5","url":"img/oer-instructions/github-codespace-source_control.png"},{"revision":"5e73303160820994caca80683d5dddac","url":"img/oer-instructions/github-codespace.png"},{"revision":"951098320b22ccff79c540ada9c08fa3","url":"img/oer-instructions/github-error_pass.png"},{"revision":"481afa959ff562582cda513a3635a072","url":"img/oer-instructions/github-error.png"},{"revision":"ae4c1bbce0b6578dc4038c91247c492b","url":"img/oer-instructions/github-error2.png"},{"revision":"dc6528b7f1d0fed414a50e056608574d","url":"img/oer-instructions/github-error3.png"},{"revision":"a21c8c59f0853557677c2c4789fffa27","url":"img/oer-instructions/github-highlighted_files-unedited.png"},{"revision":"31b305ec91615baf12cca16f53f19784","url":"img/oer-instructions/github-highlighted_files.png"},{"revision":"8e1ff443c6e9db1cdaf9fc97ac36341b","url":"img/oer-instructions/github-pr_and_issues-extension.png"},{"revision":"2f3e44e1b18c7af8f144c976fb48087b","url":"img/oer-instructions/github-prettier-extension.png"},{"revision":"d4f552517d661c60bd05073a96a1dd08","url":"img/oer-instructions/github-repo.png"},{"revision":"a7651195e5149cb6d1b6b4ccb14ea70b","url":"img/oer-instructions/vscode-extensions.png"},{"revision":"5b25494591002e58af37b866714f89f7","url":"img/oer-instructions/vscode-file_explorer.png"},{"revision":"44c0fac4733884f86d2e3bb02dc3a085","url":"img/oer-instructions/vscode-source_control.png"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"4a123bd4b14d9fb18d70041210b6de4b","url":"img/tutorials/git_wide_icon.png"},{"revision":"6e35cdd75e6e04451ca19499cd4b3e85","url":"img/tutorials/github/alerts-rendered.png"},{"revision":"d635308ea9ac4799e52f4952c18d7c36","url":"img/tutorials/github/code-block-rendered.png"},{"revision":"c4b571d52d0611038c78c7e35d081ef3","url":"img/tutorials/github/code-block-syntax-highlighting-rendered.png"},{"revision":"1787b6fa2130cefe68c525e12757637b","url":"img/tutorials/github/code-button.png"},{"revision":"6f7e96449844fd63b3a5f3cbdbb072f1","url":"img/tutorials/github/create-commit-open-readme.png"},{"revision":"56741b30f879d703088038c2c824b7e0","url":"img/tutorials/github/create-commit-review.png"},{"revision":"f7565ba9a1531a6e993c35c058a69b27","url":"img/tutorials/github/create-repository-name.png"},{"revision":"c6459e7f176c81000fcddbcd5f79fcab","url":"img/tutorials/github/edit-file-edit-button.png"},{"revision":"d4d74fc3f7fe0805f994af2f0b6a5812","url":"img/tutorials/github/edit-readme-preview-changes.png"},{"revision":"289e96ea48398f3e3d9bb5af97dca299","url":"img/tutorials/github/emoji-rendered.png"},{"revision":"39e2c1a8534e412370dbf257b697fe47","url":"img/tutorials/github/escaped-character-rendered.png"},{"revision":"34e9ff51f1e1a44f6df644a13f5151de","url":"img/tutorials/github/footnote-rendered.png"},{"revision":"0a363a6f048c1c9b467ee4bb8a92e774","url":"img/tutorials/github/git-commit-flow.png"},{"revision":"c21540b74ba3f058b40d2241cdfe6735","url":"img/tutorials/github/headings-rendered.png"},{"revision":"bf42a6daddd2e18a4f5f90f31ede641f","url":"img/tutorials/github/headings-toc.png"},{"revision":"8f8ff72249d781061934615fc889e01f","url":"img/tutorials/github/https-url-clone-cli.png"},{"revision":"735997d68e16de7f15be73787fb4a838","url":"img/tutorials/github/image-rendered.png"},{"revision":"98445c8c6e0b555650ba324253a6868d","url":"img/tutorials/github/inline-code-rendered.png"},{"revision":"7bd730fcb0a4544eafa73c6571be2af9","url":"img/tutorials/github/link-rendered.png"},{"revision":"9b227a620278126f4b27f6142cb0bdb6","url":"img/tutorials/github/mention-rendered.png"},{"revision":"92619ec1ed81863ee0ecab09741730e8","url":"img/tutorials/github/nested-list-alignment.png"},{"revision":"727d3a88eea2dd977b24a3551d6d704a","url":"img/tutorials/github/nested-list-example-1.png"},{"revision":"b43dcedeab6652c84f98cb70d3d8382e","url":"img/tutorials/github/nested-list-example-2.png"},{"revision":"7021200bd13b41c27d6d96dff4553539","url":"img/tutorials/github/nested-list-example-3.png"},{"revision":"61827d55377ccc88be484fc8a232511d","url":"img/tutorials/github/ordered-list-rendered.png"},{"revision":"295dccdb35c8a87d28a1c62184ca0ffe","url":"img/tutorials/github/quoted-text-rendered.png"},{"revision":"542b1ee0daa4b1aefcaf79f01f0e23b2","url":"img/tutorials/github/readme-links.png"},{"revision":"e936450d41b60631ef85261b5ee95ff7","url":"img/tutorials/github/repo-create-global-nav-update.png"},{"revision":"6a790d7145adafb4f7b726d9e4887aa8","url":"img/tutorials/github/supported-color-models-hex-rendered.png"},{"revision":"3954054c852ef1376117daea532b2d96","url":"img/tutorials/github/supported-color-models-hsl-rendered.png"},{"revision":"3ebfd4406ff0534b94f2c2f8cb74b68a","url":"img/tutorials/github/supported-color-models-rendered.png"},{"revision":"16888c26617b0bfd42440aba28bbb572","url":"img/tutorials/github/supported-color-models-rgb-rendered.png"},{"revision":"0097b6b39e8b3d14b91ab5764bdf444f","url":"img/tutorials/github/task-list-rendered-simple.png"},{"revision":"16373e9d17ba77193286b5f2332d8b9b","url":"img/tutorials/github/unordered-list-rendered.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();