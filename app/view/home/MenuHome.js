/**
 * @class Vitared.view.home.MenuHome
 * @extends Ext.Menu
 * Home Vitared
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.home.MenuHome', {
    extend: 'Ext.Menu',
    xtype: 'menuhome',

    requires: [],

    config: {
        items: [
            {
                xtype: 'button',
                html: '<a href="https://www.membresiavitamedica.com.mx" style="text-decoration: none; color: #ffffff;" target="_blank">Membresía Vitamédica</a>',
                style: {
                    background: '#1198ff'
                },
                itemId: 'membresia'
            },
            {
                xtype: 'button',
                html: '<a href="https://www.vitared.com.mx/privacidad" style="text-decoration: none; color: #ffffff;" target="_blank">Aviso de Privacidad</a>',
                style: {
                    background: '#56dc0f'
                },
                itemId: 'privacidad'
            },
            {
                xtype: 'button',
                html: '<a href="https://www.vitared.com.mx/privacidad" style="text-decoration: none; color: #ffffff;" target="_blank">Condiciones de Uso</a>',
                style: {
                    background: '#1198ff'
                },
                itemId: 'condiciones'
            }
        ]

    }
});
