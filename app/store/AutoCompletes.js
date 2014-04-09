/**
 * @class Vitared.store.AutoCompletes
 * @extends Ext.data.Store
 * This is the store to handle the autocomplete search
 * @oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.store.AutoCompletes', {
    extend: 'Ext.data.Store',
    requires: [
        'Vitared.model.AutoComplete',
        'Vitared.proxy.Drupal'],

    config: {
        model: 'Vitared.model.AutoComplete',
        proxy: {
            type: 'drupal',
            url: 'https://vita-app.fractal-ware.com/medicos/',
            callbackKey: 'callback',
            reader: {
                type: 'json',
                rootProperty: 'search'
            }
        }
    }
});