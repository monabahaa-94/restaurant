import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { MenuComponent } from './feature/menu/menu.component';
import { NotfoundComponent } from './feature/notfound/notfound.component';
import { CategoriesComponent } from './feature/categories/categories.component';
import { DetailsComponent } from './feature/details/details.component';


export const routes: Routes = [
    {path:'',redirectTo:'menu',pathMatch:'full'},
   
    {path:'',component:MainlayoutComponent,children:[
        {path:'menu',component:MenuComponent,title:'Menu Page'},
        {path:'categories',component:CategoriesComponent,title:'Categories Page'},
        {path:'details/:id',component:DetailsComponent,title:'Details Page'}
    ]},
    {path:'**',component:NotfoundComponent,title:'Not Found Page'}
];
