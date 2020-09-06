export interface CapxInputParameters {
  east_bound_u: number;
  east_bound_left: number;
  east_bound_thru: number;
  east_bound_right: number;
  east_bound_truck_percent: number;
  east_bound_growth_factor: number;
  west_bound_u: number;
  west_bound_left: number;
  west_bound_thru: number;
  west_bound_right: number;
  west_bound_truck_percent: number;
  west_bound_growth_factor: number;
  south_bound_u: number;
  south_bound_left: number;
  south_bound_thru: number;
  south_bound_right: number;
  south_bound_truck_percent: number;
  south_bound_growth_factor: number;
  north_bound_u: number;
  north_bound_left: number;
  north_bound_thru: number;
  north_bound_right: number;
  north_bound_truck_percent: number;
  north_bound_growth_factor: number;
  adjustment_factor_u: number;
  adjustment_factor_left_turn: number;
  adjustment_factor_right_turn: number;
  truck_adjustment_factor: number;
  critical_lane_volume: number;
}

export interface CapxMasterParameters {
  east_bound_u: number;
  east_bound_left: number;
  east_bound_thru: number;
  east_bound_right: number;
  west_bound_u: number;
  west_bound_left: number;
  west_bound_thru: number;
  west_bound_right: number;
  south_bound_u: number;
  south_bound_left: number;
  south_bound_thru: number;
  south_bound_right: number;
  north_bound_u: number;
  north_bound_left: number;
  north_bound_thru: number;
  north_bound_right: number;
}

export class JunctionCapacityAnalyser {

  capxInputParameters: CapxInputParameters;

  capxMasterParameters: CapxMasterParameters = {
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
  };

  public constructor() {
    this.capxInputParameters = {
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
    };
  }

  public updateInputParameters(params: CapxInputParameters) {
    this.capxInputParameters = params;
  }

  public solve() {
    const east_bound_u =  Math.round((this.capxInputParameters.east_bound_u * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.east_bound_u * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const east_bound_left =  Math.round((this.capxInputParameters.east_bound_left * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.east_bound_left * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const east_bound_thru =  Math.round((this.capxInputParameters.east_bound_thru * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.east_bound_thru * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const east_bound_right =  Math.round((this.capxInputParameters.east_bound_right * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.east_bound_right * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const west_bound_u =  Math.round((this.capxInputParameters.west_bound_u * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.west_bound_u * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const west_bound_left =  Math.round((this.capxInputParameters.west_bound_left * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.west_bound_left * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const west_bound_thru =  Math.round((this.capxInputParameters.west_bound_thru * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.west_bound_thru * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const west_bound_right =  Math.round((this.capxInputParameters.west_bound_right * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.west_bound_right * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const south_bound_u =  Math.round((this.capxInputParameters.south_bound_u * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.south_bound_u * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const south_bound_left =  Math.round((this.capxInputParameters.south_bound_left * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.east_bound_u * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const south_bound_thru =  Math.round((this.capxInputParameters.south_bound_thru * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.south_bound_thru * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const south_bound_right =  Math.round((this.capxInputParameters.south_bound_right * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.south_bound_right * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const north_bound_u =  Math.round((this.capxInputParameters.north_bound_u * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.north_bound_u * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const north_bound_left =  Math.round((this.capxInputParameters.north_bound_left * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.north_bound_left * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const north_bound_thru =  Math.round((this.capxInputParameters.north_bound_thru * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.north_bound_thru * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    const north_bound_right =  Math.round((this.capxInputParameters.north_bound_right * (1 - this.capxInputParameters.east_bound_truck_percent) + this.capxInputParameters.north_bound_right * this.capxInputParameters.east_bound_truck_percent * this.capxInputParameters.truck_adjustment_factor) * (1 + this.capxInputParameters.west_bound_growth_factor));
    this.capxMasterParameters = {
      east_bound_u: east_bound_u,
      east_bound_left: east_bound_left,
      east_bound_thru: east_bound_thru,
      east_bound_right: east_bound_right,
      west_bound_u: west_bound_u,
      west_bound_left: west_bound_left,
      west_bound_thru: west_bound_thru,
      west_bound_right: west_bound_right,
      south_bound_u: south_bound_u,
      south_bound_left: south_bound_left,
      south_bound_thru: south_bound_thru,
      south_bound_right: south_bound_right,
      north_bound_u: north_bound_u,
      north_bound_left: north_bound_left,
      north_bound_thru: north_bound_thru,
      north_bound_right: north_bound_right,
    }
  }
}
