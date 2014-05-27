/**
 * @class Vitared.model.Medic
 * @extends Ext.data.Model
 * The model for the medics
 * @oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.model.Medic', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'name',
                type: 'string',
                mapping: 'medico.title'
            },{
                name: 'nid',
                type: 'string',
                mapping: 'medico.Nid'
            },
            {
                name: 'first_name',
                type: 'string',
                mapping: 'medico.field_apellido_paterno'
            },
            {
                name: 'last_name',
                type: 'string',
                mapping: 'medico.field_apellido_materno'
            },
            {
                name: 'ranking',
                type: 'string',
                mapping: 'medico.ranking'
            },
            {
                name: 'foto',
                type: 'string',
                mapping: 'medico.field_foto'
            },
            {
                name: 'especialidad',
                type: 'string',
                mapping: 'medico.Especialidad'
            },
            {
                name: 'localidad',
                type: 'string',
                mapping: 'medico.Localidad'
            },
            {
                name: 'latitud',
                type: 'string',
                mapping: 'medico.Latitud'
            },
            {
                name: 'longitud',
                type: 'string',
                mapping: 'medico.Longitud'
            },
            {
                name: 'facebook',
                type: 'string',
                mapping: 'medico.Facebook'
            },
            {
                name: 'twitter',
                type: 'string',
                mapping: 'medico.Twitter'
            },
            {
                name: 'email',
                type: 'string',
                mapping: 'medico.field_correo_electr_nico'
            },
            {
                name: 'web',
                type: 'string',
                mapping: 'medico.field_p_gina_web'
            },
            {
                name: 'telefono',
                type: 'string',
                mapping: 'medico.telefono'
            },{
                name: 'promociones',
                type: 'string',
                mapping: 'medico.promociones'
            },
            {
                name: 'categoria',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.categoria;
                }
            },
            {
                name: 'tipo',
                type: 'int',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.tipo;
                }
            }
        ]
    }
});
