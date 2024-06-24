import { ActiveNoteController } from "./controllers/ActiveNoteController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ActiveNoteController],
    view: ''

  }
])

// app/views/ActiveNote.html