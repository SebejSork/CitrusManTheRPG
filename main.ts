controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    CitrusManAttack()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function CitrusManAttack () {
    timer.throttle("Attack", 1500, function () {
        sprites.setDataBoolean(CitrusMan, "Attacking", true)
        characterAnimations.setCharacterAnimationsEnabled(CitrusMan, false)
        if (characterAnimations.matchesRule(CitrusMan, characterAnimations.rule(Predicate.FacingUp))) {
            animation.runImageAnimation(
            CitrusMan,
            assets.animation`PlayerUpAttack`,
            250,
            false
            )
        } else if (characterAnimations.matchesRule(CitrusMan, characterAnimations.rule(Predicate.FacingDown))) {
            animation.runImageAnimation(
            CitrusMan,
            assets.animation`PlayerDownAttack`,
            250,
            false
            )
        } else if (characterAnimations.matchesRule(CitrusMan, characterAnimations.rule(Predicate.FacingRight))) {
            animation.runImageAnimation(
            CitrusMan,
            assets.animation`PlayerRightAttack`,
            250,
            false
            )
        } else if (characterAnimations.matchesRule(CitrusMan, characterAnimations.rule(Predicate.FacingLeft))) {
            animation.runImageAnimation(
            CitrusMan,
            assets.animation`PlayerLeftAttack`,
            250,
            false
            )
        } else {
            sprites.setDataBoolean(CitrusMan, "Attacking", false)
            characterAnimations.setCharacterAnimationsEnabled(CitrusMan, true)
        }
        timer.after(1000, function () {
            sprites.setDataBoolean(CitrusMan, "Attacking", false)
            characterAnimations.setCharacterAnimationsEnabled(CitrusMan, true)
        })
    })
}
function MakeApples () {
    AppleEnemy = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
    AppleEnemy.follow(CitrusMan, 15)
    sprites.setDataNumber(AppleEnemy, "Health", 20)
    tiles.placeOnRandomTile(AppleEnemy, sprites.castle.tileGrass2)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
function MakePlayer () {
    CitrusMan = sprites.create(assets.image`playerplaceholder`, SpriteKind.Player)
    controller.moveSprite(CitrusMan)
    CitrusMan.setStayInScreen(true)
    PlayerXP = statusbars.create(7, 50, StatusBarKind.Energy)
    PlayerXP.setColor(8, 9)
    PlayerXP.setStatusBarFlag(StatusBarFlag.SmoothTransition, false)
    PlayerXP.positionDirection(CollisionDirection.Left)
    PlayerXP.setBarBorder(1, 15)
    PlayerXP.setLabel("EXP")
    PlayerXP.value = 0
    PlayerXP.max = 20
    PlayerXP.setStatusBarFlag(StatusBarFlag.InvertFillDirection, false)
    PlayerHealth = statusbars.create(100, 7, StatusBarKind.Health)
    PlayerHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    PlayerHealth.positionDirection(CollisionDirection.Bottom)
    PlayerHealth.setBarBorder(1, 15)
    PlayerHealth.setLabel("HP")
    PlayerHealth.max = 20
    characterAnimations.loopFrames(
    CitrusMan,
    assets.animation`PlayerIdle`,
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    CitrusMan,
    assets.animation`PlayerIdleUp`,
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    CitrusMan,
    assets.animation`PlayerLeftIdle`,
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    CitrusMan,
    assets.animation`PlayerRightIdle`,
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    CitrusMan,
    assets.animation`PlayerWalkDown`,
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    CitrusMan,
    assets.animation`PlayerWalkUp`,
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    CitrusMan,
    assets.animation`PlayerLeftWalk`,
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    CitrusMan,
    assets.animation`PlayerRightwalk`,
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
}
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    PlayerXP.value = 0
    PlayerXP.max += 15
    playerstrength += -5
    PlayerHealth.max += 10
    PlayerHealth.value += 50
    info.changeScoreBy(1)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    PlayerXP.value += 5
    MakeApples()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprites.readDataBoolean(CitrusMan, "Attacking")) {
        sprites.changeDataNumberBy(otherSprite, "Health", playerstrength)
        otherSprite.startEffect(effects.ashes)
        pause(1000)
    } else {
        PlayerHealth.value += -5
        scene.cameraShake(4, 1000)
        pause(1000)
    }
})
let PlayerHealth: StatusBarSprite = null
let PlayerXP: StatusBarSprite = null
let AppleEnemy: Sprite = null
let playerstrength = 0
let CitrusMan: Sprite = null
scene.setBackgroundColor(7)
MakePlayer()
tiles.setTilemap(tilemap`level3`)
MakeApples()
scene.cameraFollowSprite(CitrusMan)
playerstrength = -5
let PlayerLevel = 1
info.setScore(1)
game.onUpdateInterval(500, function () {
    if (sprites.readDataNumber(AppleEnemy, "Health") <= 0) {
        AppleEnemy.destroy(effects.disintegrate, 500)
    }
})
