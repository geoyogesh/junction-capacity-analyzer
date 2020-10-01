import { JunctionComponent } from './components/junctions/junction.component';
import { CreditsComponent } from './components/credits/credits.component';
import { DisplacedLeftTurnInterchangeNorthSouthJunctionComponent } from './components/junctions/interchanges/displaced-left-turn-interchange-north-south-junction/displaced-left-turn-interchange-north-south-junction.component';
import { PartialMedianUTurnIntersectionNorthSouthJunctionComponent } from './components/junctions/intersections/partial-median-uturn-intersection-north-south-junction/partial-median-uturn-intersection-north-south-junction.component';
import { MedianUTurnIntersectionNorthSouthJunctionComponent } from './components/junctions/intersections/median-uturn-intersection-north-south-junction/median-uturn-intersection-north-south-junction.component';
import { RestrictedCrossingUTurnIntersectionNorthSouthJunctionComponent } from './components/junctions/intersections/restricted-crossing-uturn-intersection-north-south-junction/restricted-crossing-uturn-intersection-north-south-junction.component';
import { FullDisplacedLeftTurnIntersectionJunctionComponent } from './components/junctions/intersections/full-displaced-left-turn-intersection-junction/full-displaced-left-turn-intersection-junction.component';
// tslint:disable: max-line-length
import { PartialDisplacedLeftTurnIntersectionNorthSouthJunctionComponent } from './components/junctions/intersections/partial-displaced-left-turn-intersection-north-south-junction/partial-displaced-left-turn-intersection-north-south-junction.component';
import { JunctionAnalysisScoreResultsComponent } from './components/junction-analysis-score-results/junction-analysis-score-results.component';
import { JunctionAnalysisParametersComponent } from './components/junction-analysis-parameters/junction-analysis-parameters.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from '../capx/components/analysis.component';
import { ConventionalJunctionComponent } from './components/junctions/intersections/conventional-junction/conventional-junction.component';
import { ConventionalSharedRightTurnLeftTurnJunctionComponent } from './components/junctions/intersections/conventional-shared-right-turn-left-turn-junction/conventional-shared-right-turn-left-turn-junction.component';
import { QuadrantRoadwayIntersectionNorthEastJunctionComponent } from './components/junctions/intersections/quadrant-roadway-intersection-north-east-junction/quadrant-roadway-intersection-north-east-junction.component';
import { QuadrantRoadwayIntersectionSouthWestJunctionComponent } from './components/junctions/intersections/quadrant-roadway-intersection-south-west-junction/quadrant-roadway-intersection-south-west-junction.component';
import { QuadrantRoadwayIntersectionSouthEastJunctionComponent } from './components/junctions/intersections/quadrant-roadway-intersection-south-east-junction/quadrant-roadway-intersection-south-east-junction.component';
import { QuadrantRoadwayIntersectionNorthWestJunctionComponent } from './components/junctions/intersections/quadrant-roadway-intersection-north-west-junction/quadrant-roadway-intersection-north-west-junction.component';
import { PartialDisplacedLeftTurnIntersectionEastWestJunctionComponent } from './components/junctions/intersections/partial-displaced-left-turn-intersection-east-west-junction/partial-displaced-left-turn-intersection-east-west-junction.component';
import { RestrictedCrossingUTurnIntersectionEastWestJunctionComponent } from './components/junctions/intersections/restricted-crossing-uturn-intersection-east-west-junction/restricted-crossing-uturn-intersection-east-west-junction.component';
import { MedianUTurnIntersectionEastWestJunctionComponent } from './components/junctions/intersections/median-uturn-intersection-east-west-junction/median-uturn-intersection-east-west-junction.component';
import { PartialMedianUTurnIntersectionEastWestJunctionComponent } from './components/junctions/intersections/partial-median-uturn-intersection-east-west-junction/partial-median-uturn-intersection-east-west-junction.component';
import { FiftyICDMiniRoundaboutJunctionComponent } from './components/junctions/roundabouts/fifty-icdmini-roundabout-junction/fifty-icdmini-roundabout-junction.component';
import { SeventyFiveICDMiniRoundaboutJunctionComponent } from './components/junctions/roundabouts/seventy-five-icdmini-roundabout-junction/seventy-five-icdmini-roundabout-junction.component';
import { OneNorthSouthxOneEastWestRoundaboutJunctionComponent } from './components/junctions/roundabouts/one-north-southx-one-east-west-roundabout-junction/one-north-southx-one-east-west-roundabout-junction.component';
import { OneNorthSouthxTwoEastWestLaneRoundaboutJunctionComponent } from './components/junctions/roundabouts/one-north-southx-two-east-west-lane-roundabout-junction/one-north-southx-two-east-west-lane-roundabout-junction.component';
import { TwoNorthSouthxOneEastWestLaneRoundaboutJunctionComponent } from './components/junctions/roundabouts/two-north-southx-one-east-west-lane-roundabout-junction/two-north-southx-one-east-west-lane-roundabout-junction.component';
import { TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionComponent } from './components/junctions/roundabouts/two-north-southx-two-east-west-lane-roundabout-junction/two-north-southx-two-east-west-lane-roundabout-junction.component';
import { ThreeNorthSouthxThreeEastWestLaneRoundaboutJunctionComponent } from './components/junctions/roundabouts/three-north-southx-three-east-west-lane-roundabout-junction/three-north-southx-three-east-west-lane-roundabout-junction.component';
import { TraditionalDiamondNorthSouthJunctionComponent } from './components/junctions/interchanges/traditional-diamond-north-south-junction/traditional-diamond-north-south-junction.component';
import { PartialCloverleafEastWestJunctionComponent } from './components/junctions/interchanges/partial-cloverleaf-east-west-junction/partial-cloverleaf-east-west-junction.component';
import { PartialCloverleafNorthSouthJunctionComponent } from './components/junctions/interchanges/partial-cloverleaf-north-south-junction/partial-cloverleaf-north-south-junction.component';
import { DisplacedLeftTurnInterchangeEastWestJunctionComponent } from './components/junctions/interchanges/displaced-left-turn-interchange-east-west-junction/displaced-left-turn-interchange-east-west-junction.component';
import { DoubleCrossoverDiamondInterchangeEastWestJunctionComponent } from './components/junctions/interchanges/double-crossover-diamond-interchange-east-west-junction/double-crossover-diamond-interchange-east-west-junction.component';
import { DoubleCrossoverDiamondInterchangeNorthSouthJunctionComponent } from './components/junctions/interchanges/double-crossover-diamond-interchange-north-south-junction/double-crossover-diamond-interchange-north-south-junction.component';
import { SinglePointInterchangeNorthSouthJunctionComponent } from './components/junctions/interchanges/single-point-interchange-north-south-junction/single-point-interchange-north-south-junction.component';
import { SinglePointInterchangeEastWestJunctionComponent } from './components/junctions/interchanges/single-point-interchange-east-west-junction/single-point-interchange-east-west-junction.component';


const routes: Routes = [
  {
    path: '', component: AnalysisComponent,
    children: [
      { path: '', redirectTo: 'inputs', pathMatch: 'full' },
      { path: 'credits', component: CreditsComponent },
      { path: 'inputs', component: JunctionAnalysisParametersComponent },
      { path: 'results', component: JunctionAnalysisScoreResultsComponent },
      {
        path: 'junctions/:id',
        component: JunctionComponent
      },
      { path: 'conventional', component: ConventionalJunctionComponent },
      { path: 'conventional-shared-right-turn-left-turn', component: ConventionalSharedRightTurnLeftTurnJunctionComponent },
      { path: 'quadrant-roadway-intersection-south-west', component: QuadrantRoadwayIntersectionSouthWestJunctionComponent },
      { path: 'quadrant-roadway-intersection-north-east', component: QuadrantRoadwayIntersectionNorthEastJunctionComponent },
      { path: 'quadrant-roadway-intersection-south-east', component: QuadrantRoadwayIntersectionSouthEastJunctionComponent },
      { path: 'quadrant-roadway-intersection-north-west', component: QuadrantRoadwayIntersectionNorthWestJunctionComponent },
      { path: 'partial-displaced-left-turn-intersection-north-south', component: PartialDisplacedLeftTurnIntersectionNorthSouthJunctionComponent },
      { path: 'partial-displaced-left-turn-intersection-east-west', component: PartialDisplacedLeftTurnIntersectionEastWestJunctionComponent },
      { path: 'full-displaced-left-turn-intersection', component: FullDisplacedLeftTurnIntersectionJunctionComponent },
      { path: 'restricted-crossing-uturn-intersection-north-south', component: RestrictedCrossingUTurnIntersectionNorthSouthJunctionComponent },
      { path: 'restricted-crossing-uturn-intersection-east-west', component: RestrictedCrossingUTurnIntersectionEastWestJunctionComponent },
      { path: 'median-uturn-intersection-north-south', component: MedianUTurnIntersectionNorthSouthJunctionComponent },
      { path: 'median-uturn-intersection-east-west', component: MedianUTurnIntersectionEastWestJunctionComponent },
      { path: 'partial-median-uturn-intersection-north-south', component: PartialMedianUTurnIntersectionNorthSouthJunctionComponent },
      { path: 'partial-median-uturn-intersection-east-west', component: PartialMedianUTurnIntersectionEastWestJunctionComponent },


      { path: 'fifty-icdmini-roundabout', component: FiftyICDMiniRoundaboutJunctionComponent },
      { path: 'seventy-five-icdmini-roundabout', component: SeventyFiveICDMiniRoundaboutJunctionComponent },
      { path: 'one-north-southx-one-east-west-roundabout', component: OneNorthSouthxOneEastWestRoundaboutJunctionComponent },
      { path: 'one-north-southx-two-east-west-lane-roundabout', component: OneNorthSouthxTwoEastWestLaneRoundaboutJunctionComponent },
      { path: 'two-north-southx-one-east-west-lane-roundabout', component: TwoNorthSouthxOneEastWestLaneRoundaboutJunctionComponent },
      { path: 'two-north-southx-two-east-west-lane-roundabout', component: TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionComponent },
      { path: 'three-north-southx-three-east-west-lane-roundabout', component: ThreeNorthSouthxThreeEastWestLaneRoundaboutJunctionComponent },


      { path: 'traditional-diamond-north-south', component: TraditionalDiamondNorthSouthJunctionComponent },
      { path: 'traditional-diamond-east-west', component: TraditionalDiamondNorthSouthJunctionComponent },
      { path: 'partial-cloverleaf-north-south', component: PartialCloverleafNorthSouthJunctionComponent },
      { path: 'partial-cloverleaf-east-west', component: PartialCloverleafEastWestJunctionComponent },
      { path: 'displaced-left-turn-interchange-north-south', component: DisplacedLeftTurnInterchangeNorthSouthJunctionComponent },
      { path: 'displaced-left-turn-interchange-east-west', component: DisplacedLeftTurnInterchangeEastWestJunctionComponent },
      { path: 'double-crossover-diamond-interchange-north-south', component: DoubleCrossoverDiamondInterchangeNorthSouthJunctionComponent },
      { path: 'double-crossover-diamond-interchange-east-west', component: DoubleCrossoverDiamondInterchangeEastWestJunctionComponent },
      { path: 'single-point-interchange-north-south', component: SinglePointInterchangeNorthSouthJunctionComponent },
      { path: 'single-point-interchange-east-west', component: SinglePointInterchangeEastWestJunctionComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapxRoutingModule { }
