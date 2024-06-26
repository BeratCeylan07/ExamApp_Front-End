import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputValidatorService {

  constructor() { }

  validateInput(event: any): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Sadece rakam olup olmadığını kontrol et
    if (!/^\d*$/.test(value)) {
      input.value = value.replace(/\D/g, '');
    }

    // 4 karakterden fazlaysa kes
    if (value.length > 4) {
      input.value = value.substring(0, 4);
    }
  }
}
