/**
 * @class Vitared.store.Searchs
 * @extends Ext.data.Store
 * This is the store to handle the searchs
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.store.Searchs', {
    extend: 'Ext.data.Store',
    requires: [
        'Vitared.model.Search',
        'Vitared.proxy.Drupal'],

    config: {
        model: 'Vitared.model.Search',
        proxy: {
            type: 'drupal',
            url: 'http://vitared.com.mx/app/buscar/medicos',
            callbackKey: 'callback',
            reader: {
                type: 'json',
                rootProperty: 'nodes'
            }
        }
    }
});