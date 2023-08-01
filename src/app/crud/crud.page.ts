import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  data:any[] =[];
  constructor(
    private localStorageService:LocalStorageService,
    router:ActivatedRoute
  ) { 
    router.params.subscribe(async (a)=>
      this.getAllData()
    )
  }

   async getAllData() {
    const data = await this.localStorageService.getAllData();
    this.data = data;
  }

 ngOnInit():void {
     this.getAllData();
  }
  edit(i:any){
    
  }
  
  delete(i:any){
    console.log(i);
    
    this.localStorageService.deleteData(i)
    this.ngOnInit()
  }
}