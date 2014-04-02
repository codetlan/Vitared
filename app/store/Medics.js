/**
 * @class Vitared.store.Medics
 * @extends Ext.data.Store
 * This is the store to handle the medics
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.store.Medics', {
    extend: 'Ext.data.Store',
    requires: [
        'Vitared.model.Medic',
        'Vitared.proxy.Drupal'],

    config: {
        model: 'Vitared.model.Medic',
        proxy: {
            type: 'drupal',
            url: 'http://vitared.com.mx/app/consulta/medico/',
            callbackKey: 'callback',
            reader: {
                type: 'json',
                rootProperty: 'medicos'
            }
        }
    },

    resetCurrentPage: function() {
        this.currentPage = 1;
    }
});