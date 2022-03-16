let todo, todoList, doneTask;

todoList = ["Buy milk"]

// Přidá položku na stránku jako položku seznamu:
function putToPage(task) {    
    if (task !== "") {
        $(".toDoList").append(`<li>${task}</li>`);
    }
};


// Přidá položku do seznamu todoList:
function putToList(task) {
    task = task.trim();     // Odstraní bílé znaky
    todoList.push(task);
}


// Vytiskne na stránce všechny aktuální položky seznamu todoList:
function refreshPage() {
    $(".toDoList").html("<h2>ToDos:</h2>");
    todoList.forEach(function(item) {
        putToPage(item);
    });
};

// Kliknutím na "Add todo" se zadaná položka přidá do seznamu todoList
// a ten se vytiskne na stránce
// Výsledek: zadan položka přibude v seznamu na stránce
$("#todosBtn").on("click", function() {
    todo = $("#todos").val();
    putToList(todo);
    refreshPage();    
});


// Kliknutím na "Remove todo" se zadaná položka odstraní ze seznamu todoList
// a ten se vytiskne na stránce
// Výsledek: zadaná položka zmizí ze seznamu na stránce (pokud v něm byla přítomna)
$("#removeBtn").on("click", function() {
    doneTask = $("#done").val();
    doneTask = doneTask.trim();         // Odstraní bílé znaky
    let item;
    for (let i = 0; i < todoList.length; i++) {
        if (doneTask === todoList[i]) {
            delete todoList[i];
        }
    };
    refreshPage();
});