import os
import time
import random

os.system('cls' if os.name == 'nt' else 'clear')
print("Reakció idős játék")
print("A játék kezdetekor látni fogsz egy piros kockat amint az zöldrevált nyomj Entert!")
while True:
    file = open(".\\python\\history.txt")
    userinput = input("\033[43m\033[30mHa készen állsz nyomj Entert!\033[0m")
    if userinput.lower() == "history":
        if file.read() != "":
            lines = file.readlines()
            for i in range(len(lines)):
                print(lines[i].split(":")[0])
        else:
            print("Nincs user!")
    else:
        os.system('cls' if os.name == 'nt' else 'clear')
        print("\033[41m                   \033[0m")
        time.sleep(((random.random()*10)/2)+2)
        os.system('cls' if os.name == 'nt' else 'clear')
        print("\033[42m                   \033[0m", end="")

        start = time.time()
        input("")
        end = time.time()

        userTime = round(end-start,4)
        if userTime < 0.01:
            print("Cheater!")
        else:
            print(f"Az időd:{userTime}")

        userinput = input("Újra?(Y/n)")
        if userinput.lower() == "n":
            break