/**
 * @class Vitared.store.Hospitals
 * @extends Ext.data.Store
 * This is the store to handle the hospitals
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.store.Hospitals', {
    extend: 'Ext.data.Store',
    requires:[
        'Vitared.model.Hospital',
        'Vitared.proxy.Drupal'],

    config:{
        model:'Vitared.model.Hospital',
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