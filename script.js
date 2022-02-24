document.getElementById('tanjiro').onclick = partyTanjiro
document.getElementById('nezuko').onclick = partyNezuko
document.getElementById('zenitsu').onclick = partyZenitsu
document.getElementById('inosuke').onclick = partyInosuke

function partyTanjiro() {
  document.querySelector('body').style.backgroundImage = 'url(tanjiro.gif)'
  document.querySelector('body').style.color = 'white'
}

function partyNezuko() {
  document.querySelector('body').style.backgroundImage = 'url(nezuko.gif)'
  document.querySelector('body').style.color = 'white'
}

function partyZenitsu() {
  document.querySelector('body').style.backgroundImage = 'url(zenitsu.gif)'
  document.querySelector('body').style.color = 'white'
}

function partyInosuke() {
  document.querySelector('body').style.backgroundImage = 'url(inosuke.gif)'
  document.querySelector('body').style.color = 'white'
}