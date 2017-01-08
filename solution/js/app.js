(function(){
'use strict'

let dv4app = angular.module('dv4app',[
    //dependencies - NO
]);

//controller defs
//-----------------------
dv4app
    .controller('ToBuyCtrl',[
        //dependencies
        '$scope','ShoppingListCheckOffService',
        //main controller function
        toBuyCtrl
    ])
    .controller('AlreadyBoughtCtrl',[
        //dependencies
        '$scope','ShoppingListCheckOffService',
        //main controller function
        alreadyBoughtCtrl
    ]);

//service defs
//-----------------------
dv4app
    .service('ShoppingListCheckOffService',[
        //dependecies - NO 
        //main service function 
        shoppingListCheckOffService
    ]);

//---------------------------------------------------
//--------------- FUNCTIONS -------------------------
//main controller functions 
function toBuyCtrl(scope,shoppingListService){
    let toBuy = this; 

    //copy to buy items into a scope 
    toBuy.items = shoppingListService.itemsToBuy;

    //bought function called from button
    toBuy.bought = function(itemId){
        //call shoping list service 
        shoppingListService.bought(itemId);
        //call logged
        //console.log("Bought item service called for item: ", itemId);
    };

};

//main controller function 
function alreadyBoughtCtrl(scope,shoppingListService){
    let bought = this;
    //copy bought items to scope 
    bought.items = shoppingListService.itemsBought;

};

//SERVICE SINGLETON
//-- MAIN FUNCTION ----------------
function shoppingListCheckOffService(){
    let shopList = this;

    //define to buy items 
    shopList.itemsToBuy=[
        {name:'Apples', amount:10},
        {name:'Oranges', amount:7},
        {name:'Bananas', amount:12},
        {name:'Tomatos', amount:6},
        {name:'Cucumbers', amount:9}
    ];

    //define bought items list 
    shopList.itemsBought=[];

    //define bought function 
    shopList.bought = function(itemId){
        console.log("Move item to bought list: ", itemId);
        //get item
        let item = shopList.itemsToBuy[itemId];
        //add item to bought array
        shopList.itemsBought.push(item);
        //remove it from to buy list
        shopList.itemsToBuy.splice(itemId,1);
    }
};


})()