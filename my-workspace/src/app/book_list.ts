import * as fs from 'fs';
import * as path from 'path';
import { Book } from './book';

const booksFolder = './books'; // path to the PDF folder

const books: Book[] = [];

fs.readdirSync(booksFolder).forEach((file) => {
  const bookName = path.basename(file, '.pdf');
  const bookUrl = `./${booksFolder}/${file}`;
  const bookCategory = 'Fiction'; // default category, can be updated later
  books.push({ id: books.length + 1, name: bookName, category: bookCategory, url: bookUrl });
});

export {books}