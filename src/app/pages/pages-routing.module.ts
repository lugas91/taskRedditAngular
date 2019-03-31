import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'dashboard/:type',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'detail/:id',
        loadChildren: './detail/detail.module#DetailModule'
      },
      {
        path: 'post',
        loadChildren: './post/post.module#PostModule'
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      },
      {
        path:'**',
        redirectTo:'dashboard'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
