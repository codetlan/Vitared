Ext.define('Vitared.view.shared.DetailsType', {
    extend: 'Ext.Container',
    xtype: 'detailstype',
    config: {
        tpl: Ext.create('Vitared.view.shared.DetailsTpl')
        /*data: [
            {
                name: "Ángeles Pedregal",
                specialist: "Todas las especialidades",
                ranking: 5,
                horario: 'Lunes a Domingo 24 Hrs.',
                address: 'Av. de las Américas 45, Int 201 Centro Zapopan, Jalisco CP 78635',
                telefonos: [
                    {1: '(333) 5623948'},
                    {2: '(333) 5622949'}
                ]
            }
        ]*/
    }
});