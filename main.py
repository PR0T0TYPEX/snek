game.set_score(0)
moving_up = False
moving_right = False
moving_down = False
moving_left = False
def not_two():
    number = randint(0,4)
    while number == 2:
        number = randint(0,4)
    return number
apple = game.create_sprite(not_two(), not_two())
def on_forever():
    player = game.create_sprite(2, 2)
    if input.button_is_pressed(Button.A):
        player.turn(Direction.LEFT, 90)
    elif input.button_is_pressed(Button.B):
        player.turn(Direction.RIGHT, 90)
    basic.pause(1000)
    player.move(1)
    basic.pause(1000)
    if player.is_touching(apple):
        game.add_score(1)
basic.forever(on_forever)
