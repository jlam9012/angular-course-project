import { Directive, OnInit, Renderer2, ElementRef, HostBinding, Input, HostListener, Host } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') showDropDown: boolean = false;
  
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.showDropDown = this.elRef.nativeElement.contains(event.target) ?
      !this.showDropDown : false;
  }

  constructor(private elRef: ElementRef) {}
}