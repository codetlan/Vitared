/**
 * @class Vitared.view.medics.MedicTpl
 * @extends Ext.XTemplate
 * Template for displaying medics
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.medics.MedicTpl', {
    extend: 'Ext.XTemplate',
    constructor: function () {
        var html;
        html = [
            '<i class="fa fa-map-marker" style="font-size: 64px; color: red; float: left; clear: left; margin: 0 20px 0 0"></i>',
            '<div style="color: #064b88; font-size: 16px; font-weight: bold;">Dr. {name} {first_name} {last_name}</div><div style="font-size: 16px; color: gray;">{especialidad}</div><div style="color: gray;">{localidad}</div>',
            '<div class="clear:both"></div>'];
        this.callParent(html);
    }
});
