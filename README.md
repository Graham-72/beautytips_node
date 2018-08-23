# BeautyTips Node

This BeautyTips Node module supplements the BeautyTips module by
giving the user the ability to display node page inside a 
BeautyTip without the header and footer.

The BeautyTips module provides balloon-style help tooltips for any page
element by integrating the BeautyTips jQuery Tooltip plugin by 
Jeff Robbins with Backdrop. 

This is a port from the Drupal module of the same name, v7.x-1.0. 


## Status

This is an initial port of the module.

## Installation

Install this module using the official Backdrop CMS instructions at
  https://backdropcms.org/guide/modules.
  
    
## Configuration

Navigate to module settings at 
admin/config/user-interface/beautytips/node-settings.


## How to use

The module uses the built in AJAX Framework and menu callback 
functions. Use the BeautyTips display view mode to configure 
the fields you want to display.

When you create your links manually, you will need to add the 
class "beautytips-node" to the link. That is the only class 
required and the module will handle the BeautyTip loading internally.
Your link could look like any of these:

## License

This project is GPL v2 software. See the LICENSE.txt file in this
directory for complete text.
    
        
## Current porting to Backdrop

Graham Oliver (github.com/Graham-72/)

## Credits

### Maintainer for Drupal:

- Heshan Wanigasooriya (heshanlk)

### Acknowledgement

This port to Backdrop would not, of course, be possible without all
the work done by the developers and maintainers of the Drupal module.
