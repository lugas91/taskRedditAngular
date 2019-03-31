import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  },
  { path: '**', redirectTo: 'dashboard' },
];


const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config), NgbModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {}
