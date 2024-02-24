import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { LeftAsideComponent } from './leftaside/leftaside.component';
import { MainBody } from './mainbody/mainbody.component'
import { RightMain } from './rightmain/rightmain.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,LeftAsideComponent,MainBody,RightMain],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_test';
}
