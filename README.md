# BeautyTips Node

This BeautyTips Node module supplements the BeautyTips module by
giving the user the ability to display any node page inside a 
BeautyTip, without the header and footer.

The BeautyTips module provides balloon-style help tooltips for any page
element by integrating with Backdrop the BeautyTips jQuery Tooltip plugin by 
Jeff Robbins. 

This is a port from the Drupal module of the same name, v7.x-1.0. 


## Status

This is an initial port of the module.

## Installation

Install this module using the official Backdrop CMS instructions at
https://backdropcms.org/guide/modules.

This module is dependent on the BeautyTips API module, with its three
submodules beautytips, beautytips_manager and beautytips_ui.
  
    
## Configuration

Navigate to module settings at 
admin/config/content/beautytips/node-settings.


## How to use

To use another node as the content of a BeautyTip, create a
link to that node and add the class "beautytips-node" to the link.

In this module's settings you can select the style for the
beautytip.


## License

This project is GPL v2 software. See the LICENSE.txt file in this
directory for complete text.
    
        
## Current porting to Backdrop

Graham Oliver (github.com/Graham-72/)

## Credits

### Developer for Drupal:

- Heshan Wanigasooriya (heshanlk)

### Acknowledgement

This port to Backdrop would not, of course, be possible without all
the work done by the developers and maintainers of the Drupal module.
