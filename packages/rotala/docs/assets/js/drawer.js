(function (window) {
  var drawer = document.getElementById('drawer')
  var drawerClass = new String(drawer.className)
  var drawerContainer = document.getElementById('drawer-container')

  var getEffect = function (position) {
    var effectIn = 'effect-slide-left-off-canvas'
    var effectOut = 'effect-slide-left-off-canvas'
    if (position == 'left') {
      effectIn = 'effect-slide-left-off-canvas'
      effectOut = 'effect-slide-right-off-canvas'
    }
    if (position == 'right') {
      effectIn = 'effect-slide-right-off-canvas'
      effectOut = 'effect-slide-left-off-canvas'
    }
    if (position == 'top') {
      effectIn = 'effect-slide-top-off-canvas'
      effectOut = 'effect-slide-bottom-off-canvas'
    }
    if (position == 'bottom') {
      effectIn = 'effect-slide-bottom-off-canvas'
      effectOut = 'effect-slide-top-off-canvas'
    }

    return {
      in: effectIn,
      out: effectOut
    }
  }

  var effect = {
    in: 'effect-slide-left-off-canvas',
    out: 'effect-slide-right-off-canvas'
  }
  window.openDrawer = function (position = 'left') {
    effect = getEffect(position)
    document.body.className = !document.body.className.includes('drawer-open') ?
      'drawer-open' : ''
    drawer.classList.add('effect-fade-in', 'open', position)
    drawerContainer.classList.add(effect.in)

    setTimeout(function () {
      drawer.classList.remove('effect-fade-in')
      drawerContainer.classList.remove(effect.in)
    }, 299)
  }

  window.closeDrawer = function () {
    document.body.className = ''
    drawer.classList.add('effect-fade-out')
    drawerContainer.classList.add(effect.out)

    setTimeout(function () {
      drawer.className = drawerClass
      drawerContainer.classList.remove(effect.out)
    }, 299)
  }

  window.stop = function (event) {
    event.stopPropagation()
  }
})(window)