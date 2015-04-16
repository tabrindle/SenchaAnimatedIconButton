Ext.define('Ext.ux.AnimatedIconButton', {
    extend: 'Ext.Component',

    xtype: 'AnimatedIconButton',

    template: [
    	{
    		tag: 'div',
    		className: Ext.baseCSSPrefix + 'animated-icon-element-container',
    		reference: 'iconElementContainer',
    		children: [
    			{
		            tag: 'div',
		            className: Ext.baseCSSPrefix + 'icon-element-top',
		            reference: 'iconElementTop'
		        },
		        {
		            tag: 'div',
		            className: Ext.baseCSSPrefix + 'icon-element-bottom',
		            reference: 'iconElementBottom'
		        }
    		]
    	}
    ],

    initialize: function() {
        this.callParent();

        this.element.on({
            scope      : this,
            tap        : 'onTap'
        });
    },

    onTap: function(e) {
    	console.log('onTap', arguments)

    	if(this.iconElementContainer.hasCls(Ext.baseCSSPrefix + 'animated-icon-element-container')){
    		this.iconElementContainer.replaceCls(Ext.baseCSSPrefix + 'animated-icon-element-container', Ext.baseCSSPrefix + 'animated-icon-element-container-2');
    	} else {
    		this.iconElementContainer.replaceCls(Ext.baseCSSPrefix + 'animated-icon-element-container-2', Ext.baseCSSPrefix + 'animated-icon-element-container');
    	}

    	if(this.iconElementBottom.hasCls(Ext.baseCSSPrefix + 'icon-element-bottom')){
    		this.iconElementBottom.replaceCls(Ext.baseCSSPrefix + 'icon-element-bottom', Ext.baseCSSPrefix + 'icon-element-bottom-2');
    		this.iconElementTop.replaceCls(Ext.baseCSSPrefix + 'icon-element-top', Ext.baseCSSPrefix + 'icon-element-top-2');
    	} else {
    		this.iconElementBottom.replaceCls(Ext.baseCSSPrefix + 'icon-element-bottom-2', Ext.baseCSSPrefix + 'icon-element-bottom');
    		this.iconElementTop.replaceCls(Ext.baseCSSPrefix + 'icon-element-top-2', Ext.baseCSSPrefix + 'icon-element-top');
    	}

    	this.fireAction('tap', [this, e], 'doTap');
    }
});
