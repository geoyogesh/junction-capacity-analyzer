import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'capx-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
