/**
 * @class Vitared.model.Search
 * @extends Ext.data.Model
 * The model for the searchs
 * @oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.model.Search', {
    extend: 'Ext.data.Model',

    config: {
        /*fields: [
         {
         name: 'nid',
         type: 'string',
         mapping: 'node.nid'
         }
         ]
         }*/
        fields: [
            {
                name: 'name',
                type: 'string',
                mapping: 'medico.title'
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
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.Localidad;
                }
            },
            {
                name: 'latitud',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.Latitud;
                }
            },
            {
                name: 'longitud',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.Longitud;
                }
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
                name: 'consultorio',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    var items = [];
                    Ext.Array.each(consultorios, function (item, index, ItSelf) {
                        items.push(item.consultorio);
                    });
                    items.sort(function(item1, item2) {
                        if(item1.orden == item2.orden) return 0;
                        return (item1.orden < item2.orden) ? -1 : 1;
                    });
                    return items;
                }
            },
            {
                name: 'num_consul',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    var num_consul = consultorios.length;
                    if(num_consul != 1){
                        return num_consul + ' consultorios';
                    } else {
                        return num_consul + ' consultorio';
                    }
                }
            },
            {
                name: 'telefono',
                type: 'string',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.telefono;
                }
            },{
                name: 'promociones',
                type: 'string',
                mapping: 'medico.promociones'
            },
            {
                name: 'publicaciones',
                type: 'string',
                mapping: 'medico.Publicaciones'
            },
            {
                name: 'publicaciones',
                type: 'string',
                mapping: 'medico.Publicaciones',
                convert: function(publicaciones){
                    var items = [];
                    Ext.Array.each(publicaciones, function (item, index, ItSelf) {
                        items.push(item);
                    });
                    return items;
                }
            },{
                name: 'imagen_publicacion',
                type: 'string',
                mapping: 'medico.Imagen_publicacion'
            },{
                name: 'cedula_profesional',
                type: 'string',
                mapping: 'medico.cedula_profesional'
            },{
                name: 'universidad_de_egreso',
                type: 'string',
                mapping: 'medico.universidad_de_egreso'
            },{
                name: 'antecedentes_de_practica',
                type: 'string',
                mapping: 'medico.antecedentes_de_practica'
            },{
                name: 'resena_de_servicios',
                type: 'string',
                mapping: 'medico.resena_de_servicios'
            },{
                name: 'listado_de_servicios',
                type: 'string',
                mapping: 'medico.Listado_de_Servicios'
            },
            {
                name: 'orden',
                type: 'int',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.orden;
                }
            },
            {
                name: 'paquete_weight',
                type: 'int',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.paquete_weight;
                }
            },{
                name: 'distancia',
                type: 'string',
                mapping: 'medico.distancia'
            },
            {
                name: 'destacado',
                type: 'int',
                mapping: 'medico.consultorios',
                convert: function(consultorios){
                    return consultorios[0].consultorio.paquete_weight;
                }
            },
            {
                name: 'fotos',
                type: 'string',
                mapping: 'medico.fotos',
                convert: function(fotos){
                    var items = [];
                    Ext.Array.each(fotos, function (item, index, ItSelf) {
                        items.push(item);
                    });
                    return items;
                }
            }
        ]
    }
});
