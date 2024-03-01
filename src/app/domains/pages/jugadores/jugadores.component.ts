import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
    selector: 'app-jugadores',
    standalone: true,
    templateUrl: './jugadores.component.html',
    styleUrl: './jugadores.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class JugadoresComponent {

}
