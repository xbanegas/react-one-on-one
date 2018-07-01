// This is where you will be working
let fallingImg = document.querySelector('.falling img');
console.log(fallingImg);
let blueButton = document.querySelector('.bttn--select button');
console.log(blueButton);


const improbabilityDrive = async (e) => {
  const resource = 'https://gist.githubusercontent.com/izzycode/5898c24e5c0a3620de5e31274a07ddab/raw/b2dcad17f163709223eafa68b83b4d6c7da88c0d/h2g2image.json'
  removeClass();
  const res = await axios.get(resource);
  const resLen = res.data.objects.length;
  const randomObject = res.data.objects[Math.floor(Math.random()*resLen)];
  delayedPopSound(res.data.popSoundUrl);
  fallingImg.classList.add('animate-me');
  fallingImg.src = randomObject.imageUrl;
  fallingImg.alt = randomObject.name;
}

blueButton.addEventListener('click', improbabilityDrive);
