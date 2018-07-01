let __falling = document.querySelector(".falling")
let __start = document.querySelector(".start-button")
let __anim = document.querySelector(".animation-target")
let __impDrive = document.querySelector(".bttn--select")

const playEndSound = () => {
  axios.get('https://gist.githubusercontent.com/izzycode/5898c24e5c0a3620de5e31274a07ddab/raw/b2dcad17f163709223eafa68b83b4d6c7da88c0d/h2g2image.json')
    .then( (resp) => {
      resp.data.objects.forEach( (obj) => {
        if (obj.name === __anim.alt){
          new Audio(resp.data.soundUrls[obj.effect]).play();
        }
      })
  })
}

const fall = () => {
  __start.style.display = "none"
  document.querySelector(".bttn--select").style.display = "block"

  let interv
  interv = setInterval(() => {
    __falling.style.top = ( String( Number( getComputedStyle(__falling).top.slice(0,-2) ) + 1) + "px" )
    if (Number(getComputedStyle(__falling).top.slice(0,-2)) === Math.floor(document.body.clientHeight-(document.body.clientHeight*0.35))) {
      clearInterval(interv)
      playEndSound()
      __impDrive.children[0].disabled = true
    }
  }, 10)
}

const removeClass = () => {
  if (__anim.classList.contains("animate-me")){
    __anim.classList.remove("animate-me")
  }
}

const delayedPopSound = (soundUrl) => {
  setTimeout( () => {
    let audio = new Audio(soundUrl);
    audio.play();
  }, 200 )
}


__start.addEventListener("click", fall)
