namespace SpriteKind {
    export const furtniture = SpriteKind.create()
}
function placeFurniture () {
    shelf01 = sprites.create(img`
        .cccccccccccccccccccccc.
        cbddddddddddddddddddddbc
        cddddddddddddddddddddddc
        cddddddddddddddddddddddc
        cddddddddddddddddddddddc
        cddddddddddddddddddddddc
        cddddddddddddddddddddddc
        cbddddddddddddddddddddbc
        ccbbbbbbbbbbbbbbbbbbbbcc
        ccffffffffffffffffffffcc
        cbcc33c6c44c3c7c66c3ccbc
        cbcc33c6c44c3c7c66c3ccbc
        fbcc33c6c44ccc7c66c3ccbf
        fdccccccccccccccccccccdf
        fdcbbddddddddddddddbbcdf
        fdffffffffffffffffffffdf
        fdccc6c33c4c6c44c3c7ccdf
        fdccc6c33c4c6c44c3c7ccdf
        fdccc6c33ccc6c44ccc7ccdf
        fdccccccccccccccccccccdf
        fdcbbddddddddddddddbbcdf
        fdcbbddddddddddddddbbcdf
        fdffffffffffffffffffffdf
        ffffffffffffffffffffffff
        `, SpriteKind.furtniture)
    carpet01 = sprites.create(img`
        ..3b3b3b3b3b3b3b3b3b3b3b3b3b3b..
        .3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3.
        bbdd3dddddddddddddddddddddd3ddbb
        b333dd33333333333333333333dd333b
        bbbdd3333333333333333333333ddbbb
        b33d333d3333333d3333333d3333d33b
        bbbd333333333333333333333333dbbb
        b33d333333333333333333333333d33b
        bbbd333333333333333333333333dbbb
        b33d3333333d3333333d33333333d33b
        bbbd333333333333333333333333dbbb
        b33d333333333333333333333333d33b
        bbbd333333333333333333333333dbbb
        b33d333d3333333d3333333d3333d33b
        bbbd333333333333333333333333dbbb
        b33d333333333333333333333333d33b
        bbbd333333333333333333333333dbbb
        b33d3333333d33333333d3333333d33b
        bbbdd3333333333333333333333ddbbb
        b333dd33333333333333333333dd333b
        bbdd3dddddddddddddddddddddd3ddbb
        b3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3b
        .bbb3b3b3b3b3b3b3b3b3b3b3b3b3bb.
        ...bbbbbbbbbbbbbbbbbbbbbbbbbb...
        `, SpriteKind.furtniture)
    pc01 = sprites.create(img`
        ...bbbbbbbbbb...
        ..b1111111111b..
        .b111111111111b.
        .b111111111111b.
        .bddccccccccddb.
        .bdc66666666cdb.
        .bdc61d66666cdb.
        .bdc6d666666cdb.
        .bdc66666666cdb.
        .bdc66666666cdb.
        .bdc66666666cdb.
        .bddccccccccddb.
        .cbbbbbbbbbbbbc.
        fccccccccccccccf
        fbbbbbbbbbbbbbbf
        fbcdddddddddddbf
        fbcbbbbbbbbbbcbf
        fbcbbbbbbbbbbcbf
        fbccccccccccccbf
        fbbbbbbbbbbbbbbf
        fbffffffffffffbf
        ffffffffffffffff
        `, SpriteKind.furtniture)
    table01 = sprites.create(img`
        ..cccccccccccccccccccccccccccc..
        .bddddddddddddddddddddddddddddb.
        cddddddddddddddddddddddddddddddc
        cbbb3ddd33d3dddd3333dddd3d333bbc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cbb33dddd3bb33d33dd33ddd33333bbc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cb333dddd3db3dddddddd33333ddd3bc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cbbbbbb3333333dddd333d3dddd33bbc
        cddddddddddddddddddddddddddddddc
        cbddddddddddddddddddddddddddddbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        .cccccccccccccccccccccccccccccc.
        ..cbbc....................cbbc..
        ..c33c....................c33c..
        ...cc......................cc...
        `, SpriteKind.furtniture)
    table02 = sprites.create(img`
        ..cccccccccccccccccccccccccccc..
        .b3333333333333333333333333333..
        c333111111111111111111111111333c
        c331133333333333333333333331133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331133333333333333333333331133c
        c333111111111111111111111111333c
        cb3333333333333333333333333333bc
        cbb33333333333333333333333333bbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        c3bbbbbbbbbbbbbbbbbbbbbbbbbbbb3c
        c3bb333bbbb333bbbb333bbbb333bb3c
        .ccbcccb33bcccb33bcccb33bcccbcc.
        ..cccccccccccccccccccccccccccc..
        ..cbbc....................cbbc..
        ..c33c....................c33c..
        ...cc......................cc...
        `, SpriteKind.furtniture)
    couch01 = sprites.create(img`
        dddddddddccccdd
        ddddddddc6777cd
        ddccccccc67776c
        dc777776c67776c
        c6677777c67776c
        c6666666c67776c
        c66cccccc67776c
        ccc67777c67776c
        dc677777c67776c
        dc677777c67776c
        dc677777c67776c
        dc677777c67776c
        dc677777c67776c
        dc677777c67776c
        dc677777c67776c
        dc677777c66776c
        dcccccccc66666c
        dc777776c66666c
        c6677777c66666c
        c6666666c66666c
        c6666666c66666c
        c6666666c66666c
        ccccccccccccccd
        dcbbcdddddcbbcd
        `, SpriteKind.furtniture)
    tiles.placeOnRandomTile(carpet01, assets.tile`carpetLocation`)
    tiles.placeOnRandomTile(pc01, assets.tile`pc01Location`)
    tiles.placeOnRandomTile(shelf01, assets.tile`shelf01Location`)
    tiles.placeOnRandomTile(table01, assets.tile`table01Location`)
    tiles.placeOnRandomTile(table02, assets.tile`table02`)
    tiles.placeOnRandomTile(couch01, assets.tile`couch01`)
}
function child () {
    child1 = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(child1)
    child1.setPosition(30, 65)
    scene.cameraFollowSprite(child1)
}
let child1: Sprite = null
let couch01: Sprite = null
let table02: Sprite = null
let table01: Sprite = null
let pc01: Sprite = null
let carpet01: Sprite = null
let shelf01: Sprite = null
tiles.setTilemap(tilemap`level1`)
placeFurniture()
child()
