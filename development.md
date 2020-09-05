# CapX
CapX


ng new capx --create-application=false --directory=. --skipTests=true --strict=true --style=scss 
ng generate application capx --skipTests=true --strict=true --style=scss --routing=true 

ng generate module Capx --routing=true --routingScope=Child 
ng generate component capx/components/Analysis --prefix=capx --module=Capx --flat
ng generate component capx/components/JunctionAnalysisParameters --prefix=capx --module=Capx
ng generate component capx/components/JunctionAnalysisScoreResults --prefix=capx --module=Capx
ng generate component capx/components/ConventionalJunction  --prefix=capx --module=Capx
ng generate component capx/components/ConventionalSharedRightTurnLeftTurnJunction  --prefix=capx --module=Capx
ng generate component capx/components/QuadrantRoadwayIntersectionSouthWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/QuadrantRoadwayIntersectionNorthEastJunction  --prefix=capx --module=Capx
ng generate component capx/components/QuadrantRoadwayIntersectionSouthEastJunction  --prefix=capx --module=Capx
ng generate component capx/components/QuadrantRoadwayIntersectionNorthWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/PartialDisplacedLeftTurnIntersectionNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/PartialDisplacedLeftTurnIntersectionEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/FullDisplacedLeftTurnIntersectionJunction  --prefix=capx --module=Capx
ng generate component capx/components/RestrictedCrossingUTurnIntersectionNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/RestrictedCrossingUTurnIntersectionEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/MedianUTurnIntersectionNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/MedianUTurnIntersectionEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/PartialMedianUTurnIntersectionNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/PartialMedianUTurnIntersectionEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/FiftyICDMiniRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/SeventyFiveICDMiniRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/OneNorthSouthxOneEastWestRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/OneNorthSouthxTwoEastWestLaneRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/TwoNorthSouthxOneEastWestLaneRoundaboutJunction  --prefix=capx --module=Capx
ng generate component capx/components/TwoNorthSouthxTwoEastWestLaneRoundaboutRndabtJunction  --prefix=capx --module=Capx
ng generate component capx/components/ThreeNorthSouthxThreeEastWestLaneRoundaboutRndabtJunction  --prefix=capx --module=Capx
ng generate component capx/components/TraditionalDiamondNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/TraditionalDiamondEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/PartialCloverleafNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/PartialCloverleafEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/DisplacedLeftTurnInterchangeNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/DisplacedLeftTurnInterchangeEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/DoubleCrossoverDiamondInterchangeNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/DoubleCrossoverDiamondInterchangeEastWestJunction  --prefix=capx --module=Capx
ng generate component capx/components/SinglePointInterchangeNorthSouthJunction  --prefix=capx --module=Capx
ng generate component capx/components/SinglePointInterchangeEastWestJunction  --prefix=capx --module=Capx

