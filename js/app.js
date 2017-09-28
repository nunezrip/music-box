
const keysMap = {
    'a':{
    audio: document.querySelector('#cAudio'),
    keyElement: document.querySelector('#cKey')
    
},
's':{
    audio: document.querySelector('#dAudio'),
    keyElement: document.querySelector('#dKey')
},

'd':{
    audio: document.querySelector('#eAudio'),
    keyElement: document.querySelector('#eKey')
}
}

document.addEventListener('keypress', function(e) {
    keysMap[e.key].audio.currentTime = 0
    keysMap[e.key].audio.play()

})

for(let key in keysMap){
    keysMap[key].keyElement.addEventListener('click', function() {
        keysMap[key].audio.currentTime = 0
        keysMap[key].audio.play()
    })
}