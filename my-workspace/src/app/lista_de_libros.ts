import { Book } from "./book";
// categorias = ['Cuentos populares', 'Cuentos infantiles', 'Cuentos para jovenes y adultos', 'Poemas rimas y canciones', 'Juegos del lenguaje']

let books: Book[] = [
    { name: '¡A que te cojo ratón!', favorite: false, category: 'Para pensar y jugar', url: 'assets/PDFs/A que te cojo raton.pdf', imgUrl: 'https://secretosparacontar.org/wp-content/uploads/2024/01/A-QUE-TE-COJO.webp', saved:false, hasAudio:true },
    { name: 'Con los pelos de punta', favorite: false, category: 'Cuentos populares', url: 'assets/PDFs/Con los pelos de punta.pdf', imgUrl: '', saved:false, hasAudio:false },
    { name: 'Cuentos maravillosos', favorite: false, category: 'Cuentos populares', url: 'assets/PDFs/Cuentos maravillosos.pdf', imgUrl: '', saved:false, hasAudio:false },
    { name: 'Cuentos para contar', favorite: false, category: 'Cuentos populares', url: 'assets/PDFs/Cuentos para contar.pdf', imgUrl: '', saved:false, hasAudio:true },
    { name: 'Cuentos para desenredar enredos', favorite: false, category: 'Cuentos infantiles', url: 'assets/PDFs/Cuentos para desenredar enredos.pdf', imgUrl: '', saved:false, hasAudio:false },
    { name: 'Del campo a la mesa', favorite: false, category: 'Recetas de cocina', url: 'assets/PDFs/Del campo a la mesa.pdf', imgUrl: '', saved:false, hasAudio:true },
    { name: 'Entre cuento y cuento', favorite: false, category: 'Cuentos infantiles', url: 'assets/PDFs/Entre cuento y cuento.pdf', imgUrl: '', saved:false, hasAudio:false },
    { name: 'Erase una vez en Colombia', favorite: false, category: 'Literatura', url: 'assets/PDFs/Erase una vez en Colombia.pdf', imgUrl: '', saved:false, hasAudio:true },
    { name: 'La finca viva', favorite: false, category: 'Hogar y finca', url: 'assets/PDFs/La finca viva.pdf', imgUrl: 'PORTADA-LA-FINCA-VIVA.', saved:false, hasAudio:false },
    { name: 'La tierra, el cielo y más allá', favorite: false, category: 'Ciencias', url: 'assets/PDFs/La tierra, el cielo y mas alla.pdf', imgUrl: '', saved:false, hasAudio:true },
    { name: 'Los secretos de las plantas', favorite: false, category: 'Hogar y finca', url: 'assets/PDFs/Los secretos de las plantas.pdf', imgUrl: '', saved:false, hasAudio:false },
    { name: 'Los secretos de los animales', favorite: false, category: 'Ciencias', url: 'assets/PDFs/Los secretos de los animales.pdf', imgUrl: '', saved:false, hasAudio:true },
    { name: 'Los viajes del viejo Jacobo', favorite: false, category: 'Cultura y curiosidades', url: 'assets/PDFs/Los viajes del viejo Jacobo.pdf', imgUrl: '', saved:false, hasAudio:false },
    { name: 'Mas claro no canta un gallo', favorite: false, category: 'Cuentos populares', url: 'assets/PDFs/Mas claro no canta un gallo.pdf', imgUrl: '', saved:false, hasAudio:false },
    { name: 'Salud para contar 2024', favorite: false, category: 'Salud para contar', url: 'assets/PDFs/Salud para contar 2024.pdf', imgUrl: 'https://secretosparacontar.org/wp-content/uploads/2024/01/portada-Salud-para-contar.webp', saved:false, hasAudio:false },
    { name: 'Tan distintos y parientes', favorite: false, category: 'Ciencias', url: 'assets/PDFs/Tan distintos y parientes.pdf', imgUrl: '', saved:false, hasAudio:false },
    { name: 'Tiempo de hacer', favorite: false, category: 'Manualidades', url: 'assets/PDFs/Tiempo de hacer.pdf', imgUrl: '', saved:false, hasAudio:false },
    { name: 'Todo lo contrario', favorite: false, category: 'Cuentos populares', url: 'assets/PDFs/Todo lo contrario.pdf', imgUrl: '', saved:false, hasAudio:false }
]

books.forEach(book => {
    if (book.name != '¡A que te cojo ratón!'  && book.name != 'Salud para contar 2024') {
        book.imgUrl = `${book.name}.webp`
    }
})
export { books }