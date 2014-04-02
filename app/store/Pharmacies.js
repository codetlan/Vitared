/**
 * @class Vitared.store.Pharmacies
 * @extends Ext.data.Store
 * This is the store to handle the pharmacies
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.store.Pharmacies', {
    extend: 'Ext.data.Store',
    requires:[
        'Vitared.model.Pharmacy',
        'Vitared.proxy.Drupal'],

    config:{
        model:'Vitared.model.Pharmacy',
        proxy: {
            type: 'drupal',
            url: 'http://vitared.com.mx/app/consulta/proveedor',
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