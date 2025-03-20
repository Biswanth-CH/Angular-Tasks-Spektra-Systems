import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from 'my-lib'; // Import the Comp4Component


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Comp1Component, Comp2Component, Comp3Component,Comp4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Assignment';
}