season = int(input())

if (season == 12 or season == 1 or season == 2):
	print("winter")
elif (11 >= season >= 9):
	print("fall")
elif (8 >= season >= 6):
	print("summer")
else:
	print("spring")
