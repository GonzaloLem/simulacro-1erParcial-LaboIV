import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

export const loginGuard: CanActivateFn = (route, state) => {
  return Inject(UsuarioService).logueado;
};
