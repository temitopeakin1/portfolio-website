import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  // styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenuVisible: boolean = false;

  toggleMobileMenu(): void {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }
}