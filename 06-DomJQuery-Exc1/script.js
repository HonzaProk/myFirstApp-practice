console.log("start")


// EXCERCISE 1

$("h2").text("List of continents and random names:")

let names = ["Frodo", "Saruman", "Galadriel", "Honza", "Bilbo"]

names.push("Smíšek")

names.forEach(oneName => {      // Lze také: names.forEach(function(oneName) {
    if (oneName === "Honza") {
        $(".continents").append(`<li><strong>${oneName}</strong></li>`);
    } else {
        $(".continents").append(`<li>${oneName}</li>`);
    }    
});


// EXCERCISE 2

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  let title, text;

  title = "<h1>" + additionalBlock.title + "</h2>"
  text = "<p>" + additionalBlock.text + "</p>"

  $("main").append(title, text);
