import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CapxStateService } from '../../services/capx-state.service';
import { Junctions } from '../../services/models/junctions';

@Component({
  selector: 'capx-junction-analysis-score-results',
  templateUrl: './junction-analysis-score-results.component.html',
  styleUrls: ['./junction-analysis-score-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JunctionAnalysisScoreResultsComponent implements OnInit {

  intersectionTotal = 15;
  roundaboutTotal = 7;
  interchangeTotal = 10;

  junctions = Junctions;

  constructor(public capxStateService: CapxStateService) { }

  ngOnInit(): void {
  }

}
