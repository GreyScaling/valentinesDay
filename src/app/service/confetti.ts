import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  public launchConfetti(): void {
    confetti({
      particleCount: 2550,
      spread: 10,
    });
  }
  
  // You can add more complex functions here (e.g., specific angles, attached to an element)
}