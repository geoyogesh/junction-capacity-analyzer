import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-quadrant-roadway-intersection-north-east-design',
  templateUrl: './quadrant-roadway-intersection-north-east-design.component.html',
  styleUrls: ['./quadrant-roadway-intersection-north-east-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuadrantRoadwayIntersectionNorthEastDesignComponent implements OnInit {

  junctions = Junctions;
  constructor(public capxStateService: CapxStateService) { }


  ngOnInit(): void {
  }

}
