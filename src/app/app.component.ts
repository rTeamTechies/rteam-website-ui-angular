import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website-angular-way';
  public hideScrollToTop: boolean = true;

  constructor() {
    window.addEventListener('scroll', this.scrollEvent, true)
  }


  scrollEvent = (event: any): void => {
    if (event.srcElement.scrollingElement != undefined) {
      var n = event.srcElement.scrollingElement.scrollTop;
      if (n > 200) {
        this.hideScrollToTop = false;
      } else {
        this.hideScrollToTop = true;
      }
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  scrollToOurServices(){
    document?.getElementById("ourServices")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  scrollToOurPortfolio(){
    document?.getElementById("ourProducts")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  scrollToAboutUs(){
    document?.getElementById("aboutUs")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  
}
