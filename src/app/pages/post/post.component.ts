import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';



@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],

})
export class PostComponent {
  public editorContent;
  public title;
  public drft = 0;
  public idDraft = 0;

  constructor(
    private _http:HttpClient,
    private _route:Router,
    private _global:GlobalService,
  ) {}

  ngOnInit(){
    this.getData();
    this.getDraft();
  }

  listTag;
  cat;
  getData(){
    this._http.get(this._global.baseHost()+"sideMenuCategory.json")
      .subscribe(
        (data:any) => {
          console.log(data);
          this.listTag = data;
        },
        error => {
        }
      )
  }

  getDraft(){
    if(this._global.getLocalStorage('draft') != undefined){
      this.drft = this._global.getLocalStorage('draft').length;
    }
  }

  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: true,
    charCounterMax: 255
  }

  alert;
  msg;
  btn(){
    if(this.editorContent != '' && this.title != '' && this.cat != undefined){

      let ss = this._global.getLocalStorage('data');

      if(ss == undefined){
        let data = [{
          "id":"1",
          "title": this.title,
          "content":this.editorContent,
          "rate":"0",
          "date":new Date(),
          "image":"socialbg.jpg",
          "comments":[],
          "category":this.cat
        }];
        this._global.setLocalStorage('data',data);
      }else{
        let sds = ss.length;
        let data = {
          "id":sds+1,
          "title": this.title,
          "content":this.editorContent,
          "rate":"0",
          "date":new Date(),
          "image":"socialbg.jpg",
          "comments":[],
          "category":this.cat
        }
        ss.push(data);
        this._global.setLocalStorage('data',ss);
      }
      this.alert=true;
      this.msg = "success";
      this.title='';
      this.editorContent='';
    }
    else{
      this.msg = "please insert title and post text and Category";
      this.alert=true;
    }
  }


  drf(){
    if(this.editorContent != '' && this.title != ''){
      let ss = this._global.getLocalStorage('draft');
      if(this.idDraft == 0){
        if(ss == undefined){
          this.idDraft = 1;

          let data = [{
            "draftId":"1",
            "title": this.title,
            "subtitle":this.editorContent,
            "tag":["asdasd"]
          }];
          this._global.setLocalStorage('draft',data);
        }else{
          this.idDraft = ss.length+1;

          let data = {
            "draftId":ss.length+1,
            "title": this.title,
            "subtitle":this.editorContent,
            "tag":["asdasd"]
          }
          ss.push(data);
          this._global.setLocalStorage('draft',ss);
        }
      }else{
        let sdsaa=0;
        for (let i = 0; i < ss.length; i++) {
          if(parseInt(ss[i].draftId) == this.idDraft){
            sdsaa = i;
            break;
          }
        }

        ss[sdsaa].title = this.title;
        ss[sdsaa].subtitle = this.editorContent;
        this._global.setLocalStorage('draft',ss);
      }

      this.drft = this._global.getLocalStorage('draft').length;
      this.msg = "Draft Saved";
      this.alert=true;
    }
    else{
      this.msg = "please insert title and post text";
      this.alert=true;
    }
  }

}
