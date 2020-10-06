import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-quadrant-roadway-intersection-north-west-design',
  templateUrl: './quadrant-roadway-intersection-north-west-design.component.html',
  styleUrls: ['./quadrant-roadway-intersection-north-west-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuadrantRoadwayIntersectionNorthWestDesignComponent implements OnInit {

  junctions = Junctions;
  constructor(public capxStateService: CapxStateService) { }


  ngOnInit(): void {
  }

}
