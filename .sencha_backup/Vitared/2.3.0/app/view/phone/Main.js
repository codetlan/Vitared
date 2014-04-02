/**
 * @class Vitared.view.phone.Main
 * @extends Vitared.view.Main
 * This is the view class for our phone application
 */
Ext.define('Vitared.view.phone.Main', {
    extend: 'Vitared.view.Main',
    requires: [
        'Vitared.view.home.HomePanel'
    ],
    config:{
        menu:{
            minWidth:190
        }
    },

    initialize:function(){
        var me = this,
            cardContainer = {
                xtype:'container',
                itemId:'cardcontainer',
                layout:'card',
                flex:1,
                activeItem:0,
                items:[{
                    xtype:'homepanel'
                }]
            };

        me.setItems([{
            xtype: 'container',
            layout: 'fit',
            items:[cardContainer],
            flex:1
        }]);

        me.callParent();
    }
});