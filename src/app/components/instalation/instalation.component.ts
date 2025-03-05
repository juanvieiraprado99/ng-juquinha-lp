import { Component, signal } from '@angular/core';
import { CodeBlockComponent } from '../code-block/code-block.component';

@Component({
  selector: 'app-instalation',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './instalation.component.html',
  styleUrl: './instalation.component.scss',
})
export class InstalationComponent {
  tabs = signal<{ label: string; value: string | number }[]>([
    {
      label: 'npm',
      value: 'npm install @ng-juquinha/ui',
    },
    {
      label: 'pnpm',
      value: 'pnpm add @ng-juquinha/ui',
    },
    {
      label: 'bun',
      value: 'bun install @ng-juquinha/ui',
    },
  ]);

  style = signal([
    {
      label: '',
      value: `"styles": [
            "node_modules/@ng-juquinha/ui/assets/themes/juquinha/theme.scss"
          ],`,
    },
  ]);

  useComponent = signal([
    {
      label: '',
      value: "import { ButtonComponent } from '@ng-juquinha/ui';",
    },
  ]);
}
