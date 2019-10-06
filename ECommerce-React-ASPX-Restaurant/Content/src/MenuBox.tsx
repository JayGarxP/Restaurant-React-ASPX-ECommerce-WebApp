// MenuBox react model for cart menu
// Remember to Exclude all .tsx files from Visual Studio project; build them separate as detailed in food.tsx
// 
import * as React from "react";
import * as ReactDOM from "react-dom";
// import class, class2 from filename; have to transpile after doing this sadly every time u change this code
import { FoodModel, IAppState } from "./Models";

export class MenuBox extends React.Component<any, IAppState>
{
    constructor(state)
    {
        super(state);
        this.state = { items: null, myOrder: null, showPopup: false, userId: 0, orderPlaced: false };
        this.loadMenusFromServer();
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

    
}
