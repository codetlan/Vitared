/**
 * @class Vitared.view.Main
 * @extends Ext.Container
 * This is the main view of the vitared app
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    config: {
        layout: 'card',
        fullscreen: true,
        autoDestroy: false,
        activeItem: 0
    }
});
