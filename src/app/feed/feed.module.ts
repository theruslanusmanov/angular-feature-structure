import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostCardModule} from "../shared/components/post-card/post-card.module";

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    PostCardModule
  ]
})
export class FeedModule { }
