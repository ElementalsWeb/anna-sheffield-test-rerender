var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
export var listRingBands = [
    {
        id: "4472382750778",
        name: "Grand Tiara Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "GrandTiaraBand",
        imgUrl: "/img/rings/bands/Grand Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4472402575418",
        name: "Tiara Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "TiaraBand2",
        imgUrl: "/img/rings/bands/Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4472517918778",
        name: "Tiara Curve Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "TiaraCurveBand (white diamonds)",
        imgUrl: "/img/rings/bands/Tiara Curve Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4478198939706",
        name: "Marquise Tiara Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "Marquise_Tiara_Band",
        imgUrl: "/img/rings/bands/Masquise Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4475080441914",
        name: "Butterfly Marquise Tiara Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "MarquiseButterflyTiaraBand1",
        imgUrl: "/img/rings/bands/Marquise Butterfly Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4478505320506",
        name: "Triple Baguette Tiara Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "TripleBaguetteTiaraBand",
        imgUrl: "/img/rings/bands/Triple Baguette Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4478245208122",
        name: "Tiny Crescent Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "Tiny_Crescent_Band",
        imgUrl: "/img/rings/bands/Tiny Crescent Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4478219649082",
        name: "Crescent Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "Crescent Band",
        imgUrl: "/img/rings/bands/Crescent Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4481504346170",
        name: "Chevron Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "ChevronBand",
        imgUrl: "/img/rings/bands/Chevron Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4478414585914",
        name: "Celestine Tiara Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "CelestineTiaraBand1",
        imgUrl: "/img/rings/bands/Celestine Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4403022299194",
        name: "Meridian Scallop Band",
        subName: "test_sub",
        valueConfig: "MeridianScallopBand2",
        imgUrl: "/img/rings/bands/Meridian Scallop Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4403026919482",
        name: "Meridian Scallop Pave Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "MeridianScallopPaveBand3",
        imgUrl: "/img/rings/bands/Meridian Scallop Pave Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4487216857146",
        name: "Chrysalis Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "ChrysalisBand",
        imgUrl: "/img/rings/bands/Chrysalis Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4486755123258",
        name: "Orbit Band",
        subName: "14C Gold & White Diamond",
        valueConfig: "OrbitBand",
        imgUrl: "/img/rings/bands/Orbit Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "9306353104",
        name: "Diamond Dusted Chrysalis Band",
        subName: "test_sub",
        valueConfig: "Diamond_Dusted_Chrysalis_Band",
        imgUrl: "/img/rings/bands/Diamond Dusted Chrysalis Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4475119894586",
        name: "Grand Tiara Pave Band",
        subName: "test_sub",
        valueConfig: "GrandTiaraPaveBand",
        imgUrl: "/img/rings/bands/Grand Tiara Pave Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4546438332474",
        name: "Cosmic Tiara Curve Band",
        subName: "14k Gold & White Diamond Pavé",
        valueConfig: "Cosmic_Tiara_Curve",
        imgUrl: "/img/rings/bands/Cosmic_Tiara_Curve.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4546449637434",
        name: "Cosmic Luna Band",
        subName: "14k Gold & White Diamond Pavé",
        valueConfig: "Cosmic_Luna_Tiara",
        imgUrl: "/img/rings/bands/Cosmic_Luna_Tiara.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
];
export var listEngagementRing = [
    {
        id: "5519613253",
        name: "Hazeline Solitaire Ring .50ct round",
        subName: "14C Gold & White Diamond",
        valueConfig: "HazelineSolitaireRing0.5ct",
        imgUrl: "/img/rings/engagement/Hazeline Solitaire Ring 0.5ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "2230507525",
        name: "Hazeline Solitaire Ring 1ct round",
        subName: "14C Gold & White Diamond",
        valueConfig: "HazelineSolitaireRing1ct",
        imgUrl: "/img/rings/engagement/Hazeline Solitaire Ring 1ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6583089922106",
        name: "Hazeline Solitaire Ring 1.50ct round",
        subName: "14C Gold & White Diamond",
        valueConfig: "HazelineSolitaireRing1.5ct",
        imgUrl: "/img/rings/engagement/Hazeline Solitaire Ring 1.5ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "395067196",
        name: "Hazeline Three Stone Ring 1ct round",
        subName: "14C Gold & White Diamond",
        valueConfig: "HazelineThreeStoneRing",
        imgUrl: "/img/rings/engagement/Hazeline_Three_Stone_Ring_1ct_Round.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "2514533974074",
        name: "Bea Solitaire (East-West) 1.5ct oval",
        subName: "14C Gold & White Diamond",
        valueConfig: "Bea Solitaire (East-West) 1.5ct oval",
        imgUrl: "/img/rings/engagement/Bea Solitaire (East-West) 1.5ct Oval.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "4562533580858",
        name: "Bea Solitaire (North-South) 1ct Oval",
        subName: "14C Gold & White Diamond",
        valueConfig: "Bea_Solitaire_North_South_1CT",
        imgUrl: "/img/rings/engagement/Bea Solitaire North South 1CT.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6583416225850",
        name: "Bea Three Stone Ring 8x6 EC",
        subName: "14C Gold & White Diamond",
        valueConfig: "BeaThreeStoneRing8x6EC",
        imgUrl: "/img/rings/engagement/Bea Three Stone Ring 8x6.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "434827852",
        name: "Bea Three Stone Ring 7x5 EC",
        subName: "14C Gold & White Diamond",
        valueConfig: "BeaThreeStoneRing7x5S",
        imgUrl: "/img/rings/engagement/Bea Three Stone Ring 7x5.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6635570364474",
        name: "Marquise Bea Ring 1ct",
        subName: "14C Gold & White Diamond",
        valueConfig: "MarquiseBeaRing1ct",
        imgUrl: "/img/rings/engagement/Marquise Bea Ring 1ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6583093657658",
        name: "Eleonore Ring .75ct Round",
        subName: "14C Gold & White Diamond",
        valueConfig: "EleonoreRing0.75ct",
        imgUrl: "/img/rings/engagement/Eleonore Ring 0.75ct Round.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6620972679226",
        name: "Eleonore Ring 1ct Round",
        subName: "14C Gold & White Diamond",
        valueConfig: "EleonoreRing1ct",
        imgUrl: "/img/rings/engagement/Eleonore Ring 1ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6620972548154",
        name: "Eleonore Ring 1.25ct Round",
        subName: "14C Gold & White Diamond",
        valueConfig: "EleonoreRing1.25ct",
        imgUrl: "/img/rings/engagement/Eleonore Ring 1.25ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
];
function getPriceRings(client) {
    return __awaiter(this, void 0, void 0, function () {
        var productsPrice, listsRingRing, listsRingEngagement, getPrice, _a, _b;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    productsPrice = {};
                    listsRingRing = [];
                    listsRingEngagement = [];
                    listRingBands.forEach(function (rings) {
                        listsRingRing.push(Buffer.from("gid://shopify/Product/".concat(rings["id"])).toString("base64"));
                    });
                    listEngagementRing.forEach(function (rings) {
                        listsRingEngagement.push(Buffer.from("gid://shopify/Product/".concat(rings["id"])).toString("base64"));
                    });
                    getPrice = function (arrayRingId) { return __awaiter(_this, void 0, void 0, function () {
                        var productsPrice;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    productsPrice = {};
                                    return [4 /*yield*/, client.product.fetchMultiple(arrayRingId).then(function (products) {
                                            products.map(function (product) {
                                                if (product !== null) {
                                                    var id = product.id;
                                                    var variants = product.variants;
                                                    var idProduct = Buffer.from(id, "base64")
                                                        .toString("binary")
                                                        .replace("gid://shopify/Product/", "");
                                                    var prices_1 = {};
                                                    variants.map(function (item) {
                                                        var title = item.title;
                                                        var priceV2 = item.priceV2.amount;
                                                        prices_1[title] = {
                                                            'id': item.id,
                                                            'price': priceV2,
                                                        };
                                                    });
                                                    productsPrice[idProduct] = prices_1;
                                                }
                                            });
                                            return productsPrice;
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, productsPrice];
                            }
                        });
                    }); };
                    _a = [__assign({}, productsPrice)];
                    return [4 /*yield*/, getPrice(listsRingRing)];
                case 1:
                    productsPrice = __assign.apply(void 0, _a.concat([(_c.sent())]));
                    _b = [__assign({}, productsPrice)];
                    return [4 /*yield*/, getPrice(listsRingEngagement)];
                case 2:
                    productsPrice = __assign.apply(void 0, _b.concat([(_c.sent())]));
                    return [2 /*return*/, productsPrice];
            }
        });
    });
}
export default getPriceRings;
