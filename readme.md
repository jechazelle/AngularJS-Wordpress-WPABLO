WordPress Angular Theme - WPABLO
================================

VERSION 1.0
===========

WPABLO - What is it ?
===================

I wanted to provide a wordpress theme angularjs having a smart structure.

[DEMO](http://wpablo.jeremiechazelle.fr)

+ WP : WordPress
+ A  : AngularJS
+ B  : Bootstrap
+ L  : Layout
+ O  : Organisation


AngularJS : 
+ Use AngularJS with styleguide - [John Papa](https://github.com/johnpapa/angular-styleguide)

CSS : 
+ Use SMACSS method (Scalable and Modular Architecture for CSS)

Workflow :
+ Grunt => concatenation, minification (JS/CSS) 
+ Allow two modes Production/Developpement (minify or not, function_prod.php / function_dev.php)


Based on
---------

**AngularJS**

**Twitter Bootstrap**

**SASS CSS**

**JSON API** - Required plugin for RESTful API



To use, you must install :
+ Grunt
+ Bower
+ Compass


Install Instructions
=====================

+ Download / Pull All Files in your themes directory
+ Download/Install the [JSON API WordPress Plugin](http://wordpress.org/plugins/json-rest-api/)
+ Activate your Theme
+ You can choose your configuration (production (by default) or developpement, minify or not) => Rename the file function_dev.php or function_prod.php to function.php 
+ Enjoy !


Documentation
--------------  

**GLOBAL CSS VARIABLES** 

+ You can change the CSS variables in /sass/_variable_app.scss
+ Then, go to 'WPAB' folder and launch 'compass compil' in line command (or 'grunt' for production mode, concatenation, minify)

**GLOBAL JS VARIABLES**  

+ You can change the JS variables (UrlPartials, UrlJSON) in /js/app.js
