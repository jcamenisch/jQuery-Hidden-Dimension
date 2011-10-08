Real Size
=========

The Real Size jQuery plugin provides the dimensions of invisible DOM elements.

The Problem
-----------

Normally, any element with the display attribute set to "none" will have a height
and width of 0. To find out what the height *would* be if the element were shown,
you could..., well, you could use this plugin.

Dependencies
------------

- jQuery--tested on 1.6, but should work on any version

Usage
-----

Once you include jQuery and real_dimensions.js in your page, you can call the following four functions:

    var
      width = $('#my-hidden-element').realDim('width'),
      height = $('#my-hidden-element').realDim('height'),
      outerWidth = $('#my-hidden-element').realDim('outerWidth'),
      outerHeight = $('#my-hidden-element').realDim('outerHeight');
