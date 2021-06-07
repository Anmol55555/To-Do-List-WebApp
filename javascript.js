var input = document.getElementById("userInput");                           // where user enter its input string
var subBtn = document.getElementById("btn");                                // The submit Button for saving the notes
var list = document.querySelector(".list-container");                            // This div contains the list of elements(notes), At first It is empty

function addNotes()
{
    if(input.value == "")                                                   // If the user did not given any input and just pressed Enter or click the submit Button, then simply return from the function as no need to make any new notes
    {
        return;
    }

    var divNotes = document.createElement("div");                           // The outer div tag having class container which contain the newly generated input tag(new Notes) and the EDIT and DELETE Button
    divNotes.classList.add("divNotesClass", "col-12");                      // This adds a new class named "divNotesClass" to the div tag

    var notes = document.createElement("input");                            // The newly generated input tag where the entered notes is shown
    notes.classList.add("notesClass");                                      // This adds a new class named "notesClass" to the input tag
    notes.value = input.value;                                              // This makes the value enetered by the user on the default input tag(input.value) to be equal to the input.value of the newly generated input tag named "notes"
    notes.disabled = true;                                                  // This disabled the input tag for any changes once entered, until the Edit Button is clicked 
    notes.type = "text";


    var editBtn = document.createElement("button");                         // This creates a new button named EDIT inside the div(divNotes) tag   
    editBtn.classList.add("editBtnClass");                                  // This adds a new class named "editBtnClass" to the button tag named "Edit"
    editBtn.innerHTML = "EDIT";                                             // This shows that "Edit" is written inside the button"

    var delBtn = document.createElement("button");                          // This creates a new button named DELETE inside the div(divNotes) tag   
    delBtn.classList.add("delBtnClass");                                    // This adds a new class named "delBtnClass" to the button tag named "DLETE"
    delBtn.innerHTML = "DELETE";                                            // This shows that "Delete" is written inside the button"

    var notesLine = document.createElement("div");                          // Created a div tag to create a line at last of each note
    notesLine.classList.add("notesLineClass")


    list.appendChild(divNotes);                                             // This shows that newly generated div tag(divNotes) is made inside list(outside default div tag having class="container")
    divNotes.appendChild(notes);                                            // This shows that newly generated input tag(notes) is made inside newly generated div tag(divNotes)
    divNotes.appendChild(editBtn);                                          // This shows that newly generated button tag(editBtn) is made inside newly generated div tag(divNotes)
    divNotes.appendChild(delBtn);                                           // This shows that newly generated button tag(delBtn) is made inside newly generated div tag(divNotes)
    divNotes.appendChild(notesLine);                                        // This shows that newly generated div tag(notesLine) is made inside newly generated div tag(divNotes)


    delBtn.addEventListener('click' , () => {                               // This deletes the clicked note
        list.removeChild(divNotes);
    })

    editBtn.addEventListener('click', () => {                               // This enable to edit the previously saved notes
        notes.disabled = !(notes.disabled);                                 // If the notes.disabled is true previously(i.e. it is not allowed to change or edit) then now notes.disabled = false (i.e. can be eddited)   and vice-versa
        if(notes.disabled == true)
        {
            editBtn.innerHTML = "EDIT";
        }
        if(notes.disabled == false)
        {
            editBtn.innerHTML = "DONE";
        }
    })



    input.value = "";


}

function pressEnter(e)
{
    if(e.code == 'Enter')
    {
        addNotes();
    }
}

window.addEventListener('keydown' , pressEnter);                        // This will also call the function when instead of clicking the submit button, the user press "Enter" from keyboard
                                                                        // For enabling pressing "Enter" to submit














