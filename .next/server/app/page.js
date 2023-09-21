(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 1087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7395)), "C:\\Users\\ASUS\\Desktop\\New_Portfolio\\app\\page.jsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8481)), "C:\\Users\\ASUS\\Desktop\\New_Portfolio\\app\\layout.jsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["C:\\Users\\ASUS\\Desktop\\New_Portfolio\\app\\page.jsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 9188:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6672))

/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 6672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./app/styles/globals.css
var globals = __webpack_require__(2348);
;// CONCATENATED MODULE: ./app/assets/images/css.png
/* harmony default export */ const css = ({"src":"/_next/static/media/css.38d9d337.png","height":25,"width":20,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAgUlEQVR42lXLIQ6DQBCF4RGVDWuaHqGqSXsbjoCHcAKCgwRPOAEhXACCR4BD4MneANzCPxLxZWfe2xHnyY7zxsghDBY5QgRIYLVY+VHj457yYK+wCsGsF4Qe7xcZJr3oUWJBBx+DFi1y/PBHgUaLFCdmjM4wk2nxZomxwbJHzsjrAk7kUFP7aSTBAAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/figma.png
/* harmony default export */ const figma = ({"src":"/_next/static/media/figma.dc1e5994.png","height":25,"width":16,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAoklEQVR42mO4JSZX/VBUqu6emMyGh6LSdbfE5eoZDsoZFDAAwX55gwwQfVAeyF+o6TFpnpZP1QJNrw1ztXxbgPwehk6DqOr1coqS3QYRc5aqWGp3GkTmM6RbF5cyeEyUSLUunWbk0qmZZl1ax+Dv3Nob6thUEejUMj/CoSEv3KHBnEHfZ24OAxBo+83PZ4ABsZANFaJhm7ukg9f6gPiO3rNYAcphMv5tOBgaAAAAAElFTkSuQmCC","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/freeCodeCamp.png
/* harmony default export */ const freeCodeCamp = ({"src":"/_next/static/media/freeCodeCamp.226a56dd.png","height":23,"width":34,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAdElEQVR42g3MuQ2FMBRE0VcwkZPfBMEPkKgCCQseSwqiALxgIoigCC8yI01wTzJkzKGUyTk/z4shQGsPYp5SSnBZ/quqRoDDMNOybMC+q6IQQvy0NuC6biRlj+o6vq67aVrmEZSSyblTaxtj9N6HEPADOnd+VMNj1E1Q5tcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./app/assets/images/github.svg
/* harmony default export */ const github = ({"src":"/_next/static/media/github.66047a2c.svg","height":512,"width":496,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./app/assets/images/hackerRank.png
/* harmony default export */ const hackerRank = ({"src":"/_next/static/media/hackerRank.3966614f.png","height":43,"width":43,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEX////+/v79/v79/v3k8+jj8ujj8Obj7+XW7NvV69rR6tfR6dfL6NLJ59HJ5M/J48+X1KaW0KSV0KOM1Z+K1J2IxZWExJN0zIxwwIVcwnhWwXVZvnVWvXJEw20ywWQ7tGIfwF4pslgDr0+Ltx6FAAAAPklEQVR42g3FxQHAIBAAwQXiStyD9F8kN58Bg9CgyNYll+i/4/cdYK+quS0wvW39zMAQw+lGUJTbXkhohCEBVdQCbHPFQGQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/html.png
/* harmony default export */ const html = ({"src":"/_next/static/media/html.ecb8fce2.png","height":25,"width":19,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAj0lEQVR42mNg2vXpG/Ouz/+Zdn4CYyj7GwOQeArEk4A4GYgTgbgTiJ+CJK4x7/xkD9TZDWQvBdL7gfRVkMQ5IC5h3PXBgXHnByegRDvzzs/nQRJ7gHghUOAkkF4HxNFAfIABymkCYlMgtgDiXiBeB5JoA+L/QHwUiv8DcRsD865PokAzi4HOfAnCYPbOT+IALuVvSqbnW7YAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/jest.png
/* harmony default export */ const jest = ({"src":"/_next/static/media/jest.c2cf9560.png","height":24,"width":21,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAtUlEQVR42mP49+/f////f75/e2v25BvTJ1yf3P36zHGGf3///gOCP79PRzqczwo9Iszw7soFhv8w8Pr0se+vXrw8uv/vz58Mby+eeXXqGFDt481r/v74/ubsifdXLzG8v3T23aVzQLUPls68Ul9wvb3s1dF9DI82rvr16ePnB3dPBVvsY2A4yMDwbNcmhktVOcfNGI4IMJzNjHiyfeP761f+/vrJ8OnerZtTu18eP/Tv9y+4zQBJaoN2vHQD8gAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/js.png
/* harmony default export */ const js = ({"src":"/_next/static/media/js.a568049a.png","height":26,"width":21,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAm0lEQVR42i2MMQ8BQRCFHx0/QnG7pUIUiEKlU+kpnCvUl0iISDQaCjqikCgUu9zcX7yvuE2+2Zn33owseMHQontacA8YSTyaNcb+f1ejDuWEMlEORUjaCFP6TRnd2KI/CmFeRNdH/CHcuJBBWhu+x39FWMIFtqLkbEyMk5gpzOAs1heYbwtJ5/vpNgnsmFcqoxe0SJ0IvRAHklQBy4dTlj472VQAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/linkedin.png
/* harmony default export */ const linkedin = ({"src":"/_next/static/media/linkedin.3b6089c7.png","height":26,"width":26,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6klEQVR42hWMu04CURRF1zkzFyKKyGgh8dFhMfyBqNj5MVpYGn9DSYy1v2BiY6PB2kZjh5WxIIODg4+5k3sZmr2LtbIEgNPbGOv6LJtuVcQDT/+eE+BFSthpNyoPR9tL0c1wwpf1INAIJEkLv68YvVytaNSL1+yGCdiqKO1qYNPcRSuh9EOE3VqohGDODzfZadUJVMzV/ZDrt7SrOC+LRlmParSaCzy/j/kY/9JrNyErvOIZTAtHMs1t8mP5nOSMvnM7yiw4PxDO7mJVeawbjbwHV47K/Emyv+JAAEqpg+cCYQ+BeZXcHQOvMw2JW7cL1CuVAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/microverse.png
/* harmony default export */ const microverse = ({"src":"/_next/static/media/microverse.b625d9a1.png","height":33,"width":34,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAApklEQVR42nVOSwuCQBDe/380etCPKPNQ0cEIAjVahFIqSwJN6SHRSZ2ZdW330q1hmPn4HvAxKWXbto3Q9wcUydR7P5uRUeVXymIaG9WnaBSpBbMPR07uFLw5HLZkDUELUEuzU6Zn5Db6K0xOaHVLBMnuiYj3pLzeDFRos4A4wEcqWBJR6KLZqwMHd2ucDOrQwduFGKHkNhS5iHxU+8oEX4Ig1erPfAHRp62yWHtMFwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/firebase.png
/* harmony default export */ const firebase = ({"src":"/_next/static/media/firebase.1cef896d.png","height":25,"width":22,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAnUlEQVR42i3KPwsBARzH4V9ejNWiFEabV2D2JtjsJmWxycgidpOkc4rFnygxSHEZ5Nydu+/H4pkfA/TY6TIVSACSDNB5zrjMZoDvKbwjTMB+9G1Z2DScqg6N/8Vpv+sW9Is4pnVFsW+QRMNa0DVWORYZuQX8q+nzisZpHMPNs8gyNXmuKYl1m2hZ0sw0TyXHjsKnAQJ9PJ16em4FwA8+uIoJ+GRKRgAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/next.png
/* harmony default export */ const next = ({"src":"/_next/static/media/next.46c1eda9.png","height":26,"width":25,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEUsMzMrMjIrMTEsNDQqMTErMjItMzMsMzMsMzMsMzMrMjIrMjIsMjIrMjIsMjIsMzMsMjIsMjIsMjIrMjIrMjIrMjIsMjIsMjIrMjIsMjIrMjIsMzMrMjIsMzMrMjIrMjIsMzMsMjIsMjIrMjIsMjIrMjIsMjIrMjIsMzMrMzMrMjJR9xzSAAAAKHRSTlMAAAAXKywtLS5tfYeMkZKam52ms7u9vr+/1Nzp6uvr7O3t9fb3+Pn5aCRzSQAAAEhJREFUeNoFQAUSgCAQXAO7A7CwUI/7/wMdeEK/3yiAcCVHtAtoGpZT0oiLs3TO2eLhpqh6uiG5NeXECvHhnOm2BF6kLNeB/wPfVQYbu43d8gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/postgreSQL.png
/* harmony default export */ const postgreSQL = ({"src":"/_next/static/media/postgreSQL.7940c2e0.png","height":22,"width":21,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AMfJy3iMn46erI+cqn6SpYmcrXCGm8TGyABie5MhZJNxkq9GdJoYX45jhqZvkbBMbIkAZH6XKmSRlqm9h6K6OGqSe5eweJq2bIGWAIqXpDdqlHiTrlmCpFB4nGiKqXOVsLq9wQC+wMMmZZB3kquTqbw4a5RMdZuouMWoqqsA8PDvnKStjJWdoKy2Z4SiOm6WmqeyvL7AAP////v6+fT09M3Ozk5zlkBvlNbW1v///wD+/v7////////09PNwhJeRnan39/b///8HiHmOJYEBwwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/rails.png
/* harmony default export */ const rails = ({"src":"/_next/static/media/rails.4d9a9501.png","height":10,"width":30,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAATElEQVR42mP4////26NHbxUWvj98+P/fv/9hgOHjpUsXDAxe7dwJQUBF3x49en/2LMPN0tJrqalvDx++Hh5+Kyfnmqfnk7lz71ZXAwCh8DaPxyo/jwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./app/assets/images/react.png
/* harmony default export */ const react = ({"src":"/_next/static/media/react.a369b7be.png","height":25,"width":26,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqklEQVR42jXN3woBQRTH8VMu7ZvszkiKvRYvoNatJA9A2LQurD/hJfAmkgvFbt7o5DsTU5/m18zvdMQUKmhhiQQ9W2jK3RR3zFudtr1pxZS65iMP72TefCEsNfhNXyhMMXcZGaVACCPUkeOEPXa21Ab3WJgYEGrYkg/sP5I3UeELQzEfvyLDlc8ZkxPyGSv70qoQnG701Ip79NMPnzvC+RdipOgjwQKxiMgXXxiJvxyELZgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/redux.png
/* harmony default export */ const redux = ({"src":"/_next/static/media/redux.2b4067f6.png","height":21,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAp0lEQVR42h2N3QqCQBSE9/17iQi6j8KwSOxXUMIgRaVy1bUQc20zExVqt2Pn5szwzTCIcy6EsIzEUImuRK6ZguVfjuAVj9pQiPjffhm3zQdEB27B82Tdx31nJ4cAINeBqmw1OfIdWhZNwWrsUnXk0/SNdIXkaTUdegBgb9AzX6xZSwHS5iEUz3YWY3bUk9hnYFcTjC52tpEC7OXaLNQXBHv0sL1aRvIDjhKUPQrjlToAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./app/assets/images/ruby.png
/* harmony default export */ const ruby = ({"src":"/_next/static/media/ruby.764be99f.png","height":21,"width":21,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AP79/f////bw79ialttoYduGfqQAALiPjQD////x5OO2SUOwAADCAADbcmWxKh6FAAAA9e/vsE5HpQAAqwMAxnNvtzcwqQAAlicjAMSgnoUAAKAEALhAM9+Nf6Y2LowAAJ86OADbk4uiSEKybGjAPTG/AACgEgaEAACtVlQA2Xxx7pyMxm1mmAAAnh8blSMggAAAwn17AKQAAMkSAKcAAJEAAJMAALEAAJ8AAMSOjADBlZOfAACkKCWgQj2wVlLKeXfYiYbkyMZqzVSmPrzG7wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/cursor.png
/* harmony default export */ const cursor = ({"src":"/_next/static/media/cursor.44ad907f.png","height":20,"width":20,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAk0lEQVR42l2MLQsCURBFrw+LzWBWMCoYTVaLWCyCICYRbFaxKAgiC9v2d+zX/xv2MOyDZS+cN3cOw5MK28JBuU3UCS7IU9oNEsSLeWTO1A1yjfwy3/ATHa6wZB9KlY0pT8THjwo//ENGP8dfTiwJPGDKPocNfREPVpAiLuolHoza7+++1xboATeQPwSxh533qnWSGmVJWT3mFlk8AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/hasnatAbout2.png
/* harmony default export */ const hasnatAbout2 = ({"src":"/_next/static/media/hasnatAbout2.5beb51c3.png","height":727,"width":262,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAIAAACzjdIrAAAAWElEQVR42mOoWjLbNzHaMD6WwTYhviMr2jg8gsE6IELf3tfQyZXB2CeGwT5Kz8CQQUBBm1daVdbAkkFKQVVcWiXR34NBTEOdT9PF1MWHQdTUhFPfk8HKCwAvERE3ozkN4wAAAABJRU5ErkJggg==","blurWidth":3,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/HasnatProfile.jpeg
/* harmony default export */ const HasnatProfile = ({"src":"/_next/static/media/HasnatProfile.e1992d5c.jpeg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAgCP/xAAfEAABAgYDAAAAAAAAAAAAAAABBBIAAgMTFSIRFpH/2gAIAQEAAT8AHYc4eaavJFfrPtbtA+MbH//EABgRAAIDAAAAAAAAAAAAAAAAAAERAAJx/9oACAECAQE/ALBLBP/EABgRAQADAQAAAAAAAAAAAAAAAAEAAhFx/9oACAEDAQE/AKq71n//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/shayan.png
/* harmony default export */ const shayan = ({"src":"/_next/static/media/shayan.d7a14217.png","height":460,"width":460,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AJqjNLaqNeC4RsyxR7yuMb6xKMzJGdXNHAC0rTPZuTm7pUNLUDtKSj6npS/BvSLEuigAvrIx2b40m446hmxkjHRygIc9wcITn502AN2/LdvAG7yxULSYjr2cjYaJY6KeGs6xMQDYvy3Sxg6rtSWCbmaSdWY/X0uvmkLcwjgAy7onvrgpeo8+Jy80dGNNgHpes61r1M9DAI6KPiBFRwAqRDM4OFZIOyk3PQAXQzpPRQBlc0UADjoiPDwDLDUAABkGKzIlPD4AKDVOc1LeAqVLNwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/mercy.jpeg
/* harmony default export */ const mercy = ({"src":"/_next/static/media/mercy.831e884b.jpeg","height":460,"width":460,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAL4i/wD/xAAeEAABAwQDAAAAAAAAAAAAAAABAgMEAAURIgYxgv/aAAgBAQABPwC18fxFaRPll7QBDmSDr0nzX//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPwAdv//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhEh/9oACAEDAQE/AJOnh//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/Abbas.jpeg
/* harmony default export */ const Abbas = ({"src":"/_next/static/media/Abbas.aeb62d5b.jpeg","height":460,"width":460,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAuBkf/8QAHBAAAQUAAwAAAAAAAAAAAAAAAQIDBBESAAUy/9oACAEBAAE/AJEuM52rTgfJwvFhRzdeef/EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/AEv/xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAwEBPwBb/9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/contactWhite.png
/* harmony default export */ const contactWhite = ({"src":"/_next/static/media/contactWhite.232124af.png","height":783,"width":984,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAANUlEQVR42mP49x8K/wHxhX/tDCgC5v8ZEAJ/QCpAAgj5H/+KEQK/gbj3P8M/FmSBxv8M/1gAovJVVn3oyj0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./app/assets/images/contactimg.jpg
/* harmony default export */ const contactimg = ({"src":"/_next/static/media/contactimg.170128aa.jpg","height":3339,"width":5008,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAnBMr/8QAHBAAAQMFAAAAAAAAAAAAAAAAAgMEEQAGExQh/9oACAEBAAE/ACvl2SxttNKR5kmv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECUf/aAAgBAgEBPwCZWH//xAAZEQACAwEAAAAAAAAAAAAAAAABAgADEUL/2gAIAQMBAT8AuZlKYeRP/9k=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./app/assets/images/Gmail.svg
/* harmony default export */ const Gmail = ({"src":"/_next/static/media/Gmail.c52a361e.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./app/assets/images/mobMenu.png
/* harmony default export */ const mobMenu = ({"src":"/_next/static/media/mobMenu.86a4db74.png","height":32,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAOElEQVR42mWNMQoAMAwCD9o/lQwlZMlY8v/X1F1vUlBxbZrhiaHlWBySK5IjxyIoUhSBB1axUTv9e5IJaVeFWDgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/blueLine.svg
/* harmony default export */ const blueLine = ({"src":"/_next/static/media/blueLine.fa3e540d.svg","height":27,"width":232,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./app/assets/images/fire.png
/* harmony default export */ const fire = ({"src":"/_next/static/media/fire.59ef9407.png","height":27,"width":22,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAZlBMVEX+Dw/+Dg7+DQ3+Cgr+Dg7+DQ3+DQ3+Dg7+DQ3+Dg7+DQ3+Dg7+DQ3+DQ3+DQ3+DQ3+DQ3+DQ3+DQ3+DQ3+DQ3+DQ3+DQ3+Dg7+Dg7+Dg7+Dg7+DQ3+DQ3+DQ3+Dg7+DQ3+Dg7+DQ39tn8UAAAAIHRSTlMAAAAAARdWWF5pb3BydIqOorW509TZ3+ju8fv7/P3+/hh3TFwAAAA9SURBVHjaBUCFEcAgDHxSF6rUKPLZf0kOtZFlRwXpGsfVoOX9J+1xkgx0yClSr4hXPTdLTNRjVgsZHv+NKH3cBFHPuc+RAAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/express.png
/* harmony default export */ const express = ({"src":"/_next/static/media/express.ad507885.png","height":16,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAKUlEQVR42mPABHIMRgx6DNoMBkCsxyDJwCDMIMOgwiDJIAHE0gwCGBoASpECFJ8qkt8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./app/assets/images/circuit.png
/* harmony default export */ const circuit = ({"src":"/_next/static/media/circuit.dd32ff92.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAo0lEQVR42i3MLTJFAQBA4XOuG5Q3iiAYK7AAC9CtQRLQZUWgC8YSNFGVjEWYEdHc8ffuMWO0L30+nG+XXltTeKzsV2fABvgypBgzsgZR/aiPCtr6YJGN5a0IcCgelQfFNCAIC+weOAV35uZdaAKGsQB80y6yJ/IEuBI+0tVR/STuyiV2o+2Rz8mmsRyrAVggXwTgVvZvVv6G6tL4TgHeCQTS119eaFnNGKrIRgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/assets/images/mongoDB.png
/* harmony default export */ const mongoDB = ({"src":"/_next/static/media/mongoDB.5aab809e.png","height":20,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAVUlEQVR42mNIX+qinzDP1oIBF8hY4bIwdrbVYRDbP9ZbSktHX7Smukbs4L59egf27pVjKFgZ6JUx3yeBncFRwifIR8vG1sEiKzNL68jBgyAF8gyEAAB73RrUZkaI0QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./app/assets/images/arrow-left.svg
/* harmony default export */ const arrow_left = ({"src":"/_next/static/media/arrow-left.b6e80938.svg","height":512,"width":448,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./app/assets/images/arrow-right.svg
/* harmony default export */ const arrow_right = ({"src":"/_next/static/media/arrow-right.50312f09.svg","height":512,"width":448,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./app/assets/projectsImg/img1.png
/* harmony default export */ const img1 = ({"src":"/_next/static/media/img1.2fd02198.png","height":962,"width":1905,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaUlEQVR42mMQFZMUlVHjFJRUU1OzNDd1crA2NdYzMDBg0FJVsDE3AiJXe3MnWzNdXXVnR9v4mHAGaUlRF3tzLzuLmHD/nPQEB2szoI7osAAGU0M9e1tLexuLIF/X7JS4iGBfJ3tLO2tTAMYdFfOWh08lAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./app/assets/projectsImg/img2.png
/* harmony default export */ const img2 = ({"src":"/_next/static/media/img2.432947b7.png","height":963,"width":1903,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWElEQVR42h3Kyw2AIBBFUSq0DtvQpeWRGFyhAXFmmE8oQeDk7d51MJVvKKUQgqoCoJOc7YmmamattTvG03sRcT17U2LmESIe274uyxWCE9W5od9IRLWyyA+WpVQMlKMwigAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./app/assets/projectsImg/leaderboard.png
/* harmony default export */ const leaderboard = ({"src":"/_next/static/media/leaderboard.629fea6e.png","height":918,"width":1893,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42mNYwqq1lF17PgPDSnPXdQGRy/nNljBoLOHUYpjAoDSBQfHGmTPrahqqGRhKvE365JUmMqgy1DBIVTFI/vz1c/PcuVkMDJXOmtWKCjUMCgwpDOJJDHz7d+5oby6IYmDIYFBOYZBMYZMEAEnhHugU7WZOAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./app/assets/projectsImg/weatherApp.png
/* harmony default export */ const weatherApp = ({"src":"/_next/static/media/weatherApp.235ac795.png","height":946,"width":1917,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWElEQVR42hXLyQ2AMAwEQHu9mKQAmqMq+kTiFcSROEHMf/Ret1iSZcd+tecdvQsBkkfuN6o/oVdB4pBhb6OALRnPWvcis1UIferlVA3GfzUcBmS6gWFUtQ++iibXB2pC8wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./app/assets/projectsImg/budgetApp.png
/* harmony default export */ const budgetApp = ({"src":"/_next/static/media/budgetApp.a19b97d7.png","height":917,"width":1912,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAUklEQVR42k2LsQ2AMBAD7deTBcj+c1CyAz0NHRIUVJGixDzQcMXZkmVO85Lz6O5mkNC7SNZaeR57SolmkoggFHNzaCilQQ1/SN+uNfLtj7+fgBsQ5yAFIYhRNAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./app/utilities/imports.js









































;// CONCATENATED MODULE: ./app/sections/projectSection.jsx



const ProjectsSection = ()=>{
    const [scrollPosition, setScrollPosition] = (0,react_.useState)(0);
    const scrollIncrement = 300;
    const projectContainerRef = (0,react_.useRef)(null);
    const scrollLeft = ()=>{
        if (projectContainerRef.current) {
            const container = projectContainerRef.current;
            const newPosition = scrollPosition - scrollIncrement;
            const minScrollPosition = 0;
            setScrollPosition(Math.max(newPosition, minScrollPosition));
            container.scrollLeft = Math.max(newPosition, minScrollPosition);
        }
    };
    const scrollRight = ()=>{
        if (projectContainerRef.current) {
            const container = projectContainerRef.current;
            const newPosition = scrollPosition + scrollIncrement;
            const maxScrollPosition = container.scrollWidth - container.clientWidth;
            setScrollPosition(Math.min(newPosition, maxScrollPosition));
            container.scrollLeft = Math.min(newPosition, maxScrollPosition);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "projects",
        id: "projects",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "projects-top",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: scrollLeft,
                        className: "leftArrow",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: arrow_left.src,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "headingsProjects",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Latest Projects"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "witness the beauty of through our lens, ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " as we showcase stunning landscapes that evoke ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " wonder and appreciation for the environment."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: scrollRight,
                        className: "RightArrow",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: arrow_right.src,
                            alt: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "project-container",
                ref: projectContainerRef,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "projects-box porject-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "ProjectImgs",
                                src: img2.src,
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "projectDescription",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Warrior Cars"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Castop project is my first near real-work project experience. I proceeded to style the content focusing on a mobile-first approach."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "projectBtns",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://hasnatali1947.github.io/Warrior-cars/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn seelive",
                                                    children: "SEE LIVE"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "https://github.com/hasnatali1947/Warrior-cars#-live-demo-",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "btn seecode",
                                                        children: "SEE CODE"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "projects-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "ProjectImgs",
                                src: img1.src,
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "projectDescription",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "TV-Show"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "This website displays a list of TV shows with likes and offers detailed pages for each show, complete with comment sections."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "projectBtns",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://ubdanam.github.io/TV-Show/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn seelive",
                                                    children: "SEE LIVE"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://github.com/hasnatali1947/TV-Show",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn seecode",
                                                    children: "SEE CODE"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "projects-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "ProjectImgs",
                                src: weatherApp.src,
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "projectDescription",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Weather-App"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "This is a weather app project where users can check the weather for cities all over the world."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "projectBtns",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://weather-app-57lg.onrender.com/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn seelive",
                                                    children: "SEE LIVE"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://github.com/hasnatali1947/Weather-App",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn seecode",
                                                    children: "SEE CODE"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "projects-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "ProjectImgs",
                                src: leaderboard.src,
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "projectDescription",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Leaderboard"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "The leader-board website shows player scores and lets you submit your own, using an external Leader-board API service to store the data."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "projectBtns",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://hasnatali1947.github.io/Leaderboard/dist",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn seelive",
                                                    children: "SEE LIVE"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://github.com/hasnatali1947/Leaderboard",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn seecode",
                                                    children: "SEE CODE"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "projects-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "ProjectImgs",
                                src: budgetApp.src,
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "projectDescription",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Budget Apps"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "A mobile budget management app that tracks your spending by category through a list of transactions"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "projectBtns",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "https://rails-capston-web-service.onrender.com",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "btn seelive",
                                                        children: "SEE LIVE"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://github.com/hasnatali1947/rails_capston#live-demo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn seecode",
                                                    children: "SEE CODE"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const projectSection = (ProjectsSection);

;// CONCATENATED MODULE: ./app/sections/hero.jsx




const LandingPage = ()=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react_.useState)(false);
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = ()=>{
        setIsMobileMenuOpen(false);
    };
    (0,react_.useEffect)(()=>{
        if (false) {}
    }, []);
    const scrollToSection = (sectionId)=>{
        const section = document.querySelector(`.${sectionId}`);
        setIsMobileMenuOpen(false);
        if (section) {
            setTimeout(()=>{
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }, 50);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "headerLeft",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "a_tag",
                                        href: "https://github.com/hasnatali1947",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: github.src,
                                            alt: "GitHub Logo"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "a_tag",
                                        href: "https://www.linkedin.com/in/hasnattali/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: linkedin.src,
                                            alt: "linkedin Logo"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "headerRight",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: toggleMobileMenu,
                                    className: "mobMenu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: mobMenu.src,
                                        alt: "MobMenu"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>scrollToSection("projects"),
                                    className: "headerProject headerRightDisktop",
                                    children: "PROJECTS"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>scrollToSection("aboutSection"),
                                    className: "headerAbout headerRightDisktop",
                                    children: "ABOUT"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>scrollToSection("contactSection"),
                                    className: "headerContact headerRightDisktop",
                                    children: "CONTACT"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "landing_page top",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "about-blue-background-hero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `mobileMenu ${isMobileMenuOpen ? "open" : ""}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: closeMobileMenu,
                                    className: "Xicon",
                                    children: "+"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>scrollToSection("projects"),
                                    className: `${isMobileMenuOpen ? "open" : ""}`,
                                    children: "PROJECT"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>scrollToSection("aboutSection"),
                                    children: "ABOUT"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>scrollToSection("contactSection"),
                                    children: "CONTACT"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "hasnatImage",
                        src: HasnatProfile.src,
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        children: [
                            "Hi, I'm Hasnat",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                role: "img",
                                "aria-label": "wave",
                                children: "\uD83D\uDD90"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "blueLine",
                        src: blueLine.src,
                        alt: "blueLine"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        children: [
                            "Building digital ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " products, brands, and ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " experience."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "a website ",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: "Full-Stack"
                            }),
                            " developer ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " Specialize in React and Ruby-On-Rails",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " I bring ideas to life"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>scrollToSection("contactSection"),
                        className: "connectMe",
                        children: "CONNECT WITH ME"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>scrollToSection("contactSection"),
                        className: "TopButton",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: Gmail.src,
                            alt: "Gmail Logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://react.dev/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "skillsOnLanding microverseSkill",
                            src: react.src,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://nextjs.org/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "skillsOnLanding freeCodeCampSkill",
                            src: next.src,
                            alt: ""
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const hero = (LandingPage);

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs + 44 modules
var use_scroll = __webpack_require__(6151);
;// CONCATENATED MODULE: ./app/sections/aboutSection.jsx




const AboutSection = ()=>{
    const [SkillScroll, setSkillScroll] = (0,react_.useState)(0);
    const { scrollYProgress } = (0,use_scroll/* useScroll */.v)();
    (0,react_.useEffect)(()=>{
        scrollYProgress.onChange((v)=>{
            setSkillScroll(v * 1600);
        });
    }, [
        scrollYProgress
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "aboutSection",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "aboutDiv",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        children: [
                            "SOFTWARE ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "DEVELOPER"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "Aboutcontainer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "AboutDescription",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        "A highly skilled full-stack developer with expertise in ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "spanlanguages",
                                            children: "Html Css, React, Next.js,"
                                        }),
                                        " and ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "spanlanguages",
                                            children: "Ruby on Rails."
                                        }),
                                        " I have developed real-world projects such as working with supply chain management systems or car maintenance bidding systems etc. With over 3 years of working in this field, I have honed my abilities to thrive in a fast-paced environment."
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "MypicDiv",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "Mypic",
                                    src: hasnatAbout2.src,
                                    alt: "Mypic"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "about-blue-background-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "about-blue-background-2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.microverse.org/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "skillsOnLanding microverseSkill2",
                    src: microverse.src,
                    alt: "microverseIcon"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "MY SKILL SET"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "SkillContainer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "skillMainDiv",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "topSkill",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span CSS",
                                            children: "CSS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "cssicon",
                                            src: css.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Figma"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: figma.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "FreeCodeCamp"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: freeCodeCamp.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Github"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: github.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "hackerRank"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: hackerRank.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "HTML"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: html.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Jest"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: jest.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "JS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: js.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Fast Learner"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: fire.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Node.js/Express"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: express.src,
                                            alt: "css"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "bottomSkill",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Firebase"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: firebase.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Next.js"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: next.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "PostgreSQL"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: postgreSQL.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Rails"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: rails.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "React"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: react.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Redux"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: redux.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Effective Communicator"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: circuit.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "MongoDB"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: mongoDB.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Ruby"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: ruby.src,
                                            alt: "css"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "SkillContainerMoblie",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "skillMainDivMoblie",
                    style: {
                        transform: `translateX(calc(-${SkillScroll}px + 800px))`
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "topSkill",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span CSS",
                                            children: "CSS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "cssicon",
                                            src: css.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Figma"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: figma.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "FreeCodeCamp"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: freeCodeCamp.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Github"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: github.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "hackerRank"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: hackerRank.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "HTML"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: html.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Jest"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: jest.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "JS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: js.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Fast Learner"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: fire.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Node.js / Express"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: express.src,
                                            alt: "css"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "bottomSkill",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Firebase"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: firebase.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Next.js"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: next.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "PostgreSQL"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: postgreSQL.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Rails"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: rails.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "React"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: react.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Redux"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: redux.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Effective Communicator"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: circuit.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "MongoDB"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: mongoDB.src,
                                            alt: "css"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cssDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "span Figma",
                                            children: "Ruby"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: ruby.src,
                                            alt: "css"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const aboutSection = (AboutSection);

;// CONCATENATED MODULE: ./app/sections/recommendationSection.jsx




const Recommendation = ()=>{
    const [scrollYPosition, setScrollYPosition] = (0,react_.useState)();
    const { scrollYProgress } = (0,use_scroll/* useScroll */.v)();
    (0,react_.useEffect)(()=>{
        scrollYProgress.onChange((v)=>{
            setScrollYPosition(v * 1600);
        });
    }, [
        scrollYProgress
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "recommendation_section",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "recommendation_heading",
                children: [
                    "DONT TAKE MY WORDS ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "only",
                        children: "ONLY"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "cursorImg",
                        src: cursor.src,
                        alt: ""
                    }),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "recommendationMainDiv",
                style: {
                    transform: `translateX(calc(-${scrollYPosition}px + 1250px ))`
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "recommendationDiv",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "shayanRecommendation",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Hasnat is an exceptional software developer known for his excellent collaborative skills. One of his standout qualities is his exceptional problem-solving approach, which sets him apart in the field."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "shayanimgdiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "shayanImg",
                                            src: shayan.src,
                                            alt: "ShayanImg"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "Shayan Ali Bakhsh"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Full Stack Developer"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "recommendationDiv",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "shayanRecommendation",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "Recommendation-P",
                                    children: "Hasnat is an outstanding software developer with a knack for collaboration. Among his skillset, I can guarantee that his problem-solving approach is top of the game."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "shayanimgdiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "shayanImg",
                                            src: mercy.src,
                                            alt: "ShayanImg"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "MERCY MUGAMBI"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Coding Partner"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "recommendationDiv",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "shayanRecommendation",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "I've had the privilege of working closely with Hasnat for 1 year, and I'm consistently impressed by his web development skills. Hasnat is a highly talented and innovative developer who consistently delivers exceptional results."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "shayanimgdiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "shayanImg",
                                            src: Abbas.src,
                                            alt: "ShayanImg"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "Abbas Sarwar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Full Stack Developer"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const recommendationSection = (Recommendation);

// EXTERNAL MODULE: ./node_modules/@formspree/react/dist/index.js
var dist = __webpack_require__(3475);
;// CONCATENATED MODULE: ./app/sections/contactSection.jsx




const Contact = ()=>{
    const [state, handleSubmit] = (0,dist.useForm)("xknlznek");
    const [showSuccessMessage, setShowSuccessMessage] = (0,react_.useState)(false);
    const [name, setName] = (0,react_.useState)("");
    const [email, setEmail] = (0,react_.useState)("");
    const [message, setMessage] = (0,react_.useState)("");
    (0,react_.useEffect)(()=>{
        setName("");
        setEmail("");
        setMessage("");
        if (state.succeeded) {
            setShowSuccessMessage(true);
            setTimeout(()=>{
                setShowSuccessMessage(false);
            }, 5000);
        }
    }, [
        state.succeeded
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "contactSection",
                id: "contactSection",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "CONTACT"
                            }),
                            showSuccessMessage ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Thank you for your message!"
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "I WOULD BE GLAD TO HEAR FROM YOU"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "formDiv",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            action: "https://formspree.io/f/xknlznek",
                            method: "post",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "inputsimgDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "contactWhiteImg",
                                            src: contactWhite.src,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "contactimg",
                                            src: contactimg.src,
                                            alt: ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "inputsDiv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "input",
                                            type: "text",
                                            name: "name",
                                            required: true,
                                            placeholder: "NAME",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            required: true,
                                            placeholder: "EMAIL",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(dist.ValidationError, {
                                            prefix: "Email",
                                            field: "email",
                                            errors: state.errors
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            placeholder: "MESSAGE",
                                            required: true,
                                            name: "message",
                                            onChange: (e)=>setMessage(e.target.value),
                                            value: message
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "box",
                                            type: "submit",
                                            disabled: state.submitting,
                                            children: "SUBMIT"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                            className: "footerH4",
                            children: [
                                "HAS",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "N",
                                    children: "N"
                                }),
                                "AT"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "a_tag",
                                    href: "https://docs.google.com/document/d/1IVhWvaHmA0EmR59zDbl8iizvOmerYMpAO1qFseMy0-o/edit?usp=sharing",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "RESUME"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "a_tag",
                                    href: "https://www.linkedin.com/in/hasnattali/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "LINKEDIN"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "a_tag",
                                    href: "https://github.com/hasnatali1947",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "GITHUB"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const contactSection = (Contact);

;// CONCATENATED MODULE: ./app/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Page = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: "Pages",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(hero, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(projectSection, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(aboutSection, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(recommendationSection, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(contactSection, {})
            ]
        })
    });
};
/* harmony default export */ const page = (Page);


/***/ }),

/***/ 8481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);


const metadata = {
    title: "Next.js",
    description: "Generated by Next.js"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 7395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\ASUS\Desktop\New_Portfolio\app\page.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2348:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,548], () => (__webpack_exec__(1087)));
module.exports = __webpack_exports__;

})();