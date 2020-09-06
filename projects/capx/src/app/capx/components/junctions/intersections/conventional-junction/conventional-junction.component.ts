import { CapxStateService } from './../../../../services/capx-state.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'capx-conventional-junction',
  templateUrl: './conventional-junction.component.html',
  styleUrls: ['./conventional-junction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConventionalJunctionComponent implements OnInit {

  constructor(private capxStateService: CapxStateService) { }

  ngOnInit(): void {
  }

}
