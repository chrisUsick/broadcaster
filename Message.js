var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Message = (function () {
    function Message() {
    }
    return Message;
})();
exports.Message = Message;

var BroadcastID = (function (_super) {
    __extends(BroadcastID, _super);
    function BroadcastID() {
        _super.apply(this, arguments);
    }
    return BroadcastID;
})(Message);
exports.BroadcastID = BroadcastID;

var Response = (function (_super) {
    __extends(Response, _super);
    function Response() {
        _super.apply(this, arguments);
    }
    return Response;
})(Message);
exports.Response = Response;

var GetBroadcastList = (function (_super) {
    __extends(GetBroadcastList, _super);
    function GetBroadcastList() {
        _super.apply(this, arguments);
    }
    return GetBroadcastList;
})(Message);
exports.GetBroadcastList = GetBroadcastList;

var BroadcastList = (function (_super) {
    __extends(BroadcastList, _super);
    function BroadcastList() {
        _super.apply(this, arguments);
    }
    return BroadcastList;
})(Message);
exports.BroadcastList = BroadcastList;
//# sourceMappingURL=Message.js.map
