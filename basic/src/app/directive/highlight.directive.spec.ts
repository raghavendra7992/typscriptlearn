import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const elMock = { nativeElement: {} } as ElementRef; // Mock ElementRef
    const directive = new HighlightDirective(elMock);
    expect(directive).toBeTruthy();
  });
});