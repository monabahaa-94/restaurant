import { Component, inject, OnInit } from '@angular/core';
import { DetailsService } from './service/details.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Menu } from '../menu/model/menu.interface';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit{
private readonly detailsService = inject(DetailsService)
private readonly activatedRoute = inject(ActivatedRoute)
id:string|null=null
mealdetails:Menu={}as Menu
getmealid():void{
  this.activatedRoute.paramMap.subscribe({
    next:(urlparams)=>{
      console.log(urlparams);
      this.id=urlparams.get('id')
    }
  })
}
getmealsdetailsdata():void{
  this.detailsService.getmealdetails(this.id).subscribe({
    next:(res)=>{
      console.log(res);
      this.mealdetails=res
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
ngOnInit(): void {
    this.getmealid()
    this.getmealsdetailsdata()
}
}
