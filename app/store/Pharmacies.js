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
            url: 'http://vitared.com.mx:3001/app/buscar/proveedor',
            callbackKey: 'callback',
            reader: {
                type: 'json',
                rootProperty: 'medicos'

            }
        },
        listeners: {
            beforeload: function (store, operation, ops) {
                var me = this,
                    extraParams = store.getProxy().getExtraParams();

                if(me.resetParams){
                    store.getProxy().setExtraParams(me.params);
                    me.resetParams = false;
                } else {
                    store.getProxy().setExtraParams(me.mergePropertiesObject(extraParams, me.params));
                }
            }
        }
    },

    resetCurrentPage: function() {
        this.currentPage = 1;
    },

    setParams:function(params, resetParams){
        var me = this;
        me.params = params;
        me.resetParams = resetParams;
    },

    mergePropertiesObject: function (obj1, obj2) {
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (var attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    }
});