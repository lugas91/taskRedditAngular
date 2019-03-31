import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  baseHost(){
    return "assets/json/";
  }

  changeNominal(data){
    let ss = parseInt(data);
    let rtn:string;
    if(ss >=1000000000) {
     rtn =   Math.round((ss / 1000000000) * 100)/100 +" km";
   }else if(ss >=1000000) {
     rtn =   Math.round((ss / 1000000) * 100)/100 +" m";
    }else if(ss >= 1000 ){
      rtn =   Math.round((ss / 1000) * 100)/100 +" k";
    }else{
      rtn = ss.toString();
    }
    Math.round(ss * 100) / 100
    return rtn;
  }



  setLocalStorage(name,values){
    localStorage.setItem(name, JSON.stringify(values));
  }

  getLocalStorage(name){
    var res = localStorage.getItem(name);
    return JSON.parse(res);
  }

  deleteLocalStorage(key){
    localStorage.removeItem(key);
  }

}
