/**
 * @class Vitared.store.Medics
 * @extends Ext.data.Store
 * This is the store to handle the medics
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.store.MedicsDetails', {
    extend: 'Ext.data.Store',
    requires: [
        'Vitared.model.MedicDetails',
        'Vitared.proxy.Drupal'],

    config: {
        model: 'Vitared.model.MedicDetails',
        proxy: {
            type: 'drupal',
            url: 'https://vitared.com.mx:3001/busqueda/medicos/',
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