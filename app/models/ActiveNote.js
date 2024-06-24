import { generateId } from "../utils/GenerateId.js";

export class Notes {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.details = data.details
    this.createdAt = new Date()
    this.EditedAt = new Date()
  }

  get NotesListTemplate() {
    return `
        <div class="d-flex col-12 border rounded justify-content-between">
            <button onclick="app.ActiveNoteController.selectActiveNote('${this.id}')" class="btn btn-outline-danger " type="submit"><i
                        class="mdi mdi-delete-outline"></i></button>
                    <div class="">
            <p class="fs-3">${this.name}</p>
                    </div>
            <button onclick="app/controllers/ActiveNotesController.drawActiveNote" class="btn btn-outline-success " type="submit"><i
                        class="mdi mdi-note-plus-outline"></i></button>
        </div>
        `
  }


  get ActiveNoteTemplate() {
    return `
        <div class="container border border-5 border-danger bg-info rounded-pill p-5">
        <div class="row text-center text-light px-5">
          <div class="col-12">
            <div class="row">
              <div class="col-4">
                <h1>${this.name}</h1>
                <p>Created At:</p>
                <p>Updated at: </p>
              </div>
              <div class="col-6">
                <textarea name="" id="" cols="60" rows="15" class="message rounded"
                  placeholder="Type whatever you want"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
  }




}