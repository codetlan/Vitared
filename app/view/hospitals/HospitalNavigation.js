Ext.define('Vitared.view.hospitals.HospitalNavigation', {
    extend: 'Vitared.view.home.NavigationHome',
    xtype: 'hospitalnavigation',

    requires: [
        'Ext.List',
        'Vitared.view.hospitals.HospitalTpl'],

    initialize: function (){
        var me = this;

        me.down('container').add([{
            xtype: 'list',
            itemTpl: Ext.create('Vitared.view.hospitals.HospitalTpl'),
            flex: 1,
            store: 'Hospitals',
            scope: this,
            onItemDisclosure: function (record, btn, index){
                this.fireEvent("tap", this);
            }
        }]);

        me.callParent();
    }
});
