import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { MatAutocompleteModule,MatFormFieldModule,MatInputModule,MatSelectModule } from '@angular/material';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'post',
      urls: [
        { title: 'post', url: '/post' },
        { title: 'post' }
      ]
    },
    component: PostComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    MatAutocompleteModule,MatFormFieldModule,MatInputModule,MatSelectModule
  ],
  declarations: [PostComponent]
})
export class PostModule {}
