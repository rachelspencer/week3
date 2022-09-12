///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE
const greetUser = (username) => `Welcome back, ${username}.`

let myUserName = 'Misty';
console.log(greetUser(myUserName));

//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

/* CODE HERE
    Using for loop:
    const canWeDeliver = (zipcode) => {
        for (i = 0; i < deliveryAreaZipCodes.length; i++ ) {
            if (deliveryAreaZipCodes[i] === zipcode) {
                return `You're in our delivery zone!`;
            }
        }
        return `Sorry, we can't deliver to that address.`;
    };
*/

/* Using higher order method:
    const canWeDeliver = (zipcode) => {
        if (deliveryAreaZipCodes.includes(zipcode)) {
            return `You're in our delivery zone!`;
        } else {
            return `Sorry, we can't deliver to that address.`;
        }
    };
*/

// Using ternary operator
    const canWeDeliver = (zipcode) => deliveryAreaZipCodes.includes(zipcode) ? `You're in our delivery zone!`: `Sorry, we can't deliver to that address.`;
           
const ZipcodeTest1 = 85205;
const ZipcodeTest2 = 85204;
const ZipcodeTest3 = 85203;
const ZipcodeTest4 = 85213;
const ZipcodeTest5 = 85206;
const ZipcodeTestFalse = 33139;

console.log('True: ', canWeDeliver(ZipcodeTest1));
console.log('True: ', canWeDeliver(ZipcodeTest2));
console.log('True: ', canWeDeliver(ZipcodeTest3));
console.log('True: ', canWeDeliver(ZipcodeTest4));
console.log('True: ', canWeDeliver(ZipcodeTest5));
console.log('False: ', canWeDeliver(ZipcodeTestFalse));
/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE
const deliveryAreaZipCodesMiami = [33137, 33138, 33139, 33140, 33141]
const canWeDeliverMiami = (zipcode) => {
    if (deliveryAreaZipCodesMiami.some((zipVal) => zipcode === zipVal)) {
        return `You're in our delivery zone!`;
    } else {
        return `Sorry, we can't deliver to that address.`;
    }
};

const miamiZipcodeTest1 = 33137;
const miamiZipcodeTest2 = 33138;
const miamiZipcodeTest3 = 33139;
const miamiZipcodeTest4 = 33140;
const miamiZipcodeTest5 = 33141;
const miamiZipcodeTestFalse = 33101;

console.log('True: ', canWeDeliverMiami(miamiZipcodeTest1));
console.log('True: ', canWeDeliverMiami(miamiZipcodeTest2));
console.log('True: ', canWeDeliverMiami(miamiZipcodeTest3));
console.log('True: ', canWeDeliverMiami(miamiZipcodeTest4));
console.log('True: ', canWeDeliverMiami(miamiZipcodeTest5));
console.log('False: ', canWeDeliverMiami(miamiZipcodeTestFalse));
//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

//CODE HERE
deals[0].title = deals[0].title.replace('15', '10');
console.log('Deal 10% off: ', deals[0]);  

/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//CODE HERE
deals[1].desc = deals[1].desc.replace('March', 'April').trim();
console.log('April deal: ', deals[1]);  