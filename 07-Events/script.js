// EXCERCISE 1:

// Po kliknutí na 1. tlačítko vyšle zprávu do konzole:

$("button.one").on("click", function() {   // Popř.: $("button.one").on("click", () => {       
    console.log("Yeah, you clicked me!");
});


// EXCERCISE 2:

// Po kliknutí na 2. tlačítko změní text na prvním tlačítku

let i = 0;

$("button.two").on("click", function() {   // Popř.: $("button.two").on("click", () => {       
    i++;
    if (i % 5 === 1) {
        $("button.one").text("You clicked HIM?!");
    } else if (i % 5 === 2) {
        $("button.one").text("You are mean!");
    } else if (i % 5 === 3) {
        $("button.one").text("Oh, come on!");
    } else if (i % 5 === 4) {
        $("button.one").text("By pushing his button you are really pushing my buttons!");    
    } else if (i % 5 === 0) {
        $("button.one").text("OK. Let´s start over. Push me!");
    }    
});


// EXCERCISE 3:

let count = 0;

$("button.three").on("click", function() {   // Popř.: $("button.three").on("click", () => {
    count++;
    if (count % 2 ===1) {
        $("button").css("background-color", "purple");
    } else {
        $("button").css("background-color", "yellow");
    }    
});