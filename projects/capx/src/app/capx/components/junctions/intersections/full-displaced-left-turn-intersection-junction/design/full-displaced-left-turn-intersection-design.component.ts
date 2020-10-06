import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-full-displaced-left-turn-intersection-design',
  templateUrl: './full-displaced-left-turn-intersection-design.component.html',
  styleUrls: ['./full-displaced-left-turn-intersection-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullDisplacedLeftTurnIntersectionDesignComponent implements OnInit {

  junctionName = Junctions.FullDisplacedLeftTurnIntersection;
  constructor(public capxStateService: CapxStateService) { }

  ngOnInit(): void {
  }

}
