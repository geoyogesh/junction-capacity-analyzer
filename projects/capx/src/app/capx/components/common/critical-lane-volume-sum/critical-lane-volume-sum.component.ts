import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CapxStateService } from '../../../services/capx-state.service';

@Component({
  selector: 'capx-critical-lane-volume-sum',
  templateUrl: './critical-lane-volume-sum.component.html',
  styleUrls: ['./critical-lane-volume-sum.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CriticalLaneVolumeSumComponent implements OnInit {

  @Input() vc: number | null = null;

  @Input() clv: number | null = null;

  constructor(public capxStateService: CapxStateService) { }

  ngOnInit(): void {
  }
}
