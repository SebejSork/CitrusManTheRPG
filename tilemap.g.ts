// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020203020202020303030303020202020203010101020302020202030303030303030103030303020204030202020202030303020202030303050301020202020302020203030302030203020202020202020203020202030302020302020302020203020102020301010203030303020202030202020303030202020202020303020302020203030302020202010302030303020303030302030203010102020103030302020203010203030303020203030303030303030303030402030202030202020102030202030305020203020202020301030202020203030101020607070707070707070707070707070707`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile3,myTiles.tile2,myTiles.tile1,sprites.builtin.forestTiles2], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`320010000404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040102020202020202020201010101010101010101010202020202020202020101010101020202020101010101020102010404010201030303030303010101010101010202020202010202020301010101020202020202020201010101010102020101040401020202010303010102010102020202030202020202020202030202020202020202010102030301010101010201010104040102020201010101020202020202020202020202010101010103010202020201010102030301010201010102020101010404010201010202020202020202020202010202010101010101010302020102010201010203020101020201020102010101040401020202020102020202020202010101020101010101010102030101020202010101020301010101010201010201010104040202020101020102010202010202020102020101010202020201020202010101010202030101010101020201020101010504010201020202020202020202020202020103020202020202020202010101010303030303030202020202020302020202050401020202020202020202010101010102020302010202010102020302020101010202020101010102010103020101010204040102010202020202020202020202020202030303010101010102030101020303020101010102020101020203030102020404020202010302010202020202020101010101020102020201010203010303010203030101020101020201010102020101040402020202030303030101020202010101020201010101010202020203020201020102030302020201010202020101010104040102020202030203020202020202020201010101010101010101020101010202020201020101010202020101010101010404010101010101010101010202020101010101010101010101010101020202020202020202020202010101010101010101040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
22222222222222222222222222222222222222222222222222
2................................................2
2................................................2
2................................................2
2................................................2
2................................................2
2................................................2
2.................................................
2.................................................
2................................................2
2................................................2
2................................................2
2................................................2
2................................................2
2................................................2
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles25,sprites.castle.tileDarkGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "TopTree":
            case "tile3":return tile3;
            case "BottomTree":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
