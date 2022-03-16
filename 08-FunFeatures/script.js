// FROM PREVIOUS EXCERCISE:

// Po kliknutí na 1. tlačítko vyšle zprávu do konzole:

$("button.one").on("click", function() {   // Popř.: $("button.one").on("click", () => {       
    console.log("Yeah, you clicked me!");
});




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


// EXCERCISE 1 + 2:
// Exc. 1: Po stisknutí 3. tlačítka mění barvy dle hodnoty vložené do inputu
// Exc. 2: Změna barvy proběhne jen při prvním stisknutí, pak už ne

let color, clicks;

clicks = 0;

$("button.three").on("click", function() {
    color = $("#colorInput").val();     // Exc. 1: získá hodnotu z #colorInput
    clicks++;                           // Exc.2: Přidá kliknutí
    if (clicks <2) {                    // Exc. 2: Změna proběhne pouze při prvním kliknutí
        $("button").css("background", color); // Exc. 1: změna barvy
    }
});
