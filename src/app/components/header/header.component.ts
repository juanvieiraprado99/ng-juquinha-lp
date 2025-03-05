import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { GithubRepository } from '@interfaces/github';
import { ButtonComponent } from '@ng-juquinha/ui';
import { GithubService } from '@services/github.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private readonly githubService = inject(GithubService);

  githubRepositoryInfo = signal<undefined | GithubRepository>(undefined);

  pages = signal([
    {
      label: 'Componentes',
      value: '/componentes',
    },
  ]);

  ngOnInit(): void {
    this.githubService.getRepositoryInfo().subscribe({
      next: (res) => {
        this.githubRepositoryInfo.set(res);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
    });
  }

  handleScrollToElement(scrollTo: string) {
    const element = document.getElementById(scrollTo);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offset = 100;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
