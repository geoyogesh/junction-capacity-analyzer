import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-partial-displaced-left-turn-intersection-north-south-design',
  templateUrl: './partial-displaced-left-turn-intersection-north-south-design.component.html',
  styleUrls: ['./partial-displaced-left-turn-intersection-north-south-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartialDisplacedLeftTurnIntersectionNorthSouthDesignComponent implements OnInit {

  junctions = Junctions;
  constructor(public capxStateService: CapxStateService) { }


  ngOnInit(): void {
  }

}
