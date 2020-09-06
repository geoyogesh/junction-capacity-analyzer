import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CapxStateService } from '../../services/capx-state.service';

@Component({
  selector: 'capx-junction-analysis-score-results',
  templateUrl: './junction-analysis-score-results.component.html',
  styleUrls: ['./junction-analysis-score-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JunctionAnalysisScoreResultsComponent implements OnInit {

  constructor(public capxStateService: CapxStateService) { }

  ngOnInit(): void {
  }

}
