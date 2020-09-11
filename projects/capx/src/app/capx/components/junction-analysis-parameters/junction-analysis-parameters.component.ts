import { CapxStateService } from './../../services/capx-state.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'capx-junction-analysis-parameters',
  templateUrl: './junction-analysis-parameters.component.html',
  styleUrls: ['./junction-analysis-parameters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JunctionAnalysisParametersComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, public capxStateService: CapxStateService) { }

  form: FormGroup = this.fb.group({
    east_bound_u: [null, Validators.required],
    east_bound_left: [null , Validators.required],
    east_bound_thru: [null, Validators.required],
    east_bound_right: [null, Validators.required],
    east_bound_truck_percent: [null, Validators.required],
    east_bound_growth_factor: [null, Validators.required],
    west_bound_u: [null, Validators.required],
    west_bound_left: [null, Validators.required],
    west_bound_thru: [null, Validators.required],
    west_bound_right: [null, Validators.required],
    west_bound_truck_percent: [null, Validators.required],
    west_bound_growth_factor: [null, Validators.required],
    south_bound_u: [null, Validators.required],
    south_bound_left: [null, Validators.required],
    south_bound_thru: [null, Validators.required],
    south_bound_right: [null, Validators.required],
    south_bound_truck_percent: [null, Validators.required],
    south_bound_growth_factor: [null, Validators.required],
    north_bound_u: [null, Validators.required],
    north_bound_left: [null, Validators.required],
    north_bound_thru: [null, Validators.required],
    north_bound_right: [null, Validators.required],
    north_bound_truck_percent: [null, Validators.required],
    north_bound_growth_factor: [null, Validators.required],
    adjustment_factor_u: [null, Validators.required],
    adjustment_factor_left_turn: [null, Validators.required],
    adjustment_factor_right_turn: [null, Validators.required],
    truck_adjustment_factor: [null, Validators.required],
    critical_lane_volume: [null, Validators.required]
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      this.capxStateService.updateInputParameters(value);
    });

    this.form.setValue(this.capxStateService.inputParameters$.value, {onlySelf: true, emitEvent: false});
  }

  ngOnDestroy(): void {
  }

}
