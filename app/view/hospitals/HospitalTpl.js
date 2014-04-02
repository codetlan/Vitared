/**
 * @class Vitared.view.hospitals.HospitalTpl
 * @extends Ext.XTemplate
 * Template for displaying hospitals
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.hospitals.HospitalTpl', {
    extend: 'Ext.XTemplate',
    constructor: function () {
        var html;
        html = [
            '<i class="fa fa-map-marker" style="font-size: 50px; color: red; float: left; clear: left; margin: 0 20px 0 0"></i>',
            '<div style="color: #064b88; font-size: 16px; font-weight: bold;">{name}</div><div style="color: gray;">{localidad}</div>',
            '<div class="clear:both"></div>'];
        this.callParent(html);
    }
});
