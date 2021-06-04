var robot = require('robotjs')
const clipboardy = require('clipboardy')
const { spawnSync } = require('child_process')

spawnSync('/usr/bin/open', ['/Applications/企业微信.app'])

mobileList = ['13173604500', '18648149275', '15967654063', '18648149275']
msg = '这是一条自动群发的消息反反复复'

main()

async function main() {
  for (let i = 0; i < mobileList.length; i++) {
    const mobile = mobileList[i]
    await auto(mobile, msg)
  }
}

async function auto(mob, txt) {
  clipboardy.writeSync(mob)

  await sleep(500)
  robot.keyToggle('f', 'down', 'command')

  await sleep(500)
  robot.keyToggle('v', 'down', 'command')

  await sleep(500)
  robot.keyTap('enter')

  clipboardy.writeSync(mob + txt)

  await sleep(500)
  robot.keyToggle('v', 'down', 'command')

  await sleep(500)
  robot.keyTap('enter')
}

function sleep(time) {
  let $resolve
  const $promise = new Promise((resolve) => {
    $resolve = resolve
  })
  setTimeout(() => {
    $resolve()
  }, time)
  return $promise
}
