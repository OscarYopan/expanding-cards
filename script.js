const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () =>{
    remoActiveClasses()
    panel.classList.add('active')
  })
})

function remoActiveClasses(){
  panels.forEach((panel) =>{
    panel.classList.remove('active')
  })  
}

