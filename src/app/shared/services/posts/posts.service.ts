import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Post} from "../../models/post";

const posts: Post[] = new Array(10)
  .fill({})
  .map((post, index) => ({title: `Post title ${index}`, description: `Post Description ${index}`}))

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  loadPosts(): Observable<Post[]> {return of(posts);}

  loadPost(id: string): Observable<Post> {return of(posts[+id]);}
}
