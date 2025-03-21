const $ = (id) => document.getElementById(id)

const money = $('money');
const hashed = $('hashed');
const openEye = $('open-eye');
const closedEye = $('close-eye');
const eyes = $('eyes');


openEye.addEventListener('click', () => {
  if (!openEye.classList.contains('hidden')) {
    openEye.classList.add('hidden')
    closedEye.classList.remove('hidden')
    money.classList.add('hidden');
    hashed.classList.remove('hidden')
  }
})
closedEye.addEventListener('click', () => {
  if (!closedEye.classList.contains('hidden')) {
    closedEye.classList.add('hidden')
    openEye.classList.remove('hidden')
    money.classList.remove('hidden');
    hashed.classList.add('hidden')
  }
})

money.addEventListener('click', () => {
  money.innerHTML = `<input type="number" placeholder="input money here..." id="change-money" class="var-change" >`
  $('change-money').addEventListener('change', ()=> {
    console.log($('change-money').innerHTML)
    money.innerHTML = `N${($('change-money').value).toUpperCase()} &rsaquo;`
  })
})

// eyes.querySelectorAll('.fa-solid').forEach(eye => {
//   let openEye;
//   let closedEye;
  
//   eye.addEventListener('click', () => {
//     if (eye.classList.contains('hidden')) {
//       closedEye = eye
//     }
//     console.log(closedEye)
//     if(!eye.classList.contains('hidden')) {
//       openEye = eye
//       console.log(openEye)
//       eye.classList.add('hidden')
//     } 
   
//     // closedEye.classList.remove('hidden')
//     // console.log(closedEye, openEye)
//   })
// })



const username = $('username');
username.addEventListener('click', () => {
  username.innerHTML = `<input type="text" placeholder="input username here..." id="change-username" class="var-change" >`
  $('change-username').addEventListener('change', ()=> {
    console.log($('change-username').innerHTML)
    username.innerHTML = ($('change-username').value).toUpperCase()
  })
})

function cfl (word) {
  let newWord = ''
  newWord += word[0].toUpperCase()
  for (const letter in word) {
    if(letter != 0) {
      newWord += word[letter]
    }
  }
  return newWord
}

