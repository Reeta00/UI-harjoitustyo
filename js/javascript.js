function sendNote() {

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    let note = document.createElement("li");

    note.innerHTML = "<strong>" + name + ":</strong> " + message;

    document.getElementById("notes").appendChild(note);

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}
