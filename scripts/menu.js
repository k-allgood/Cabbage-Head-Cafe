//Items are listed from top of the right column, down. Then left column down.

/*Salad & Soup
----------------------------------------------*/
var soupSaladItem = ["Beef Noodle Stew $7.99", "Tomato Bisque $5.99", "Zucchini Soup $7.99", "House Salad $7.99", "Chicken Cesar $7.99", "Avocado Salad $7.99"];
var soupSaladDescription = ["Rich and savory. Served with bread.", "Topped with herbs and served with bread.", "Zucchini with herbs in a tangy cream sauce.", "Italian, Ranch or Cesar dressing.", "Grilled chicken with Parmesan cheese and Cesar dressing.", "Fresh greens, roasted potato and avocado."];
var soupSaladImg = ["beef.jpg", "tomato.jpg", "zucchini.jpg", "salad.jpg", "chickensalad.jpg", "potatoavacado.jpg"];
var soupSaladAlt = ["Beef and noodle stew","Tomato bisque","Zucchini soup","House salad","Chicken salad","Avocado salad"];

/*Sandwiches
----------------------------------------------*/
var sandwichItem = ["BLT $7.99","Chicken & sprouts $8.99","Ham Croissant $7.99","Tomato Avocado $8.99","Red Pepper Ciabatta $7.99","Ham Hoagie $8.99"];
var sandwichDescription = ["Bacon, lettuce, tomato and Mayonnaise.","Tender chicken. Loaded with sprouts.","Ham, cheese and lettuce on a warm croissant.","Juicy tomato and fresh avocado.","Spinach, tomato and red pepper.","A sesame hoagie loaded with ham and tomato."];
var sandwichImg = ["blt.jpg","sprouts.jpg","ham.jpg","tomatoavacado.jpg","pepper.jpg","hamhoagie.jpg"];
var sandwichAlt = ["BLT", "Chicken with sprouts sandwich", "Ham croissant", "Tomato and avocado sandwich", "Red pepper ciabatta sandwich", "Ham hoagie"];

/*Pizza
----------------------------------------------*/
var pizzaItem = ["Classic Pepperoni $8.99","Spicy Sausage $8.99","Spinach Tomato $8.99", "Black Olive Jalapeno $8.99","Garlic Basil $8.99","Pizza Bites $8.99"];
var pizzaDescription = ["Thick cut pepperoni, cheese and marinara on a fresh made crust.","Melty mozzerella and spicy sausge.","Spinach, tomato and cheese. Simple and light.", "Black olive and Jalapeno.","Marinara, garlic, mozzerella and fresh basil.","Your choice of pizza rolled up into bite sized bits!"];
var pizzaImg = ["pepperoni.jpg","sausage.jpg","spinachtomato.jpg","blackolive.jpg","garlicbasil.jpg","pizzabites.jpg"];
var pizzaAlt = ["Pepperoni pizza", "Sausage pizza", "Spinach and tomato pizza", "Black olive and jalapeno pizza.", "Garlic and basil pizza.", "Pizza bites."];

var menuTitle = document.getElementById("menuTitle");

var rightH1 = document.getElementById("rightH1");
var rightH2 = document.getElementById("rightH2");
var rightH3 = document.getElementById("rightH3");
var rightP1 = document.getElementById("rightP1");
var rightP2 = document.getElementById("rightP2");
var rightP3 = document.getElementById("rightP3");
var rightImg1 = document.getElementById("rightImg1");
var rightImg2 = document.getElementById("rightImg2");
var rightImg3 = document.getElementById("rightImg3");

var leftH1 = document.getElementById("leftH1");
var leftH2 = document.getElementById("leftH2");
var leftH3 = document.getElementById("leftH3");
var leftP1 = document.getElementById("leftP1");
var leftP2 = document.getElementById("leftP2");
var leftP3 = document.getElementById("leftP3");
var leftImg1 = document.getElementById("leftImg1");
var leftImg2 = document.getElementById("leftImg2");
var leftImg3 = document.getElementById("leftImg3");

function soupSaladMenu() {
	rightH1.innerHTML = soupSaladItem[0];
	rightP1.innerHTML = soupSaladDescription[0];
	rightImg1.src = "images/lunch/soupSalad/" +soupSaladImg[0];
	rightImg1.alt = soupSaladAlt[0];

	rightH2.innerHTML = soupSaladItem[1];
	rightP2.innerHTML = soupSaladDescription[1];
	rightImg2.src = "images/lunch/soupSalad/" +soupSaladImg[1];
	rightImg2.alt = soupSaladAlt[1];

	rightH3.innerHTML = soupSaladItem[2];
	rightP3.innerHTML = soupSaladDescription[2];
	rightImg3.src = "images/lunch/soupSalad/" +soupSaladImg[2];
	rightImg3.alt = soupSaladAlt[2];

	leftH1.innerHTML = soupSaladItem[3];
	leftP1.innerHTML = soupSaladDescription[3];
	leftImg1.src = "images/lunch/soupSalad/" +soupSaladImg[3];
	leftImg1.alt = soupSaladAlt[3];

	leftH2.innerHTML = soupSaladItem[4];
	leftP2.innerHTML = soupSaladDescription[4];
	leftImg2.src = "images/lunch/soupSalad/" +soupSaladImg[4];
	leftImg2.alt = soupSaladAlt[4];

	leftH3.innerHTML = soupSaladItem[5];
	leftP3.innerHTML = soupSaladDescription[5];	
	leftImg3.src = "images/lunch/soupSalad/" +soupSaladImg[5];
	leftImg3.alt = soupSaladAlt[5];

	menuTitle.innerHTML = "Soup and Salad";
}

function sandwichMenu() {
	rightH1.innerHTML = sandwichItem[0];
	rightP1.innerHTML = sandwichDescription[0];
	rightImg1.src = "images/lunch/sandwiches/" +sandwichImg[0];
	rightImg1.alt = sandwichAlt[0];

	rightH2.innerHTML = sandwichItem[1];
	rightP2.innerHTML = sandwichDescription[1];
	rightImg2.src = "images/lunch/sandwiches/" +sandwichImg[1];
	rightImg2.alt = sandwichAlt[1];

	rightH3.innerHTML = sandwichItem[2];
	rightP3.innerHTML = sandwichDescription[2];
	rightImg3.src = "images/lunch/sandwiches/" +sandwichImg[2];
	rightImg3.alt = sandwichAlt[2];

	leftH1.innerHTML = sandwichItem[3];
	leftP1.innerHTML = sandwichDescription[3];
	leftImg1.src = "images/lunch/sandwiches/" +sandwichImg[3];
	leftImg1.alt = sandwichAlt[3];

	leftH2.innerHTML = sandwichItem[4];
	leftP2.innerHTML = sandwichDescription[4];
	leftImg2.src = "images/lunch/sandwiches/" +sandwichImg[4];
	leftImg2.alt = sandwichAlt[4];
	
	leftH3.innerHTML = sandwichItem[5];
	leftP3.innerHTML = sandwichDescription[5];	
	leftImg3.src = "images/lunch/sandwiches/" +sandwichImg[5];
	leftImg3.alt = sandwichAlt[5];

	menuTitle.innerHTML = "Sandwiches";
}

function pizzaMenu() {
	rightH1.innerHTML = pizzaItem[0];
	rightP1.innerHTML = pizzaDescription[0];
	rightImg1.src = "images/lunch/pizza/" +pizzaImg[0];
	rightImg1.alt = pizzaAlt[0];

	rightH2.innerHTML = pizzaItem[1];
	rightP2.innerHTML = pizzaDescription[1];
	rightImg2.src = "images/lunch/pizza/" +pizzaImg[1];
	rightImg2.alt = pizzaAlt[1];

	rightH3.innerHTML = pizzaItem[2];
	rightP3.innerHTML = pizzaDescription[2];
	rightImg3.src = "images/lunch/pizza/" +pizzaImg[2];
	rightImg3.alt = pizzaAlt[2];

	leftH1.innerHTML = pizzaItem[3];
	leftP1.innerHTML = pizzaDescription[3];
	leftImg1.src = "images/lunch/pizza/" +pizzaImg[3];
	leftImg1.alt = pizzaAlt[3];

	leftH2.innerHTML = pizzaItem[4];
	leftP2.innerHTML = pizzaDescription[4];
	leftImg2.src = "images/lunch/pizza/" +pizzaImg[4];
	leftImg2.alt = pizzaAlt[4];

	leftH3.innerHTML = pizzaItem[5];
	leftP3.innerHTML = pizzaDescription[5];	
	leftImg3.src = "images/lunch/pizza/" +pizzaImg[5];
	leftImg3.alt = pizzaAlt[5];

	menuTitle.innerHTML = "Pizza";
}
