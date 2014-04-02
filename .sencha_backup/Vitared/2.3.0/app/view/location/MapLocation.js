Ext.define('Vitared.view.location.MapLocation',{
   extend: 'Ext.Map',
   xtype: 'locationmap',

    config: {
        useCurrentLocation: true,
        mapOptions:{
            zoom: 15
        }
    }
});