import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  // this is for the open close
  isActive = true;
  showMenu = '';
  showSubMenu = '';

  constructor(
    private _http:HttpClient,
    private _route:Router,
    private _global:GlobalService,
  ) {}

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
      console.log(this.showMenu);
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }
  eventCalled() {
    this.isActive = !this.isActive;
  }

  ngOnInit(){
    this.getData();
  }

    listData;
    getData(){
      this._http.get(this._global.baseHost()+"sideMenuCategory.json")
        .subscribe(
          (data:any) => {
            this.listData = data;
          },
          error => {
          }
        )
    }

  // End open close
  ngAfterViewInit() {
    $(function() {
      $('.sidebartoggler').on('click', function() {
        if ($('body').hasClass('mini-sidebar')) {
          $('body').trigger('resize');
          $('.scroll-sidebar, .slimScrollDiv')
            .css('overflow', 'hidden')
            .parent()
            .css('overflow', 'visible');
          $('body').removeClass('mini-sidebar');
          $('.navbar-brand span').show();
          // $(".sidebartoggler i").addClass("ti-menu");
        } else {
          $('body').trigger('resize');
          $('.scroll-sidebar, .slimScrollDiv')
            .css('overflow-x', 'visible')
            .parent()
            .css('overflow', 'visible');
          $('body').addClass('mini-sidebar');
          $('.navbar-brand span').hide();
          // $(".sidebartoggler i").removeClass("ti-menu");
        }
      });
    });
  }
}
