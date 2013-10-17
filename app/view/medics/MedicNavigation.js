Ext.define('Vitared.view.medics.MedicNavigation', {
    extend: 'Vitared.view.home.NavigationHome',
    xtype: 'medicnavigation',

    requires: [
        'Ext.List',
        'Vitared.view.medics.MedicTpl',
        'Vitared.view.medics.MedicDetailsTpl',
        'Ext.Map'],

    initialize: function (){
        var me = this;

        me.down('container').add([{
            xtype: 'list',
            itemTpl:  Ext.create('Vitared.view.medics.MedicTpl'),
            flex: 1,
            store: 'Medics',
            scope: this,
            onItemDisclosure: function (record, btn, index){
                this.fireEvent("tap", this);
            }
        }]);

        me.callParent();
    }
});
