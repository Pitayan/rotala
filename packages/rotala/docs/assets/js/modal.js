(function (window) {
  var popupModal = document.getElementById('example-modal')
  var popupModalClass = new String(popupModal.className)
  window.openPopupModal = function (fullScreen, isScrollable = false) {
    document.body.className = !document.body.className.includes('is-modal-open') ?
      'is-modal-open' : ''
    popupModal.classList.add('effect-fade-in', 'open', fullScreen, (isScrollable ? 'modal-scrollable' : 'is-fixed'))
  }

  window.closePopupModal = function () {
    document.body.className = ''
    popupModal.classList.add('effect-fade-out')
  }

  popupModal.addEventListener('webkitAnimationEnd', function () {
    if (popupModal.className.includes('effect-fade-out')) {
      popupModal.classList.remove('open')
      popupModal.className = popupModalClass
    }
  })

  window.stop = function (event) {
    event.stopPropagation()
  }

  document.addEventListener('keyup', function (e) {
    if (e.code == 'Escape' || e.keyCode == 27) {
      closePopupModal()
    }
  })
})(window)