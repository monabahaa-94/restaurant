import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from './service/categories.service';
import { Menu } from '../menu/model/menu.interface';


@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit{
private readonly categoriesService =inject (CategoriesService)
categorylist:string[]=[]
mealsbycategorylist:Menu[]=[]
getallcategoriesdata():void{
 this.categoriesService.getallcategories().subscribe({
next:(res)=>{
  console.log(res);
  this.categorylist=res
},
error:(err)=>{
  console.log(err);
  
}
  })
}
getmealsbycategorydata(catgoryname:string):void{
  this.categoriesService.getmealsbycategory(catgoryname).subscribe({
next:(res)=>{
  console.log(res.recipes);
  this.mealsbycategorylist=res.recipes

},
error:(err)=>{
  console.log(err);
  
}
  })
}
ngOnInit(): void {
    this.getallcategoriesdata()
}
}
