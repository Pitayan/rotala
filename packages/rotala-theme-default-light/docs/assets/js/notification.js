(function (window) {
  var notification = document.getElementById('notification')
  var notificationClass = new String(notification.className)
  var notificationContainer = document.getElementById('notification-container')
  var notificationContainerClass = new String(notificationContainer.className)

  var getEffect = function (position) {
    var effect = {
      in: 'effect-slide-right-off-canvas',
      out: 'effect-slide-up-fade-out',
      position
    }
    if (position == 'notification-top-left' || position == 'notification-bottom-left') {
      effect.in = 'effect-slide-left-off-canvas'
    }
    if (position == 'notification-bottom-left' || position == 'notification-bottom-right' || position == 'notification-bottom-center') {
      effect.out = 'effect-slide-down-fade-out'
    }
    if (position == 'notification-bottom-center') {
      effect.in = 'effect-slide-up-fade-in'
    }
    if (position == 'notification-top-center') {
      effect.in = 'effect-slide-down-fade-in'
    }
    return effect
  }

  var resetStyle = function () {
    notification.className = notificationClass
    notificationContainer.className = notificationContainerClass
  }

  var effect
  window.openNotification = function (position = 'notification-top-right') {
    resetStyle()
    effect = getEffect(position)
    notification.classList.add(position)
    notificationContainer.classList.add(effect.in, 'open')
  }

  window.closeNotification = function () {
    notificationContainer.classList.add(effect.out)
  }

  notificationContainer.addEventListener('webkitAnimationEnd', function () {
    notificationContainer.classList.remove(effect.in)
    if (notificationContainer.className.includes(effect.out)) {
      notificationContainer.classList.remove('open')
      notificationContainer.classList.remove(effect.out)
    }
  })

  window.stop = function (event) {
    event.stopPropagation()
  }

  document.addEventListener('click', function (e) {
    stop(e)
    if (e.target != notification && notificationContainer.className.includes('open')) {
      closeNotification()
    }
  })
})(window)