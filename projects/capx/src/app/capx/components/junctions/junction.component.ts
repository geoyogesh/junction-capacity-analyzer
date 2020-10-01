import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { CapxStateService } from '../../services/capx-state.service';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { ConventionalDesignComponent } from './intersections/conventional-junction/design/conventional-design.component';
import { ConventionalConfigurationComponent } from './intersections/conventional-junction/configuration/conventional-configuration.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Junction } from '../../services/models/junction-capacity-analyser';

@Component({
  selector: 'capx-junction',
  templateUrl: './junction.component.html',
  styleUrls: ['./junction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JunctionComponent implements OnInit, OnDestroy {

  constructor(public capxStateService: CapxStateService,
              private route: ActivatedRoute,
              private router: Router) { }

  // tslint:disable-next-line: no-any
  design$: BehaviorSubject<any> = new BehaviorSubject(null);
  // tslint:disable-next-line: no-any
  configuration$: BehaviorSubject<any> = new BehaviorSubject(null);
  title$: BehaviorSubject<string> = new BehaviorSubject('');

  ngOnInit(): void {
    const junctionName = this.route.snapshot.paramMap.get('id');
    if (junctionName !== null && this.capxStateService.state.has(junctionName)) {
      const junction = this.capxStateService.state.get(junctionName) as Junction;
      this.title$.next(junction.title);
    }

    this.design$.next(new ComponentPortal(ConventionalDesignComponent));
    this.configuration$.next(new ComponentPortal(ConventionalConfigurationComponent));
  }

  ngOnDestroy(): void {
    this.design$.complete();
    this.configuration$.complete();
    this.title$.complete();
  }
}
