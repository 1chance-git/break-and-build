const addNoteBtn = document.getElementById('addNoteBtn');
const noteInput = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');

addNoteBtn.addEventListener('click', function() {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        const li = document.createElement('li');
        li.textContent = noteText;
        notesList.appendChild(li);
        noteInput.value = '';
        saveNotes();
    }
});

function saveNotes() {
    const notes = [];
    notesList.querySelectorAll('li').forEach(li => {
        notes.push(li.textContent);
    });
    localStorage.setItem('microNotes', JSON.stringify(notes));
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('microNotes')) || [];
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });
}

// Load notes when the page loads
window.onload = loadNotes;
