import turtle as t
import time

nodes = []

def logPath():
    nodes.append([t.pos(), t.heading()])


#splitCount = int(input("Nuber of splits: "))
splitCount = 3
#lineLength = int(input("Length of lines: "))
lineLength = 200

t.setheading(-90)
t.penup()
t.forward(300)
t.setheading(75)
t.pendown()

logPath()
for i in range(splitCount):
    t.left(30)
    t.forward(lineLength/(i+1))
    logPath()
    time.sleep(.5)

for i in reversed(nodes):
    if t.heading() == i[1]:
        nodes.remove(i)
        pass
    else:
        t.goto(i[0][0],i[0][1])
        t.right(30)
        t.forward(lineLength/len(nodes))
        nodes.remove(i)
        time.sleep(.5)

print(f"Node list:{nodes}")




t.done()