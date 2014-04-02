/**
 * @class Vitared.store.Laboratories
 * @extends Ext.data.Store
 * This is the store to handle the laboratories
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.store.Laboratories', {
    extend: 'Ext.data.Store',
    requires:[
        'Vitared.model.Laboratory',
        'Vitared.proxy.Drupal'],

    config:{
        model:'Vitared.model.Laboratory',
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