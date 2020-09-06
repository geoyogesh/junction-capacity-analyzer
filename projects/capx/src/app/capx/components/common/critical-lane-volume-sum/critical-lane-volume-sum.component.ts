import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'capx-critical-lane-volume-sum',
  templateUrl: './critical-lane-volume-sum.component.html',
  styleUrls: ['./critical-lane-volume-sum.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CriticalLaneVolumeSumComponent implements OnInit {

  @Input() vc: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
