import { Junction, JunctionTypes, CapxPartialDisplacedLeftTurnIntersectionNorthSouth, CapxPartialDisplacedLeftTurnIntersectionEastWest } from './models/junction-capacity-analyser';
import { Junctions } from './models/junctions';

// tslint:disable: variable-name
// tslint:disable: max-line-length

import { CapxRoundaboutsAnalysisResultParameters } from './models/junction-capacity-analyser';
import {
  CapxMasterParameters,
  CapxInputParameters,
  CapxConventionalJunctionParameters,
  CapxIntersectionAnalysisResultParameters,
  CapxInterchangeAnalysisResultParameters } from './models/junction-capacity-analyser';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { round, max } from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class CapxStateService {

  state: Map<string, Junction> = new Map();

  default_color = '#666';

  intersection_default_result: CapxIntersectionAnalysisResultParameters = {
    zone1_north_clv: null,
    zone1_north_vc: null,
    zone2_south_clv: null,
    zone2_south_vc: null,
    zone3_east_clv: null,
    zone3_east_vc: null,
    zone4_west_clv: null,
    zone4_west_vc: null,
    zone5_center_clv: null,
    zone5_center_vc: null,
    all_clv: null,
    all_vc: null
  };

  roundabout_default_result: CapxRoundaboutsAnalysisResultParameters = {
    zone1_north_lane1: null,
    zone1_north_lane2: null,
    zone1_north_lane3: null,

    zone3_east_lane1: null,
    zone3_east_lane2: null,
    zone3_east_lane3: null,

    zone2_south_lane1: null,
    zone2_south_lane2: null,
    zone2_south_lane3: null,


    zone4_west_lane1: null,
    zone4_west_lane2: null,
    zone4_west_lane3: null,

    all_vc: null,
  };

  interchange_default_result: CapxInterchangeAnalysisResultParameters = {
    zone1_right_merge_clv: null,
    zone1_right_merge_vc: null,
    zone2_left_merge_clv: null,
    zone2_left_merge_vc: null,
    zone3_ctr1_clv: null,
    zone3_ctr1_vc: null,
    zone4_ctr2_clv: null,
    zone4_ctr2_vc: null,

    zone5_left_merge_clv: null,
    zone5_left_merge_vc: null,
    zone6_right_merge_clv: null,
    zone6_right_merge_vc: null,


    all_vc: null
  };

  inputParameters$ = new BehaviorSubject<CapxInputParameters>({
    east_bound_u: 0,
    east_bound_left: 630,
    east_bound_thru: 0,
    east_bound_right: 0,
    east_bound_truck_percent: 0.00,
    east_bound_growth_factor: 0.00,
    west_bound_u: 0,
    west_bound_left: 175,
    west_bound_thru: 0,
    west_bound_right: 0,
    west_bound_truck_percent: 0.00,
    west_bound_growth_factor: 0.00,
    south_bound_u: 0,
    south_bound_left: 225,
    south_bound_thru: 1220,
    south_bound_right: 730,
    south_bound_truck_percent: 0.00,
    south_bound_growth_factor: 0.00,
    north_bound_u: 0,
    north_bound_left: 420,
    north_bound_thru: 1645,
    north_bound_right: 350,
    north_bound_truck_percent: 0.00,
    north_bound_growth_factor: 0.00,
    adjustment_factor_u: 0.80,
    adjustment_factor_left_turn: 0.95,
    adjustment_factor_right_turn: 0.85,
    truck_adjustment_factor: 2,
    critical_lane_volume: 1600
  });

  clv_range_text$ = new BehaviorSubject<Map<number, string>>(new Map([
    [1, ' - '],
    [2, ' - '],
    [3, ' - '],
    [4, ' - '],
  ]));


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

  conventionalJunctionParameters$ = new BehaviorSubject<CapxConventionalJunctionParameters>({
    east_bound_left: 1,
    east_bound_thru: 1,
    east_bound_right: 1,
    west_bound_left: 1,
    west_bound_thru: 1,
    west_bound_right: 1,
    south_bound_left: 1,
    south_bound_thru: 1,
    south_bound_right: 1,
    north_bound_left: 1,
    north_bound_thru: 1,
    north_bound_right: 1
  });

  partialDisplacedLeftTurnIntersectionNorthSouthJunctionParameters$ = new BehaviorSubject<CapxPartialDisplacedLeftTurnIntersectionNorthSouth>({
    east_bound_left: 2,
    east_bound_thru: 3,
    east_bound_right: 1,
    west_bound_left: 2,
    west_bound_thru: 3,
    west_bound_right: 1,
    south_bound_left: 1,
    south_bound_thru: 2,
    south_bound_right: 1,
    north_bound_left: 1,
    north_bound_thru: 2,
    north_bound_right: 1
  });

  partialDisplacedLeftTurnIntersectionEastWestJunctionParameters$ = new BehaviorSubject<CapxPartialDisplacedLeftTurnIntersectionEastWest>({
    east_bound_left: 2,
    east_bound_thru: 3,
    east_bound_right: 1,
    west_bound_left: 2,
    west_bound_thru: 3,
    west_bound_right: 1,
    south_bound_left: 1,
    south_bound_thru: 2,
    south_bound_right: 1,
    north_bound_left: 1,
    north_bound_thru: 2,
    north_bound_right: 1
  });

  rank$ = new BehaviorSubject<Map<string, number | null>>(new Map());


  constructor() {

    //#region intersection
    this.state.set(
      Junctions.ConventionalIntersection, {
        title: 'Conventional Intersection',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.ConventionalSharedRTLN, {
        title: 'Conventional Shared RT LN',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.QuadrantRoadwayIntersectionSouthWest, {
        title: 'Quadrant Roadway Intersection (S-W)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.QuadrantRoadwayIntersectionNorthEast, {
        title: 'Quadrant Roadway Intersection (N-E)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.QuadrantRoadwayIntersectionSouthEast, {
        title: 'Quadrant Roadway Intersection (S-E)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.QuadrantRoadwayIntersectionNorthWest, {
        title: 'Quadrant Roadway Intersection (N-W)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.PartialDisplacedLeftTurnIntersectionNorthSouth, {
        title: 'Partial Displaced Left Turn Intersection (N-S)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.PartialDisplacedLeftTurnIntersectionEastWest, {
        title: 'Partial Displaced Left Turn Intersection (E-W)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );

    this.state.set(
      Junctions.FullDisplacedLeftTurnIntersection, {
        title: 'Full Displaced Left Turn Intersection',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );

    this.state.set(
      Junctions.RestrictedCrossingUTurnIntersectionNorthSouth, {
        title: 'Restricted Crossing U-Turn Intersection (N-S)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.RestrictedCrossingUTurnIntersectionEastWest, {
        title: 'Restricted Crossing U-Turn Intersection (E-W)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );

    this.state.set(
      Junctions.MedianUTurnIntersectionNorthSouth, {
        title: 'Median U-Turn Intersection (N-S)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.MedianUTurnIntersectionEastWest, {
        title: 'Median U-Turn Intersection (E-W)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );

    this.state.set(
      Junctions.PartialMedianUTurnIntersectionNorthSouth, {
        title: 'Partial Median U-Turn Intersection (N-S)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.PartialMedianUTurnIntersectionEastWest, {
        title: 'Partial Median U-Turn Intersection (E-W)',
        type: JunctionTypes.Intersection,
        intersectionResult: new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result),
        interchangeResult: null,
        roundaboutResult: null
      }
    );
    //#endregion
    //#region interchange
    this.state.set(
      Junctions.TraditionalDiamondNorthSouth, {
        title: 'Traditional Diamond (N-S)',
        type: JunctionTypes.Interchange,
        intersectionResult: null,
        interchangeResult: new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result),
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.TraditionalDiamondEastWest, {
        title: 'Traditional Diamond (E-W)',
        type: JunctionTypes.Interchange,
        intersectionResult: null,
        interchangeResult: new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result),
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.PartialCloverleafNorthSouth, {
        title: 'Partial Cloverleaf (N-S)',
        type: JunctionTypes.Interchange,
        intersectionResult: null,
        interchangeResult: new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result),
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.PartialCloverleafEastWest, {
        title: 'Partial Cloverleaf (E-W)',
        type: JunctionTypes.Interchange,
        intersectionResult: null,
        interchangeResult: new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result),
        roundaboutResult: null
      }
    );

    this.state.set(
      Junctions.DisplacedLeftTurnInterchangeNorthSouth, {
        title: 'Displaced Left Turn Interchange (N-S)',
        type: JunctionTypes.Interchange,
        intersectionResult: null,
        interchangeResult: new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result),
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.DisplacedLeftTurnInterchangeEastWest, {
        title: 'Displaced Left Turn Interchange (E-W)',
        type: JunctionTypes.Interchange,
        intersectionResult: null,
        interchangeResult: new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result),
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.DoubleCrossoverDiamondInterchangeNorthSouth, {
        title: 'Double Crossover Diamond Interchange (N-S)',
        type: JunctionTypes.Interchange,
        intersectionResult: null,
        interchangeResult: new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result),
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.DoubleCrossoverDiamondInterchangeEastWest, {
        title: 'Double Crossover Diamond Interchange (E-W)',
        type: JunctionTypes.Interchange,
        intersectionResult: null,
        interchangeResult: new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result),
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.SinglePointInterchangeNorthSouth, {
        title: 'Single Point Interchange (N-S)',
        type: JunctionTypes.Interchange,
        intersectionResult: null,
        interchangeResult: new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result),
        roundaboutResult: null
      }
    );
    this.state.set(
      Junctions.SinglePointInterchangeEastWest, {
        title: 'Single Point Interchange (E-W)',
        type: JunctionTypes.Interchange,
        intersectionResult: null,
        interchangeResult: new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result),
        roundaboutResult: null
      }
    );
    //#endregion
    //#region roundabout
    this.state.set(
      Junctions.FiftyICDMiniRoundabout, {
        title: '50\' ICD Mini-Roundabout',
        type: JunctionTypes.Roundabout,
        intersectionResult: null,
        interchangeResult: null,
        roundaboutResult: new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result)
      }
    );
    this.state.set(
      Junctions.SecentyFiveICDMiniRoundabout, {
        title: '75\' ICD Mini-Roundabout',
        type: JunctionTypes.Roundabout,
        intersectionResult: null,
        interchangeResult: null,
        roundaboutResult: new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result)
      }
    );
    this.state.set(
      Junctions.OneNorthSouthxOneEastWestRoundabout, {
        title: '1 NS x 1 EW Roundabout',
        type: JunctionTypes.Roundabout,
        intersectionResult: null,
        interchangeResult: null,
        roundaboutResult: new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result)
      }
    );
    this.state.set(
      Junctions.OneNorthSouthxTwoEastWestLaneRoundabout, {
        title: '1 NS x 2 EW Lane Roundabout',
        type: JunctionTypes.Roundabout,
        intersectionResult: null,
        interchangeResult: null,
        roundaboutResult: new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result)
      }
    );
    this.state.set(
      Junctions.TwoNorthSouthxOneEastWestLaneRoundabout, {
        title: '2 NS x 1 EW Lane Roundabout',
        type: JunctionTypes.Roundabout,
        intersectionResult: null,
        interchangeResult: null,
        roundaboutResult: new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result)
      }
    );
    this.state.set(
      Junctions.TwoNorthSouthxTwoEastWestLaneRoundabout, {
        title: '2 NS x 2 EW Lane Roundabout',
        type: JunctionTypes.Roundabout,
        intersectionResult: null,
        interchangeResult: null,
        roundaboutResult: new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result)
      }
    );
    this.state.set(
      Junctions.ThreeNorthSouthxThreeEastWestLaneRoundabout, {
        title: '3 NS x 3 EW Lane Roundabout',
        type: JunctionTypes.Roundabout,
        intersectionResult: null,
        interchangeResult: null,
        roundaboutResult: new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result)
      }
    );
    //#endregion


    this.solve();
    this.solveConventionalJunction();
    this.solvePartialDisplacedLeftTurnIntersectionNorthSouthJunction();
    this.solvePartialDisplacedLeftTurnIntersectionEastWestJunction();
  }

  public updateInputParameters(params: CapxInputParameters): void {
    this.inputParameters$.next(params);
    this.solve();
  }


  private solve(): void {

    // update range text
    const clv = this.inputParameters$.value.critical_lane_volume;
    this.clv_range_text$.next(new Map([
      [1, clv !== null ? `< ${round(0.75 * this.inputParameters$.value.critical_lane_volume)}` : ' - '],
      [2, clv !== null ? `${round(0.75 * clv)} - ${round(0.875 * clv) - 1}` : ' - '],
      [3, clv !== null ? `${round(0.875 * clv)} < ${round(clv) - 1}` : ' - '],
      [4, clv !== null ? `>= ${round(clv)}` : ' - '],
    ]));


    const east_bound_u =  Math.round((this.inputParameters$.value.east_bound_u * (1 - this.inputParameters$.value.east_bound_truck_percent) + this.inputParameters$.value.east_bound_u * this.inputParameters$.value.east_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.east_bound_growth_factor));
    const east_bound_left =  Math.round((this.inputParameters$.value.east_bound_left * (1 - this.inputParameters$.value.east_bound_truck_percent) + this.inputParameters$.value.east_bound_left * this.inputParameters$.value.east_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.east_bound_growth_factor));
    const east_bound_thru =  Math.round((this.inputParameters$.value.east_bound_thru * (1 - this.inputParameters$.value.east_bound_truck_percent) + this.inputParameters$.value.east_bound_thru * this.inputParameters$.value.east_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.east_bound_growth_factor));
    const east_bound_right =  Math.round((this.inputParameters$.value.east_bound_right * (1 - this.inputParameters$.value.east_bound_truck_percent) + this.inputParameters$.value.east_bound_right * this.inputParameters$.value.east_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.east_bound_growth_factor));
    const west_bound_u =  Math.round((this.inputParameters$.value.west_bound_u * (1 - this.inputParameters$.value.west_bound_truck_percent) + this.inputParameters$.value.west_bound_u * this.inputParameters$.value.west_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.west_bound_growth_factor));
    const west_bound_left =  Math.round((this.inputParameters$.value.west_bound_left * (1 - this.inputParameters$.value.west_bound_truck_percent) + this.inputParameters$.value.west_bound_left * this.inputParameters$.value.west_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.west_bound_growth_factor));
    const west_bound_thru =  Math.round((this.inputParameters$.value.west_bound_thru * (1 - this.inputParameters$.value.west_bound_truck_percent) + this.inputParameters$.value.west_bound_thru * this.inputParameters$.value.west_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.west_bound_growth_factor));
    const west_bound_right =  Math.round((this.inputParameters$.value.west_bound_right * (1 - this.inputParameters$.value.west_bound_truck_percent) + this.inputParameters$.value.west_bound_right * this.inputParameters$.value.west_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.west_bound_growth_factor));
    const south_bound_u =  Math.round((this.inputParameters$.value.south_bound_u * (1 - this.inputParameters$.value.south_bound_truck_percent) + this.inputParameters$.value.south_bound_u * this.inputParameters$.value.south_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.south_bound_growth_factor));
    const south_bound_left =  Math.round((this.inputParameters$.value.south_bound_left * (1 - this.inputParameters$.value.south_bound_truck_percent) + this.inputParameters$.value.east_bound_u * this.inputParameters$.value.south_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.south_bound_growth_factor));
    const south_bound_thru =  Math.round((this.inputParameters$.value.south_bound_thru * (1 - this.inputParameters$.value.south_bound_truck_percent) + this.inputParameters$.value.south_bound_thru * this.inputParameters$.value.south_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.south_bound_growth_factor));
    const south_bound_right =  Math.round((this.inputParameters$.value.south_bound_right * (1 - this.inputParameters$.value.south_bound_truck_percent) + this.inputParameters$.value.south_bound_right * this.inputParameters$.value.south_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.south_bound_growth_factor));
    const north_bound_u =  Math.round((this.inputParameters$.value.north_bound_u * (1 - this.inputParameters$.value.north_bound_truck_percent) + this.inputParameters$.value.north_bound_u * this.inputParameters$.value.north_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.north_bound_growth_factor));
    const north_bound_left =  Math.round((this.inputParameters$.value.north_bound_left * (1 - this.inputParameters$.value.north_bound_truck_percent) + this.inputParameters$.value.north_bound_left * this.inputParameters$.value.north_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.north_bound_growth_factor));
    const north_bound_thru =  Math.round((this.inputParameters$.value.north_bound_thru * (1 - this.inputParameters$.value.north_bound_truck_percent) + this.inputParameters$.value.north_bound_thru * this.inputParameters$.value.north_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.north_bound_growth_factor));
    const north_bound_right =  Math.round((this.inputParameters$.value.north_bound_right * (1 - this.inputParameters$.value.north_bound_truck_percent) + this.inputParameters$.value.north_bound_right * this.inputParameters$.value.north_bound_truck_percent * this.inputParameters$.value.truck_adjustment_factor) * (1 + this.inputParameters$.value.north_bound_growth_factor));
    this.masterParameters$.next({
      east_bound_u,
      east_bound_left,
      east_bound_thru,
      east_bound_right,
      west_bound_u,
      west_bound_left,
      west_bound_thru,
      west_bound_right,
      south_bound_u,
      south_bound_left,
      south_bound_thru,
      south_bound_right,
      north_bound_u,
      north_bound_left,
      north_bound_thru,
      north_bound_right,
    });
  }

  private updateRank(): void {
    // intersection rank
    const intersection_ranks = [];
    const intersection_rank_map = new Map<number, string[]>();

    const intersection_values: Array<[CapxIntersectionAnalysisResultParameters, string]> = [];

    for (const junctionTitle of this.state.keys()) {
      const junction = this.state.get(junctionTitle) as Junction;
      if (junction.type === JunctionTypes.Intersection) {
        intersection_values.push([junction.intersectionResult.value, junctionTitle]);
      }
    }

    for (const tp of intersection_values) {
      const [value, name] = tp;

      if (value.all_vc === null) {
        continue;
      }

      intersection_ranks.push(value.all_vc);

      if (intersection_rank_map.has(value.all_vc)) {
        intersection_rank_map.get(value.all_vc)?.push(name);
      } else {
        intersection_rank_map.set(value.all_vc, [name]);
      }
    }

    intersection_ranks.sort();

    console.log(intersection_ranks);



    // roundabouts rank
    const roundabout_ranks = [];
    const roundabout_rank_map = new Map<number, string[]>();

    const roundabout_values: Array<[CapxRoundaboutsAnalysisResultParameters, string]> = [];

    for (const junctionTitle of this.state.keys()) {
      const junction = this.state.get(junctionTitle) as Junction;
      if (junction.type === JunctionTypes.Roundabout) {
        roundabout_values.push([junction.roundaboutResult.value, junctionTitle]);
      }
    }

    for (const tp of roundabout_values) {
      const [value, name] = tp;

      if (value.all_vc === null) {
        continue;
      }

      roundabout_ranks.push(value.all_vc);

      if (roundabout_rank_map.has(value.all_vc)) {
        roundabout_rank_map.get(value.all_vc)?.push(name);
      } else {
        roundabout_rank_map.set(value.all_vc, [name]);
      }
    }

    roundabout_ranks.sort();


    // interchanges rank
    const interchange_ranks = [];
    const interchange_rank_map = new Map<number, string[]>();

    const interchange_values: Array<[CapxInterchangeAnalysisResultParameters, string]> = [];
    for (const junctionTitle of this.state.keys()) {
      const junction = this.state.get(junctionTitle) as Junction;
      if (junction.type === JunctionTypes.Interchange) {
        interchange_values.push([junction.interchangeResult.value, junctionTitle]);
      }
    }

    for (const tp of interchange_values) {
      const [value, name] = tp;

      if (value.all_vc === null) {
        continue;
      }

      interchange_ranks.push(value.all_vc);

      if (interchange_rank_map.has(value.all_vc)) {
        interchange_rank_map.get(value.all_vc)?.push(name);
      } else {
        interchange_rank_map.set(value.all_vc, [name]);
      }
    }
    interchange_ranks.sort();

    const inter_ranks: Map<string, number | null> = new Map<string, number | null>();
    for (const junctionName of this.state.keys()) {
      inter_ranks.set(junctionName, null);
    }

    for (let i = 0; i < interchange_ranks.length; i++) {
      const score = interchange_ranks[i];
      const keys = interchange_rank_map.get(score);
      if (keys) {
        for (const key of keys) {
          inter_ranks.set(key, i);
        }
      }
    }

    for (let i = 0; i < roundabout_ranks.length; i++) {
      const score = roundabout_ranks[i];
      const keys = roundabout_rank_map.get(score);
      if (keys) {
        for (const key of keys) {
          inter_ranks.set(key, i);
        }
      }
    }

    for (let i = 0; i < intersection_ranks.length; i++) {
      const score = intersection_ranks[i];
      const keys = intersection_rank_map.get(score);
      if (keys) {
        for (const key of keys) {
          inter_ranks.set(key, i);
        }
      }
    }

    console.log(inter_ranks);
    this.rank$.next(inter_ranks);
  }

  //#region Conventional
  public updateConventionalJunctionParameters(params: CapxConventionalJunctionParameters): void {
    this.conventionalJunctionParameters$.next(params);
    this.solveConventionalJunction();
  }

  private solveConventionalJunction(): void {
    const inputParameters = this.inputParameters$.value;
    const masterParameters = this.masterParameters$.value;
    const junctionParameters = this.conventionalJunctionParameters$.value;
    const zone5_center_clv = max(
      (masterParameters.east_bound_left / inputParameters.adjustment_factor_left_turn + masterParameters.east_bound_u / inputParameters.adjustment_factor_u) / junctionParameters.east_bound_left + max(masterParameters.west_bound_thru / junctionParameters.west_bound_thru, round(max(0, masterParameters.west_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.west_bound_right - masterParameters.south_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.south_bound_left), 0)),
      (masterParameters.west_bound_left / inputParameters.adjustment_factor_left_turn + masterParameters.west_bound_u / inputParameters.adjustment_factor_u) / junctionParameters.west_bound_left + max(masterParameters.east_bound_thru / junctionParameters.east_bound_thru, round(max(0, masterParameters.east_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.east_bound_right - masterParameters.north_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.north_bound_left), 0))
      ) +
      max(
      (masterParameters.north_bound_left / inputParameters.adjustment_factor_left_turn + masterParameters.north_bound_u / inputParameters.adjustment_factor_u) / inputParameters.adjustment_factor_left_turn / junctionParameters.north_bound_left + max(masterParameters.south_bound_thru / junctionParameters.south_bound_thru, round(max(0, masterParameters.south_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.south_bound_right - masterParameters.east_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.east_bound_left), 0)),
      (masterParameters.south_bound_left / inputParameters.adjustment_factor_left_turn + masterParameters.south_bound_u / inputParameters.adjustment_factor_u) / inputParameters.adjustment_factor_left_turn / junctionParameters.south_bound_left + max(masterParameters.north_bound_thru / junctionParameters.north_bound_thru, round(max(0, masterParameters.north_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.north_bound_right - masterParameters.west_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.west_bound_left), 0))
      );
    const zone5_center_vc = round(zone5_center_clv / inputParameters.critical_lane_volume, 2);
    (this.state.get(Junctions.ConventionalIntersection)?.intersectionResult as BehaviorSubject<CapxIntersectionAnalysisResultParameters>).next({
      zone1_north_clv: null,
      zone1_north_vc: null,
      zone2_south_clv: null,
      zone2_south_vc: null,
      zone3_east_clv: null,
      zone3_east_vc: null,
      zone4_west_clv: null,
      zone4_west_vc: null,
      zone5_center_clv: round(zone5_center_clv),
      zone5_center_vc,
      all_clv: round(zone5_center_clv),
      all_vc: zone5_center_vc
    });

    this.updateRank();
  }
  //#endregion



  //#region Partial Displaced LeftTurn Intersection North South
  public updatePartialDisplacedLeftTurnIntersectionNorthSouthParameters(params: CapxPartialDisplacedLeftTurnIntersectionNorthSouth): void {
    this.partialDisplacedLeftTurnIntersectionNorthSouthJunctionParameters$.next(params);
    this.solvePartialDisplacedLeftTurnIntersectionNorthSouthJunction();
  }

  private solvePartialDisplacedLeftTurnIntersectionNorthSouthJunction(): void {
    const inputParameters = this.inputParameters$.value;
    const masterParameters = this.masterParameters$.value;
    const junctionParameters = this.partialDisplacedLeftTurnIntersectionNorthSouthJunctionParameters$.value;

    const zone1_north_clv = masterParameters.south_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.south_bound_left + (masterParameters.north_bound_thru + masterParameters.east_bound_left) / junctionParameters.north_bound_thru

    const zone5_center_clv = max(masterParameters.north_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.north_bound_left, masterParameters.north_bound_thru / junctionParameters.north_bound_thru, round(max(0, masterParameters.north_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.north_bound_right - masterParameters.east_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.east_bound_left), 0), masterParameters.south_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.south_bound_left, masterParameters.south_bound_thru / junctionParameters.south_bound_thru, round(max(0, masterParameters.south_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.south_bound_right - masterParameters.east_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.east_bound_left), 0)) + max(masterParameters.east_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.east_bound_left + max(masterParameters.west_bound_thru / junctionParameters.west_bound_thru, round(max(0, masterParameters.west_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.west_bound_right - masterParameters.south_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.south_bound_left), 0)), masterParameters.west_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.west_bound_left + max( masterParameters.east_bound_thru / junctionParameters.east_bound_thru, round(max(0, masterParameters.east_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.east_bound_right - masterParameters.north_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.north_bound_left), 0)))

    const zone2_south_clv = masterParameters.north_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.north_bound_left + (masterParameters.south_bound_thru + masterParameters.west_bound_left) / junctionParameters.south_bound_thru


    const zone1_north_vc = round(zone1_north_clv / inputParameters.critical_lane_volume, 2);
    const zone5_center_vc = round(zone5_center_clv / inputParameters.critical_lane_volume, 2);
    const zone2_south_vc = round(zone2_south_clv / inputParameters.critical_lane_volume, 2);
    (this.state.get(Junctions.PartialDisplacedLeftTurnIntersectionNorthSouth)?.intersectionResult as BehaviorSubject<CapxIntersectionAnalysisResultParameters>).next({
      zone1_north_clv: round(zone1_north_clv),
      zone1_north_vc,
      zone2_south_clv: round(zone2_south_clv),
      zone2_south_vc,
      zone3_east_clv: null,
      zone3_east_vc: null,
      zone4_west_clv: null,
      zone4_west_vc: null,
      zone5_center_clv: round(zone5_center_clv),
      zone5_center_vc,
      all_clv: round(max(zone1_north_clv, zone5_center_clv, zone2_south_clv)),
      all_vc: max(zone1_north_vc, zone5_center_vc, zone2_south_vc)
    });

    this.updateRank();
  }
  //#endregion


  //#region Partial Displaced LeftTurn Intersection East West
  public updatePartialDisplacedLeftTurnIntersectionEastWestParameters(params: CapxPartialDisplacedLeftTurnIntersectionEastWest): void {
    this.partialDisplacedLeftTurnIntersectionEastWestJunctionParameters$.next(params);
    this.solvePartialDisplacedLeftTurnIntersectionEastWestJunction();
  }

  private solvePartialDisplacedLeftTurnIntersectionEastWestJunction(): void {
    const inputParameters = this.inputParameters$.value;
    const masterParameters = this.masterParameters$.value;
    const junctionParameters = this.partialDisplacedLeftTurnIntersectionEastWestJunctionParameters$.value;

    const zone1_north_clv = masterParameters.south_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.south_bound_left + (masterParameters.north_bound_thru + masterParameters.east_bound_left) / junctionParameters.north_bound_thru

    const zone5_center_clv = max(masterParameters.north_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.north_bound_left, masterParameters.north_bound_thru / junctionParameters.north_bound_thru, round(max(0, masterParameters.north_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.north_bound_right - masterParameters.east_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.east_bound_left), 0), masterParameters.south_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.south_bound_left, masterParameters.south_bound_thru / junctionParameters.south_bound_thru, round(max(0, masterParameters.south_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.south_bound_right - masterParameters.east_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.east_bound_left), 0)) + max(masterParameters.east_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.east_bound_left + max(masterParameters.west_bound_thru / junctionParameters.west_bound_thru, round(max(0, masterParameters.west_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.west_bound_right - masterParameters.south_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.south_bound_left), 0)), masterParameters.west_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.west_bound_left + max( masterParameters.east_bound_thru / junctionParameters.east_bound_thru, round(max(0, masterParameters.east_bound_right / inputParameters.adjustment_factor_right_turn / junctionParameters.east_bound_right - masterParameters.north_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.north_bound_left), 0)))

    const zone2_south_clv = masterParameters.north_bound_left / inputParameters.adjustment_factor_left_turn / junctionParameters.north_bound_left + (masterParameters.south_bound_thru + masterParameters.west_bound_left) / junctionParameters.south_bound_thru


    const zone1_north_vc = round(zone1_north_clv / inputParameters.critical_lane_volume, 2);
    const zone5_center_vc = round(zone5_center_clv / inputParameters.critical_lane_volume, 2);
    const zone2_south_vc = round(zone2_south_clv / inputParameters.critical_lane_volume, 2);
    (this.state.get(Junctions.PartialDisplacedLeftTurnIntersectionNorthSouth)?.intersectionResult as BehaviorSubject<CapxIntersectionAnalysisResultParameters>).next({
      zone1_north_clv: round(zone1_north_clv),
      zone1_north_vc,
      zone2_south_clv: round(zone2_south_clv),
      zone2_south_vc,
      zone3_east_clv: null,
      zone3_east_vc: null,
      zone4_west_clv: null,
      zone4_west_vc: null,
      zone5_center_clv: round(zone5_center_clv),
      zone5_center_vc,
      all_clv: round(max(zone1_north_clv, zone5_center_clv, zone2_south_clv)),
      all_vc: max(zone1_north_vc, zone5_center_vc, zone2_south_vc)
    });

    this.updateRank();
  }
  //#endregion


  public getClvRangeColor(zone_all_clv: number | null): string {
    // update range text
    const clv = this.inputParameters$.value.critical_lane_volume;
    if (zone_all_clv === null || clv === null) {
      return this.default_color;
    }

    if (zone_all_clv < round(0.75 * clv)) {
      return '#ffffb2';
    }
    else if (zone_all_clv >= round(0.75 * clv) && zone_all_clv <= round(0.875 * clv) - 1) {
      return '#fecc5c';
    }
    else if (zone_all_clv >= round(0.875 * clv) && zone_all_clv <= round(clv) - 1) {
      return '#fd8d3c';
    }
    else if (zone_all_clv >= round(clv)) {
      return '#e31a1c';
    }
    else {
      return this.default_color;
    }
  }

  public getCurrentClvRange(zone_all_clv: string | number | null): number | null {
    // update range text
    console.log(zone_all_clv);
    const clv = this.inputParameters$.value.critical_lane_volume;
    if (zone_all_clv === null || clv === null) {
      return null;
    }

    if (zone_all_clv < round(0.75 * clv)) {
      return 1;
    }
    else if (zone_all_clv >= round(0.75 * clv) && zone_all_clv <= round(0.875 * clv) - 1) {
      return 2;
    }
    else if (zone_all_clv >= round(0.875 * clv) && zone_all_clv <= round(clv) - 1) {
      return 3;
    }
    else if (zone_all_clv >= round(clv)) {
      return 4;
    }
    else {
      return null;
    }
  }
}



