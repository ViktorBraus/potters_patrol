"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddGame = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var FetchGame_1 = require("./FetchGame");
var AddGame = /** @class */ (function (_super) {
    __extends(AddGame, _super);
    function AddGame(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", loading: true, GameData: new FetchGame_1.GameData, path: "data:image/png;base64," };
        var gameid = _this.props.match.params["gameid"];
        // This will set state for Edit employee
        if (gameid > 0) {
            fetch('/api/Game/Details/' + gameid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, GameData: data });
            });
        }
        // This will set state for Add employee
        else {
            _this.state = { title: "Create", loading: false, GameData: new FetchGame_1.GameData, path: "data:image/png;base64," };
        }
        // This binding is necessary to make "this" work in the callback
        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        return _this;
    }
    AddGame.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCreateForm();
        return React.createElement("div", null,
            React.createElement("h1", null, this.state.title),
            React.createElement("h3", null,
                "Game: ",
                this.state.GameData.game_Name),
            React.createElement(react_router_dom_1.NavLink, { to: "/fetchgame" }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u0434\u043E \u0421\u043F\u0438\u0441\u043A\u0443 \u0456\u0433\u043E\u0440"),
            React.createElement("hr", null),
            contents);
    };
    // This will handle the submit form event.
    AddGame.prototype.handleSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        // PUT request for Edit employee.
        if (this.state.GameData.gameId) {
            fetch('/api/Game/Edit', {
                method: 'PUT',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/fetchgame");
            });
        }
        // POST request for Add employee.
        else {
            fetch('/api/Game/Create', {
                method: 'POST',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/fetchgame");
            });
        }
    };
    // This will handle Cancel button click event.
    AddGame.prototype.handleCancel = function (e) {
        e.preventDefault();
        this.props.history.push("/fetchgame");
    };
    // Returns the HTML Form to the render() method.
    AddGame.prototype.renderCreateForm = function () {
        return (React.createElement("form", { style: { width: "500px" }, className: 'formchange form-wrapper', onSubmit: this.handleSave },
            React.createElement("div", null,
                React.createElement("input", { type: "hidden", name: "GameId", value: this.state.GameData.gameId })),
            React.createElement("div", null,
                React.createElement("label", { className: "fl", htmlFor: "Name" }, "Game Name"),
                React.createElement("div", null,
                    React.createElement("input", { style: { width: "400px" }, className: "kk", type: "text", name: "Game_Name", defaultValue: this.state.GameData.game_Name, required: true }))),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "Gender" }, "Game Description"),
                React.createElement("div", null,
                    React.createElement("textarea", { style: { width: "400px" }, className: "kk", type: "text", name: "Game_description", defaultValue: this.state.GameData.game_description, required: true }))),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "Department" }, "Game url"),
                React.createElement("div", null,
                    React.createElement("input", { style: { width: "400px" }, className: "kk", type: "text", name: "Game_url", defaultValue: this.state.GameData.game_url, required: true }))),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "Department" }, "Book image"),
                React.createElement("div", { className: "jj" },
                    React.createElement("input", { hidden: true, className: "form-control", type: "text", name: "Game_Image", defaultValue: this.state.GameData.game_Image.toString() }),
                    React.createElement("img", { name: 'book_Image', defaultValue: this.state.GameData.game_Image, width: "200", height: "auto", alt: "", src: this.state.path + this.state.GameData.game_Image }))),
            React.createElement("br", null),
            React.createElement("div", { className: "form-group" },
                React.createElement("button", { style: { margin: "10px 40px 10px 10px" }, type: "submit", className: "btn btn-default buta" }, "Save"),
                React.createElement("button", { className: "btn buta", onClick: this.handleCancel }, "Cancel"))));
    };
    return AddGame;
}(React.Component));
exports.AddGame = AddGame;
//# sourceMappingURL=AddGame.js.map