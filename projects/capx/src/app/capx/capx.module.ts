import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapxRoutingModule } from './capx-routing.module';
import { AnalysisComponent } from './components/analysis.component';
import { JunctionAnalysisParametersComponent } from './components/junction-analysis-parameters/junction-analysis-parameters.component';
import { JunctionAnalysisScoreResultsComponent } from './components/junction-analysis-score-results/junction-analysis-score-results.component';
import { ConventionalJunctionComponent } from './components/junctions/intersections/conventional-junction/conventional-junction.component';
import { ConventionalSharedRightTurnLeftTurnJunctionComponent } from './components/junctions/intersections/conventional-shared-right-turn-left-turn-junction/conventional-shared-right-turn-left-turn-junction.component';
import { QuadrantRoadwayIntersectionSouthWestJunctionComponent } from './components/junctions/intersections/quadrant-roadway-intersection-south-west-junction/quadrant-roadway-intersection-south-west-junction.component';
import { QuadrantRoadwayIntersectionNorthEastJunctionComponent } from './components/junctions/intersections/quadrant-roadway-intersection-north-east-junction/quadrant-roadway-intersection-north-east-junction.component';
import { QuadrantRoadwayIntersectionSouthEastJunctionComponent } from './components/junctions/intersections/quadrant-roadway-intersection-south-east-junction/quadrant-roadway-intersection-south-east-junction.component';
import { QuadrantRoadwayIntersectionNorthWestJunctionComponent } from './components/junctions/intersections/quadrant-roadway-intersection-north-west-junction/quadrant-roadway-intersection-north-west-junction.component';
import { PartialDisplacedLeftTurnIntersectionNorthSouthJunctionComponent } from './components/junctions/intersections/partial-displaced-left-turn-intersection-north-south-junction/partial-displaced-left-turn-intersection-north-south-junction.component';
import { PartialDisplacedLeftTurnIntersectionEastWestJunctionComponent } from './components/junctions/intersections/partial-displaced-left-turn-intersection-east-west-junction/partial-displaced-left-turn-intersection-east-west-junction.component';
import { FullDisplacedLeftTurnIntersectionJunctionComponent } from './components/junctions/intersections/full-displaced-left-turn-intersection-junction/full-displaced-left-turn-intersection-junction.component';
import { RestrictedCrossingUTurnIntersectionNorthSouthJunctionComponent } from './components/junctions/intersections/restricted-crossing-uturn-intersection-north-south-junction/restricted-crossing-uturn-intersection-north-south-junction.component';
import { RestrictedCrossingUTurnIntersectionEastWestJunctionComponent } from './components/junctions/intersections/restricted-crossing-uturn-intersection-east-west-junction/restricted-crossing-uturn-intersection-east-west-junction.component';
import { MedianUTurnIntersectionNorthSouthJunctionComponent } from './components/junctions/intersections/median-uturn-intersection-north-south-junction/median-uturn-intersection-north-south-junction.component';
import { MedianUTurnIntersectionEastWestJunctionComponent } from './components/junctions/intersections/median-uturn-intersection-east-west-junction/median-uturn-intersection-east-west-junction.component';
import { PartialMedianUTurnIntersectionNorthSouthJunctionComponent } from './components/junctions/intersections/partial-median-uturn-intersection-north-south-junction/partial-median-uturn-intersection-north-south-junction.component';
import { PartialMedianUTurnIntersectionEastWestJunctionComponent } from './components/junctions/intersections/partial-median-uturn-intersection-east-west-junction/partial-median-uturn-intersection-east-west-junction.component';
import { FiftyICDMiniRoundaboutJunctionComponent } from './components/junctions/roundabouts/fifty-icdmini-roundabout-junction/fifty-icdmini-roundabout-junction.component';
import { SeventyFiveICDMiniRoundaboutJunctionComponent } from './components/junctions/roundabouts/seventy-five-icdmini-roundabout-junction/seventy-five-icdmini-roundabout-junction.component';
import { OneNorthSouthxOneEastWestRoundaboutJunctionComponent } from './components/junctions/roundabouts/one-north-southx-one-east-west-roundabout-junction/one-north-southx-one-east-west-roundabout-junction.component';
import { OneNorthSouthxTwoEastWestLaneRoundaboutJunctionComponent } from './components/junctions/roundabouts/one-north-southx-two-east-west-lane-roundabout-junction/one-north-southx-two-east-west-lane-roundabout-junction.component';
import { TwoNorthSouthxOneEastWestLaneRoundaboutJunctionComponent } from './components/junctions/roundabouts/two-north-southx-one-east-west-lane-roundabout-junction/two-north-southx-one-east-west-lane-roundabout-junction.component';
import { TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionComponent } from './components/junctions/roundabouts/two-north-southx-two-east-west-lane-roundabout-junction/two-north-southx-two-east-west-lane-roundabout-junction.component';
import { ThreeNorthSouthxThreeEastWestLaneRoundaboutJunctionComponent } from './components/junctions/roundabouts/three-north-southx-three-east-west-lane-roundabout-junction/three-north-southx-three-east-west-lane-roundabout-junction.component';
import { TraditionalDiamondNorthSouthJunctionComponent } from './components/junctions/interchanges/traditional-diamond-north-south-junction/traditional-diamond-north-south-junction.component';
import { TraditionalDiamondEastWestJunctionComponent } from './components/junctions/interchanges/traditional-diamond-east-west-junction/traditional-diamond-east-west-junction.component';
import { PartialCloverleafNorthSouthJunctionComponent } from './components/junctions/interchanges/partial-cloverleaf-north-south-junction/partial-cloverleaf-north-south-junction.component';
import { PartialCloverleafEastWestJunctionComponent } from './components/junctions/interchanges/partial-cloverleaf-east-west-junction/partial-cloverleaf-east-west-junction.component';
import { DisplacedLeftTurnInterchangeNorthSouthJunctionComponent } from './components/junctions/interchanges/displaced-left-turn-interchange-north-south-junction/displaced-left-turn-interchange-north-south-junction.component';
import { DisplacedLeftTurnInterchangeEastWestJunctionComponent } from './components/junctions/interchanges/displaced-left-turn-interchange-east-west-junction/displaced-left-turn-interchange-east-west-junction.component';
import { DoubleCrossoverDiamondInterchangeNorthSouthJunctionComponent } from './components/junctions/interchanges/double-crossover-diamond-interchange-north-south-junction/double-crossover-diamond-interchange-north-south-junction.component';
import { DoubleCrossoverDiamondInterchangeEastWestJunctionComponent } from './components/junctions/interchanges/double-crossover-diamond-interchange-east-west-junction/double-crossover-diamond-interchange-east-west-junction.component';
import { SinglePointInterchangeNorthSouthJunctionComponent } from './components/junctions/interchanges/single-point-interchange-north-south-junction/single-point-interchange-north-south-junction.component';
import { SinglePointInterchangeEastWestJunctionComponent } from './components/junctions/interchanges/single-point-interchange-east-west-junction/single-point-interchange-east-west-junction.component';
import { CriticalLaneVolumeSumComponent } from './components/common/critical-lane-volume-sum/critical-lane-volume-sum.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConventionalDesignComponent } from './components/junctions/intersections/conventional-junction/conventional-design/conventional-design.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HandleNullValuePipe } from '../capx/pipes/handle-null-value.pipe';
import { ClvStylePipe } from '../capx/pipes/clv-style.pipe';
import { VcStylePipe } from '../capx/pipes/vc-style.pipe';

@NgModule({
  declarations: [
    AnalysisComponent,
    JunctionAnalysisParametersComponent,
    JunctionAnalysisScoreResultsComponent,
     ConventionalJunctionComponent,
     ConventionalSharedRightTurnLeftTurnJunctionComponent,
     QuadrantRoadwayIntersectionSouthWestJunctionComponent,
     QuadrantRoadwayIntersectionNorthEastJunctionComponent,
     QuadrantRoadwayIntersectionSouthEastJunctionComponent,
     QuadrantRoadwayIntersectionNorthWestJunctionComponent,
     PartialDisplacedLeftTurnIntersectionNorthSouthJunctionComponent,
     PartialDisplacedLeftTurnIntersectionEastWestJunctionComponent,
     FullDisplacedLeftTurnIntersectionJunctionComponent,
     RestrictedCrossingUTurnIntersectionNorthSouthJunctionComponent,
     RestrictedCrossingUTurnIntersectionEastWestJunctionComponent,
     MedianUTurnIntersectionNorthSouthJunctionComponent,
     MedianUTurnIntersectionEastWestJunctionComponent,
     PartialMedianUTurnIntersectionNorthSouthJunctionComponent,
     PartialMedianUTurnIntersectionEastWestJunctionComponent,
     FiftyICDMiniRoundaboutJunctionComponent,
     SeventyFiveICDMiniRoundaboutJunctionComponent,
     OneNorthSouthxOneEastWestRoundaboutJunctionComponent,
     OneNorthSouthxTwoEastWestLaneRoundaboutJunctionComponent,
     TwoNorthSouthxOneEastWestLaneRoundaboutJunctionComponent,
     TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionComponent,
     ThreeNorthSouthxThreeEastWestLaneRoundaboutJunctionComponent,
     TraditionalDiamondNorthSouthJunctionComponent,
     TraditionalDiamondEastWestJunctionComponent,
     PartialCloverleafNorthSouthJunctionComponent,
     PartialCloverleafEastWestJunctionComponent,
     DisplacedLeftTurnInterchangeNorthSouthJunctionComponent,
     DisplacedLeftTurnInterchangeEastWestJunctionComponent,
     DoubleCrossoverDiamondInterchangeNorthSouthJunctionComponent,
     DoubleCrossoverDiamondInterchangeEastWestJunctionComponent,
     SinglePointInterchangeNorthSouthJunctionComponent,
     SinglePointInterchangeEastWestJunctionComponent,
     CriticalLaneVolumeSumComponent,
     ConventionalDesignComponent,
     HandleNullValuePipe,
     ClvStylePipe,
     VcStylePipe],
  imports: [
    CommonModule,
    CapxRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class CapxModule { }
