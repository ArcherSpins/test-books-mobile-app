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
exports.Book = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var api_1 = require("../../api");
var moment_1 = require("moment");
exports.Book = function (_a) {
    var _b;
    var route = _a.route;
    var _c = react_1.useState(null), book = _c[0], setBook = _c[1];
    var _d = react_1.useState(false), bookLoading = _d[0], setBookLoading = _d[1];
    var _e = react_1.useState(false), isOpenLongDesc = _e[0], setOpenLongDesc = _e[1];
    var fetchBookRequest = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setBookLoading(true);
                    return [4 /*yield*/, api_1.BooksApi.getBookById(route.params.id)];
                case 1:
                    data = _a.sent();
                    setBook(data);
                    return [3 /*break*/, 4];
                case 2:
                    err_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    setBookLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [route.params.id]);
    react_1.useEffect(function () {
        fetchBookRequest();
    }, [fetchBookRequest]);
    return (react_1["default"].createElement(react_native_1.View, { style: styles.page }, bookLoading ? (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.ActivityIndicator, { size: "large", color: "#740265" }))) : book ? (react_1["default"].createElement(react_native_1.ScrollView, null,
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.View, { style: styles.field },
                react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Title: "),
                react_1["default"].createElement(react_native_1.Text, { style: styles.value }, book.title)),
            react_1["default"].createElement(react_native_1.View, { style: styles.field },
                react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Authors: "),
                react_1["default"].createElement(react_native_1.View, { style: styles.list }, book.authors.map(function (item, idx) { return (react_1["default"].createElement(react_native_1.Text, { key: item, style: styles.value },
                    item,
                    idx + 1 === book.authors.length ? '' : ', ')); }))),
            react_1["default"].createElement(react_native_1.View, { style: styles.field },
                react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Page Count: "),
                react_1["default"].createElement(react_native_1.Text, { style: styles.value }, book.pageCount)),
            react_1["default"].createElement(react_native_1.View, { style: styles.field },
                react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "ISBN: "),
                react_1["default"].createElement(react_native_1.Text, { style: styles.value }, book.isbn)),
            Boolean(book.publishedDate) && (react_1["default"].createElement(react_native_1.View, { style: styles.field },
                react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Published Date: "),
                react_1["default"].createElement(react_native_1.Text, { style: styles.value }, moment_1["default"]((_b = book.publishedDate) === null || _b === void 0 ? void 0 : _b.$date).format('YYYY/MM/DD')))),
            react_1["default"].createElement(react_native_1.View, { style: styles.field },
                react_1["default"].createElement(react_native_1.Text, { style: styles.label }, "Categories: "),
                react_1["default"].createElement(react_native_1.View, { style: styles.list }, book.categories.map(function (item, idx) { return (react_1["default"].createElement(react_native_1.Text, { key: item, style: styles.value },
                    item,
                    idx + 1 === book.categories.length ? '' : ', ')); }))),
            book.shortDescription || book.longDescription ? (react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: [styles.label, styles.description] },
                    "Description:",
                    ' '),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.value }, isOpenLongDesc
                        ? book.longDescription
                        : book.shortDescription || book.longDescription),
                    Boolean(book.longDescription && book.shortDescription) &&
                        !isOpenLongDesc && (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setOpenLongDesc(true); }, style: styles.readMoreButton },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.readMoreLabel }, "Read more")))))) : null))) : (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.Text, { style: styles.noDataText }, "No Data")))));
};
var styles = react_native_1.StyleSheet.create({
    noDataText: {
        color: '#f815da',
        fontSize: 20
    },
    page: {
        padding: 10,
        paddingBottom: 30,
        flex: 1
    },
    readMoreButton: {
        marginTop: 10
    },
    readMoreLabel: {
        color: '#f815da'
    },
    description: {
        marginVertical: 5
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    label: {
        color: '#740265',
        fontWeight: 'bold'
    },
    value: {
        color: '#1e111d'
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});
