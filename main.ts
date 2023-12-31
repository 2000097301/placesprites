namespace SpriteKind {
    export const Human = SpriteKind.create()
    export const Cow = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
}
function Birth_Cow () {
    cow = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e . e e . e . . . . . . . 
        . . e . e e d e . e . d d d . . 
        . . . e f e f d e d d d d d d . 
        . . . e e e e e e d d d d d d . 
        . . . e 3 3 e e d d e e d e e d 
        . . . . e e e d d d d d e d d d 
        . . . . . . . d d e d d d d d d 
        . . . . . . . . d d d d d d d d 
        . . . . . . . . . d . . . . d . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cow)
    cow.setPosition(50, 80)
    cow.say("Moo")
}
function move_cow () {
    cow.setPosition(133, 96)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    move_cow()
})
function Crash_Astroid () {
    asteroid = sprites.createProjectile(sprites.space.spaceAsteroid0, -10, 10, SpriteKind.Asteroid)
    asteroid.say("Crash")
}
function Create_Human () {
    human = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . 4 . 4 . 4 . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Human)
    human.setPosition(20, 30)
    human.say("Hello!")
}
sprites.onDestroyed(SpriteKind.Human, function (sprite) {
    music.play(music.stringPlayable("D - B F G F E C ", 230), music.PlaybackMode.UntilDone)
})
let human: Sprite = null
let asteroid: Sprite = null
let cow: Sprite = null
Create_Human()
Birth_Cow()
Crash_Astroid()
