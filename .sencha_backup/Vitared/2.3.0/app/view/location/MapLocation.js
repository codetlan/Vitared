/**
 * @class Vitared.view.location.MapLocation
 * @extends Ext.Map
 * Map for localization
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.location.MapLocation',{
   extend: 'Ext.Map',
   xtype: 'locationmap',

    config: {
        mapOptions:{
            zoom: 3
        }
    }
});