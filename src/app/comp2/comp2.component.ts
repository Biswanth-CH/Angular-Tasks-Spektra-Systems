import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-comp2',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',
})
export class Comp2Component {
  inputText = '';
}







