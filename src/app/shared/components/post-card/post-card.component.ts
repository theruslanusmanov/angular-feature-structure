import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Post} from "../../models/post";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent {
  @Input() post: Post = {} as Post;
}
