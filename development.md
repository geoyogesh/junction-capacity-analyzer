# CapX
CapX


ng new capx --create-application=false --directory=. --skipTests=true --strict=true --style=scss 
ng generate application capx --skipTests=true --strict=true --style=scss --routing=true 

ng generate module Capx --routing=true --routingScope=Child 
ng generate component capx/components/Analysis --prefix=capx --module=Capx --flat
ng generate component capx/components/JunctionAnalysisParameters --prefix=capx --module=Capx
ng generate component capx/components/JunctionAnalysisScoreResults --prefix=capx --module=Capx

ng generate component capx/components/junctions/ConventionalJunction  --prefix=capx --module=Capx

ng generate component capx/components/junctions/ConventionalSharedRightTurnLeftTurnJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/QuadrantRoadwayIntersectionSouthWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/QuadrantRoadwayIntersectionNorthEastJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/QuadrantRoadwayIntersectionSouthEastJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/QuadrantRoadwayIntersectionNorthWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/PartialDisplacedLeftTurnIntersectionNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/PartialDisplacedLeftTurnIntersectionEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/FullDisplacedLeftTurnIntersectionJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/RestrictedCrossingUTurnIntersectionNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/RestrictedCrossingUTurnIntersectionEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/MedianUTurnIntersectionNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/MedianUTurnIntersectionEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/PartialMedianUTurnIntersectionNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/PartialMedianUTurnIntersectionEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/FiftyICDMiniRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/SeventyFiveICDMiniRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/OneNorthSouthxOneEastWestRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/OneNorthSouthxTwoEastWestLaneRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/TwoNorthSouthxOneEastWestLaneRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/TwoNorthSouthxTwoEastWestLaneRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/ThreeNorthSouthxThreeEastWestLaneRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/TraditionalDiamondNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/TraditionalDiamondEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/PartialCloverleafNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/PartialCloverleafEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/DisplacedLeftTurnInterchangeNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/DisplacedLeftTurnInterchangeEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/DoubleCrossoverDiamondInterchangeNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/DoubleCrossoverDiamondInterchangeEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/SinglePointInterchangeNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/junctions/SinglePointInterchangeEastWestJunction  --prefix=capx --module=Capx



ng generate component capx/components/common/CriticalLaneVolumeSum --prefix=capx --module=Capx



ng generate component capx/components/junctions/conventional-junction/ConventionalDesign --prefix=capx --module=Capx
ng generate component capx/components/junctions/conventional-junction/ConventionalConfiguration  --prefix=capx --module=Capx


ng generate class capx/services/models/JunctionCapacityAnalyser

ng generate service capx/services/CapxState 

ng generate pipe capx/pipes/HandleNullValue --module=Capx


ng generate pipe capx/pipes/ClvStyle --module=Capx
ng generate pipe capx/pipes/VcStyle --module=Capx

ng generate component capx/components/Credits  --prefix=capx --module=Capx


ng generate component capx/components/junction-analysis-score-results/ShowJunctionRank --prefix=capx --module=Capx


ng generate component capx/components/junctions/intersections/conventional-shared-right-turn-left-turn-junction/design/ConventionalSharedRightTurnLeftTurnDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/intersections/full-displaced-left-turn-intersection-junction/design/FullDisplacedLeftTurnIntersectionDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/intersections/median-uturn-intersection-east-west-junction/design/FullDisplacedLeftTurnIntersectionDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/intersections/median-uturn-intersection-north-south-junction/design/MedianUTurnIntersectionNorthSouthDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/intersections/partial-displaced-left-turn-intersection-east-west-junction/design/PartialDisplacedLeftTurnIntersectionEastWestDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/intersections/partial-displaced-left-turn-intersection-north-south-junction/design/PartialDisplacedLeftTurnIntersectionNorthSouthDesign --prefix=capx --module=Capx


ng generate component capx/components/junctions/intersections/partial-median-uturn-intersection-east-west-junction/design/PartialMedianUTurnIntersectionEastWestDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/intersections/partial-median-uturn-intersection-north-south-junction/design/PartialMedianUTurnIntersectionNorthSouthDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/intersections/quadrant-roadway-intersection-north-east-junction/design/QuadrantRoadwayIntersectionNorthEastDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/intersections/quadrant-roadway-intersection-north-west-junction/design/QuadrantRoadwayIntersectionNorthWestDesign --prefix=capx --module=Capx


ng generate component capx/components/junctions/intersections/quadrant-roadway-intersection-south-east-junction/design/QuadrantRoadwayIntersectionSouthEastDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/intersections/quadrant-roadway-intersection-south-west-junction/design/QuadrantRoadwayIntersectionSouthWestDesign --prefix=capx --module=Capx


ng generate component capx/components/junctions/intersections/restricted-crossing-uturn-intersection-east-west-junction/design/RestrictedCrossingUTurnIntersectionEastWestDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/intersections/restricted-crossing-uturn-intersection-north-south-junction/design/RestrictedCrossingUTurnIntersectionNorthSouthDesign --prefix=capx --module=Capx

## interchanges

ng generate component capx/components/junctions/interchanges/displaced-left-turn-interchange-east-west-junction/design/DisplacedLeftTurnInterchangeEastWestDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/interchanges/displaced-left-turn-interchange-north-south-junction/design/DisplacedLeftTurnInterchangeNorthSouthDesign --prefix=capx --module=Capx


ng generate component capx/components/junctions/interchanges/double-crossover-diamond-interchange-east-west-junction/design/DoubleCrossoverDiamondInterchangeEastWestDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/interchanges/double-crossover-diamond-interchange-north-south-junction/design/DoubleCrossoverDiamondInterchangeNorthSouthDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/interchanges/partial-cloverleaf-east-west-junction/design/PartialCloverleafEastWestDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/interchanges/partial-cloverleaf-north-south-junction/design/PartialCloverleafNorthSouthDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/interchanges/single-point-interchange-east-west-junction/design/SinglePointInterchangeEastWestDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/interchanges/single-point-interchange-north-south-junction/design/SinglePointInterchangeNorthSouthDesign --prefix=capx --module=Capx


ng generate component capx/components/junctions/interchanges/traditional-diamond-east-west-junction/design/TraditionalDiamondEastWestDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/interchanges/traditional-diamond-north-south-junction/design/TraditionalDiamondNorthSouthDesign --prefix=capx --module=Capx

## roundabout

ng generate component capx/components/junctions/roundabouts/fifty-icdmini-roundabout-junction/design/FiftyICDMiniRoundaboutDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/roundabouts/one-north-southx-one-east-west-roundabout-junction/design/OneNorthSouthxOneEastWestRoundaboutDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/roundabouts/one-north-southx-two-east-west-lane-roundabout-junction/design/OneNorthSouthxTwoEastWestLaneRoundaboutDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/roundabouts/seventy-five-icdmini-roundabout-junction/design/SeventyFiveICDMiniRoundaboutDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/roundabouts/three-north-southx-three-east-west-lane-roundabout-junction/design/ThreeNorthSouthxThreeEastWestLaneRoundaboutDesign --prefix=capx --module=Capx

ng generate component capx/components/junctions/roundabouts/two-north-southx-one-east-west-lane-roundabout-junction/design/TwoNorthSouthxOneEastWestLaneRoundaboutDesign --prefix=capx --module=Capx


ng generate component capx/components/junctions/roundabouts/two-north-southx-two-east-west-lane-roundabout-junction/design/TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionDesign --prefix=capx --module=Capx

## configuration
ng generate component capx/components/junctions/intersections/conventional-junction/configuration/ConventionalConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/intersections/conventional-shared-right-turn-left-turn-junction/configuration/ConventionalSharedRightTurnLeftTurnConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/intersections/full-displaced-left-turn-intersection-junction/configuration/FullDisplacedLeftTurnIntersectionConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/intersections/median-uturn-intersection-east-west-junction/configuration/FullDisplacedLeftTurnIntersectionConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/intersections/median-uturn-intersection-north-south-junction/configuration/MedianUTurnIntersectionNorthSouthConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/intersections/partial-displaced-left-turn-intersection-east-west-junction/configuration/PartialDisplacedLeftTurnIntersectionEastWestConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/intersections/partial-displaced-left-turn-intersection-north-south-junction/configuration/PartialDisplacedLeftTurnIntersectionNorthSouthConfiguration --prefix=capx --module=Capx --flat


ng generate component capx/components/junctions/intersections/partial-median-uturn-intersection-east-west-junction/configuration/PartialMedianUTurnIntersectionEastWestConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/intersections/partial-median-uturn-intersection-north-south-junction/configuration/PartialMedianUTurnIntersectionNorthSouthConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/intersections/quadrant-roadway-intersection-north-east-junction/configuration/QuadrantRoadwayIntersectionNorthEastConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/intersections/quadrant-roadway-intersection-north-west-junction/configuration/QuadrantRoadwayIntersectionNorthWestConfiguration --prefix=capx --module=Capx --flat


ng generate component capx/components/junctions/intersections/quadrant-roadway-intersection-south-east-junction/configuration/QuadrantRoadwayIntersectionSouthEastConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/intersections/quadrant-roadway-intersection-south-west-junction/configuration/QuadrantRoadwayIntersectionSouthWestConfiguration --prefix=capx --module=Capx --flat


ng generate component capx/components/junctions/intersections/restricted-crossing-uturn-intersection-east-west-junction/configuration/RestrictedCrossingUTurnIntersectionEastWestConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/intersections/restricted-crossing-uturn-intersection-north-south-junction/configuration/RestrictedCrossingUTurnIntersectionNorthSouthConfiguration --prefix=capx --module=Capx --flat


ng generate component capx/components/junctions/interchanges/displaced-left-turn-interchange-east-west-junction/configuration/DisplacedLeftTurnInterchangeEastWestConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/interchanges/displaced-left-turn-interchange-north-south-junction/configuration/DisplacedLeftTurnInterchangeNorthSouthConfiguration --prefix=capx --module=Capx --flat


ng generate component capx/components/junctions/interchanges/double-crossover-diamond-interchange-east-west-junction/configuration/DoubleCrossoverDiamondInterchangeEastWestConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/interchanges/double-crossover-diamond-interchange-north-south-junction/configuration/DoubleCrossoverDiamondInterchangeNorthSouthConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/interchanges/partial-cloverleaf-east-west-junction/configuration/PartialCloverleafEastWestConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/interchanges/partial-cloverleaf-north-south-junction/configuration/PartialCloverleafNorthSouthConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/interchanges/single-point-interchange-east-west-junction/configuration/SinglePointInterchangeEastWestConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/interchanges/single-point-interchange-north-south-junction/configuration/SinglePointInterchangeNorthSouthConfiguration --prefix=capx --module=Capx --flat


ng generate component capx/components/junctions/interchanges/traditional-diamond-east-west-junction/configuration/TraditionalDiamondEastWestConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/interchanges/traditional-diamond-north-south-junction/configuration/TraditionalDiamondNorthSouthConfiguration --prefix=capx --module=Capx --flat


ng generate component capx/components/junctions/roundabouts/fifty-icdmini-roundabout-junction/configuration/FiftyICDMiniRoundaboutConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/roundabouts/one-north-southx-one-east-west-roundabout-junction/configuration/OneNorthSouthxOneEastWestRoundaboutConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/roundabouts/one-north-southx-two-east-west-lane-roundabout-junction/configuration/OneNorthSouthxTwoEastWestLaneRoundaboutConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/roundabouts/seventy-five-icdmini-roundabout-junction/configuration/SeventyFiveICDMiniRoundaboutConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/roundabouts/three-north-southx-three-east-west-lane-roundabout-junction/configuration/ThreeNorthSouthxThreeEastWestLaneRoundaboutConfiguration --prefix=capx --module=Capx --flat

ng generate component capx/components/junctions/roundabouts/two-north-southx-one-east-west-lane-roundabout-junction/configuration/TwoNorthSouthxOneEastWestLaneRoundaboutConfiguration --prefix=capx --module=Capx --flat


ng generate component capx/components/junctions/roundabouts/two-north-southx-two-east-west-lane-roundabout-junction/configuration/TwoNorthSouthxTwoEastWestLaneRoundaboutJunctionConfiguration --prefix=capx --module=Capx --flat

# viewer
ng generate component capx/components/junctions/Junction --prefix=capx --module=Capx --flat

