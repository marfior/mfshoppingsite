import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightmenu]'
})
export class HighlightmenuDirective {

  private alink: ElementRef;

  @HostListener('mouseenter') onMouseEnter(){
      this.highlight(true);
  }
  @HostListener('mouseout') onMouseOuter(){
      this.highlight(false);
  }

  constructor(alink: ElementRef)
  {
    this.alink = alink;
  }

  public highlight(active: boolean){
    if (active)
      this.alink.nativeElement.class = "active";
    else
      this.alink.nativeElement.class = "";
  }

}
