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
            '<tpl if="this.validateDestacado(destacado) == true">' +
                '<div class="resultados-destacados">' +
                '<div class="resultado">' +
                '<img class="fa-map-marker" src="./resources/images/marker-patrocinado.png"/>A' +
                '<tpl else>',
            '<div class="resultados">' +
                '<div class="resultado">' +
                '<img class="fa-map-marker" src="./resources/images/marker.png"/>1' +
                '</tpl>' +
                '<div class="info">' +
                '<p class="nombre"> Dr. {name} {first_name} {last_name} </p>' +
                '<p class="especialidad"> {especialidad} </p>' +
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
        //'<i class="fa fa-map-marker" style="font-size: 64px; color: red; float: left; clear: left; margin: 0 20px 0 0"></i>',
        //'<div style="color: #064b88; font-size: 16px; font-weight: bold;">Dr. {name} {first_name} {last_name}</div><div style="font-size: 16px; color: gray;">{especialidad}</div><div style="color: gray;">{localidad}</div>',
        //'<div class="clear:both"></div>'];
        this.callParent(html);
    }
});
