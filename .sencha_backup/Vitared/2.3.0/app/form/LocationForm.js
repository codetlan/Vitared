
Ext.define('Vitared.form.LocationForm',{
    extend:'Ext.form.Panel',
    xtype:'locationform',

    requires:[
        'Ext.field.Select',
        'Ext.form.FieldSet'
    ],

    config:{
        items:[{
            xtype:'fieldset',
            defaults:{
                required:true,
                clearIcon:true
            },
            items:[{
                xtype:'selectfield',
                name:'state',
                store: 'State',
                valueField: 'estado',
                itemId: 'state'
            },{
                xtype:'selectfield',
                name:'city',
                itemId: 'city',
                valueField: 'text'
            }]
        },{
            xtype:'fieldset',
            padding:5,
            margin:5,
            items:[{
                xtype:'button',
                text:'Guardar',
                itemId:'guardarLocation'
            }]
        },{
            xtype:'fieldset',
            padding:5,
            margin:5,
            items:[{
                xtype:'button',
                text:'Cancelar',
                itemId:'cancelarFormLocation'
            }]
        }]
    }
});