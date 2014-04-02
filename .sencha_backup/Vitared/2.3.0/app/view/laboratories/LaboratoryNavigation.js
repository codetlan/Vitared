Ext.define('Vitared.view.laboratories.LaboratoryNavigation', {
    extend: 'Vitared.view.home.NavigationHome',
    xtype: 'laboratorynavigation',

    requires: [
        'Ext.List',
        'Vitared.view.laboratories.LaboratoryTpl',
        'Vitared.view.shared.DetailsContainer'
    ],

    initialize: function (){
        var me = this;

        me.down('container').add([{
            xtype: 'list',
            itemTpl:  Ext.create('Vitared.view.laboratories.LaboratoryTpl'),
            flex: 1,
            store: 'Laboratories',
            scope: this,
            onItemDisclosure: function (record, listItem, index, e){
                this.fireEvent("tap", record, listItem, index, e);
            }
        }]);

        me.callParent();
    }
});
