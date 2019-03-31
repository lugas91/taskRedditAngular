import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
import { GlobalService } from '../../services/global.service';



@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],

})
export class DetailComponent {
  public  param;

  constructor(
    private _http:HttpClient,
    private _route:Router,
    private route:ActivatedRoute,
    private _global:GlobalService,
  ) {}

  ngOnInit(){
    this.route.paramMap.subscribe( params =>{
      this.param = params.get('id');
      this.getData();
    });
  }

  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: true,
    charCounterMax: 255
  }

  data;
  public idx;
  getData(){
    // this._http.get(this._global.baseHost()+"data1.json")
    //   .subscribe(
    //     (data:any) => {
    //       console.log(data);
    //       this.data = data;
    //     },
    //     error => {
    //     }
    //   )
    let sds = this._global.getLocalStorage('data');
    for (let i = 0; i < sds.length; i++) {
        if(sds[i].id == this.param){
          this.data = sds[i];
          this.idx = i;
          break;
        }
    }
  }

  editorContent='';
  cmt(){
    if(this.editorContent != ''){
      let ss = this._global.getLocalStorage('data');
      let dts = {
          "date":new Date(),
          "comment":this.editorContent
      };
      ss[this.idx].comments.push(dts);
      this._global.setLocalStorage('data',ss);
      this.editorContent = '';
      this.getData();
    }
  }

  changeNominal(data){
    return this._global.changeNominal(data);
  }

  rateUp(){
    let ss = this.data.rate;
    ss = parseInt(ss);
    ss++;
    let rtn:string = ss.toString();
    this.data.rate = rtn;
    let sds = this._global.getLocalStorage('data');
    sds[this.idx].rate = rtn;
    this._global.setLocalStorage('data',sds);
  }

  rateDown(){
    let ss = this.data.rate;
    ss = parseInt(ss);
    ss--;
    let rtn:string = ss.toString();
    this.data.rate = rtn;
    let sds = this._global.getLocalStorage('data');
    sds[this.idx].rate = rtn;
    this._global.setLocalStorage('data',sds);
  }

}
