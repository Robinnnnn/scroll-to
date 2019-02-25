/**
 * Module dependencies.
 */
const Tween = require('component-tween');
const raf = require('component-raf');

/**
 * Return scroll position.
 *
 * @return {Object}
 * @api private
 */
function getScrollPosition() {
  const y = window.pageYOffset || document.documentElement.scrollTop;
  const x = window.pageXOffset || document.documentElement.scrollLeft;
  return { top: y, left: x };
}

/**
 * Scroll to `(x, y)`.
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */
function scrollTo(x, y, options) {
  options = options || {};
  const { ease, duration, cancelOnUserScroll } = options

  // last tracked position
  const last = getScrollPosition();

  // setup tween
  const tween = Tween(last)
    .ease(ease || 'out-circ')
    .to({ top: y, left: x })
    .duration(duration || 1000);
  
  // scroll
  tween.update(function(o){
    // handle scroll interruption
    if (cancelOnUserScroll) {
      const deltaY = Math.abs(getScrollPosition().top - last.top) || 0
      const deltaX = Math.abs(getScrollPosition().left - last.left) || 0
      if (Math.floor(deltaY) || Math.floor(deltaX)) {
        animate = function(){};
      }

      last.top = o.top
      last.left = o.left
    }

    window.scrollTo(o.left | 0, o.top | 0);
  });

  // handle end
  tween.on('end', function(){
    animate = function(){};
  });

  // animate
  function animate() {
    raf(animate);
    tween.update();
  }

  animate();
  
  return tween;
}

/**
 * Expose `scrollTo`.
 */
module.exports = scrollTo;