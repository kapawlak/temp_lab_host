import os
from time import sleep
while True:
        try:
                os.system("git pull")
                sleep(10*60)
        except KeyboardInterrupt:
                break
        except:
                continue

