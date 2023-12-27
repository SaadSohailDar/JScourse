'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours:{
    thu:{
      open:12,
      close:22,
    },
    fri:{
      open:11,
      close:23,
    },
    thu:{
      open:0,
      close:24,
    },

  },


  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  },

  orderDelivery:function(obj)
  {
    console.log(obj);
  },

  orderPasta:function(ing1,ing2,ing3)
  {
    console.log(`here is your pasta with ${ing1},${ing2},${ing3}`);
  },
};



const ingredients=[
  prompt(`Lets\'s make Pasta! Ingredient 1?`),
  prompt(`Lets\'s make Pasta! Ingredient 2?`),
  prompt(`Lets\'s make Pasta! Ingredient 3?`)
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

restaurant.orderDelivery({
  time:'22:30',
  address:'Falcon Complex 21',
  mainIndex: 2,
  starterIndex: 2 ,
})

//objects
const newRestaurant={FoundedIn:1998 ,...restaurant,Founder:'saad',}
console.log(newRestaurant);

const {name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories);


const {name: restaurantName,openingHours:hours,categories:tags}=restaurant;
console.log(restaurantName,hours,tags);


//setting default value 
const {menu=[], starterMenu:starters=[]}=restaurant;
console.log(menu,starters);

//Mutating variabkles
let a =111;
let b=999;
const obj={a:23,b:7,c:15};

({a,b}=obj);
console.log(a,b);

//nested objects
const {
  fri:{open:o,close:c},
} = openingHours;
console.log(o,c);


const arr=[7,8,9];

const badNewArr=[1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

//Spread Operator
const newArr=[1,2, ...arr];
console.log(newArr);


console.log(...newArr);

const newMenu=[...restaurant.mainMenu,'sushi'];
console.log(newMenu);

//Copy Array
const mainMenuCopy={...restaurant.mainMenu};


//join arrays
const manu=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(manu);

const str= 'Saad';
const Letters= [...str,' ','S.'];
console.log(Letters);
console.log(...str);




// const arr= [2,3,4];
// const a=arr[0]; 
// const b=arr[1]; 
// const c=arr[2]; 


// const [x,y,z]= arr; //destrunturing assignment
// console.log(x,y,z);
// console.log(arr);


// let [main,secondary]=restaurant.categories;
// console.log(main,secondary);

// //switching variables
// // const temp=main;
// // main=secondary;
// // secondary=temp;
// // console.log(main,secondary);

// [main,secondary]=[secondary,main];
// console.log(main,secondary);


// const [starter,mainCourse]=restaurant.order(2,0);
// console.log(starter,mainCourse);

// const nested=[2,4,[5,6]];
// // const[i, , j]=nested;
// // console.log(i,j);

// //Nested destructuring
// const [i, ,[j,k]]=nested;
// console.log(i,j,k);

// //default values
// const [p=1,q=1,r=1]=[8,9];
// console.log(p,q,r);

