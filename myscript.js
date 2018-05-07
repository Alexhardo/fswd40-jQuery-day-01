// /*
//  * My jQuery selectors
//  *
//  * Apply a style such as a yellow background to the following elements.
//  * Test your selectors one at a time.
//  */

// // all elements
//  $("*").css("background-color", "yellow");

// // all p elements
// $("p").css("background-color","red");

// // the p element with an ID of "intro"
// $("#intro").css("background-color","lightblue");

// // all elements with a class of "note"
// $(".note").css("color","white");

// // all DIV elements with a class of note
// $("div.note").css("color","blue");

// // all p elements in the article element
// $("article>p").css("font-size","20px");
// $("article>p").css("font-weight","bold");

// // the last element in any section which is a p tag

// $("p:last").css("background-color","green");
// // the first paragraph on the page

// $("p:first").css("background-color","green");

// // all p elements which have a link

//  $("p:has(a)").css("font-weight","bold");

// // the second li within nested ul element

// $("li:nth(2)").css("color","red");

// every second and third p element
$("p:nth-of-type(2), p:nth-of-type(3)").css("background-color","green");
