import time
import pyautogui
import subprocess
import pyperclip

subprocess.call(["/usr/bin/open", "/Applications/企业微信.app"])

mobileList = ['13173604500', '18648149275', '13173604500', '18648149275']
msg = '这是一条自动群发的消息反反复复'

def main():
  for mobile in mobileList:
    auto(mobile, msg)

def auto(mob, txt):
  pyperclip.copy(mob)

  pyautogui.hotkey('command', 'f')

  time.sleep(0.5)
  pyautogui.hotkey('command', 'v')

  time.sleep(0.5)
  pyautogui.press('enter')

  pyperclip.copy(mob + txt)

  time.sleep(0.5)
  pyautogui.hotkey('command', 'v')

  time.sleep(0.5)
  pyautogui.press('enter')

main()




# 13173604500