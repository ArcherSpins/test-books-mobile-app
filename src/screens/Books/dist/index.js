"use strict";
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
exports.__esModule = true;
exports.Books = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var api_1 = require("../../api");
exports.Books = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState([]), books = _b[0], setBooks = _b[1];
    var _c = react_1.useState(false), booksLoading = _c[0], setBooksLoading = _c[1];
    var fetchBooksRequest = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setBooksLoading(true);
                    return [4 /*yield*/, api_1.BooksApi.getBookList()];
                case 1:
                    data = _a.sent();
                    setBooks(data);
                    return [3 /*break*/, 4];
                case 2:
                    err_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    setBooksLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, []);
    react_1.useEffect(function () {
        fetchBooksRequest();
    }, [fetchBooksRequest]);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.page }, booksLoading ? (react_1["default"].createElement(react_native_1.View, { style: styles.loadingContainer },
        react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#740265" }))) : (react_1["default"].createElement(react_native_1.ScrollView, null, books.map(function (book) { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
            return navigation.navigate('BookDetails', { id: book.isbn });
        }, activeOpacity: 0.8, style: styles.bookCard, key: book.isbn },
        react_1["default"].createElement(react_native_1.View, { style: styles.bookCardContent },
            react_1["default"].createElement(react_native_1.Image, { defaultSource: require('../../assets/defaultAvatar.png'), style: styles.avatar, source: {
                    uri: book.thumbnailUrl
                } }),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: styles.title }, book.title),
                react_1["default"].createElement(react_native_1.View, { style: styles.bookCardContentBody }, book.authors.map(function (author, idx) { return (react_1["default"].createElement(react_native_1.Text, { key: author },
                    author,
                    idx + 1 === book.authors.length ? '' : ', ')); })),
                react_1["default"].createElement(react_native_1.Text, { style: styles.status }, book.status))))); })))));
};
var styles = react_native_1.StyleSheet.create({
    title: {
        color: '#740265',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    status: {
        color: '#039d9a',
        marginTop: 10
    },
    avatar: {
        width: 100,
        height: 100,
        marginRight: 10
    },
    bookCardContent: {
        flexDirection: 'row',
        padding: 10
    },
    bookCardContentBody: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingRight: 10
    },
    bookCard: {
        marginVertical: 10,
        backgroundColor: 'white'
    },
    page: {
        flex: 1,
        paddingVertical: 10,
        paddingBottom: 20
    }
});
