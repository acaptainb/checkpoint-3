import { AppState } from "../AppState.js";
import { Notes } from "../models/ActiveNote.js";
import { activeNoteService } from "../services/ActiveNoteService.js";
import { setHTML } from "../utils/Writer.js";
import { generateId } from "../utils/GenerateId.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class ActiveNoteController {
    constructor() {
        console.log('working?')
        console.log('reaaly');
        this.drawNoteslist()
        this.createNote()
        this.drawActiveNote()
    }


    drawNoteslist() {
        const notes = AppState.notes
        let NotelistHTML = ""
        notes.forEach(note => NotelistHTML += note.NotesListTemplate)
        setHTML("note-list", NotelistHTML)
    }

    drawActiveNote() {
        const notes = AppState.notes
        let ActiveNoteHTML = ""
        notes.forEach(note => ActiveNoteHTML += note.ActiveNoteTemplate)
        setHTML("active-note", ActiveNoteHTML)



    }
    selectActiveNote(NoteId) {
        activeNoteService.selectActiveNote(NoteId)
        console.log(NoteId);
    }

    createNote() {
        window.event.preventDefault()
        console.log("creating note");
        const form = window.event.target
        let notedata = getFormData(form)
        console.log(notedata);
        activeNoteService.createNote(notedata)
    }


    async deleteNote() {
        if (await Pop.confirm('DELETE this note FOREVER?')) {
            // notesServices.deleteNote(noteId)
        }
    }





}