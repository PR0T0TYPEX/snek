game.setScore(0)
let moving_up = false
let moving_right = false
let moving_down = false
let moving_left = false
function not_two(): number {
    let number = randint(0, 4)
    while (number == 2) {
        number = randint(0, 4)
    }
    return number
}

let apple = game.createSprite(not_two(), not_two())
basic.forever(function on_forever() {
    let player = game.createSprite(2, 2)
    if (input.buttonIsPressed(Button.A)) {
        player.turn(Direction.Left, 90)
    } else if (input.buttonIsPressed(Button.B)) {
        player.turn(Direction.Right, 90)
    }
    
    basic.pause(1000)
    player.move(1)
    basic.pause(1000)
    if (player.isTouching(apple)) {
        game.addScore(1)
    }
    
})
