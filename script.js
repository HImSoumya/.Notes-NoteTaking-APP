console.log('Note Taking App');
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

    let addTitle = document.getElementById('addTitle');
    let addDate = document.getElementById('addDate')
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');//doubt
    if (notes == null) {
        noteObj = []//doubtt
    }
    else {
        noteObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        date: addDate.value,
        text: addTxt.value
    }
    noteObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    addTxt.value = '';
    addTitle.value = '';
    addDate.value = '';
    console.log(myObj);
    showNotes();
})

// Function to showNotes from local storage
function showNotes() {
    let notes = localStorage.getItem('notes');//doubt
    if (notes == null) {
        noteObj = []//doubtt
    }
    else {
        noteObj = JSON.parse(notes);
    }
    let html = ''

    noteObj.forEach(function (element, index) {

        html += `   <div class="noteCard my-3 mx-2"  margin-top:10px;">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body text-capitalize">
                            <h5 class="card-title">${element.title}</h5>
                            </h6><b>Date-${element.date}</b></h6>
                            <p class="card-text">${element.text}</p>
                            <button id=${index} onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
                            </div>
                        </div>
                   </div>
                `
    })
    let notesEle = document.getElementById('notes');
    if (noteObj.length != 0) {
        notesEle.innerHTML = html
    }
    else {
        notesEle.innerHTML = `Noting to show!! Create Your Notes`
    }

}

// Function to delete a note
function deleteNote(index) {
    // console.log('I am deleting this note', index);
    let notes = localStorage.getItem('notes');//doubt
    if (notes == null) {
        noteObj = []//doubtt
    }
    else {
        noteObj = JSON.parse(notes);
    }
    // confirm('Do You Want To Delete This Note')
    noteObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    showNotes();
}

 
// darkmode
 