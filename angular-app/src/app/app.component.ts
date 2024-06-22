import { Component } from '@angular/core';
import { CustomersComponent } from './customers/customers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomersComponent],
  template: `<app-customers>`,
})
export class AppComponent {
  title = 'angular-app';
}
