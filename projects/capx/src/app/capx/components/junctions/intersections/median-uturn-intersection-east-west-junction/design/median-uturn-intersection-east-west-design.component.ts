import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-median-uturn-intersection-east-west-design',
  templateUrl: './median-uturn-intersection-east-west-design.component.html',
  styleUrls: ['./median-uturn-intersection-east-west-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MedianUTurnIntersectionEastWestDesignComponent implements OnInit {

  junctionName = Junctions.MedianUTurnIntersectionEastWest;
  constructor(public capxStateService: CapxStateService) { }


  ngOnInit(): void {
  }

}
