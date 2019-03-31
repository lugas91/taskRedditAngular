import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
import { GlobalService } from '../../services/global.service';



@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent {
  param;


  constructor(
    private _http:HttpClient,
    private _route:Router,
    private route:ActivatedRoute,
    private _global:GlobalService,
  ) {}

  ngOnInit(){
    this.route.paramMap.subscribe( params =>{
      this.param = params.get('type');
      this.listData = this._global.getLocalStorage('data');
      if(this.listData != undefined){
        for (let i = 0; i < this.listData.length; i++) {
          this.listData[i].commentLength = this.listData[i].comments.length;
        }
        if(this.param != null){
          this.listData = undefined;
          this.listData = [];
          for (let i = 0; i < this._global.getLocalStorage('data').length; i++) {
            if( this.param.toLowerCase() == this._global.getLocalStorage('data')[i].category.toLowerCase()){
              this.listData.push(this._global.getLocalStorage('data')[i]);
            }
          }
        }
      }
      if(this.listData == undefined){
        this.getData();
      }
    });
  }

underCont;
  mn='rate';
  listData;
  getData(){
    this._http.get(this._global.baseHost()+"data.json")
      .subscribe(
        (data:any) => {
          for (let i = 0; i < data.length; i++) {
              data[i].commentLength = data[i].comments.length;
          }
          this._global.setLocalStorage('data',data);
          this.listData = data;
          this.listData = undefined;
          this.listData = [];
          for (let i = 0; i < this._global.getLocalStorage('data').length; i++) {
            if( this.param.toLowerCase() == this._global.getLocalStorage('data')[i].category.toLowerCase()){
              this.listData.push(this._global.getLocalStorage('data')[i]);
            }
          }
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
    this._global.setLocalStorage('data',this.listData);
  }

  rateDown(i){
    let ss = this.listData[i].rate;
    ss = parseInt(ss);
    ss--;
    let rtn:string = ss.toString();
    this.listData[i].rate = rtn;
    this._global.setLocalStorage('data',this.listData);
  }

  ssd(data){
    let ss = data.split("<p>");
    let dd;
    for (let i = 0; i < ss.length; i++) {
        if(ss[i] !== ''){
           dd = ss[i].replace('<p>','/');
           break;
        }
    }
    return dd.substring(0, 25)+"..."
  }

}
