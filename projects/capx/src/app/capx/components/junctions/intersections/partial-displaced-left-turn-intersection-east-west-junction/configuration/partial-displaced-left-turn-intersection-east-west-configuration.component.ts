import { CapxStateService } from './../../../../../services/capx-state.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CapxIntersectionAnalysisResultParameters, Junction } from './../../../../../services/models/junction-capacity-analyser';
import { Junctions } from './../../../../../services/models/junctions';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'capx-partial-displaced-left-turn-intersection-east-west-configuration',
  templateUrl: './partial-displaced-left-turn-intersection-east-west-configuration.component.html',
  styleUrls: ['./partial-displaced-left-turn-intersection-east-west-configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartialDisplacedLeftTurnIntersectionEastWestConfigurationComponent implements OnInit, OnDestroy {

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
      this.capxStateService.updatePartialDisplacedLeftTurnIntersectionEastWestParameters(value);
    });

    // tslint:disable-next-line: max-line-length
    this.form.setValue(this.capxStateService.partialDisplacedLeftTurnIntersectionEastWestJunctionParameters$.value, {onlySelf: true, emitEvent: false});

    const junction = this.capxStateService.state.get(Junctions.PartialDisplacedLeftTurnIntersectionEastWest) as Junction;
    (junction.intersectionResult as BehaviorSubject<CapxIntersectionAnalysisResultParameters>).subscribe(result => {
      this.result$.next(result);
    });
  }

  ngOnDestroy(): void {
    this.result$.complete();
  }

}

