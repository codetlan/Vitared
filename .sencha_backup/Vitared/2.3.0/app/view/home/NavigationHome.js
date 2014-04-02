Ext.define('Vitared.view.home.NavigationHome', {
    extend: 'Ext.NavigationView',
    xtype: 'navigationhome',

    requires: ['Vitared.view.location.MapLocation',
        'Vitared.view.home.SearchField'
    ],

    config: {
        navigationBar: {
            items:[
                {
                    xtype: 'button',
                    align: 'right',
                    iconCls: 'maps',
                    itemId: 'mapButton'
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
