import { Routes } from '@angular/router';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { PaginaBuscadorComponent } from './pages/pagina-buscador/pagina-buscador.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'biblioteca', component: BibliotecaComponent},
    { path: 'buscador', component: PaginaBuscadorComponent},
    { path: '', component: HomeComponent}
];
