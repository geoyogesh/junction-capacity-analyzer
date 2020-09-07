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
