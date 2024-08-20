import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '99sale';

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.scroll();
    }
  }
  scroll() {
    window.addEventListener("scroll",()=>{
      let scrollY = window.pageYOffset;
      console.log('Vertical Scroll:', scrollY);
      if(scrollY > 299 ){
        document.getElementById("nav")?.style.setProperty(`position`,`sticky`)
        document.getElementById("nav")?.style.setProperty(`top`,`0`)
        document.getElementById("nav")?.style.setProperty(`transition`,`all 3s ease-in-out forward`)
      }else{
        document.getElementById("nav")?.style.removeProperty(`position`)
        document.getElementById("nav")?.style.setProperty(`transition`,`all 3s ease-in-out forward`)

      }
    })
  }
}
