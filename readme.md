
mini-rhythm.js
==============

Pure JavaScript way of keeping elements adhering to a vertical rhythm.

Around 561 bytes. Not dependant on jQuery. cross browser compatibility (IE7 onwards).

Intended to accompany CSS vertical rhythm – not replace it!

###Why

CSS only vertical rhythm will tend to break under a couple of conditions.

* Where an image is scaling horizontally and keeping its ratio by adjusting its height.
* Where a paragraph has a smaller line-height than the base and wraps to an unknown number of lines.

mini-rhythm.js adds a bottom margin to ensure the total height is a multiple of the parent element's line-height.


###Usage


Add data-rhythm attribute to each element you wish to keep in rhythm. This will add a bottom margin, extending the height to the nearest possible line-height multiple.

```
<img src="..." data-rhythm="0">
```

To add extra space below the element enter the number of lines required as the data-rhythm attribute value.

```
<img src="..." data-rhythm="2">
```

You can also use a float

```
<img src="..." data-rhythm="1.5">
```

###Example

[RShergold.github.io/mini-rhythm.js/example](http://RShergold.github.io/mini-rhythm.js/example)