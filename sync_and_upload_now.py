import os
import datetime


os.system("git pull")
os.system("git add -A")
os.system("git commit -m 'Auto generated commit on" + str( datetime.datetime.now() ) )
os.system("git push")


