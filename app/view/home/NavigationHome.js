/**
 * @class Vitared.view.home.NavigationHome
 * @extends Ext.NavigationView
 * View of Navigation Home
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.home.NavigationHome', {
    extend: 'Ext.NavigationView',
    xtype: 'navigationhome',

    requires: ['Vitared.view.location.MapLocation',
        'Vitared.view.location.MapMarker',
        'Vitared.view.home.SearchField',
        'Vitared.view.medics.MedicDetailsTpl'
    ],

    config: {
        itemId: 'home',
        defaultBackButtonText: 'Atrás',
            navigationBar: {
            items:[
                {
                    xtype: 'button',
                    align: 'right',
                    icon: './resources/images/info.png',
                    iconCls: 'button-info',
                    width: '2.7em',
                    itemId: 'infoButton'
                },{
                    xtype: 'button',
                    align:'left',
                    icon: './resources/images/pin-azul2.png',
                    iconCls: 'button-locate',
                    width: '5.7em',
                    height: '3.1em',
                    itemId:'addLocation'
                }
            ]
        },
        items: [
            {
                xtype: 'searchcontainer'
            }
        ]
    }
});
