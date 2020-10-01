import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'capx-show-junction-rank',
  templateUrl: './show-junction-rank.component.html',
  styleUrls: ['./show-junction-rank.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowJunctionRankComponent implements OnInit {

  constructor() { }

  @Input() total = 0;
  @Input() rank: number | null = null;

  ngOnInit(): void {
  }

}
