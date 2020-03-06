let navOpenQueen = [],
  noHover = false
document.querySelectorAll('.ui-nav>ul>li[data-hover="1"]').forEach(e => {
  e.addEventListener('mouseenter', function () {
    if (noHover) return
    navOpenQueen.forEach(e => clearTimeout(e))
    navOpenQueen = []
    document.querySelectorAll('.ui-nav>ul>li[data-hover="1"]').forEach(e => e.classList.remove('hover'))
    navOpenQueen.push(setTimeout(() => {
      e.classList.add('hover')
    }, 300))
  })
  e.addEventListener('mouseleave', function () {
    if (noHover) return
    setTimeout(() => {
      e.classList.remove('hover')
    }, 300)
  })
})
document.querySelector('.ui-nav>ul>li.search>a').addEventListener('click', function (e) {
  e.currentTarget.parentNode.classList.toggle('hover')
  noHover = e.currentTarget.parentNode.classList.contains('hover')
})