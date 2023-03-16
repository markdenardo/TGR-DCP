import turtle

# Set up the turtle
t = turtle.Turtle()
t.speed(0)
t.hideturtle()

# Define a recursive function to draw the dragon
def draw_dragon(size, depth):
    if depth == 0:
        t.forward(size)
        return

    # Draw the first head
    t.color("red")
    t.left(120)
    draw_dragon(size/2, depth-1)
    t.right(120)

    # Draw the second head
    t.color("green")
    t.right(120)
    draw_dragon(size/2, depth-1)
    t.left(240)

    # Draw the third head
    t.color("blue")
    draw_dragon(size/2, depth-1)
    t.left(120)

    # Draw the body
    t.color("red")
    draw_dragon(size/2, depth-1)

# Draw the dragon
t.penup()
t.goto(0, -200)
t.pendown()
draw_dragon(200, 4)

# Keep the turtle window open
turtle.done()
