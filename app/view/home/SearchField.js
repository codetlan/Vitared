/**
 * @class Vitared.view.home.SearchField
 * @extends Ext.Container
 * Searchfield for search
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.home.SearchField', {
    extend: 'Ext.Container',
    xtype: 'searchcontainer',

    requires: [
        'Ext.field.Search'
    ],

    config: {
        layout: 'vbox',
        title: '<div class="icon-logo-app"></div>',
        items: [
            {
                xtype: 'searchfield',
                name: 'search',
                padding: 5,
                placeHolder: 'Buscar...',
                itemId: 'searching',
                cls: 'list-search'
            }
        ],
        listeners:[
            {
                element: 'element',
                event: 'tap',
                fn: function() {
                    this.fireEvent('tap', arguments);
                }
            }
        ]
    }
});