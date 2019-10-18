// MenuBox react model for cart menu
// Remember to Exclude all .tsx files from Visual Studio project; build them separate as detailed in food.tsx
// 
import * as React from "react";
import * as ReactDOM from "react-dom";
// import class, class2 from filename; have to transpile after doing this sadly every time u change this code
import { FoodModel, IAppState } from "./Models";

export class MenuBox extends React.Component<any, IAppState>
{
    // need to declare state first, can't use implicit
    state: { items: any; myOrder: any; showPopup: boolean; userId: number; orderPlaced: boolean; };
    constructor(state)
    {
        super(state);
        this.state = { items: null, myOrder: null, showPopup: false, userId: 0, orderPlaced: false };
        this.getLoginStatus();
        this.loadMenusFromServer();
    }

    getLoginStatus()
    {
        var xhr = new XMLHttpRequest();
        var xhr = new XMLHttpRequest();
        xhr.open('get', '/data/GetUserId/', true);
        xhr.onload = function () {
            var userid: number = parseInt(xhr.responseText);
            var tmp: IAppState = this.state;
            tmp.userId = userid;
            this.setState(tmp);

        }.bind(this);
        xhr.send();
    }

    // function to retrieve menu from server data; used to populate list of food items in menubox ctor
    loadMenusFromServer()
    {
        var xhr = new XMLHttpRequest();
        xhr.open('get', '/data/GetMenuList/', true);
        xhr.onload = function () {
            var dataitems = JSON.parse(xhr.responseText);
            var tmp: IAppState = this.state;
            tmp.items = dataitems;
            this.setState(tmp);
        }.bind(this);
        xhr.send();
    }

    addToCart(id)
    {
        if (this.state.userId < 1) {
            // TODO: checkout as guest functionality
            alert("Please Log in to Add to Cart");
            return;

        }
        // reduce by one to map id from database, 1 based in db to collection 0 based index
        id--;
        var myCart = this.state.myOrder || []; // empty array if state.myOrder is null

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

        var tmp: IAppState = this.state;
        tmp.myOrder = myCart;
        tmp.showPopup = false;
        this.setState(tmp); // prop does not exist in IDE intelliS ???


    }

    render()
    {
        let menus = this.state.items || [];
        var menuList = menus.map(function (menu) {
            return (
                <div key={menu.Id}>
                    <b>{menu.Name} </b>    <br />
                    <img style={{ width: '100px', float: 'left', margin: '5px' }} src={"/img/" + menu.Picture} />{menu.Description}<p />
                    <div>${menu.Price} | <a href='#' onClick={this.addToCart.bind(this, menu.Id)}
                    >Add to Cart</a></div><hr />
                </div>
                )
        }, this);
        return (<div>
            <div id="wrapper">
                <div id="dvmenu">
                    {menuList}
                </div>
                </div>
        </div>);
    }
    
}
