Ext.define('Vitared.store.Laboratories', {
    extend: 'Ext.data.Store',
    requires:[
        'Vitared.model.Laboratory',
        'Vitared.proxy.Drupal'],

    config:{
        model:'Vitared.model.Laboratory',
        data : [
            {
                name: "Chopo Patriotismo",
                ranking: 5,
                horarios: 'Lunes a Domingo 24 Hrs.',
                address: 'Villa Panamericana 5, Int 300 San Andres Michoacan, Maravatio CP 93843',
                telefonos: [
                    {1: '(444) 3294023'},
                    {2: '(444) 9349231'}
                ]
            },
            {
                name: "Chopo Polanco",
                ranking: 4,
                horarios: 'Lunes a Domingo 24 Hrs.',
                address: 'Villa Panamericana 5, Int 300 San Andres Michoacan, Maravatio CP 93843',
                telefonos: [
                    {1: '(444) 3294023'},
                    {2: '(444) 9349231'}
                ]
            },
            {
                name: "Laboratorios Polanco",
                ranking: 3,
                horarios: 'Lunes a Domingo 24 Hrs.',
                address: 'Villa Panamericana 5, Int 300 San Andres Michoacan, Maravatio CP 93843',
                telefonos: [
                    {1: '(444) 3294023'},
                    {2: '(444) 9349231'}
                ]
            },
            {
                name: "Laboratorios Olarte",
                ranking: 2,
                horarios: 'Lunes a Domingo 24 Hrs.',
                address: 'Villa Panamericana 5, Int 300 San Andres Michoacan, Maravatio CP 93843',
                telefonos: [
                    {1: '(444) 3294023'},
                    {2: '(444) 9349231'}
                ]
            }
        ]
        /*proxy: {
         type: 'drupal',
         url: 'http://dev-vitared.gotpantheon.com/api/user.jsonp',
         reader: {
         type: 'json'
         }
         }*/
    }
});