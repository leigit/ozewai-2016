import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

   public visible = false;
   private visibleAnimate = false;

   public show(): void {
     this.visible = true;
     setTimeout(() => this.visibleAnimate = true);
   }

   public hide(): void {
     this.visibleAnimate = false;
     setTimeout(() => this.visible = false, 300);

   }

  constructor() { }

  ngOnInit() {

      let previouslyFocused = <HTMLElement>document.activeElement;
      let modal        = <HTMLElement>document.querySelector('.modal');
      modal.addEventListener('keydown', trapTabKey);
      let focusableElements = modal.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]');

      focusableElements = Array.prototype.slice.call(focusableElements);

      let firstItem = <HTMLElement>focusableElements[0];
      let lastItem = <HTMLElement>focusableElements[focusableElements.length -1];

      firstItem.focus();

      function trapTabKey(e) {
        if (e.keyCode === 9) {
          // Shift Tab
          if (e.shiftKey) {
            if (document.activeElement === firstItem) {
              e.preventDefault();
              lastItem.focus();
            }
          // Tab
          } else {
            if (document.activeElement === lastItem) {
              e.preventDefault();
              firstItem.focus();
            }
          }
          // close on esc key
        } else if (e.keyCode === 27) {
          close();
        }
      }

  }

}
