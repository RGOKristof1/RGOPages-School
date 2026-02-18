import turtle as t
t.speed(0)
for i4 in range(4):
    for i3 in range(2):
        for i2 in range(11):
            for i in range(4):
                t.left(90)
                t.forward(4)
                t.right(90)
                t.forward(4)
                t.backward(4)
                t.left(90)
                t.backward(4)
            t.penup()
            t.forward(10)
            t.pendown()
        t.right(90)
    t.penup()
    t.forward(110)
    t.right(90)
    t.forward(
        110)
    t.pendown()

t.done()