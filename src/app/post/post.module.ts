import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostCardModule} from "../shared/components/post-card/post-card.module";

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    PostCardModule
  ]
})
export class PostModule { }
