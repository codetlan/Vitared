/**
 * @class Vitared.store.Others
 * @extends Ext.data.Store
 * This is the store to handle the others
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.store.Others', {
    extend: 'Ext.data.Store',
    requires:[
        'Vitared.model.Other',
        'Vitared.proxy.Drupal'],

    config:{
        model:'Vitared.model.Other',
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