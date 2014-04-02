Ext.define('Vitared.view.pharmacies.PharmacyNavigation', {
    extend: 'Vitared.view.home.NavigationHome',
    xtype: 'pharmacynavigation',

    requires: [
        'Ext.List',
        'Vitared.view.pharmacies.PharmacyTpl',
        'Vitared.view.shared.DetailsContainer'
    ],

    initialize: function (){
        var me = this;

        me.down('container').add([{
            xtype: 'list',
            itemTpl:  Ext.create('Vitared.view.pharmacies.PharmacyTpl'),
            flex: 1,
            store: 'Pharmacies',
            scope: this,
            onItemDisclosure: function (record, listItem, index, e){
                this.fireEvent("tap", record, listItem, index, e);
            }
        }]);

        me.callParent();
    }
});
