import { Routes } from '@angular/router';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { PaginaBuscadorComponent } from './pages/pagina-buscador/pagina-buscador.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AccesibleComponent } from './pages/accesible/accesible.component';
import { BookPageComponent } from './pages/book-page/book-page.component';

export const routes: Routes = [
    { path: 'biblioteca', component: BibliotecaComponent },
    { path: 'buscador', component: PaginaBuscadorComponent },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'book/:name', component: BookPageComponent}
];
