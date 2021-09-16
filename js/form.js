class Form
{
    constructor()
        {
            this.input = createInput("Enter Your Name")
            this.button = createButton("Play")
            this.greeting = createElement("h3")
            this.title = createElement("h2")
        }
    hide()
    {
        this.input.hide()
        this.button.hide()
        this.title.hide()
        this.greeting.hide()
    }
    display()
{
    this.title.html("Car Racing Game")
    this.title.position(displayWidth/2 + 200, 15)

    this.input.position(displayWidth/2 + 200, displayHeight/2)

    this.button.position(displayWidth/2 + 250, displayHeight/2 + 100)

    this.button.mousePressed(()=>
    {
        this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playerCount = playerCount + 1
        player.index = playerCount

        player.update()
        player.updateCount(playerCount)
        
        this.greeting.html("Hello "+ player.name)
        this.greeting.position(550,150)
    }
    )
}
}