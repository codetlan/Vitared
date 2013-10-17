Ext.define('Vitared.view.laboratories.LaboratoryNavigation', {
    extend: 'Vitared.view.home.NavigationHome',
    xtype: 'laboratorynavigation',

    requires: [
        'Ext.List',
        'Vitared.view.laboratories.LaboratoryTpl',
        'Ext.Map'
    ],

    initialize: function (){
        var me = this;

        me.down('container').add([{
            xtype: 'list',
            itemTpl:  Ext.create('Vitared.view.laboratories.LaboratoryTpl'),
            flex: 1,
            store: 'Laboratories',
            scope: this,
            onItemDisclosure: function (record, btn, index){
                this.fireEvent("tap", this);
            }
        }]);

        me.callParent();
    }
});
