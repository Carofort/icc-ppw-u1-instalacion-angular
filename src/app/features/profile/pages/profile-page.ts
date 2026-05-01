import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  templateUrl: './profile-page.html',
})
export class ProfilePage {
  readonly firstName = signal('Juan');
  readonly lastName = signal('Pérez');
  readonly age = signal(30);
  readonly skills = signal(['Angular', 'TypeScript', 'HTML']);

  readonly fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
}