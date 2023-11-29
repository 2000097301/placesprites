@namespace
class SpriteKind:
    Human = SpriteKind.create()
    Cow = SpriteKind.create()
    Asteroid = SpriteKind.create()
def Create_Human():
    global human
    human = sprites.create(img("""
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
        """),
        SpriteKind.Human)
    human.set_position(20, 30)
    human.say("Hello!")
def Birth_Cow():
    global cow
    cow = sprites.create(img("""
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
        """),
        SpriteKind.Cow)
    cow.set_position(50, 80)
    cow.say("Moo")
def Crash_Astroid():
    global asteroid
    asteroid = sprites.create_projectile(sprites.space.space_asteroid0, -10, 10, SpriteKind.Asteroid)
    asteroid.say("Crash")
asteroid: Sprite = None
cow: Sprite = None
human: Sprite = None
Create_Human()
Birth_Cow()
Crash_Astroid()