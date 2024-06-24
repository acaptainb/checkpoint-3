import { AppState } from "../AppState.js";
import { Notes } from "../models/ActiveNote.js";
import { saveState } from "../utils/Store.js";



class ActiveNoteService {
    selectActiveNote(NoteID) {
        console.log('working service');
    }

    createNote(noteData) {
        console.log('note services', noteData);
        const newNote = new Notes(noteData)
        AppState.notes = [...AppState.notes, newNote]
        // saveState('notes', AppState.notes)
        // saveState('totalNotes', AppState.)
    }



    createNoteList(NoteList) {
        const noteLists = AppState.notes
        const newNoteLists = new Notes(NoteList)
        noteLists.push(newNoteLists)
        // this.saveNoteLsts
    }





    selectActiveNote(NoteID) {
        const selectedNotes = AppState.notes.find(note => note.id == NoteID)
        AppState.activeNote = selectedNotes
        console.log(AppState);
    }



    deleteId(NoteId) {

    }

}


export const activeNoteService = new ActiveNoteService()