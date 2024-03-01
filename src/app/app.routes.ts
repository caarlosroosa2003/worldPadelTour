import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JugadoresComponent } from './domains/pages/jugadores/jugadores.component';
import { HomeComponent } from './domains/pages/home/home.component';
import { HistoriaComponent } from './domains/pages/historia/historia.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "historia", component: HistoriaComponent},
    {path: "jugadores", component: JugadoresComponent}
];
