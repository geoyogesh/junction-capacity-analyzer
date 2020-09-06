import { CapxStateService } from './../../../../services/capx-state.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'capx-conventional-junction',
  templateUrl: './conventional-junction.component.html',
  styleUrls: ['./conventional-junction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConventionalJunctionComponent implements OnInit {

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
  }

}
