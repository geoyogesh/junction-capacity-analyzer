import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-restricted-crossing-uturn-intersection-north-south-design',
  templateUrl: './restricted-crossing-uturn-intersection-north-south-design.component.html',
  styleUrls: ['./restricted-crossing-uturn-intersection-north-south-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestrictedCrossingUTurnIntersectionNorthSouthDesignComponent implements OnInit {

  junctionName = Junctions.RestrictedCrossingUTurnIntersectionNorthSouth;
  constructor(public capxStateService: CapxStateService) { }


  ngOnInit(): void {
  }

}
