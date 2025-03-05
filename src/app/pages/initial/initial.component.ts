import { Component } from '@angular/core';
import { AboutComponent } from '@components/about/about.component';
import { InstalationComponent } from '@components/instalation/instalation.component';

@Component({
  selector: 'app-initial',
  standalone: true,
  imports: [AboutComponent, InstalationComponent],
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.scss',
})
export class InitialComponent {}
