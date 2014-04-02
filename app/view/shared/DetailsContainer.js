/**
 * @class Vitared.view.shared.DetailsContainer
 * @extends Ext.Container
 * Container of the details
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.shared.DetailsContainer', {
    extend: 'Ext.Container',
    xtype: 'detailscontainer',

    requires: ['Vitared.view.shared.DetailsTpl',
        'Vitared.view.shared.DetailsType',
        'Vitared.view.location.MapLocation'],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'locationmap',
                flex: 7
            },
            {
                xtype: 'detailstype',
                flex: 3,
                scrollable: {
                    direction: 'vertical'
                }
            }
        ]
    }
});