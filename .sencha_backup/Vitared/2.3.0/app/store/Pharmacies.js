Ext.define('Vitared.store.Pharmacies', {
    extend: 'Ext.data.Store',
    requires:[
        'Vitared.model.Pharmacy',
        'Vitared.proxy.Drupal'],

    config:{
        model:'Vitared.model.Pharmacy',
        data : [
            {
                name: "San Pablo",
                ranking: 5,
                horarios: 'Lunes a Domingo 24 Hrs.',
                address: 'Villa Panamericana 5, Int 300 San Andres Michoacan, Maravatio CP 93843',
                telefonos: [
                    {1: '(444) 3294023'},
                    {2: '(444) 9349231'}
                ]
            },
            {
                name: "San Pablo",
                ranking: 4,
                horarios: 'Lunes a Domingo 24 Hrs.',
                address: 'Villa Panamericana 5, Int 300 San Andres Michoacan, Maravatio CP 93843',
                telefonos: [
                    {1: '(444) 3294023'},
                    {2: '(444) 9349231'}
                ]
            },
            {
                name: "Farmacias del Ahorro",
                ranking: 3,
                horarios: 'Lunes a Domingo 24 Hrs.',
                address: 'Villa Panamericana 5, Int 300 San Andres Michoacan, Maravatio CP 93843',
                telefonos: [
                    {1: '(444) 3294023'},
                    {2: '(444) 9349231'}
                ]
            },
            {
                name: "San Isidro",
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