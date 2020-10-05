import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as svgPanZoom from 'svg-pan-zoom';

@Component({
  selector: 'capx-svg-viewer',
  templateUrl: './svg-viewer.component.html',
  styleUrls: ['./svg-viewer.component.scss']
})
export class SvgViewerComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('container') public scene: ElementRef;
    public svgPanZoom: SvgPanZoom.Instance;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.svgPanZoom = svgPanZoom(this.scene.nativeElement.children[0], {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: true,
      center: true
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (this.svgPanZoom) {
      this.svgPanZoom.resize();
      this.svgPanZoom.fit();
      this.svgPanZoom.center();
    }
  }

}
