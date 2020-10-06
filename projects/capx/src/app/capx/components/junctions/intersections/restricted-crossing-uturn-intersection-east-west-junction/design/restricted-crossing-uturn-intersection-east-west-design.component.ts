import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-restricted-crossing-uturn-intersection-east-west-design',
  templateUrl: './restricted-crossing-uturn-intersection-east-west-design.component.html',
  styleUrls: ['./restricted-crossing-uturn-intersection-east-west-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestrictedCrossingUTurnIntersectionEastWestDesignComponent implements OnInit {

  junctionName = Junctions.RestrictedCrossingUTurnIntersectionEastWest;
  constructor(public capxStateService: CapxStateService) { }


  ngOnInit(): void {
  }

}
