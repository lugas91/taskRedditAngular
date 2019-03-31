import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { DetailComponent } from './detail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'detail',
      urls: [
        { title: 'detail', url: '/detail' },
        { title: 'detail' }
      ]
    },
    component: DetailComponent
  }
];

@NgModule({
  imports: [FormsModule,
     CommonModule,
     RouterModule.forChild(routes),
     FroalaEditorModule.forRoot(),
     FroalaViewModule.forRoot(),
   ],
  declarations: [DetailComponent]
})
export class DetailModule {}
