console.log("Start.");

let color, number, word;

color = "purple";
number = 10;
word = "cool";

if (color === "purple") {
    $(".north").css("background-color", "purple");
};

if (number > 100) {
    $(".east").text("whoah, that's a big number");
} else {
    $(".east").text("just a regular number, please");
}

if (word === "cool") {
    $(".south").text("Power of DOM");
} else {
    $(".west").text("Power of DOM");
}