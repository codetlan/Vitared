/**
 * @class Vitared.view.home.AutoCompleteList
 * @extends Ext.dataview.List
 * View of List results to autocomplete search
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.home.AutoCompleteList', {
    extend: 'Ext.dataview.List',
    xtype: 'autocompletelist',
    config: {
        xtype: 'list',
        masked: {
            xtype: 'loadmask',
            message: 'Cargando...'
        },
        emptyText: 'No hay Resultados ...',
        cls: 'search-list',
        itemTpl: Ext.create('Vitared.view.home.AutoCompleteTpl'),
        store: 'AutoCompletes'
    }
});