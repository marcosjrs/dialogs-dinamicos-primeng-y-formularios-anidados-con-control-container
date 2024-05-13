import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonDynamicDialogComponent } from "./person-dynamic-dialog/person-dynamic-dialog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonDynamicDialogComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
