Ext.define('Vitared.view.home.SearchField', {
    extend: 'Ext.Container',
    xtype: 'searchcontainer',

    requires: ['Ext.field.Search'],

    config: {
        layout: 'vbox',
        title: 'Vitared',
        items: [
            {
                xtype: 'searchfield',
                name: 'query',
                height: 30
            }
        ]
    }
});