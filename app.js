const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function saveNotes() {
    const notes = document.querySelectorAll(".input-box");
    const data = [];
    notes.forEach(note => {
        data.push(note.innerHTML);
    });
    localStorage.setItem("notes", JSON.stringify(data));
}

function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
        savedNotes.forEach(noteContent => {
            let inputBox = document.createElement('div');
            inputBox.classList.add('input-box');
            inputBox.setAttribute("contenteditable", "true");
            inputBox.innerHTML = noteContent;
            
            let img = inputBox.querySelector("img");
            img.addEventListener("click", () => {
                notesContainer.removeChild(inputBox);
                saveNotes();
            });

            notesContainer.appendChild(inputBox);
        });
    }
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement('div');
    inputBox.classList.add('input-box');
    inputBox.setAttribute("contenteditable", "true");
    
    let img = document.createElement("img");
    img.src = "img/delete.png";
    img.alt = "Delete Icon";

    img.addEventListener("click", () => {
        notesContainer.removeChild(inputBox);
        saveNotes();
    });

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    saveNotes();
});

// Load notes when the page loads
document.addEventListener("DOMContentLoaded", loadNotes);
    