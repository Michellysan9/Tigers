import { PaginaBuscadorComponent } from "./pages/pagina-buscador/pagina-buscador.component";
import { Book } from "./book";

let books: Array<object>;
let pBuscador = new PaginaBuscadorComponent()

pBuscador.nombresDeLibros.forEach((libro, index) => {
    let b: Book = { name: libro.replace('.pdf', ''), id: index, category: ' ', url: `../../../PDFs/${libro}` };
    books!.push(b)
});