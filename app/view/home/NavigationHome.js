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
                    iconCls:'locate',
                    align:'left',
                    ui:'btn-add-ui',
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
