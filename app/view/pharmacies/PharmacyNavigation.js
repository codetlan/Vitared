Ext.define('Vitared.view.pharmacies.PharmacyNavigation', {
    extend: 'Vitared.view.home.NavigationHome',
    xtype: 'pharmacynavigation',

    requires: [
        'Ext.List',
        'Vitared.view.pharmacies.PharmacyTpl'
    ],

    initialize: function (){
        var me = this;

        me.down('container').add([{
            xtype: 'list',
            itemTpl:  Ext.create('Vitared.view.pharmacies.PharmacyTpl'),
            flex: 1,
            store: 'Pharmacies',
            scope: this,
            onItemDisclosure: function (record, btn, index){
                this.fireEvent("tap", this);
            }
        }]);

        me.callParent();
    }
});
