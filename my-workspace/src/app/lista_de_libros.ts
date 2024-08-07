import { Book } from "./book";
// categorias = ['Cuentos populares', 'Cuentos infantiles', 'Cuentos para jovenes y adultos', 'Poemas rimas y canciones', 'Juegos del lenguaje']

let books: Book[] = [
     {
          name: '¡A que te cojo ratón!', favorite: false, category: 'Para pensar y jugar',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/A_QUE_TE_COJO_RATON.pdf?alt=media&token=5651b64c-b138-45e2-bf0a-5cf95fccf92f',
          imgUrl: 'https://secretosparacontar.org/wp-content/uploads/2024/01/A-que-te-cojo-raton.webp',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Con los pelos de punta', favorite: false, category: 'Cuentos populares',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/CON_LOS_PELOS_DE_PUNTA.pdf?alt=media&token=a9ffd9a1-6c0e-4bf8-bea9-cedc70123804',
          imgUrl: '',
          saved: false, hasAudio: true, audioLink: 'https://widget.spreaker.com/player?show_id=4796884&theme=dark&playlist=show&playlist-continuous=true&chapters-image=true'
     },
     {
          name: 'Cuentos maravillosos', favorite: false, category: 'Cuentos populares',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/CUENTOS_MARAVILLOSOS.pdf?alt=media&token=94dfdf15-fb3a-48ee-a209-9d4520f41d4e',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Cuentos para contar', favorite: false, category: 'Cuentos populares',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/CUENTOS_PARA_CONTAR.pdf?alt=media&token=97ad5a5f-ad41-4ff1-beb0-ca5fde73056a',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Cuentos para desenredar enredos', favorite: false, category: 'Cuentos infantiles',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/CUENTOS_PARA_DESENREDAR_ENREDOS.pdf?alt=media&token=e92501f9-62b9-4ef3-a18a-3309da1d0697',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Del campo a la mesa', favorite: false, category: 'Recetas de cocina',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/DEL_CAMPO_A_LA_MESA.pdf?alt=media&token=4d898ecd-acb9-4561-88ed-884bc00971cd',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Entre cuento y cuento', favorite: false, category: 'Cuentos infantiles',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/ENTRE_CUENTO_Y_CUENTO.pdf?alt=media&token=5a2a79d4-7f1d-4910-b214-4d416f288321',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Erase una vez en Colombia', favorite: false, category: 'Literatura',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/ERASE_UNA_VEZ_EN_COLOMBIA.pdf?alt=media&token=a33124a4-5dc4-4984-8777-a81e2c6eacd7',
          imgUrl: '',
          saved: false, hasAudio: true, audioLink: 'https://widget.spreaker.com/player?show_id=5822929&theme=dark&playlist=show&playlist-continuous=true&chapters-image=true'
     },
     {
          name: 'La finca viva', favorite: false, category: 'Hogar y finca',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/LA_FINCA_VIVA.pdf?alt=media&token=3f630cbd-c625-4c4e-9cc4-0d2c3e581550',
          imgUrl: '',
          saved: false, hasAudio: true, audioLink: 'https://widget.spreaker.com/player?show_id=4796884&theme=dark&playlist=show&playlist-continuous=true&chapters-image=true'
     },
     {
          name: 'La tierra, el cielo y más allá', favorite: false, category: 'Ciencias',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/LA_TIERRA_EL_CIELO_Y_MAS_ALLA.pdf?alt=media&token=5537dd61-fb85-4cfc-9d62-d53d562b6baf',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Los secretos de las plantas', favorite: false, category: 'Hogar y finca',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/LOS_SECRETOS_DE_LAS_PLANTAS.pdf?alt=media&token=0d9b37ae-3c09-47cc-9a59-3bf257ef8440',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Los secretos de los animales', favorite: false, category: 'Ciencias',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/LOS_SECRETOS_DE_LOS_ANIMALES.pdf?alt=media&token=3c8a1775-b12e-4005-90ac-3cd54449d3bd',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Los viajes del viejo Jacobo', favorite: false, category: 'Cultura y curiosidades',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/LOS_VIAJES_DEL_VIEJO_JACOBO.pdf?alt=media&token=4eaf8202-d38b-4062-bb69-9bb81976e9d0',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Mas claro no canta un gallo', favorite: false, category: 'Cuentos populares',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/MAS_CLARO_NO_CANTA_UN_GALLO.pdf?alt=media&token=5de2738f-9faa-45ab-8d63-b9bc1d63000a',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Salud para contar 2024', favorite: false, category: 'Salud para contar',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/SALUD_PARA_CONTAR.pdf?alt=media&token=45e5b090-003a-4165-b4b9-de9770d9b053',
          imgUrl: 'https://secretosparacontar.org/wp-content/uploads/2024/01/Salud-para-contar.webp',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Tan distintos y parientes', favorite: false, category: 'Ciencias',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/TAN_DISTINTOS_Y_PARIENTES.pdf?alt=media&token=01562841-831e-4850-90d0-dc30e21f2e48',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Tiempo de hacer', favorite: false, category: 'Manualidades',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/TIEMPO_DE_HACER.pdf?alt=media&token=c0c09793-8eb5-4e76-88dd-b17693c82378',
          imgUrl: '',
          saved: false, hasAudio: false, audioLink: ''
     },
     {
          name: 'Todo lo contrario', favorite: false, category: 'Cuentos populares',
          url: 'https://firebasestorage.googleapis.com/v0/b/secretos-101.appspot.com/o/TODO_LO_CONTRARIO.pdf?alt=media&token=c3706b94-ea39-4f7d-bc0b-5f4bb19efbd9',
          imgUrl: '',
          saved: false, hasAudio: true, audioLink: 'https://widget.spreaker.com/player?show_id=4796884&theme=dark&playlist=show&playlist-continuous=true&chapters-image=true'
     }
]

books.forEach(book => {
     if (book.imgUrl == '') {
          book.imgUrl = `${book.name}.webp`;
     }
});

export { books }