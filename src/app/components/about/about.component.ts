import { Component } from '@angular/core';
import { ButtonComponent } from '@ng-juquinha/ui';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  handleScrollToElement(scrollTo: string) {
    const element = document.getElementById(scrollTo);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offset = 100;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  }
}
