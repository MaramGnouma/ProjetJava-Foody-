import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'dashboard-angular';

  constructor() {}
  ngAfterViewInit(): void {
    const list = document.querySelectorAll(".navigation li");

    function activeLink(this: Element) {
      list.forEach((item) => item.classList.remove("hovered"));
      this.classList.add("hovered");
    }

    list.forEach((item) =>
      item.addEventListener("mouseover", activeLink)
    );

    const toggle = document.querySelector('.toggle') as HTMLElement;
    const navigation = document.querySelector('.navigation') as HTMLElement;
    const main = document.querySelector('.main') as HTMLElement;
    const logoImg = document.querySelector('.navigation ul li:first-child a span.icon img') as HTMLElement;

    if (logoImg) {
      logoImg.style.transition = "width 0.3s ease-in-out, height 0.3s ease-in-out";
    }

    if (toggle) {
      toggle.onclick = () => {
        navigation?.classList.toggle("active");
        main?.classList.toggle("active");

        if (logoImg) {
          const isActive = navigation?.classList.contains("active");
          logoImg.style.width = isActive ? "80px" : "130px";
          logoImg.style.height = isActive ? "80px" : "120px";
        }
      };
    }
  }
}
