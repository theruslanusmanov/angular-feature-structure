import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {Post} from "../shared/models/post";
import {PostsService} from "../shared/services/posts/posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  postId = this.route.snapshot.params["id"];
  post$: Observable<Post> = of({} as Post)

  constructor(private posts: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {this.post$ = this.posts.loadPost(this.postId)}
}
