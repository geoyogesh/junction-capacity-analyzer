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
