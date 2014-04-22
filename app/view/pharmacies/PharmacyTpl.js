/**
 * @class Vitared.view.pharmacies.PharmacyTpl
 * @extends Ext.XTemplate
 * Template for displaying pharmacies
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.pharmacies.PharmacyTpl', {
    extend: 'Ext.XTemplate',
    constructor: function () {
        var html;
        html = [
            '<tpl if="this.validateDestacado(destacado) == true">' +
                '<div class="resultados-destacados">' +
                '<div class="resultado">' +
                '<img class="fa-map-marker" src="./resources/images/marker-patrocinado.png"/>' +
                '<tpl else>',
            '<div class="resultados">' +
                '<div class="resultado">' +
                '<img class="fa-map-marker" src="./resources/images/marker.png"/>' +
                '</tpl>' +
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
