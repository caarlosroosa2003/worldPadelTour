import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
    selector: 'app-historia',
    standalone: true,
    templateUrl: './historia.component.html',
    styleUrl: './historia.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class HistoriaComponent {

}
