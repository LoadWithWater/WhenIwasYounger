hex = input()

for i in range(1, 16):
	result = int(hex, 16) * i
	print(str(hex) + '*' + str('%X'%i) + '=' + str('%X'%(result)))
