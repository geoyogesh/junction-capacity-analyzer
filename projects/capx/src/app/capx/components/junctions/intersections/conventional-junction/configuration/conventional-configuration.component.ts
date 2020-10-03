import { CapxIntersectionAnalysisResultParameters, Junction } from './../../../../../services/models/junction-capacity-analyser';
import { CapxStateService } from './../../../../../services/capx-state.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Junctions } from './../../../../../services/models/junctions';


@Component({
  selector: 'capx-conventional-configuration',
  templateUrl: './conventional-configuration.component.html',
  styleUrls: ['./conventional-configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConventionalConfigurationComponent implements OnInit, OnDestroy {

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
      this.capxStateService.updateConventionalJunctionParameters(value);
    });

    this.form.setValue(this.capxStateService.conventionalJunctionParameters$.value, {onlySelf: true, emitEvent: false});

    const junction = this.capxStateService.state.get(Junctions.ConventionalIntersection) as Junction;
    (junction.intersectionResult as BehaviorSubject<CapxIntersectionAnalysisResultParameters>).subscribe(result => {
      this.result$.next(result);
    });
  }

  ngOnDestroy(): void {
    this.result$.complete();
  }

}
