import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightmenu]'
})
export class HighlightmenuDirective {

  private li: ElementRef;
  
  @HostListener('mouseenter') onMouseEnter(){
      this.highlight(true);
  }
  @HostListener('mouseout') onMouseOuter(){
      this.highlight(false);
  }
 

  constructor(_li: ElementRef)
  {
    this.li = _li;
  }

  public highlight(active: boolean){
    
    if (active)
      this.li.nativeElement.className = "active";
    else
      this.li.nativeElement.className = "";
  }

}
