import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapxRoutingModule } from './capx-routing.module';
import { JunctionAnalysisParametersComponent } from '../capx/components/junction-analysis-parameters/junction-analysis-parameters.component';
import { JunctionAnalysisScoreResultsComponent } from '../capx/components/junction-analysis-score-results/junction-analysis-score-results.component';
import { ConventionalJunctionComponent } from '../capx/components/conventional-junction/conventional-junction.component';
import { ConventionalSharedRightTurnLeftTurnJunctionComponent } from '../capx/components/conventional-shared-right-turn-left-turn-junction/conventional-shared-right-turn-left-turn-junction.component';
import { QuadrantRoadwayIntersectionSouthWestJunctionComponent } from '../capx/components/quadrant-roadway-intersection-south-west-junction/quadrant-roadway-intersection-south-west-junction.component';
import { QuadrantRoadwayIntersectionNorthEastJunctionComponent } from '../capx/components/quadrant-roadway-intersection-north-east-junction/quadrant-roadway-intersection-north-east-junction.component';
import { QuadrantRoadwayIntersectionSouthEastJunctionComponent } from '../capx/components/quadrant-roadway-intersection-south-east-junction/quadrant-roadway-intersection-south-east-junction.component';
import { QuadrantRoadwayIntersectionNorthWestJunctionComponent } from '../capx/components/quadrant-roadway-intersection-north-west-junction/quadrant-roadway-intersection-north-west-junction.component';
import { PartialDisplacedLeftTurnIntersectionNorthSouthJunctionComponent } from '../capx/components/partial-displaced-left-turn-intersection-north-south-junction/partial-displaced-left-turn-intersection-north-south-junction.component';
import { PartialDisplacedLeftTurnIntersectionEastWestJunctionComponent } from '../capx/components/partial-displaced-left-turn-intersection-east-west-junction/partial-displaced-left-turn-intersection-east-west-junction.component';
import { FullDisplacedLeftTurnIntersectionJunctionComponent } from '../capx/components/full-displaced-left-turn-intersection-junction/full-displaced-left-turn-intersection-junction.component';
import { RestrictedCrossingUTurnIntersectionNorthSouthJunctionComponent } from '../capx/components/restricted-crossing-uturn-intersection-north-south-junction/restricted-crossing-uturn-intersection-north-south-junction.component';
import { RestrictedCrossingUTurnIntersectionEastWestJunctionComponent } from '../capx/components/restricted-crossing-uturn-intersection-east-west-junction/restricted-crossing-uturn-intersection-east-west-junction.component';
import { MedianUTurnIntersectionNorthSouthJunctionComponent } from '../capx/components/median-uturn-intersection-north-south-junction/median-uturn-intersection-north-south-junction.component';
import { MedianUTurnIntersectionEastWestJunctionComponent } from '../capx/components/median-uturn-intersection-east-west-junction/median-uturn-intersection-east-west-junction.component';
import { PartialMedianUTurnIntersectionNorthSouthJunctionComponent } from '../capx/components/partial-median-uturn-intersection-north-south-junction/partial-median-uturn-intersection-north-south-junction.component';
import { PartialMedianUTurnIntersectionEastWestJunctionComponent } from '../capx/components/partial-median-uturn-intersection-east-west-junction/partial-median-uturn-intersection-east-west-junction.component';
import { FiftyICDMiniRoundaboutJunctionComponent } from '../capx/components/fifty-icdmini-roundabout-junction/fifty-icdmini-roundabout-junction.component';
import { SeventyFiveICDMiniRoundaboutJunctionComponent } from '../capx/components/seventy-five-icdmini-roundabout-junction/seventy-five-icdmini-roundabout-junction.component';
import { OneNorthSouthxOneEastWestRoundaboutJunctionComponent } from '../capx/components/one-north-southx-one-east-west-roundabout-junction/one-north-southx-one-east-west-roundabout-junction.component';
import { OneNorthSouthxTwoEastWestLaneRoundaboutJunctionComponent } from '../capx/components/one-north-southx-two-east-west-lane-roundabout-junction/one-north-southx-two-east-west-lane-roundabout-junction.component';
import { TwoNorthSouthxOneEastWestLaneRoundaboutJunctionComponent } from '../capx/components/two-north-southx-one-east-west-lane-roundabout-junction/two-north-southx-one-east-west-lane-roundabout-junction.component';
import { TwoNorthSouthxTwoEastWestLaneRoundaboutRndabtJunctionComponent } from '../capx/components/two-north-southx-two-east-west-lane-roundabout-rndabt-junction/two-north-southx-two-east-west-lane-roundabout-rndabt-junction.component';
import { ThreeNorthSouthxThreeEastWestLaneRoundaboutRndabtJunctionComponent } from '../capx/components/three-north-southx-three-east-west-lane-roundabout-rndabt-junction/three-north-southx-three-east-west-lane-roundabout-rndabt-junction.component';
import { TraditionalDiamondNorthSouthJunctionComponent } from '../capx/components/traditional-diamond-north-south-junction/traditional-diamond-north-south-junction.component';
import { TraditionalDiamondEastWestJunctionComponent } from '../capx/components/traditional-diamond-east-west-junction/traditional-diamond-east-west-junction.component';
import { PartialCloverleafNorthSouthJunctionComponent } from '../capx/components/partial-cloverleaf-north-south-junction/partial-cloverleaf-north-south-junction.component';
import { PartialCloverleafEastWestJunctionComponent } from '../capx/components/partial-cloverleaf-east-west-junction/partial-cloverleaf-east-west-junction.component';
import { DisplacedLeftTurnInterchangeNorthSouthJunctionComponent } from '../capx/components/displaced-left-turn-interchange-north-south-junction/displaced-left-turn-interchange-north-south-junction.component';
import { DisplacedLeftTurnInterchangeEastWestJunctionComponent } from '../capx/components/displaced-left-turn-interchange-east-west-junction/displaced-left-turn-interchange-east-west-junction.component';
import { DoubleCrossoverDiamondInterchangeNorthSouthJunctionComponent } from '../capx/components/double-crossover-diamond-interchange-north-south-junction/double-crossover-diamond-interchange-north-south-junction.component';
import { DoubleCrossoverDiamondInterchangeEastWestJunctionComponent } from '../capx/components/double-crossover-diamond-interchange-east-west-junction/double-crossover-diamond-interchange-east-west-junction.component';
import { SinglePointInterchangeNorthSouthJunctionComponent } from '../capx/components/single-point-interchange-north-south-junction/single-point-interchange-north-south-junction.component';
import { SinglePointInterchangeEastWestJunctionComponent } from '../capx/components/single-point-interchange-east-west-junction/single-point-interchange-east-west-junction.component';
import { AnalysisComponent } from '../capx/components/analysis.component';


@NgModule({
  declarations: [JunctionAnalysisParametersComponent, JunctionAnalysisScoreResultsComponent, ConventionalJunctionComponent, ConventionalSharedRightTurnLeftTurnJunctionComponent, QuadrantRoadwayIntersectionSouthWestJunctionComponent, QuadrantRoadwayIntersectionNorthEastJunctionComponent, QuadrantRoadwayIntersectionSouthEastJunctionComponent, QuadrantRoadwayIntersectionNorthWestJunctionComponent, PartialDisplacedLeftTurnIntersectionNorthSouthJunctionComponent, PartialDisplacedLeftTurnIntersectionEastWestJunctionComponent, FullDisplacedLeftTurnIntersectionJunctionComponent, RestrictedCrossingUTurnIntersectionNorthSouthJunctionComponent, RestrictedCrossingUTurnIntersectionEastWestJunctionComponent, MedianUTurnIntersectionNorthSouthJunctionComponent, MedianUTurnIntersectionEastWestJunctionComponent, PartialMedianUTurnIntersectionNorthSouthJunctionComponent, PartialMedianUTurnIntersectionEastWestJunctionComponent, FiftyICDMiniRoundaboutJunctionComponent, SeventyFiveICDMiniRoundaboutJunctionComponent, OneNorthSouthxOneEastWestRoundaboutJunctionComponent, OneNorthSouthxTwoEastWestLaneRoundaboutJunctionComponent, TwoNorthSouthxOneEastWestLaneRoundaboutJunctionComponent, TwoNorthSouthxTwoEastWestLaneRoundaboutRndabtJunctionComponent, ThreeNorthSouthxThreeEastWestLaneRoundaboutRndabtJunctionComponent, TraditionalDiamondNorthSouthJunctionComponent, TraditionalDiamondEastWestJunctionComponent, PartialCloverleafNorthSouthJunctionComponent, PartialCloverleafEastWestJunctionComponent, DisplacedLeftTurnInterchangeNorthSouthJunctionComponent, DisplacedLeftTurnInterchangeEastWestJunctionComponent, DoubleCrossoverDiamondInterchangeNorthSouthJunctionComponent, DoubleCrossoverDiamondInterchangeEastWestJunctionComponent, SinglePointInterchangeNorthSouthJunctionComponent, SinglePointInterchangeEastWestJunctionComponent, AnalysisComponent],
  imports: [
    CommonModule,
    CapxRoutingModule
  ]
})
export class CapxModule { }
