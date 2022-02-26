import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infinite-scroll-project';

  post: any = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    for(let i= 0; i<100; i++){
      this.post.push(i);
    }
  }

  onScroll(){
    const length = this.post.length;
    setTimeout(()=>{
      const p:any = ' '.repeat(100).split('').map((s,i)=>i+1 + length );
      while(p.length) this.post.push(p.shift());
    },1000);
  }
}
