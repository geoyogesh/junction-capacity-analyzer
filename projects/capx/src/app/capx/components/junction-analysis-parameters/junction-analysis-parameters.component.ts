import { CapxStateService } from './../../services/capx-state.service';
import { JunctionCapacityAnalyser, CapxMasterParameters } from './../../services/models/junction-capacity-analyser';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'capx-junction-analysis-parameters',
  templateUrl: './junction-analysis-parameters.component.html',
  styleUrls: ['./junction-analysis-parameters.component.scss']
})
export class JunctionAnalysisParametersComponent implements OnInit, OnDestroy {

  masterParameters$ = new BehaviorSubject<CapxMasterParameters>({
    east_bound_u: 0,
    east_bound_left: 0,
    east_bound_thru: 0,
    east_bound_right: 0,
    west_bound_u: 0,
    west_bound_left: 0,
    west_bound_thru: 0,
    west_bound_right: 0,
    south_bound_u: 0,
    south_bound_left: 0,
    south_bound_thru: 0,
    south_bound_right: 0,
    north_bound_u: 0,
    north_bound_left: 0,
    north_bound_thru: 0,
    north_bound_right: 0
  });

  constructor(private fb: FormBuilder, private capxStateService: CapxStateService) { }

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
      this.capxStateService.analyser.updateInputParameters(value);
      this.capxStateService.analyser.solve();
      this.masterParameters$.next(this.capxStateService.analyser.capxMasterParameters);
    });

    this.form.setValue(this.capxStateService.analyser.capxInputParameters, {onlySelf: true, emitEvent: false});
    this.masterParameters$.next(this.capxStateService.analyser.capxMasterParameters);
  }

  ngOnDestroy(): void {
    this.masterParameters$.complete();
    this.masterParameters$.unsubscribe();
  }

}
