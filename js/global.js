$(() => {
  let navOpenQueen = [],
    noHover = false
  $('.ui-nav>ul>li[data-hover=1]').hover(function () {
    if (noHover) return
    navOpenQueen.forEach(e => clearTimeout(e))
    navOpenQueen = []
    $('.ui-nav>ul>li[data-hover=1]').removeClass('hover')
    navOpenQueen.push(setTimeout(() => {
      $(this).addClass('hover')
    }, 300))
  }, function () {
    if (noHover) return
    setTimeout(() => {
      $(this).removeClass('hover')
    }, 300)
  })
  $('.ui-nav>ul>li.search').click(function () {
    $(this).toggleClass('hover')
    if ($(this).hasClass('hover')) {
      noHover = true
    } else {
      noHover = false
    }
  })
})