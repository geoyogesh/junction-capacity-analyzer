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
  }

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

  // Intersections
  conventionalJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  conventionalSharedRightTurnLeftTurnJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  fullDisplacedLeftTurnIntersectionJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  medianUTurnIntersectionEastWestJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  medianUTurnIntersectionNorthSouthJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  partialDisplacedLeftTurnIntersectionEastWestJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  partialDisplacedLeftTurnIntersectionNorthSouthJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  partialMedianUTurnIntersectionEastWestJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  partialMedianUTurnIntersectionNorthSouthJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  restrictedCrossingUTurnIntersectionEastWestJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  restrictedCrossingUTurnIntersectionNorthSouthJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  quadrantRoadwayIntersectionNorthEastJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  quadrantRoadwayIntersectionNorthWestJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  quadrantRoadwayIntersectionSouthEastJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);
  quadrantRoadwayIntersectionSouthWestJunctionResult$ = new BehaviorSubject<CapxIntersectionAnalysisResultParameters>(this.intersection_default_result);


  // Interchange
  displacedLeftTurnInterchangeEastWestJunctionResult$ = new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result);
  displacedLeftTurnInterchangeNorthSouthJunctionResult$ = new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result);
  doubleCrossoverDiamondInterchangeEastWestJunctionResult$ = new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result);
  doubleCrossoverDiamondInterchangeNorthSouthJunctionResult$ = new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result);
  partialCloverleafEastWestJunctionResult$ = new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result);
  partialCloverleafNorthSouthJunctionResult$ = new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result);
  singlePointInterchangeEastWestJunctionResult$ = new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result);
  singlePointInterchangeNorthSouthJunctionResult$ = new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result);
  traditionalDiamondEastWestJunctionResult$ = new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result);
  traditionalDiamondNorthSouthJunctionResult$ = new BehaviorSubject<CapxInterchangeAnalysisResultParameters>(this.interchange_default_result);


  // Roundabouts
  fiftyICDMiniRoundaboutJunctionResult$ = new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result);
  oneNorthSouthxOneEastWestRoundaboutJunctionnResult$ = new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result);
  oneNorthSouthxTwoEastWestLaneRoundaboutJunctionResult$ = new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result);
  seventyFiveICDMiniRoundaboutJunctionResult$ = new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result);
  threeNorthSouthxThreeEastWestLaneRoundaboutJunctionResult$ = new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result);
  twoNorthSouthxOneEastWestLaneRoundaboutJunctionResult$ = new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result);
  twoNorthSouthxTwoEastWestLaneRoundaboutJunctionResult$ = new BehaviorSubject<CapxRoundaboutsAnalysisResultParameters>(this.roundabout_default_result);



  constructor() {
    this.solve();
    this.solveConventionalJunction();
  }

  public updateInputParameters(params: CapxInputParameters) {
    this.inputParameters$.next(params);
    this.solve();
  }

  private solve() {
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


  public updateConventionalJunctionParameters(params: CapxConventionalJunctionParameters) {
    this.conventionalJunctionParameters$.next(params);
    this.solveConventionalJunction();
  }

  private solveConventionalJunction() {
    const inputParameters = this.inputParameters$.value;
    const masterParameters = this.masterParameters$.value;
    const junctionParameters = this.conventionalJunctionParameters$.value;
    const zone5_center_clv = max(
      (masterParameters.east_bound_left/inputParameters.adjustment_factor_left_turn+masterParameters.east_bound_u/inputParameters.adjustment_factor_u)/junctionParameters.east_bound_left + max(masterParameters.west_bound_thru/junctionParameters.west_bound_thru, round(max(0,masterParameters.west_bound_right/inputParameters.adjustment_factor_right_turn/junctionParameters.west_bound_right-masterParameters.south_bound_left/inputParameters.adjustment_factor_left_turn/junctionParameters.south_bound_left),0)),
      (masterParameters.west_bound_left/inputParameters.adjustment_factor_left_turn+masterParameters.west_bound_u/inputParameters.adjustment_factor_u)/junctionParameters.west_bound_left +max(masterParameters.east_bound_thru/junctionParameters.east_bound_thru, round(max(0,masterParameters.east_bound_right/inputParameters.adjustment_factor_right_turn/junctionParameters.east_bound_right-masterParameters.north_bound_left/inputParameters.adjustment_factor_left_turn/junctionParameters.north_bound_left),0))
      ) +
      max(
      (masterParameters.north_bound_left/inputParameters.adjustment_factor_left_turn+masterParameters.north_bound_u/inputParameters.adjustment_factor_u)/inputParameters.adjustment_factor_left_turn/junctionParameters.north_bound_left + max(masterParameters.south_bound_thru/junctionParameters.south_bound_thru, round(max(0,masterParameters.south_bound_right/inputParameters.adjustment_factor_right_turn/junctionParameters.south_bound_right-masterParameters.east_bound_left/inputParameters.adjustment_factor_left_turn/junctionParameters.east_bound_left),0)),
      (masterParameters.south_bound_left/inputParameters.adjustment_factor_left_turn+masterParameters.south_bound_u/inputParameters.adjustment_factor_u)/inputParameters.adjustment_factor_left_turn/junctionParameters.south_bound_left +max(masterParameters.north_bound_thru/junctionParameters.north_bound_thru, round(max(0,masterParameters.north_bound_right/inputParameters.adjustment_factor_right_turn/junctionParameters.north_bound_right-masterParameters.west_bound_left/inputParameters.adjustment_factor_left_turn/junctionParameters.west_bound_left),0))
      );
    const zone5_center_vc = round(zone5_center_clv / inputParameters.critical_lane_volume, 2);
    this.conventionalJunctionResult$.next({
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
      all_vc: zone5_center_vc
    });
  }
}