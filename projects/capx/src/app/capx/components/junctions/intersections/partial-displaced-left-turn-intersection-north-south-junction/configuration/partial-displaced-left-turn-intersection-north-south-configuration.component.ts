import { CapxStateService } from './../../../../../services/capx-state.service';
import { CapxIntersectionAnalysisResultParameters, Junction } from './../../../../../services/models/junction-capacity-analyser';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Junctions } from './../../../../../services/models/junctions';

@Component({
  selector: 'capx-partial-displaced-left-turn-intersection-north-south-configuration',
  templateUrl: './partial-displaced-left-turn-intersection-north-south-configuration.component.html',
  styleUrls: ['./partial-displaced-left-turn-intersection-north-south-configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartialDisplacedLeftTurnIntersectionNorthSouthConfigurationComponent implements OnInit, OnDestroy {

  result$: BehaviorSubject<CapxIntersectionAnalysisResultParameters> = new BehaviorSubject(null);

  junctions = Junctions;
  constructor(private fb: FormBuilder, public capxStateService: CapxStateService) { }


  form: FormGroup = this.fb.group({
    east_bound_left: [null , Validators.required],
    east_bound_thru: [null, Validators.required],
    east_bound_right: [null, Validators.required],
    west_bound_left: [null, Validators.required],
    west_bound_thru: [null, Validators.required],
    west_bound_right: [null, Validators.required],
    south_bound_left: [null, Validators.required],
    south_bound_thru: [null, Validators.required],
    south_bound_right: [null, Validators.required],
    north_bound_left: [null, Validators.required],
    north_bound_thru: [null, Validators.required],
    north_bound_right: [null, Validators.required]
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      this.capxStateService.updatePartialDisplacedLeftTurnIntersectionNorthSouthParameters(value);
    });

    // tslint:disable-next-line: max-line-length
    this.form.setValue(this.capxStateService.partialDisplacedLeftTurnIntersectionNorthSouthJunctionParameters$.value, {onlySelf: true, emitEvent: false});

    const junction = this.capxStateService.state.get(Junctions.PartialDisplacedLeftTurnIntersectionNorthSouth) as Junction;
    (junction.intersectionResult as BehaviorSubject<CapxIntersectionAnalysisResultParameters>).subscribe(result => {
      this.result$.next(result);
    });
  }

  ngOnDestroy(): void {
    this.result$.complete();
  }

}
