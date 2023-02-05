import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  exibir: boolean = true;
  toggleShow() {
    this.exibir = !this.exibir;
  }
}
