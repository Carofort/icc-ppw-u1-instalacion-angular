import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section>
      <h1>PPW Angular 21</h1>
      <p>Proyecto incremental listo para crecer.</p>
      <hr>
      <!-- Paso 6: Enlace a la nueva feature -->
      <a href="/profile">Ver Perfil Profesional</a>
    </section>
  `,
})
export class HomePage {}