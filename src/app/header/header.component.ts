import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(){
  }
  mouseOver(event:Event):void{
    const target = event.target as HTMLElement;
    const parentElement = target.parentElement as HTMLElement;
    parentElement.classList.add("active")
    parentElement.setAttribute("open","true")
  }
  mouseLeave(event:Event):void{
    const target = event.target as HTMLElement;
    target.removeAttribute("open")
    target.classList.remove("active")

  }
}

