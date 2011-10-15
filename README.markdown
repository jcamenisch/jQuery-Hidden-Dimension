Hidden Dimension
================

The Hidden Dimension jQuery plugin provides the dimensions of invisible DOM elements.

The Problem
-----------

Normally, any element with the display attribute set to "none" will have a height
and width of 0. To find out what the height *would* be if the element were shown,
you could..., well, you could use this plugin.

Dependencies
------------

- jQuery--tested on 1.6, but should work on older versions.

Usage
-----

Once you include jQuery and jquery.hidden-dimensions.js in your page, you can use 
$(selector).hiddenDimension(dimension) to send any standard jQuery dimensional function as follows:

    var
      width = $('#my-hidden-element').hiddenDimension('width'),
      height = $('#my-hidden-element').hiddenDimension('height'),
      outerWidth = $('#my-hidden-element').hiddenDimension('outerWidth'),
      outerHeight = $('#my-hidden-element').hiddenDimension('outerHeight'),
      innerWidth = $('#my-hidden-element').hiddenDimension('innerWidth'),
      innerHeight = $('#my-hidden-element').hiddenDimension('innerHeight');

The hiddenDimension function will use the DOM to set up an off-screen clone of the element 
at its visible size, and then execute the requested function against the sized element. This means you
could send any jQuery function to hiddenDimension, and get the result from the clone. The ones
listed above are simply functions you would be most likely to need.

Known Issues
------------

- Elements whose nearest visible ancestor is body cannot currently be examined with
  Real Dimensions. Return value will be undefined.