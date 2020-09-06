import { CapxStateService } from './../../../../../services/capx-state.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'capx-conventional-design',
  templateUrl: './conventional-design.component.svg',
  styleUrls: ['./conventional-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConventionalDesignComponent implements OnInit {

  constructor(public capxStateService: CapxStateService) { }

  ngOnInit(): void {
  }

}
