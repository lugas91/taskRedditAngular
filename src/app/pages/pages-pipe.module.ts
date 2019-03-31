import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {
  SortPipe,
  SortdescPipe,
  SearchPipe,
} from './../pipe';

const PIPES = [
  SortPipe,
  SearchPipe,
  SortdescPipe,
];


@NgModule({
  imports: [
  ],
  declarations: [
    ...PIPES
  ],
  exports: [...PIPES],
})

export class PagesPipeModule {
}
