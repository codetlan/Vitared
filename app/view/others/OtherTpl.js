/**
 * @class Vitared.view.others.OtherTpl
 * @extends Ext.XTemplate
 * Template for displaying others
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.others.OtherTpl', {
    extend: 'Ext.XTemplate',
    constructor: function () {
        var html;
        html = [
            '<tpl if="this.validateDestacado(destacado) == true">' +
                '<div class="resultados-destacados">' +
                '<tpl else>',
            '<div class="resultados">' +
                '</tpl>' +
                '<div class="resultado">' +
                '<i class="fa fa-map-marker" ></i>' +
                '<div class="info">' +
                '<p class="nombre"> {name} </p>' +
                '<p class="especialidad"> {subespecialidad} </p>' +
                '<p class="localidad"> {localidad} </p>' +
                '</div><!-- info -->' +
                '<div class="right">' +
                '<i class="fa fa-chevron-circle-right" ></i>' +
                '</div><!-- right -->' +
                '</div><!-- resultado -->',
            {
                validateDestacado: function (destacado) {
                    if (destacado != 3) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }];
        this.callParent(html);
    }
});
