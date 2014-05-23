/**
 * @class Vitared.view.shared.DetailsTpl
 * @extends Ext.XTemplate
 * Template for displaying details
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.shared.DetailsTpl', {
    extend: 'Ext.XTemplate',
    xtype: 'detailstpl',
    constructor: function () {
        var html;
        html = [
            '<tpl for=".">',
            '<div class="container">',
            '<div class="lista">',
            '<p class="titulo">{name} {first_name} {last_name}</p>',
            '<p>{calle}</p>',
            '<p>Colonia {colonia}</p>',
            '<p>{horario}</p>',
            '<p>Llamar Directo: <a class="negra" href="tel:{numero_telefono}">{telefono}</a></p>',
            '</div>',
            '</div>',
            '</tpl>',
            '<div class="clear:both"></div>'];

        this.callParent(html);
    }

});
