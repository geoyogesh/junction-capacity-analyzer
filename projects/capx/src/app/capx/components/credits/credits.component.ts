import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'capx-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
