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
  routerParam !: string;
  constructor(private route: ActivatedRoute) {
   this.route.queryParams.subscribe({
    next:(queryParameter)=>{
      this.routerParam = queryParameter['name']
      if(this.routerParam!=null){
        this.getdata(this.routerParam)
      }
    }
   })

   
  }

getdata(parameter1: any){
  console.log(parameter1);
}
  

}
