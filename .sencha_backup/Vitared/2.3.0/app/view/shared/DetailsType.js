/**
 * @class Vitared.view.shared.DetailsType
 * @extends Ext.Container
 * Container of the details type
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.shared.DetailsType', {
    extend: 'Ext.Container',
    xtype: 'detailstype',
    config: {
        tpl: Ext.create('Vitared.view.shared.DetailsTpl')
    }
});