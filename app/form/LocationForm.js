
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
                itemId: 'state',
                store: 'State',
                defaultPhonePickerConfig:{
                    cancelButton: 'Cancelar',
                    doneButton: 'Aceptar'
                }
            },{
                xtype:'selectfield',
                name:'city',
                itemId: 'city',
                valueField: 'text',
                defaultPhonePickerConfig:{
                    cancelButton: 'Cancelar',
                    doneButton: 'Aceptar'
                }
            }]
        },{
            xtype:'fieldset',
            padding:5,
            margin:5,
            items:[{
                xtype:'button',
                text:'Aceptar',
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