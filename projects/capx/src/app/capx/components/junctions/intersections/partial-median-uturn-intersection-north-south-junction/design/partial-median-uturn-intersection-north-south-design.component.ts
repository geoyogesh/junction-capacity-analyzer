import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-partial-median-uturn-intersection-north-south-design',
  templateUrl: './partial-median-uturn-intersection-north-south-design.component.html',
  styleUrls: ['./partial-median-uturn-intersection-north-south-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartialMedianUTurnIntersectionNorthSouthDesignComponent implements OnInit {

  junctions = Junctions;
  constructor(public capxStateService: CapxStateService) { }


  ngOnInit(): void {
  }

}
