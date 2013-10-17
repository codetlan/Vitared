/**
 * @class Cursame.view.phone.Main
 * @extends Cursame.view.Main
 * This is the view class for our phone application
 */
Ext.define('Vitared.view.phone.Main', {
    extend: 'Vitared.view.Main',
    requires: [
        'Ext.field.TextArea',
        'Ext.field.DatePicker',
        'Ext.field.Number',
        'Vitared.view.LoginForm',
        'Vitared.view.home.HomePanel'
    ],
    config:{
        menu:{
            minWidth:190
        }
    },

    initialize:function(){
        var me = this,
            cardContainerItems = [{
                xtype:'loginform'
            },{
                xtype:'homepanel'
            }],
            cardContainer = {
                xtype:'container',
                itemId:'cardcontainer',
                layout:'card',
                flex:1,
                activeItem:0,
                items:cardContainerItems
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