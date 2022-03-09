import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private novoUsuarioService: NovoUsuarioService) {}

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((noomeUsuario) =>
          this.novoUsuarioService.verificaUsuarioExistente(noomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }
}
