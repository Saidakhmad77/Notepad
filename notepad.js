let textData = JSON.parse(localStorage.getItem('textData')) || [];

document.getElementById("saveJson").addEventListener('click', function() {
    jsonHandler(textData);
});

document.getElementById('saveBtn').addEventListener("click", function(e) {
    e.preventDefault();

    let text = document.getElementById("notepad").value;

    document.getElementById("notepad").value = "";
    displayText(text);

    //console.log(textData)

    addTextItem(text);
});

function displayText(text) {
    document
    .getElementById("notesContainer")
    .appendChild(document.createTextNode(text));
}

function addTextItem(newText) {
    const newItem = {
        text: newText,
        complete: false
    };

    textData.push(newItem);
    localStorage.setItem("textData", JSON.stringify(textData));
}

function jsonHandler(jsonObject) {
    jsonString = JSON.stringify(jsonObject);

    const blob = new Blob([jsonString], { type: "application.json"});

    saveAs(blob, "data.json");
}