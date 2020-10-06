import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-quadrant-roadway-intersection-south-west-design',
  templateUrl: './quadrant-roadway-intersection-south-west-design.component.html',
  styleUrls: ['./quadrant-roadway-intersection-south-west-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuadrantRoadwayIntersectionSouthWestDesignComponent implements OnInit {

  junctionName = Junctions.QuadrantRoadwayIntersectionSouthWest;
  constructor(public capxStateService: CapxStateService) { }


  ngOnInit(): void {
  }

}
