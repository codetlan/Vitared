Ext.define('Vitared.view.shared.DetailsTpl', {
    extend: 'Ext.XTemplate',
    constructor: function () {
        var html;
        html = [
            '<tpl for=".">',
            '<div style="margin: 10px"><p style="font-size: 18px; font-weight: bold;">{name}</p>',
            '<p style="font-size: 10px;">{horario}</p>',
            '<p style="font-size: 16px;">{address}</p>',
            '<p>Teléfonos:</p>',
            '<tpl for="telefonos">',
            '<p><a href="#" style="font-size: 15px; color: #004c99;">{1}</a></p>',
            '<p><a href="#" style="font-size: 15px; color: #004c99;">{2}</a></p>',
            '</tpl></div>',
            '</tpl>',
            '<div class="clear:both"></div>'];

        this.callParent(html);
    }

});
