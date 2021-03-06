import { CapxIntersectionAnalysisResultParameters, Junction } from './../../../../../services/models/junction-capacity-analyser';
import { CapxStateService } from './../../../../../services/capx-state.service';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-conventional-design',
  templateUrl: './conventional-design.component.html',
  styleUrls: ['./conventional-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConventionalDesignComponent implements OnInit, OnDestroy {

  junctionName = Junctions.ConventionalIntersection;
  constructor(public capxStateService: CapxStateService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
