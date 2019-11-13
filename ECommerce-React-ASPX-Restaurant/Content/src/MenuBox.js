"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class MenuBox extends React.Component {
    constructor(state) {
        super(state);
        this.state = { items: null, myOrder: null, showPopup: false, userId: 0, orderPlaced: false };
        this.getLoginStatus();
        this.loadMenusFromServer();
        var myCart = this.state.myOrder || [];
    }
    getLoginStatus() {
        var xhr = new XMLHttpRequest();
        var xhr = new XMLHttpRequest();
        xhr.open('get', '/data/GetUserId/', true);
        xhr.onload = function () {
            var userid = parseInt(xhr.responseText);
            var tmp = this.state;
            tmp.userId = userid;
            this.setState(tmp);
        }.bind(this);
        xhr.send();
    }
    loadMenusFromServer() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', '/data/GetMenuList/', true);
        xhr.onload = function () {
            var dataitems = JSON.parse(xhr.responseText);
            var tmp = this.state;
            tmp.items = dataitems;
            this.setState(tmp);
        }.bind(this);
        xhr.send();
    }
    addToCart(id) {
        if (this.state.userId < 1) {
            alert("Please Log in to Add to Cart");
            return;
        }
        id--;
        var allItems = this.state.items;
        if (myCart.indexOf(allItems[id]) > -1) {
            var itemToOrder = myCart.find(m => m.Id === allItems[id].Id);
            itemToOrder["Quantity"] = itemToOrder["Quantity"] + 1;
        }
        else {
            var itemToOrder = allItems[id];
            itemToOrder["Quantity"] = 1;
            myCart.push(allItems[id]);
        }
        var tmp = this.state;
        tmp.myOrder = myCart;
        tmp.showPopup = false;
        this.setState(tmp);
    }
    render() {
        let menus = this.state.items || [];
        var menuList = menus.map(function (menu) {
            return (React.createElement("div", { key: menu.Id },
                React.createElement("b", null,
                    menu.Name,
                    " "),
                "    ",
                React.createElement("br", null),
                React.createElement("img", { style: { width: '100px', float: 'left', margin: '5px' }, src: "/img/" + menu.Picture }),
                menu.Description,
                React.createElement("p", null),
                React.createElement("div", null,
                    "$",
                    menu.Price,
                    " | ",
                    React.createElement("a", { href: '#', onClick: this.addToCart.bind(this, menu.Id) }, "Add to Cart")),
                React.createElement("hr", null)));
        }, this);
        var total = 0;
        var myItems = myCart.map(function (menu) {
            total += menu.Price * menu.Quantity;
            return (React.createElement("div", { key: menu.Id },
                React.createElement("img", { style: { width: '75px', float: 'left', margin: '5px' }, src: "/img/" + menu.Picture }),
                menu.Name,
                React.createElement("br", null),
                "Qty: ",
                menu.Quantity,
                React.createElement("br", null),
                "Price: $",
                menu.Price * menu.Quantity,
                " ",
                React.createElement("br", null),
                React.createElement("hr", null)));
        }, this);
        return (React.createElement("div", null,
            React.createElement("div", { id: "wrapper" },
                React.createElement("div", { id: "dvmenu" }, menuList),
                React.createElement("div", { id: "dvcart" },
                    React.createElement("div", { id: "cartContent" }, myItems)))));
    }
}
exports.MenuBox = MenuBox;
//# sourceMappingURL=MenuBox.js.map