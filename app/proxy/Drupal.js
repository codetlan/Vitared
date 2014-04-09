/**
 * @class Vitared.proxy.Drupal
 * @extends Ext.data.proxy.JsonP
 * This is the proxy connect with drupal
 * @oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.proxy.Drupal', {
    extend: 'Ext.data.proxy.JsonP',
    alias: 'proxy.drupal',
    currentPage: 0,
    pageSize: 10,

    getParams: function(operation) {
        return {
            page: operation.getPage() - 1,
            limit: operation.getLimit()
        };
    }
});