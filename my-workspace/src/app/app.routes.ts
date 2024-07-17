import { Routes } from '@angular/router';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { PaginaBuscadorComponent } from './pages/pagina-buscador/pagina-buscador.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AccesibleComponent } from './pages/accesible/accesible.component';
import { AudiolibrosComponent } from './pages/audiolibros/audiolibros.component';

export const routes: Routes = [
    { path: 'biblioteca', component: BibliotecaComponent },
    { path: 'buscador', component: PaginaBuscadorComponent },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'accesible', component: AccesibleComponent },
    { path: 'audiolibros', component: AudiolibrosComponent }
];
