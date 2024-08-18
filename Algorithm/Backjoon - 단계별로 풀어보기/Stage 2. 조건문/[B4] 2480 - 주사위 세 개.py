Num1, Num2, Num3 = input().split()
Num1 = int(Num1)
Num2 = int(Num2)
Num3 = int(Num3)
Dice = []
Dice.append(Num1)
Dice.append(Num2)
Dice.append(Num3)
Dice.sort(reverse=True)

if (Dice[0] == Dice[1] == Dice[2]):
	print(10000+(Dice[0]*1000))
elif (Dice[0]==Dice[1] or Dice[1]==Dice[2]):
	print(1000+(Dice[1]*100))
else:
	print(Dice[0]*100)