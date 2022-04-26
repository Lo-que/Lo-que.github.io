const qBirthday = new Date(1995, 0, 19, 20)
const fBirthday = new Date(1994, 3, 5, 23, 45)
const anniversary = new Date(2022, 0, 19, 23, 7)

const primaryEL = document.querySelector('.primary') as HTMLElement
const qEl = document.querySelector('.q') as HTMLElement
const fEl = document.querySelector('.f') as HTMLElement

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const YEAR = DAY * 365.25

function getDistance(now: Date, target: Date): number {
  let distance = now.getTime() - target.getTime()
  distance = Math.floor(distance / 1000 / 60 / 60 / 24)
  return distance < 0 ? 0 : distance
}

function render(
  el: HTMLElement,
  now: Date,
  milestone: Date,
  percentage: number,
  isPrimary: boolean,
): void {
  const nextMilestone = new Date(milestone.getTime())
  const previousMilestone = new Date(milestone.getTime())

  nextMilestone.setFullYear(now.getFullYear())
  previousMilestone.setFullYear(now.getFullYear())

  if (now >= nextMilestone) {
    nextMilestone.setFullYear(now.getFullYear() + 1)
  } else {
    previousMilestone.setFullYear(now.getFullYear() - 1)
  }

  const totalYear = previousMilestone.getFullYear() - milestone.getFullYear()
  const totalDay = getDistance(now, milestone)
  const percentageYear =
    (now.getTime() - previousMilestone.getTime()) /
    (nextMilestone.getTime() - previousMilestone.getTime())

  el.querySelector('.years').textContent = String(
    isPrimary ? totalDay : totalYear,
  )
  el.querySelector('.decimal').textContent = percentageYear.toFixed(3).substr(1)
  el.querySelector('.percentage').textContent =
    (percentage * 100).toFixed(2) + '%'
}
function setup(el: HTMLElement): void {
  el.innerHTML = `
    <div class="timer">
      <span class="years"></span>
      <span class="decimal"></span>
    </div>
    <div class="percentage"></div>
  `
}
function update(): void {
  const now = new Date()
  const duration = now.getTime() - anniversary.getTime()
  const qAge = now.getTime() - qBirthday.getTime()
  const fAge = now.getTime() - fBirthday.getTime()

  render(primaryEL, now, anniversary, (duration * 2) / (qAge + fAge), true)
  render(qEl, now, qBirthday, duration / qAge, false)
  render(fEl, now, fBirthday, duration / fAge, false)

  setTimeout(update, 60)
}

setup(primaryEL)
setup(qEl)
setup(fEl)

update()
