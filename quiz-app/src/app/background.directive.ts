import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
@Input() correctAnswer: boolean = false;
  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClicking(){
    if(this.correctAnswer)
      this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'green');
    else
      this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'red');

  }
}
