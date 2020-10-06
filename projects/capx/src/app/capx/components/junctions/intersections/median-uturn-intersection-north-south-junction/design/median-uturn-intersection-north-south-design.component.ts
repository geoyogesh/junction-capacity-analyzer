import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-median-uturn-intersection-north-south-design',
  templateUrl: './median-uturn-intersection-north-south-design.component.html',
  styleUrls: ['./median-uturn-intersection-north-south-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MedianUTurnIntersectionNorthSouthDesignComponent implements OnInit {

  junctions = Junctions;
  constructor(public capxStateService: CapxStateService) { }


  ngOnInit(): void {
  }

}
