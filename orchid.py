import turtle

t = turtle.Turtle()
i=0
def petal(i):
	t.color('red')
	t.shape('turtle')
	t.circle(i)
	t.right(45)  

def flower(n):
	while i<100:
  	petal(10)
  	t.circle(n-i)
  	t.right(90)

flower(25)
