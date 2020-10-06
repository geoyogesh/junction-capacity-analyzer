import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-quadrant-roadway-intersection-south-east-design',
  templateUrl: './quadrant-roadway-intersection-south-east-design.component.html',
  styleUrls: ['./quadrant-roadway-intersection-south-east-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuadrantRoadwayIntersectionSouthEastDesignComponent implements OnInit {

  junctionName = Junctions.QuadrantRoadwayIntersectionSouthEast;
  constructor(public capxStateService: CapxStateService) { }


  ngOnInit(): void {
  }

}
