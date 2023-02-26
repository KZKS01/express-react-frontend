
//How to select DOM elements using the jQuery function

//to begin selecting element, "we wrap the element in money"

//const h1El = document.querySelector('H1'); //doing the same thing below with jQuery & will return part of the methods jQuery has
const $h1 = $('h1'); //we typically name our jQuery var with a $

//how to select multiple elements
//const liEls = document.querySelectorAll('li'); //old ways
const $lis = $('li');
console.log($lis);


//if we need to select only one element, we must be specific
//$('li.special-li')

//$('li:nth-child') //Pseudo-classes selector, n>=1 

const $div = $('div.big-and-round');

// $(‘li’)[0] (give access to a native DOM element) vs $(‘li’).eq(0) (DOM element wrap in jQ wrap set)

const $li = $('li');
/*
//const $lastLi = an expression that would give us the last li

//another way: const lastLi = $('li:last-child'); //css3 pseudoclass selector & returns as jQuery
//const lastLi = $li[$li.length - 1]; //returns a dom element
//const lastLi = $('li').last();
//const lastLi = $li.eq(-1); negative index, counts from the last/backwards


//what if we needed to iterate over a list of elements inside of a jQ object

$li.each(function (index) {
    console.log($li[index]); //returns native DOM elements
    console.log($li.eq(index)); //returns element wrapped in a jQ set 
    $($li[index]) //turn the DOM element to a jQ object
}); 

*/

//changing the content and styles 

//.text() behaves like textContent--to change the text
$h1.text('Hello, Class!');  

// const h1Text = $h1.text();
// console.log(h1Text);--returns Hello, Class!

//.html behaves like innerHTML
$div.html(`
    <section> 
        <p>Hello World</p>
        <a href="http://google.com">visit google</a>
    </section> 
`);


//changing styles with the .css method

$li.css('color', 'red'); //property, value pattern--can only change one element at a time
//liEm.style.color = 'red'
$li.css({color: 'green', 
        fontSize: '17px',   //font-size works too
        backgroundColor: 'yellow'
}) //object with css properties pattern


// Change our <p> tag's content and color
$("p")
  .html("Awesome things jQuery can do:")
  .css("background-color", "peachpuff")