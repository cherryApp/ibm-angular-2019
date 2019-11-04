import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic';
  isButtonDisabled = false;
  user = {
    name: 'Kiss Pista',
    age: 44,
    email: 'kiss.pista@gmail.com',
    address: 'Szfvár. Dankó Pista u.',
  };

  constructor() {
    const titles: string[] = ['basic', 'expert'];
    let index = 0;
    setInterval( () => {
      index = index === 0 ? 1 : 0;
      this.title = titles[index];
      this.isButtonDisabled = !this.isButtonDisabled;
    }, 2000);
  }

  showAlert(event: MouseEvent): void {
    const name = (event.target as HTMLButtonElement).getAttribute('data-city');
    alert(`${name} is awesome!`);
  }
}
