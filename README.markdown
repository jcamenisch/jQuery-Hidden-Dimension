Hidden Dimensions
=================

The Hidden Dimensions jQuery plugin provides the dimensions of invisible DOM elements.

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

Once you include jQuery and jquery.hidden-dimensions.js in your page, you can use $(selector).realDim
to send any standard jQuery dimensional function as follows:

    var
      width = $('#my-hidden-element').realDim('width'),
      height = $('#my-hidden-element').realDim('height'),
      outerWidth = $('#my-hidden-element').realDim('outerWidth'),
      outerHeight = $('#my-hidden-element').realDim('outerHeight'),
      innerWidth = $('#my-hidden-element').realDim('innerWidth'),
      innerHeight = $('#my-hidden-element').realDim('innerHeight');

The realDim function will set up a clone of the element at its visible
size, and then execute the requested function against the sized element.

Known Issues
------------

- Elements whose nearest visible ancestor is body cannot currently be examined with
  Real Dimensions. Return value will be undefined, and other problems may also arise.