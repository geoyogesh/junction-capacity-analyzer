import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapxRoutingModule } from './capx-routing.module';
import { AnalysisComponent } from './components/analysis.component';
import { JunctionAnalysisParametersComponent } from './components/junction-analysis-parameters/junction-analysis-parameters.component';
import { JunctionAnalysisScoreResultsComponent } from './components/junction-analysis-score-results/junction-analysis-score-results.component';
import { CriticalLaneVolumeSumComponent } from './components/common/critical-lane-volume-sum/critical-lane-volume-sum.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConventionalDesignComponent } from './components/junctions/intersections/conventional-junction/design/conventional-design.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HandleNullValuePipe } from '../capx/pipes/handle-null-value.pipe';
import { ClvStylePipe } from '../capx/pipes/clv-style.pipe';
import { VcStylePipe } from '../capx/pipes/vc-style.pipe';
import { ClarityModule } from '@clr/angular';
import { CreditsComponent } from '../capx/components/credits/credits.component';
import { ShowJunctionRankComponent } from '../capx/components/junction-analysis-score-results/show-junction-rank/show-junction-rank.component';
import { ConventionalSharedRightTurnLeftTurnDesignComponent } from '../capx/components/junctions/intersections/conventional-shared-right-turn-left-turn-junction/design/conventional-shared-right-turn-left-turn-design.component';
import { FullDisplacedLeftTurnIntersectionDesignComponent } from '../capx/components/junctions/intersections/full-displaced-left-turn-intersection-junction/design/full-displaced-left-turn-intersection-design.component';
import { MedianUTurnIntersectionNorthSouthDesignComponent } from '../capx/components/junctions/intersections/median-uturn-intersection-north-south-junction/design/median-uturn-intersection-north-south-design.component';
import { PartialDisplacedLeftTurnIntersectionEastWestDesignComponent } from '../capx/components/junctions/intersections/partial-displaced-left-turn-intersection-east-west-junction/design/partial-displaced-left-turn-intersection-east-west-design.component';
import { PartialDisplacedLeftTurnIntersectionNorthSouthDesignComponent } from '../capx/components/junctions/intersections/partial-displaced-left-turn-intersection-north-south-junction/design/partial-displaced-left-turn-intersection-north-south-design.component';
import { PartialMedianUTurnIntersectionEastWestDesignComponent } from '../capx/components/junctions/intersections/partial-median-uturn-intersection-east-west-junction/design/partial-median-uturn-intersection-east-west-design.component';
import { PartialMedianUTurnIntersectionNorthSouthDesignComponent } from '../capx/components/junctions/intersections/partial-median-uturn-intersection-north-south-junction/design/partial-median-uturn-intersection-north-south-design.component';
import { QuadrantRoadwayIntersectionNorthEastDesignComponent } from '../capx/components/junctions/intersections/quadrant-roadway-intersection-north-east-junction/design/quadrant-roadway-intersection-north-east-design.component';
import { QuadrantRoadwayIntersectionNorthWestDesignComponent } from '../capx/components/junctions/intersections/quadrant-roadway-intersection-north-west-junction/design/quadrant-roadway-intersection-north-west-design.component';
import { QuadrantRoadwayIntersectionSouthEastDesignComponent } from '../capx/components/junctions/intersections/quadrant-roadway-intersection-south-east-junction/design/quadrant-roadway-intersection-south-east-design.component';
import { QuadrantRoadwayIntersectionSouthWestDesignComponent } from '../capx/components/junctions/intersections/quadrant-roadway-intersection-south-west-junction/design/quadrant-roadway-intersection-south-west-design.component';
import { RestrictedCrossingUTurnIntersectionEastWestDesignComponent } from '../capx/components/junctions/intersections/restricted-crossing-uturn-intersection-east-west-junction/design/restricted-crossing-uturn-intersection-east-west-design.component';
import { RestrictedCrossingUTurnIntersectionNorthSouthDesignComponent } from '../capx/components/junctions/intersections/restricted-crossing-uturn-intersection-north-south-junction/design/restricted-crossing-uturn-intersection-north-south-design.component';
import { DisplacedLeftTurnInterchangeEastWestDesignComponent } from '../capx/components/junctions/interchanges/displaced-left-turn-interchange-east-west-junction/design/displaced-left-turn-interchange-east-west-design.component';
import { DisplacedLeftTurnInterchangeNorthSouthDesignComponent } from '../capx/components/junctions/interchanges/displaced-left-turn-interchange-north-south-junction/design/displaced-left-turn-interchange-north-south-design.component';
import { DoubleCrossoverDiamondInterchangeEastWestDesignComponent } from '../capx/components/junctions/interchanges/double-crossover-diamond-interchange-east-west-junction/design/double-crossover-diamond-interchange-east-west-design.component';
import { DoubleCrossoverDiamondInterchangeNorthSouthDesignComponent } from '../capx/components/junctions/interchanges/double-crossover-diamond-interchange-north-south-junction/design/double-crossover-diamond-interchange-north-south-design.component';
import { PartialCloverleafEastWestDesignComponent } from '../capx/components/junctions/interchanges/partial-cloverleaf-east-west-junction/design/partial-cloverleaf-east-west-design.component';
import { PartialCloverleafNorthSouthDesignComponent } from '../capx/components/junctions/interchanges/partial-cloverleaf-north-south-junction/design/partial-cloverleaf-north-south-design.component';
import { SinglePointInterchangeEastWestDesignComponent } from '../capx/components/junctions/interchanges/single-point-interchange-east-west-junction/design/single-point-interchange-east-west-design.component';
import { SinglePointInterchangeNorthSouthDesignComponent } from '../capx/components/junctions/interchanges/single-point-interchange-north-south-junction/design/single-point-interchange-north-south-design.component';
import { TraditionalDiamondEastWestDesignComponent } from '../capx/components/junctions/interchanges/traditional-diamond-east-west-junction/design/traditional-diamond-east-west-design.component';
import { TraditionalDiamondNorthSouthDesignComponent } from '../capx/components/junctions/interchanges/traditional-diamond-north-south-junction/design/traditional-diamond-north-south-design.component';
import { FiftyICDMiniRoundaboutDesignComponent } from '../capx/components/junctions/roundabouts/fifty-icdmini-roundabout-junction/design/fifty-icdmini-roundabout-design.component';
import { OneNorthSouthxOneEastWestRoundaboutDesignComponent } from '../capx/components/junctions/roundabouts/one-north-southx-one-east-west-roundabout-junction/design/one-north-southx-one-east-west-roundabout-design.component';
import { OneNorthSouthxTwoEastWestLaneRoundaboutDesignComponent } from '../capx/components/junctions/roundabouts/one-north-southx-two-east-west-lane-roundabout-junction/design/one-north-southx-two-east-west-lane-roundabout-design.component';
import { SeventyFiveICDMiniRoundaboutDesignComponent } from '../capx/components/junctions/roundabouts/seventy-five-icdmini-roundabout-junction/design/seventy-five-icdmini-roundabout-design.component';
import { ThreeNorthSouthxThreeEastWestLaneRoundaboutDesignComponent } from '../capx/components/junctions/roundabouts/three-north-southx-three-east-west-lane-roundabout-junction/design/three-north-southx-three-east-west-lane-roundabout-design.component';
import { TwoNorthSouthxOneEastWestLaneRoundaboutDesignComponent } from '../capx/components/junctions/roundabouts/two-north-southx-one-east-west-lane-roundabout-junction/design/two-north-southx-one-east-west-lane-roundabout-design.component';
import { TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionDesignComponent } from '../capx/components/junctions/roundabouts/two-north-southx-two-east-west-lane-roundabout-junction/design/two-north-southx-two-east-west-lane-roundabout-junction-design.component';
import { ConventionalConfigurationComponent } from '../capx/components/junctions/intersections/conventional-junction/configuration/conventional-configuration.component';
import { ConventionalSharedRightTurnLeftTurnConfigurationComponent } from '../capx/components/junctions/intersections/conventional-shared-right-turn-left-turn-junction/configuration/conventional-shared-right-turn-left-turn-configuration.component';
import { FullDisplacedLeftTurnIntersectionConfigurationComponent } from '../capx/components/junctions/intersections/full-displaced-left-turn-intersection-junction/configuration/full-displaced-left-turn-intersection-configuration.component';
import { MedianUTurnIntersectionNorthSouthConfigurationComponent } from '../capx/components/junctions/intersections/median-uturn-intersection-north-south-junction/configuration/median-uturn-intersection-north-south-configuration.component';
import { PartialDisplacedLeftTurnIntersectionEastWestConfigurationComponent } from '../capx/components/junctions/intersections/partial-displaced-left-turn-intersection-east-west-junction/configuration/partial-displaced-left-turn-intersection-east-west-configuration.component';
import { PartialDisplacedLeftTurnIntersectionNorthSouthConfigurationComponent } from '../capx/components/junctions/intersections/partial-displaced-left-turn-intersection-north-south-junction/configuration/partial-displaced-left-turn-intersection-north-south-configuration.component';
import { PartialMedianUTurnIntersectionEastWestConfigurationComponent } from '../capx/components/junctions/intersections/partial-median-uturn-intersection-east-west-junction/configuration/partial-median-uturn-intersection-east-west-configuration.component';
import { PartialMedianUTurnIntersectionNorthSouthConfigurationComponent } from '../capx/components/junctions/intersections/partial-median-uturn-intersection-north-south-junction/configuration/partial-median-uturn-intersection-north-south-configuration.component';
import { QuadrantRoadwayIntersectionNorthEastConfigurationComponent } from '../capx/components/junctions/intersections/quadrant-roadway-intersection-north-east-junction/configuration/quadrant-roadway-intersection-north-east-configuration.component';
import { QuadrantRoadwayIntersectionNorthWestConfigurationComponent } from '../capx/components/junctions/intersections/quadrant-roadway-intersection-north-west-junction/configuration/quadrant-roadway-intersection-north-west-configuration.component';
import { QuadrantRoadwayIntersectionSouthEastConfigurationComponent } from '../capx/components/junctions/intersections/quadrant-roadway-intersection-south-east-junction/configuration/quadrant-roadway-intersection-south-east-configuration.component';
import { QuadrantRoadwayIntersectionSouthWestConfigurationComponent } from '../capx/components/junctions/intersections/quadrant-roadway-intersection-south-west-junction/configuration/quadrant-roadway-intersection-south-west-configuration.component';
import { RestrictedCrossingUTurnIntersectionEastWestConfigurationComponent } from '../capx/components/junctions/intersections/restricted-crossing-uturn-intersection-east-west-junction/configuration/restricted-crossing-uturn-intersection-east-west-configuration.component';
import { RestrictedCrossingUTurnIntersectionNorthSouthConfigurationComponent } from '../capx/components/junctions/intersections/restricted-crossing-uturn-intersection-north-south-junction/configuration/restricted-crossing-uturn-intersection-north-south-configuration.component';
import { DisplacedLeftTurnInterchangeEastWestConfigurationComponent } from '../capx/components/junctions/interchanges/displaced-left-turn-interchange-east-west-junction/configuration/displaced-left-turn-interchange-east-west-configuration.component';
import { DisplacedLeftTurnInterchangeNorthSouthConfigurationComponent } from '../capx/components/junctions/interchanges/displaced-left-turn-interchange-north-south-junction/configuration/displaced-left-turn-interchange-north-south-configuration.component';
import { DoubleCrossoverDiamondInterchangeEastWestConfigurationComponent } from '../capx/components/junctions/interchanges/double-crossover-diamond-interchange-east-west-junction/configuration/double-crossover-diamond-interchange-east-west-configuration.component';
import { DoubleCrossoverDiamondInterchangeNorthSouthConfigurationComponent } from '../capx/components/junctions/interchanges/double-crossover-diamond-interchange-north-south-junction/configuration/double-crossover-diamond-interchange-north-south-configuration.component';
import { PartialCloverleafEastWestConfigurationComponent } from '../capx/components/junctions/interchanges/partial-cloverleaf-east-west-junction/configuration/partial-cloverleaf-east-west-configuration.component';
import { PartialCloverleafNorthSouthConfigurationComponent } from '../capx/components/junctions/interchanges/partial-cloverleaf-north-south-junction/configuration/partial-cloverleaf-north-south-configuration.component';
import { SinglePointInterchangeEastWestConfigurationComponent } from '../capx/components/junctions/interchanges/single-point-interchange-east-west-junction/configuration/single-point-interchange-east-west-configuration.component';
import { SinglePointInterchangeNorthSouthConfigurationComponent } from '../capx/components/junctions/interchanges/single-point-interchange-north-south-junction/configuration/single-point-interchange-north-south-configuration.component';
import { TraditionalDiamondEastWestConfigurationComponent } from '../capx/components/junctions/interchanges/traditional-diamond-east-west-junction/configuration/traditional-diamond-east-west-configuration.component';
import { TraditionalDiamondNorthSouthConfigurationComponent } from '../capx/components/junctions/interchanges/traditional-diamond-north-south-junction/configuration/traditional-diamond-north-south-configuration.component';
import { FiftyICDMiniRoundaboutConfigurationComponent } from '../capx/components/junctions/roundabouts/fifty-icdmini-roundabout-junction/configuration/fifty-icdmini-roundabout-configuration.component';
import { OneNorthSouthxOneEastWestRoundaboutConfigurationComponent } from '../capx/components/junctions/roundabouts/one-north-southx-one-east-west-roundabout-junction/configuration/one-north-southx-one-east-west-roundabout-configuration.component';
import { OneNorthSouthxTwoEastWestLaneRoundaboutConfigurationComponent } from '../capx/components/junctions/roundabouts/one-north-southx-two-east-west-lane-roundabout-junction/configuration/one-north-southx-two-east-west-lane-roundabout-configuration.component';
import { SeventyFiveICDMiniRoundaboutConfigurationComponent } from '../capx/components/junctions/roundabouts/seventy-five-icdmini-roundabout-junction/configuration/seventy-five-icdmini-roundabout-configuration.component';
import { ThreeNorthSouthxThreeEastWestLaneRoundaboutConfigurationComponent } from '../capx/components/junctions/roundabouts/three-north-southx-three-east-west-lane-roundabout-junction/configuration/three-north-southx-three-east-west-lane-roundabout-configuration.component';
import { TwoNorthSouthxOneEastWestLaneRoundaboutConfigurationComponent } from '../capx/components/junctions/roundabouts/two-north-southx-one-east-west-lane-roundabout-junction/configuration/two-north-southx-one-east-west-lane-roundabout-configuration.component';
import { TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionConfigurationComponent } from '../capx/components/junctions/roundabouts/two-north-southx-two-east-west-lane-roundabout-junction/configuration/two-north-southx-two-east-west-lane-roundabout-junction-configuration.component';
import { JunctionComponent } from '../capx/components/junctions/junction.component';
import {PortalModule} from '@angular/cdk/portal';
import { MedianUTurnIntersectionEastWestDesignComponent } from '../capx/components/junctions/intersections/median-uturn-intersection-east-west-junction/design/median-uturn-intersection-east-west-design.component';
import { MedianUTurnIntersectionEastWestConfigurationComponent } from '../capx/components/junctions/intersections/median-uturn-intersection-east-west-junction/configuration/median-uturn-intersection-east-west-configuration.component';

@NgModule({
  declarations: [
    AnalysisComponent,
    JunctionAnalysisParametersComponent,
    JunctionAnalysisScoreResultsComponent,
     CriticalLaneVolumeSumComponent,
     ConventionalDesignComponent,
     HandleNullValuePipe,
     ClvStylePipe,
     VcStylePipe,
     CreditsComponent,
     ShowJunctionRankComponent,
     ConventionalSharedRightTurnLeftTurnDesignComponent,
     FullDisplacedLeftTurnIntersectionDesignComponent,
     MedianUTurnIntersectionNorthSouthDesignComponent,
     PartialDisplacedLeftTurnIntersectionEastWestDesignComponent,
     PartialDisplacedLeftTurnIntersectionNorthSouthDesignComponent,
     PartialMedianUTurnIntersectionEastWestDesignComponent,
     PartialMedianUTurnIntersectionNorthSouthDesignComponent,
     QuadrantRoadwayIntersectionNorthEastDesignComponent,
     QuadrantRoadwayIntersectionNorthWestDesignComponent,
     QuadrantRoadwayIntersectionSouthEastDesignComponent,
     QuadrantRoadwayIntersectionSouthWestDesignComponent,
     RestrictedCrossingUTurnIntersectionEastWestDesignComponent,
     RestrictedCrossingUTurnIntersectionNorthSouthDesignComponent,
     DisplacedLeftTurnInterchangeEastWestDesignComponent,
     DisplacedLeftTurnInterchangeNorthSouthDesignComponent,
     DoubleCrossoverDiamondInterchangeEastWestDesignComponent,
     DoubleCrossoverDiamondInterchangeNorthSouthDesignComponent,
     PartialCloverleafEastWestDesignComponent,
     PartialCloverleafNorthSouthDesignComponent,
     SinglePointInterchangeEastWestDesignComponent,
     SinglePointInterchangeNorthSouthDesignComponent,
     TraditionalDiamondEastWestDesignComponent,
     TraditionalDiamondNorthSouthDesignComponent,
     FiftyICDMiniRoundaboutDesignComponent,
     OneNorthSouthxOneEastWestRoundaboutDesignComponent,
     OneNorthSouthxTwoEastWestLaneRoundaboutDesignComponent,
     SeventyFiveICDMiniRoundaboutDesignComponent,
     ThreeNorthSouthxThreeEastWestLaneRoundaboutDesignComponent,
     TwoNorthSouthxOneEastWestLaneRoundaboutDesignComponent,
     TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionDesignComponent,
     ConventionalConfigurationComponent,
     ConventionalSharedRightTurnLeftTurnConfigurationComponent,
     FullDisplacedLeftTurnIntersectionConfigurationComponent,
     MedianUTurnIntersectionNorthSouthConfigurationComponent,
     PartialDisplacedLeftTurnIntersectionEastWestConfigurationComponent,
     PartialDisplacedLeftTurnIntersectionNorthSouthConfigurationComponent,
     PartialMedianUTurnIntersectionEastWestConfigurationComponent,
     PartialMedianUTurnIntersectionNorthSouthConfigurationComponent,
     QuadrantRoadwayIntersectionNorthEastConfigurationComponent,
     QuadrantRoadwayIntersectionNorthWestConfigurationComponent,
     QuadrantRoadwayIntersectionSouthEastConfigurationComponent,
     QuadrantRoadwayIntersectionSouthWestConfigurationComponent,
     RestrictedCrossingUTurnIntersectionEastWestConfigurationComponent,
     RestrictedCrossingUTurnIntersectionNorthSouthConfigurationComponent,
     DisplacedLeftTurnInterchangeEastWestConfigurationComponent,
     DisplacedLeftTurnInterchangeNorthSouthConfigurationComponent,
     DoubleCrossoverDiamondInterchangeEastWestConfigurationComponent,
     DoubleCrossoverDiamondInterchangeNorthSouthConfigurationComponent,
     PartialCloverleafEastWestConfigurationComponent,
     PartialCloverleafNorthSouthConfigurationComponent,
     SinglePointInterchangeEastWestConfigurationComponent,
     SinglePointInterchangeNorthSouthConfigurationComponent,
     TraditionalDiamondEastWestConfigurationComponent,
     TraditionalDiamondNorthSouthConfigurationComponent,
     FiftyICDMiniRoundaboutConfigurationComponent,
     OneNorthSouthxOneEastWestRoundaboutConfigurationComponent,
     OneNorthSouthxTwoEastWestLaneRoundaboutConfigurationComponent,
     SeventyFiveICDMiniRoundaboutConfigurationComponent,
     ThreeNorthSouthxThreeEastWestLaneRoundaboutConfigurationComponent,
     TwoNorthSouthxOneEastWestLaneRoundaboutConfigurationComponent,
     TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionConfigurationComponent,
     JunctionComponent,
     MedianUTurnIntersectionEastWestDesignComponent,
     MedianUTurnIntersectionEastWestConfigurationComponent],
  imports: [
    CommonModule,
    CapxRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ClarityModule,
    PortalModule
  ]
})
export class CapxModule { }
