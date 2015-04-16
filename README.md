# Sencha Animated Icon Button

This is a quick project I whipped up after the Material Design seminar at SenchaCon. This is a custom component extended from component, not button so it does not have all the same capabilities as a normal button (badges, etc)

## Installation:

- Copy AnimatedIconButton.js to app/ux/AnimatedIconButton.js
- Add Ext.ux to your Ext.Loader.setPath() if it isn't already there, like so:

```
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Ext.ux': 'app/ux',
});
```

- Add the contents of styles.css to your app.scss 
- Don't forget to recompile your SASS if it doesn't do it automagically.

## Usage: 

- Declare an xtype of 'AnimatedIconButton' the way you would with any other xtype.
```
  xtype: 'AnimatedIconButton'
```
- You may also configure a handler or controller listener for this button.

## Notes
- The actually animated icon in here uses 3 divs and borders, rather than the typical icon font.
- Free beer to anyone who makes this better, easier to install, more performant, or more universally adapted.
