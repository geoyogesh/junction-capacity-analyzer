import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-partial-displaced-left-turn-intersection-east-west-design',
  templateUrl: './partial-displaced-left-turn-intersection-east-west-design.component.html',
  styleUrls: ['./partial-displaced-left-turn-intersection-east-west-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartialDisplacedLeftTurnIntersectionEastWestDesignComponent implements OnInit {

  junctions = Junctions;
  constructor(public capxStateService: CapxStateService) { }

  ngOnInit(): void {
  }

}
