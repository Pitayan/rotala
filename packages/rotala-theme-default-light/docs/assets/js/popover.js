(function (window) {
  var popover = document.getElementById('popover')

  window.togglePopover = function () {
    popover.className.includes('open') ?
      popover.classList.remove('open') :
      popover.classList.add('open')
  }

  window.closePopover = function () {
    popover.classList.remove('open')
  }

  document.addEventListener('keyup', function (e) {
    if (e.code == 'Escape' || e.keyCode == 27) {
      closePopover()
    }
  })
})(window)