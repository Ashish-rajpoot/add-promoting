import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"brands",component:BrandsComponent},
    {path:"brands/:name",component:BrandsComponent},
    {path:"**",component:HomeComponent}
];
