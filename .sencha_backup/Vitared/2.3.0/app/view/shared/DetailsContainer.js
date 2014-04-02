Ext.define('Vitared.view.shared.DetailsContainer',{
    extend: 'Ext.Container',
    xtype: 'detailscontainer',

    requires:['Vitared.view.shared.DetailsType',
        'Vitared.view.shared.DetailsTpl'],

    config: {
        layout: 'vbox',
        items: [{
            xtype: 'detailstype',
            flex: 3
        },{
            xtype: 'map',
            flex: 3,
            useCurrentLocation: true,
            mapOptions:{
                zoom: 15
            }
        },{
            xtype: 'button',
            flex: 1,
            text: '¿Como llegar?'
        }]
    }
});