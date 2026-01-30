import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ConfettiService } from '../service/confetti';

@Component({
  selector: 'app-question-component',
  standalone: false,
  templateUrl: './question-component.html',
  styleUrl: './question-component.css',
})
export class QuestionComponent {

  constructor(  private cdr: ChangeDetectorRef, private confettiService: ConfettiService) {}

errorMessage: string | null = null;
wrongAnswerCount: number = 0;
noButton = document.getElementById('wrongButton') as HTMLElement;
blkmailImageUrl: string = 'https://i.postimg.cc/fy5Ffn7T/20251018_101840.jpg';
valentinesText: string = "Will you be my Valentine? ❤️";
errorElement = document.querySelector('.error');
cat1GifUrl: string = 'assets/cat1.gif';
cat2GifUrl: string = 'assets/cat2.gif';
yesCatGifUrl: string = 'assets/yesCat.gif';


 onYes() {
  if (this.errorMessage != null) {
    this.errorMessage = "I WILL REMEMBER THIS!";
    
    this.valentinesText = "Thank you for being my Valentine! ❤️";
    this.cdr.detectChanges();
  }
   this.showCatGif(this.yesCatGifUrl);
    this.confettiService.launchConfetti();
    this.confettiService.launchConfetti();
    this.confettiService.launchConfetti();
    this.confettiService.launchConfetti();
    this.confettiService.launchConfetti();


  }


onNo() {
  this.wrongAnswerCount++;
  switch (this.wrongAnswerCount) {
  case 1:
    this.errorMessage = "Looks like you've reached your max number of 'No' attempts.";
    break;
  case 2:
    this.errorMessage = "Hmm, looks like you're smarter than I thought!";
    break;
  case 3:
    this.errorMessage = "Third time's the charm, but not for 'No'!";
    break;
  case 4:
    this.errorMessage = "It looks like you're having trouble seeing because why else would you keep clicking 'No'?";
    break;
  case 5:
    this.errorMessage = "I dont think you understand the concept of Valentine's Day.";
    break;
  case 6:
      this.errorMessage = "If you click 'No' one more time, I might have to send this photo of you to everyone you know.";
      this.showImageBlackmail("30%");
      this.valentinesText = "Now, what will your choice be?"
    break;
    case 7:
      alert("You've been warned! Sending the photo now!!!!!!!!!!!!!!!!!!.");
      this.showImageBlackmail("600%");
      break;
  }
  this.cdr.detectChanges();
}


showImageBlackmail(size: string) {
  const blkmailImage = document.createElement('img');
  blkmailImage.src = 'https://i.postimg.cc/fy5Ffn7T/20251018_101840.jpg';
  blkmailImage.style.position = 'fixed';
  blkmailImage.style.top = '50%';
  blkmailImage.style.left = '50%';
  blkmailImage.style.transform = 'translate(-50%, -50%)';
  blkmailImage.style.zIndex = '1001';
  blkmailImage.style.maxWidth = size;
  blkmailImage.style.maxHeight = size;
  blkmailImage.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  blkmailImage.style.border = '1px solid white';
  document.body.appendChild(blkmailImage);
  //Close the image on click

  blkmailImage.addEventListener('click', () => {
    document.body.removeChild(blkmailImage);
    this.cdr.detectChanges();
  });
}

showCatGif(gifUrl: string) {
  const catGif = document.createElement('img');
  catGif.src = gifUrl;
  catGif.style.position = 'fixed';
  catGif.style.bottom = '50px';
  catGif.style.right = '50px';
  catGif.style.width = '550px';
  catGif.style.height = '550px';
  catGif.style.zIndex = '1001';
  document.body.appendChild(catGif);
  //Remove the gif after 5 seconds
  setTimeout(() => {
    document.body.removeChild(catGif);
    this.cdr.detectChanges();
  }, 5000);
}



}
