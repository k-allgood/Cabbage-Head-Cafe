/***JS Menu***/

/******LUNCH******/
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
/*****************/
/******DINNER******/
/*Pasta and quiche
----------------------------------------------*/
var pastaQuicheItem = [ "Loaded Veggie Pasta $7.99", "Pesto Pasta $7.99", "Spicy Tomato Penne $7.99","Spinach Quinoa Quiche $8.99", "Red Pepper Quiche $8.99", "Tomato Basil Quiche $7.99"];
var pastaQuicheDescription = ["Cheesy pasta loaded with veggies.", "Perfectly coated with oil, garlic and herbs. Served with bread.", "Penne pasta smothered in our house-made spicy tomato sauce. Served with bread.", "Plenty of fresh spinach and quinoa.", "A savory blend of red peppers and fresh spinach.", "Sweet basil and juicy vine tomatoes."];
var pastaQuicheImg = ["loadedvegpasta.jpg","pesto.jpg","redpenne.jpg","spinachquinoa.jpg","spinachredpepper.jpg","tomatobasil.jpg"];
var pastaQuicheAlt = ["Cheesy pasta loaded with veggies", "Pesto pasta", "Spicy tomato penne", "Spinach quinoa quiche", "Red pepper quiche", "Tomato basil quiche"];

/*Seafood and chicken
----------------------------------------------*/
var seafoodChickenItem = ["Garlic Shrimp $8.99", "Crabcake $9.99", "Grilled Salmon $9.99", "Lemon Herb Chicken $7.99", "Pan Seared Chicken $7.99", "Chicken Tenders $7.99"];
var seafoodChickenDescription = ["Pan fried shrimp, seasoned with butter and garlic.", "Meaty and savory crabcake served over mixed veggies.", "Drizzled with olive oil and herbs. Served with lemon wedge.", "Chicken breast with zesty lemon and herbs. Served with tender broccoli and rice.", "Pan seared chicken in pan gravy. Served with mashed potatoes.", "Crunchy and juicy. Served with fries."];
var seafoodChickenImg = ["garlicshrimp.jpg", "crabcake.jpg", "salmon.jpg", "chickenbroccoli.jpg", "chickenpotato.jpg", "friedchicken.jpg"];
var seafoodChickenAlt = ["Garlic shrimp", "Crabcake", "Grilled salmon", "Lemon herb chicken", "Pan seared chicken", "Chicken tenders"];

/*Pork and beef
----------------------------------------------*/
var porkBeefItem = ["Steak Kebabs $9.99", "Burger and Fries $8.99", "Sirloin $9.99", "Spicy Pork Bowl $7.99", "Grilled Mango Porkchop $8.99", "Fried Porkchop $7.99"];
var porkBeefDescription = ["Tender sirloin, onions, pineapple and red peppers.","Tomato, lettuce, red onions and mayo. Add cheese (.50).","Tender and topped with our mushroom pan sauce.","Spicy pork, rice, fresh veggies and cheese wontons.","Grilled porkchop topped with our house-made mango sauce.","Juicy fried porkchop. Served with veggies and rice."];
var porkBeefImg = ["kebab.jpg", "burger.jpg", "sirloin.jpg", "porkbowl.jpg", "porkchop.jpg", "friedpork.jpg"];
var porkBeefAlt = ["Steak kebabs", "Burger and fries", "Sirloin", "Spicy pork bowl", "Grilled mango porkchop", "Fried porkchop"];

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

function pastaQuicheMenu() {
	rightH1.innerHTML = pastaQuicheItem[0];
	rightP1.innerHTML = pastaQuicheDescription[0];
	rightImg1.src = "images/dinner/pastaquiche/" +pastaQuicheImg[0];
	rightImg1.alt = pastaQuicheAlt[0];

	rightH2.innerHTML = pastaQuicheItem[1];
	rightP2.innerHTML = pastaQuicheDescription[1];
	rightImg2.src = "images/dinner/pastaquiche/" +pastaQuicheImg[1];
	rightImg2.alt = pastaQuicheAlt[1];

	rightH3.innerHTML = pastaQuicheItem[2];
	rightP3.innerHTML = pastaQuicheDescription[2];
	rightImg3.src = "images/dinner/pastaquiche/" +pastaQuicheImg[2];
	rightImg3.alt = pastaQuicheAlt[2];

	leftH1.innerHTML = pastaQuicheItem[3];
	leftP1.innerHTML = pastaQuicheDescription[3];
	leftImg1.src = "images/dinner/pastaquiche/" +pastaQuicheImg[3];
	leftImg1.alt = pastaQuicheAlt[3];

	leftH2.innerHTML = pastaQuicheItem[4];
	leftP2.innerHTML = pastaQuicheDescription[4];
	leftImg2.src = "images/dinner/pastaquiche/" +pastaQuicheImg[4];
	leftImg2.alt = pastaQuicheAlt[4];

	leftH3.innerHTML = pastaQuicheItem[5];
	leftP3.innerHTML = pastaQuicheDescription[5];	
	leftImg3.src = "images/dinner/pastaquiche/" +pastaQuicheImg[5];
	leftImg3.alt = pastaQuicheAlt[5];

	menuTitle.innerHTML = "Pasta and Quiche";
}

function seafoodChickenMenu() {
	rightH1.innerHTML = seafoodChickenItem[0];
	rightP1.innerHTML = seafoodChickenDescription[0];
	rightImg1.src = "images/dinner/seafoodchicken/" +seafoodChickenImg[0];
	rightImg1.alt = seafoodChickenAlt[0];

	rightH2.innerHTML = seafoodChickenItem[1];
	rightP2.innerHTML = seafoodChickenDescription[1];
	rightImg2.src = "images/dinner/seafoodchicken/" +seafoodChickenImg[1];
	rightImg2.alt = seafoodChickenAlt[1];

	rightH3.innerHTML = seafoodChickenItem[2];
	rightP3.innerHTML = seafoodChickenDescription[2];
	rightImg3.src = "images/dinner/seafoodchicken/" +seafoodChickenImg[2];
	rightImg3.alt = seafoodChickenAlt[2];

	leftH1.innerHTML = seafoodChickenItem[3];
	leftP1.innerHTML = seafoodChickenDescription[3];
	leftImg1.src = "images/dinner/seafoodchicken/" +seafoodChickenImg[3];
	leftImg1.alt = seafoodChickenAlt[3];

	leftH2.innerHTML = seafoodChickenItem[4];
	leftP2.innerHTML = seafoodChickenDescription[4];
	leftImg2.src = "images/dinner/seafoodchicken/" +seafoodChickenImg[4];
	leftImg2.alt = seafoodChickenAlt[4];
	
	leftH3.innerHTML = seafoodChickenItem[5];
	leftP3.innerHTML = seafoodChickenDescription[5];	
	leftImg3.src = "images/dinner/seafoodchicken/" +seafoodChickenImg[5];
	leftImg3.alt = seafoodChickenAlt[5];

	menuTitle.innerHTML = "Chicken and Seafood";
}

function porkBeefMenu() {
	rightH1.innerHTML = porkBeefItem[0];
	rightP1.innerHTML = porkBeefDescription[0];
	rightImg1.src = "images/dinner/porkbeef/" +porkBeefImg[0];
	rightImg1.alt = porkBeefAlt[0];

	rightH2.innerHTML = porkBeefItem[1];
	rightP2.innerHTML = porkBeefDescription[1];
	rightImg2.src = "images/dinner/porkbeef/" +porkBeefImg[1];
	rightImg2.alt = porkBeefAlt[1];

	rightH3.innerHTML = porkBeefItem[2];
	rightP3.innerHTML = porkBeefDescription[2];
	rightImg3.src = "images/dinner/porkbeef/" +porkBeefImg[2];
	rightImg3.alt = porkBeefAlt[2];

	leftH1.innerHTML = porkBeefItem[3];
	leftP1.innerHTML = porkBeefDescription[3];
	leftImg1.src = "images/dinner/porkbeef/" +porkBeefImg[3];
	leftImg1.alt = porkBeefAlt[3];

	leftH2.innerHTML = porkBeefItem[4];
	leftP2.innerHTML = porkBeefDescription[4];
	leftImg2.src = "images/dinner/porkbeef/" +porkBeefImg[4];
	leftImg2.alt = porkBeefAlt[4];

	leftH3.innerHTML = porkBeefItem[5];
	leftP3.innerHTML = porkBeefDescription[5];	
	leftImg3.src = "images/dinner/porkbeef/" +porkBeefImg[5];
	leftImg3.alt = porkBeefAlt[5];

	menuTitle.innerHTML = "Pork and Beef";
}
/*****************/
/******Drinks******/
/*Coffee
----------------------------------------------*/
var coffeeItem = ["Espresso $2.99","Macchiato $3.99","Latte $3.99","Endless Coffee $4.99","Mocha $4.99","Cappuccino $3.99"];
var coffeeDescription = ["A double shot of espresso.","A creamy espresso drink. Add caramel (.50).","Espresso with steamed milk and a little foam.","An endless supply of coffee. Light roast, dark roast or decaf.","Bold and smooth with cocoa.","Strong espresso with foamed and steamed milk."];
var coffeeImg = ["espresso.jpg","macchiato.jpg","latte.jpg","regular.jpg","mocha.jpg","cappucino.jpg"];
var coffeeAlt = ["Espresso","Macchiato","Latte","Endless coffee","Mocha","Cappuccino"];

/*Tea
----------------------------------------------*/
var teaItem = ["Cranberry Tea $3.99","Ginger Tea $2.99","Herbal Tea $2.99","Lemon Tea $2.99","Matcha $3.99","Orange Tea $3.99"];
var teaDescription = ["Slightly tart and sweet cranberry tea.","Refreshing ginger tea.","Balanced and soothing herbal tea blend.","Black tea leaves brewed with lemon.","Refreshing green tea.","Black tea leaves brewed with oranges. Served with an orange blossom."];
var teaImg = ["cranberrytea.jpg","gingertea.jpg","herbaltea.jpg","lemontea.jpg","matcha.jpg","orangetea.jpg"];
var teaAlt = ["Cranberry tea","Ginger tea","Herbal tea","Lemon tea","Matcha","Orange tea"];

/*Cocktails
----------------------------------------------*/
var cocktailsItem = ["Beer $3.99","Wine $3.99","Bloody Mary $4.99","Citrus Punch $4.99","Mojito $3.99","Orange Mimosa $4.99"];
var cocktailsDescription = ["Choose a glass of lager, ale or IPA.","A glass of red or white Merlot, Riesling or Chardonnay.","Delicious and spicy bloody mary.","Pineapple and orange juice mixed with vodka.","Minty, light and refreshing.","Our orange mimosa is perfect with any meal."];
var cocktailsImg = ["beer.jpg","wine.jpg","bmary.jpg","citrus.jpg","mojito.jpg","orange.jpg"];
var cocktailsAlt = ["Lager, ale or IPA","Red or white wine","Bloody mary","Citrus punch with vodka","Mojito","Orange mimosa"];

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

function coffeeMenu() {
	rightH1.innerHTML = coffeeItem[0];
	rightP1.innerHTML = coffeeDescription[0];
	rightImg1.src = "images/drinks/coffee/" +coffeeImg[0];
	rightImg1.alt = coffeeAlt[0];

	rightH2.innerHTML = coffeeItem[1];
	rightP2.innerHTML = coffeeDescription[1];
	rightImg2.src = "images/drinks/coffee/" +coffeeImg[1];
	rightImg2.alt = coffeeAlt[1];

	rightH3.innerHTML = coffeeItem[2];
	rightP3.innerHTML = coffeeDescription[2];
	rightImg3.src = "images/drinks/coffee/" +coffeeImg[2];
	rightImg3.alt = coffeeAlt[2];

	leftH1.innerHTML = coffeeItem[3];
	leftP1.innerHTML = coffeeDescription[3];
	leftImg1.src = "images/drinks/coffee/" +coffeeImg[3];
	leftImg1.alt = coffeeAlt[3];

	leftH2.innerHTML = coffeeItem[4];
	leftP2.innerHTML = coffeeDescription[4];
	leftImg2.src = "images/drinks/coffee/" +coffeeImg[4];
	leftImg2.alt = coffeeAlt[4];

	leftH3.innerHTML = coffeeItem[5];
	leftP3.innerHTML = coffeeDescription[5];	
	leftImg3.src = "images/drinks/coffee/" +coffeeImg[5];
	leftImg3.alt = coffeeAlt[5];

	menuTitle.innerHTML = "Coffee";
}

function teaMenu() {
	rightH1.innerHTML = teaItem[0];
	rightP1.innerHTML = teaDescription[0];
	rightImg1.src = "images/drinks/tea/" +teaImg[0];
	rightImg1.alt = teaAlt[0];

	rightH2.innerHTML = teaItem[1];
	rightP2.innerHTML = teaDescription[1];
	rightImg2.src = "images/drinks/tea/" +teaImg[1];
	rightImg2.alt = teaAlt[1];

	rightH3.innerHTML = teaItem[2];
	rightP3.innerHTML = teaDescription[2];
	rightImg3.src = "images/drinks/tea/" +teaImg[2];
	rightImg3.alt = teaAlt[2];

	leftH1.innerHTML = teaItem[3];
	leftP1.innerHTML = teaDescription[3];
	leftImg1.src = "images/drinks/tea/" +teaImg[3];
	leftImg1.alt = teaAlt[3];

	leftH2.innerHTML = teaItem[4];
	leftP2.innerHTML = teaDescription[4];
	leftImg2.src = "images/drinks/tea/" +teaImg[4];
	leftImg2.alt = teaAlt[4];
	
	leftH3.innerHTML = teaItem[5];
	leftP3.innerHTML = teaDescription[5];	
	leftImg3.src = "images/drinks/tea/" +teaImg[5];
	leftImg3.alt = teaAlt[5];

	menuTitle.innerHTML = "Tea";
}

function cocktailsMenu() {
	rightH1.innerHTML = cocktailsItem[0];
	rightP1.innerHTML = cocktailsDescription[0];
	rightImg1.src = "images/drinks/cocktails/" +cocktailsImg[0];
	rightImg1.alt = cocktailsAlt[0];

	rightH2.innerHTML = cocktailsItem[1];
	rightP2.innerHTML = cocktailsDescription[1];
	rightImg2.src = "images/drinks/cocktails/" +cocktailsImg[1];
	rightImg2.alt = cocktailsAlt[1];

	rightH3.innerHTML = cocktailsItem[2];
	rightP3.innerHTML = cocktailsDescription[2];
	rightImg3.src = "images/drinks/cocktails/" +cocktailsImg[2];
	rightImg3.alt = cocktailsAlt[2];

	leftH1.innerHTML = cocktailsItem[3];
	leftP1.innerHTML = cocktailsDescription[3];
	leftImg1.src = "images/drinks/cocktails/" +cocktailsImg[3];
	leftImg1.alt = cocktailsAlt[3];

	leftH2.innerHTML = cocktailsItem[4];
	leftP2.innerHTML = cocktailsDescription[4];
	leftImg2.src = "images/drinks/cocktails/" +cocktailsImg[4];
	leftImg2.alt = cocktailsAlt[4];

	leftH3.innerHTML = cocktailsItem[5];
	leftP3.innerHTML = cocktailsDescription[5];	
	leftImg3.src = "images/drinks/cocktails/" +cocktailsImg[5];
	leftImg3.alt = cocktailsAlt[5];

	menuTitle.innerHTML = "Cocktails";
}
/*****************/