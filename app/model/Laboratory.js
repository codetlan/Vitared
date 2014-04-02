/**
 * @class Vitared.model.Laboratory
 * @extends Ext.data.Model
 * The model for the laboratories
 * @oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.model.Laboratory', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'name',
                type: 'string',
                mapping: 'medico.title'
            },
            {
                name: 'afiliado',
                type: 'string',
                mapping: 'medico.afiliado'
            },
            {
                name: 'promociones',
                type: 'string',
                mapping: 'medico.promociones'
            },
            {
                name: 'direcciones',
                type: 'string',
                mapping: 'medico.direcciones'
            },
            {
                name: 'telefono',
                type: 'string',
                mapping: 'medico.telefono'
            },
            {
                name: 'foto',
                type: 'string',
                mapping: 'medico.field_foto'
            },
            {
                name: 'localidad',
                type: 'string',
                mapping: 'medico.localidad'
            },
            {
                name: 'latitud',
                type: 'string',
                mapping: 'medico.lat'
            },
            {
                name: 'longitud',
                type: 'string',
                mapping: 'medico.long'
            },
            {
                name: 'numero_telefono',
                type: 'string',
                mapping: 'medico.numero_telefono'
            }
        ]
    }
});