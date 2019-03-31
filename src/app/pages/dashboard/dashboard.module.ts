import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PagesPipeModule } from './../pages-pipe.module';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'dashboard',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Dashboard' }
      ]
    },
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    PagesPipeModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
