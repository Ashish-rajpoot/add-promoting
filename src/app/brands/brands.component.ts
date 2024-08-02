import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
constructor (private route : ActivatedRoute){
  this.route.params.subscribe((val)=>{
    console.log(val)
  })
}
}
