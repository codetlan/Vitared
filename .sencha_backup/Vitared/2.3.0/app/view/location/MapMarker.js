/**
 * @class Vitared.view.location.MapMarker
 * @extends Ext.Map
 * Marker Map
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.location.MapMarker',{
    extend: 'Ext.Map',
    xtype: 'markermap',

    config: {
        mapOptions:{
            zoom: 15
        }
    }
});