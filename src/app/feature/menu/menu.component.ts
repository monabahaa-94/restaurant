import { Component, inject, OnInit } from '@angular/core';
import { MenuService } from './service/menu.service';
import { Menu } from './model/menu.interface';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../shared/pipes/search-pipe';

@Component({
  selector: 'app-menu',
  imports: [RouterLink,FormsModule,SearchPipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
private readonly menuService = inject(MenuService)
menulist:Menu[]=[]
 searchWord = '';
getallmenudata():void{
  this.menuService.gatallmenu().subscribe({
    next:(res)=>{
      console.log(res)
      this.menulist=res.recipes
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
ngOnInit(): void {
    this.getallmenudata()
}
}
