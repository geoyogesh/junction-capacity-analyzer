import { CapxIntersectionAnalysisResultParameters, CapxRoundaboutsAnalysisResultParameters, JunctionTypes, CapxInterchangeAnalysisResultParameters } from './../../services/models/junction-capacity-analyser';
import { SinglePointInterchangeNorthSouthDesignComponent } from './interchanges/single-point-interchange-north-south-junction/design/single-point-interchange-north-south-design.component';
import { DoubleCrossoverDiamondInterchangeNorthSouthDesignComponent } from './interchanges/double-crossover-diamond-interchange-north-south-junction/design/double-crossover-diamond-interchange-north-south-design.component';
import { DisplacedLeftTurnInterchangeNorthSouthConfigurationComponent } from './interchanges/displaced-left-turn-interchange-north-south-junction/configuration/displaced-left-turn-interchange-north-south-configuration.component';
import { DisplacedLeftTurnInterchangeNorthSouthDesignComponent } from './interchanges/displaced-left-turn-interchange-north-south-junction/design/displaced-left-turn-interchange-north-south-design.component';
import { PartialCloverleafNorthSouthDesignComponent } from './interchanges/partial-cloverleaf-north-south-junction/design/partial-cloverleaf-north-south-design.component';
import { TraditionalDiamondNorthSouthConfigurationComponent } from './interchanges/traditional-diamond-north-south-junction/configuration/traditional-diamond-north-south-configuration.component';
import { TraditionalDiamondNorthSouthDesignComponent } from './interchanges/traditional-diamond-north-south-junction/design/traditional-diamond-north-south-design.component';
import { ThreeNorthSouthxThreeEastWestLaneRoundaboutConfigurationComponent } from './roundabouts/three-north-southx-three-east-west-lane-roundabout-junction/configuration/three-north-southx-three-east-west-lane-roundabout-configuration.component';
import { ThreeNorthSouthxThreeEastWestLaneRoundaboutDesignComponent } from './roundabouts/three-north-southx-three-east-west-lane-roundabout-junction/design/three-north-southx-three-east-west-lane-roundabout-design.component';
import { TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionConfigurationComponent } from './roundabouts/two-north-southx-two-east-west-lane-roundabout-junction/configuration/two-north-southx-two-east-west-lane-roundabout-junction-configuration.component';
import { TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionDesignComponent } from './roundabouts/two-north-southx-two-east-west-lane-roundabout-junction/design/two-north-southx-two-east-west-lane-roundabout-junction-design.component';
import { TwoNorthSouthxOneEastWestLaneRoundaboutConfigurationComponent } from './roundabouts/two-north-southx-one-east-west-lane-roundabout-junction/configuration/two-north-southx-one-east-west-lane-roundabout-configuration.component';
import { OneNorthSouthxTwoEastWestLaneRoundaboutConfigurationComponent } from './roundabouts/one-north-southx-two-east-west-lane-roundabout-junction/configuration/one-north-southx-two-east-west-lane-roundabout-configuration.component';
import { OneNorthSouthxTwoEastWestLaneRoundaboutDesignComponent } from './roundabouts/one-north-southx-two-east-west-lane-roundabout-junction/design/one-north-southx-two-east-west-lane-roundabout-design.component';
import { OneNorthSouthxOneEastWestRoundaboutConfigurationComponent } from './roundabouts/one-north-southx-one-east-west-roundabout-junction/configuration/one-north-southx-one-east-west-roundabout-configuration.component';
import { OneNorthSouthxOneEastWestRoundaboutDesignComponent } from './roundabouts/one-north-southx-one-east-west-roundabout-junction/design/one-north-southx-one-east-west-roundabout-design.component';
import { SeventyFiveICDMiniRoundaboutConfigurationComponent } from './roundabouts/seventy-five-icdmini-roundabout-junction/configuration/seventy-five-icdmini-roundabout-configuration.component';
import { SeventyFiveICDMiniRoundaboutDesignComponent } from './roundabouts/seventy-five-icdmini-roundabout-junction/design/seventy-five-icdmini-roundabout-design.component';
import { FiftyICDMiniRoundaboutConfigurationComponent } from './roundabouts/fifty-icdmini-roundabout-junction/configuration/fifty-icdmini-roundabout-configuration.component';
import { FiftyICDMiniRoundaboutDesignComponent } from './roundabouts/fifty-icdmini-roundabout-junction/design/fifty-icdmini-roundabout-design.component';
import { PartialMedianUTurnIntersectionNorthSouthConfigurationComponent } from './intersections/partial-median-uturn-intersection-north-south-junction/configuration/partial-median-uturn-intersection-north-south-configuration.component';
import { PartialMedianUTurnIntersectionNorthSouthDesignComponent } from './intersections/partial-median-uturn-intersection-north-south-junction/design/partial-median-uturn-intersection-north-south-design.component';
import { MedianUTurnIntersectionNorthSouthConfigurationComponent } from './intersections/median-uturn-intersection-north-south-junction/configuration/median-uturn-intersection-north-south-configuration.component';
import { RestrictedCrossingUTurnIntersectionNorthSouthDesignComponent } from './intersections/restricted-crossing-uturn-intersection-north-south-junction/design/restricted-crossing-uturn-intersection-north-south-design.component';
import { FullDisplacedLeftTurnIntersectionConfigurationComponent } from './intersections/full-displaced-left-turn-intersection-junction/configuration/full-displaced-left-turn-intersection-configuration.component';
import { PartialDisplacedLeftTurnIntersectionNorthSouthConfigurationComponent } from './intersections/partial-displaced-left-turn-intersection-north-south-junction/configuration/partial-displaced-left-turn-intersection-north-south-configuration.component';
import { PartialDisplacedLeftTurnIntersectionNorthSouthDesignComponent } from './intersections/partial-displaced-left-turn-intersection-north-south-junction/design/partial-displaced-left-turn-intersection-north-south-design.component';
import { QuadrantRoadwayIntersectionNorthEastDesignComponent } from './intersections/quadrant-roadway-intersection-north-east-junction/design/quadrant-roadway-intersection-north-east-design.component';
import { ConventionalSharedRightTurnLeftTurnDesignComponent } from './intersections/conventional-shared-right-turn-left-turn-junction/design/conventional-shared-right-turn-left-turn-design.component';
import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { CapxStateService } from '../../services/capx-state.service';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { ConventionalDesignComponent } from './intersections/conventional-junction/design/conventional-design.component';
import { ConventionalConfigurationComponent } from './intersections/conventional-junction/configuration/conventional-configuration.component';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Junction } from '../../services/models/junction-capacity-analyser';
import { ConventionalSharedRightTurnLeftTurnConfigurationComponent } from './intersections/conventional-shared-right-turn-left-turn-junction/configuration/conventional-shared-right-turn-left-turn-configuration.component';
import { QuadrantRoadwayIntersectionSouthWestDesignComponent } from './intersections/quadrant-roadway-intersection-south-west-junction/design/quadrant-roadway-intersection-south-west-design.component';
import { QuadrantRoadwayIntersectionSouthWestConfigurationComponent } from './intersections/quadrant-roadway-intersection-south-west-junction/configuration/quadrant-roadway-intersection-south-west-configuration.component';
import { QuadrantRoadwayIntersectionNorthEastConfigurationComponent } from './intersections/quadrant-roadway-intersection-north-east-junction/configuration/quadrant-roadway-intersection-north-east-configuration.component';
import { QuadrantRoadwayIntersectionSouthEastConfigurationComponent } from './intersections/quadrant-roadway-intersection-south-east-junction/configuration/quadrant-roadway-intersection-south-east-configuration.component';
import { QuadrantRoadwayIntersectionSouthEastDesignComponent } from './intersections/quadrant-roadway-intersection-south-east-junction/design/quadrant-roadway-intersection-south-east-design.component';
import { QuadrantRoadwayIntersectionNorthWestDesignComponent } from './intersections/quadrant-roadway-intersection-north-west-junction/design/quadrant-roadway-intersection-north-west-design.component';
import { QuadrantRoadwayIntersectionNorthWestConfigurationComponent } from './intersections/quadrant-roadway-intersection-north-west-junction/configuration/quadrant-roadway-intersection-north-west-configuration.component';
import { PartialDisplacedLeftTurnIntersectionEastWestConfigurationComponent } from './intersections/partial-displaced-left-turn-intersection-east-west-junction/configuration/partial-displaced-left-turn-intersection-east-west-configuration.component';
import { PartialDisplacedLeftTurnIntersectionEastWestDesignComponent } from './intersections/partial-displaced-left-turn-intersection-east-west-junction/design/partial-displaced-left-turn-intersection-east-west-design.component';
import { FullDisplacedLeftTurnIntersectionDesignComponent } from './intersections/full-displaced-left-turn-intersection-junction/design/full-displaced-left-turn-intersection-design.component';
import { RestrictedCrossingUTurnIntersectionNorthSouthConfigurationComponent } from './intersections/restricted-crossing-uturn-intersection-north-south-junction/configuration/restricted-crossing-uturn-intersection-north-south-configuration.component';
import { RestrictedCrossingUTurnIntersectionEastWestConfigurationComponent } from './intersections/restricted-crossing-uturn-intersection-east-west-junction/configuration/restricted-crossing-uturn-intersection-east-west-configuration.component';
import { RestrictedCrossingUTurnIntersectionEastWestDesignComponent } from './intersections/restricted-crossing-uturn-intersection-east-west-junction/design/restricted-crossing-uturn-intersection-east-west-design.component';
import { MedianUTurnIntersectionNorthSouthDesignComponent } from './intersections/median-uturn-intersection-north-south-junction/design/median-uturn-intersection-north-south-design.component';
import { MedianUTurnIntersectionEastWestDesignComponent } from './intersections/median-uturn-intersection-east-west-junction/design/median-uturn-intersection-east-west-design.component';
import { MedianUTurnIntersectionEastWestConfigurationComponent } from './intersections/median-uturn-intersection-east-west-junction/configuration/median-uturn-intersection-east-west-configuration.component';
import { PartialMedianUTurnIntersectionEastWestConfigurationComponent } from './intersections/partial-median-uturn-intersection-east-west-junction/configuration/partial-median-uturn-intersection-east-west-configuration.component';
import { PartialMedianUTurnIntersectionEastWestDesignComponent } from './intersections/partial-median-uturn-intersection-east-west-junction/design/partial-median-uturn-intersection-east-west-design.component';
import { TwoNorthSouthxOneEastWestLaneRoundaboutDesignComponent } from './roundabouts/two-north-southx-one-east-west-lane-roundabout-junction/design/two-north-southx-one-east-west-lane-roundabout-design.component';
import { TraditionalDiamondEastWestDesignComponent } from './interchanges/traditional-diamond-east-west-junction/design/traditional-diamond-east-west-design.component';
import { TraditionalDiamondEastWestConfigurationComponent } from './interchanges/traditional-diamond-east-west-junction/configuration/traditional-diamond-east-west-configuration.component';
import { PartialCloverleafEastWestConfigurationComponent } from './interchanges/partial-cloverleaf-east-west-junction/configuration/partial-cloverleaf-east-west-configuration.component';
import { PartialCloverleafEastWestDesignComponent } from './interchanges/partial-cloverleaf-east-west-junction/design/partial-cloverleaf-east-west-design.component';
import { PartialCloverleafNorthSouthConfigurationComponent } from './interchanges/partial-cloverleaf-north-south-junction/configuration/partial-cloverleaf-north-south-configuration.component';
import { DisplacedLeftTurnInterchangeEastWestConfigurationComponent } from './interchanges/displaced-left-turn-interchange-east-west-junction/configuration/displaced-left-turn-interchange-east-west-configuration.component';
import { DisplacedLeftTurnInterchangeEastWestDesignComponent } from './interchanges/displaced-left-turn-interchange-east-west-junction/design/displaced-left-turn-interchange-east-west-design.component';
import { DoubleCrossoverDiamondInterchangeNorthSouthConfigurationComponent } from './interchanges/double-crossover-diamond-interchange-north-south-junction/configuration/double-crossover-diamond-interchange-north-south-configuration.component';
import { DoubleCrossoverDiamondInterchangeEastWestDesignComponent } from './interchanges/double-crossover-diamond-interchange-east-west-junction/design/double-crossover-diamond-interchange-east-west-design.component';
import { DoubleCrossoverDiamondInterchangeEastWestConfigurationComponent } from './interchanges/double-crossover-diamond-interchange-east-west-junction/configuration/double-crossover-diamond-interchange-east-west-configuration.component';
import { SinglePointInterchangeNorthSouthConfigurationComponent } from './interchanges/single-point-interchange-north-south-junction/configuration/single-point-interchange-north-south-configuration.component';
import { SinglePointInterchangeEastWestConfigurationComponent } from './interchanges/single-point-interchange-east-west-junction/configuration/single-point-interchange-east-west-configuration.component';
import { SinglePointInterchangeEastWestDesignComponent } from './interchanges/single-point-interchange-east-west-junction/design/single-point-interchange-east-west-design.component';

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

  subscriptions = [];

  design$: BehaviorSubject<ComponentPortal<any>> = new BehaviorSubject(null);
  configuration$: BehaviorSubject<ComponentPortal<any>> = new BehaviorSubject(null);
  title$: BehaviorSubject<string> = new BehaviorSubject('');
  vc$: BehaviorSubject<number> = new BehaviorSubject(null);
  clv$: BehaviorSubject<number> = new BehaviorSubject(null);
  ngOnInit(): void {
    const junctionName = this.route.snapshot.paramMap.get('id');
    if (junctionName !== null && this.capxStateService.state.has(junctionName)) {
      this.load(junctionName);

    } else {
      this.title$.next('unknown');
      this.design$.next(null);
      this.configuration$.next(null);
      this.vc$.next(null);
      this.clv$.next(null);
    }

    this.subscriptions.push(this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        console.log('NavigationStart..');
        console.log(val);
        const url = val.url;
        const urlparts = url.split('/');
        if (urlparts[1] === 'junctions') {
          this.load(urlparts[2]);
        }
      }
    }));
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }

    this.design$.complete();
    this.configuration$.complete();
    this.title$.complete();
    this.vc$.complete();
    this.clv$.complete();
  }

  load(junctionName: string): void {
    const junction = this.capxStateService.state.get(junctionName) as Junction;
    this.title$.next(junction.title);
    this.setPortalComponent(junctionName);

    if (junction.type === JunctionTypes.Intersection) {
      this.vc$.next(junction.intersectionResult.value.all_vc);
      this.clv$.next(junction.intersectionResult.value.all_clv);
      junction.intersectionResult.subscribe(result => {
        this.vc$.next(result.all_vc);
        this.clv$.next(result.all_clv);
      });
    } else if (junction.type === JunctionTypes.Interchange) {
      this.vc$.next(junction.interchangeResult.value.all_vc);
      this.clv$.next(junction.interchangeResult.value.zone3_ctr1_clv);
      junction.interchangeResult.subscribe(result => {
        this.vc$.next(result.all_vc);
        this.clv$.next(result.zone3_ctr1_clv);
      });
    } else if (junction.type === JunctionTypes.Roundabout) {
      this.vc$.next(junction.roundaboutResult.value.all_vc);
      this.clv$.next(junction.roundaboutResult.value.zone1_north_lane1);
      (junction.roundaboutResult).subscribe(result => {
        this.vc$.next(result.all_vc);
        this.clv$.next(result.zone1_north_lane1);
      });
    }
  }

  setPortalComponent(junctionName: string): void {
    switch (junctionName) {
      case 'conventional':
        this.design$.next(new ComponentPortal(ConventionalDesignComponent));
        this.configuration$.next(new ComponentPortal(ConventionalConfigurationComponent));
        return;
      case 'conventional-shared-right-turn-left-turn':
        this.design$.next(new ComponentPortal(ConventionalSharedRightTurnLeftTurnDesignComponent));
        this.configuration$.next(new ComponentPortal(ConventionalSharedRightTurnLeftTurnConfigurationComponent));
        return;
      case 'quadrant-roadway-intersection-south-west':
        this.design$.next(new ComponentPortal(QuadrantRoadwayIntersectionSouthWestDesignComponent));
        this.configuration$.next(new ComponentPortal(QuadrantRoadwayIntersectionSouthWestConfigurationComponent));
        return;
      case 'quadrant-roadway-intersection-north-east':
        this.design$.next(new ComponentPortal(QuadrantRoadwayIntersectionNorthEastDesignComponent));
        this.configuration$.next(new ComponentPortal(QuadrantRoadwayIntersectionNorthEastConfigurationComponent));
        return;
      case 'quadrant-roadway-intersection-south-east':
        this.design$.next(new ComponentPortal(QuadrantRoadwayIntersectionSouthEastDesignComponent));
        this.configuration$.next(new ComponentPortal(QuadrantRoadwayIntersectionSouthEastConfigurationComponent));
        return;
      case 'quadrant-roadway-intersection-north-west':
        this.design$.next(new ComponentPortal(QuadrantRoadwayIntersectionNorthWestDesignComponent));
        this.configuration$.next(new ComponentPortal(QuadrantRoadwayIntersectionNorthWestConfigurationComponent));
        return;
      case 'partial-displaced-left-turn-intersection-north-south':
        this.design$.next(new ComponentPortal(PartialDisplacedLeftTurnIntersectionNorthSouthDesignComponent));
        this.configuration$.next(new ComponentPortal(PartialDisplacedLeftTurnIntersectionNorthSouthConfigurationComponent));
        return;
      case 'partial-displaced-left-turn-intersection-east-west':
        this.design$.next(new ComponentPortal(PartialDisplacedLeftTurnIntersectionEastWestDesignComponent));
        this.configuration$.next(new ComponentPortal(PartialDisplacedLeftTurnIntersectionEastWestConfigurationComponent));
        return;
      case 'full-displaced-left-turn-intersection':
        this.design$.next(new ComponentPortal(FullDisplacedLeftTurnIntersectionDesignComponent));
        this.configuration$.next(new ComponentPortal(FullDisplacedLeftTurnIntersectionConfigurationComponent));
        return;
      case 'restricted-crossing-uturn-intersection-north-south':
        this.design$.next(new ComponentPortal(RestrictedCrossingUTurnIntersectionNorthSouthDesignComponent));
        this.configuration$.next(new ComponentPortal(RestrictedCrossingUTurnIntersectionNorthSouthConfigurationComponent));
        return;
      case 'restricted-crossing-uturn-intersection-east-west':
        this.design$.next(new ComponentPortal(RestrictedCrossingUTurnIntersectionEastWestDesignComponent));
        this.configuration$.next(new ComponentPortal(RestrictedCrossingUTurnIntersectionEastWestConfigurationComponent));
        return;
      case 'median-uturn-intersection-north-south':
        this.design$.next(new ComponentPortal(MedianUTurnIntersectionNorthSouthDesignComponent));
        this.configuration$.next(new ComponentPortal(MedianUTurnIntersectionNorthSouthConfigurationComponent));
        return;
      case 'median-uturn-intersection-east-west':
        this.design$.next(new ComponentPortal(MedianUTurnIntersectionEastWestDesignComponent));
        this.configuration$.next(new ComponentPortal(MedianUTurnIntersectionEastWestConfigurationComponent));
        return;
      case 'partial-median-uturn-intersection-north-south':
        this.design$.next(new ComponentPortal(PartialMedianUTurnIntersectionNorthSouthDesignComponent));
        this.configuration$.next(new ComponentPortal(PartialMedianUTurnIntersectionNorthSouthConfigurationComponent));
        return;
      case 'partial-median-uturn-intersection-east-west':
        this.design$.next(new ComponentPortal(PartialMedianUTurnIntersectionEastWestDesignComponent));
        this.configuration$.next(new ComponentPortal(PartialMedianUTurnIntersectionEastWestConfigurationComponent));
        return;
      case 'fifty-icdmini-roundabout':
        this.design$.next(new ComponentPortal(FiftyICDMiniRoundaboutDesignComponent));
        this.configuration$.next(new ComponentPortal(FiftyICDMiniRoundaboutConfigurationComponent));
        return;
      case 'seventy-five-icdmini-roundabout':
        this.design$.next(new ComponentPortal(SeventyFiveICDMiniRoundaboutDesignComponent));
        this.configuration$.next(new ComponentPortal(SeventyFiveICDMiniRoundaboutConfigurationComponent));
        return;
      case 'one-north-southx-one-east-west-roundabout':
        this.design$.next(new ComponentPortal(OneNorthSouthxOneEastWestRoundaboutDesignComponent));
        this.configuration$.next(new ComponentPortal(OneNorthSouthxOneEastWestRoundaboutConfigurationComponent));
        return;
      case 'one-north-southx-two-east-west-lane-roundabout':
        this.design$.next(new ComponentPortal(OneNorthSouthxTwoEastWestLaneRoundaboutDesignComponent));
        this.configuration$.next(new ComponentPortal(OneNorthSouthxTwoEastWestLaneRoundaboutConfigurationComponent));
        return;
      case 'two-north-southx-one-east-west-lane-roundabout':
        this.design$.next(new ComponentPortal(TwoNorthSouthxOneEastWestLaneRoundaboutDesignComponent));
        this.configuration$.next(new ComponentPortal(TwoNorthSouthxOneEastWestLaneRoundaboutConfigurationComponent));
        return;
      case 'two-north-southx-two-east-west-lane-roundabout':
        this.design$.next(new ComponentPortal(TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionDesignComponent));
        this.configuration$.next(new ComponentPortal(TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionConfigurationComponent));
        return;
      case 'three-north-southx-three-east-west-lane-roundabout':
        this.design$.next(new ComponentPortal(ThreeNorthSouthxThreeEastWestLaneRoundaboutDesignComponent));
        this.configuration$.next(new ComponentPortal(ThreeNorthSouthxThreeEastWestLaneRoundaboutConfigurationComponent));
        return;
      case 'traditional-diamond-north-south':
        this.design$.next(new ComponentPortal(TraditionalDiamondNorthSouthDesignComponent));
        this.configuration$.next(new ComponentPortal(TraditionalDiamondNorthSouthConfigurationComponent));
        return;
      case 'traditional-diamond-east-west':
        this.design$.next(new ComponentPortal(TraditionalDiamondEastWestDesignComponent));
        this.configuration$.next(new ComponentPortal(TraditionalDiamondEastWestConfigurationComponent));
        return;
      case 'partial-cloverleaf-north-south':
        this.design$.next(new ComponentPortal(PartialCloverleafNorthSouthDesignComponent));
        this.configuration$.next(new ComponentPortal(PartialCloverleafNorthSouthConfigurationComponent));
        return;
      case 'partial-cloverleaf-east-west':
        this.design$.next(new ComponentPortal(PartialCloverleafEastWestDesignComponent));
        this.configuration$.next(new ComponentPortal(PartialCloverleafEastWestConfigurationComponent));
        return;
      case 'displaced-left-turn-interchange-north-south':
        this.design$.next(new ComponentPortal(DisplacedLeftTurnInterchangeNorthSouthDesignComponent));
        this.configuration$.next(new ComponentPortal(DisplacedLeftTurnInterchangeNorthSouthConfigurationComponent));
        return;
      case 'displaced-left-turn-interchange-east-west':
        this.design$.next(new ComponentPortal(DisplacedLeftTurnInterchangeEastWestDesignComponent));
        this.configuration$.next(new ComponentPortal(DisplacedLeftTurnInterchangeEastWestConfigurationComponent));
        return;
      case 'double-crossover-diamond-interchange-north-south':
        this.design$.next(new ComponentPortal(DoubleCrossoverDiamondInterchangeNorthSouthDesignComponent));
        this.configuration$.next(new ComponentPortal(DoubleCrossoverDiamondInterchangeNorthSouthConfigurationComponent));
        return;
      case 'double-crossover-diamond-interchange-east-west':
        this.design$.next(new ComponentPortal(DoubleCrossoverDiamondInterchangeEastWestDesignComponent));
        this.configuration$.next(new ComponentPortal(DoubleCrossoverDiamondInterchangeEastWestConfigurationComponent));
        return;
      case 'single-point-interchange-north-south':
        this.design$.next(new ComponentPortal(SinglePointInterchangeNorthSouthDesignComponent));
        this.configuration$.next(new ComponentPortal(SinglePointInterchangeNorthSouthConfigurationComponent));
        return;
      case 'single-point-interchange-east-west':
        this.design$.next(new ComponentPortal(SinglePointInterchangeEastWestDesignComponent));
        this.configuration$.next(new ComponentPortal(SinglePointInterchangeEastWestConfigurationComponent));
        return;
    }
  }
}
