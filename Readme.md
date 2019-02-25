
# scroll-to

  Smooth window scroll to position with requestAnimationFrame and [Tween](https://github.com/component/tween).

## Installation

    $ npm install @robinnnnn/scroll-to

## API

### scrollTo(x, y, [options])

  Scroll to the given point `(x, y)` with the given `options`:

  - `ease` easing function defaulting to "out-circ" (view [ease](https://github.com/component/ease) for more)
  - `duration` animation duration defaulting to `1000` milliseconds
  - `cancelOnUserScroll` cancels scrolling animation when user interruption is detected; defaults to `false`

```js
var scrollTo = require('scroll-to');

scrollTo(500, 1200, {
  ease: 'out-bounce',
  duration: 1500,
  cancelOnUserScroll: true
});
```

## License

  MIT
