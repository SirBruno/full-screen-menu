document.getElementById("menuIcon").addEventListener("click", function() {
  document.getElementById("fullScreenMenuContainer").style.display = 'grid'
  document.getElementById("body").style.overflow = 'hidden'
})

document.getElementById("menuClose").addEventListener("click", function() {
  document.getElementById("fullScreenMenuContainer").style.display = 'none'
  document.getElementById("body").style.overflow = 'visible'
})