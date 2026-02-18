import turtle as t
screen = t.Screen()
screen.setup(width=820, height=820)
t.speed(9)
t.goto(-300,300)
for i in range(4):
    for i2 in range(4):
        for i3 in range(4):
            t.left(90)
            t.forward(100)
            t.right(90)
            t.forward(100)
            t.backward(100)
            t.left(90)
            t.backward(100)
        t.penup()
        t.forward(200)
        t.pendown()
    t.forward(-400)
    t.right(90)
    t

t.done()