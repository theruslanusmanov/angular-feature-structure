import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Post} from "../shared/models/post";
import {PostsService} from "../shared/services/posts/posts.service";

const listAnimation = trigger('list', [
  transition(':enter', [
    query(
      ':enter',
      [
        style({opacity: 0, transform: 'translate(0px, -10px)'}),
        stagger('60ms', [
          animate('300ms ease-out', style({opacity: 1, transform: 'translate(0px, 0px)'}))
        ]),
      ],
      {optional: true}
    ),
  ]),
])

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [listAnimation]
})
export class FeedComponent implements OnInit {
  posts$: Observable<Post[]> = of([]);

  constructor(private posts: PostsService) { }

  ngOnInit(): void {this.posts$ = this.posts.loadPosts();}
}
