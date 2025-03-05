import { NgClass } from '@angular/common';
import { Component, input, OnInit, signal } from '@angular/core';
import { IconComponent } from '@ng-juquinha/ui';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [IconComponent, NgClass],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss',
})
export class CodeBlockComponent implements OnInit {
  tabs = input<any>(undefined);
  label = input('');

  code = signal<{ label: string; value: string | number }>({
    label: 'npm',
    value: 'npm install @ng-juquinha/ui',
  });

  isCopied = signal(false);

  ngOnInit(): void {
    this.code.set(this.tabs()[0]);
  }

  handleSwitchInstall(badge: any) {
    this.code.set(badge);
  }

  handleCopyInstallCommand() {
    navigator.clipboard.writeText(this.code().value as string);

    this.isCopied.set(true);

    setTimeout(() => {
      this.isCopied.set(false);
    }, 2000);
  }
}
