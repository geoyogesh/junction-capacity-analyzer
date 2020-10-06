import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-conventional-shared-right-turn-left-turn-design',
  templateUrl: './conventional-shared-right-turn-left-turn-design.component.html',
  styleUrls: ['./conventional-shared-right-turn-left-turn-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConventionalSharedRightTurnLeftTurnDesignComponent implements OnInit {

  junctionName = Junctions.ConventionalSharedRTLN;
  constructor(public capxStateService: CapxStateService) { }

  ngOnInit(): void {
  }

}
