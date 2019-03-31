import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from '../../../services/global.service';



@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent {

  constructor(
    private _http:HttpClient,
    private _route:Router,
    private _global:GlobalService,
  ) {}

  ngOnInit(){
    this.getData();
  }

  listData;
  getData(){
    this._http.get(this._global.baseHost()+"data.json")
      .subscribe(
        (data:any) => {
          console.log(data);
          this.listData = data;
        },
        error => {
        }
      )
  }

  changeNominal(data){
    return this._global.changeNominal(data);
  }

  rateUp(i){
    let ss = this.listData[i].rate;
    ss = parseInt(ss);
    ss++;
    let rtn:string = ss.toString();
    this.listData[i].rate = rtn;
  }

  rateDown(i){
    let ss = this.listData[i].rate;
    ss = parseInt(ss);
    ss--;
    let rtn:string = ss.toString();
    this.listData[i].rate = rtn;
  }

}
