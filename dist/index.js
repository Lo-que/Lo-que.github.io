(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const qBirthday = new Date(1995, 0, 19, 20);
const fBirthday = new Date(1994, 3, 5, 23, 45);
const anniversary = new Date(2022, 0, 19, 23, 7);
const primaryEL = document.querySelector('.primary');
const qEl = document.querySelector('.q');
const fEl = document.querySelector('.f');
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const YEAR = DAY * 365.25;
function getDistance(now, target) {
    let distance = now.getTime() - target.getTime();
    distance = Math.floor(distance / 1000 / 60 / 60 / 24) + 1;
    return distance < 0 ? 0 : distance;
}
function render(el, now, milestone, percentage, isPrimary) {
    const nextMilestone = new Date(milestone.getTime());
    const previousMilestone = new Date(milestone.getTime());
    nextMilestone.setFullYear(now.getFullYear());
    previousMilestone.setFullYear(now.getFullYear());
    if (now >= nextMilestone) {
        nextMilestone.setFullYear(now.getFullYear() + 1);
    }
    else {
        previousMilestone.setFullYear(now.getFullYear() - 1);
    }
    const totalYear = previousMilestone.getFullYear() - milestone.getFullYear();
    const totalDay = getDistance(now, milestone);
    const percentageYear = (now.getTime() - previousMilestone.getTime()) /
        (nextMilestone.getTime() - previousMilestone.getTime());
    el.querySelector('.years').textContent = String(isPrimary ? totalDay : totalYear);
    el.querySelector('.decimal').textContent = percentageYear.toFixed(3).substr(1);
    el.querySelector('.percentage').textContent =
        (percentage * 100).toFixed(2) + '%';
}
function setup(el) {
    el.innerHTML = `
    <div class="timer">
      <span class="years"></span>
      <span class="decimal"></span>
    </div>
    <div class="percentage"></div>
  `;
}
function update() {
    const now = new Date();
    const duration = now.getTime() - anniversary.getTime();
    const qAge = now.getTime() - qBirthday.getTime();
    const fAge = now.getTime() - fBirthday.getTime();
    render(primaryEL, now, anniversary, (duration * 2) / (qAge + fAge), true);
    render(qEl, now, qBirthday, duration / qAge, false);
    render(fEl, now, fBirthday, duration / fAge, false);
    setTimeout(update, 60);
}
const weixin = document.querySelector('.js-weixin');
const xiaohongshu = document.querySelector('.js-xiaohongshu');
const rili = document.querySelector('.js-rili');
rili.addEventListener('click', () => {
    rili.classList.toggle('clicked');
    setup(primaryEL);
    setup(qEl);
    setup(fEl);
    update();
});
xiaohongshu.addEventListener('click', () => {
    const newUrl = window.open('/playground.html', '_blank');
    newUrl.opener = null;
});
weixin.addEventListener('click', () => {
    const newUrl = window.open('/wechat.html', '_blank');
    newUrl.opener = null;
});

},{}]},{},[1]);
