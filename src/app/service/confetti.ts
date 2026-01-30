import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  public launchConfetti(particleCount_: number , spread_: number): void {
    confetti({
      particleCount: particleCount_ ,
      spread: spread_,
    });
  }
  
  // You can add more complex functions here (e.g., specific angles, attached to an element)
}