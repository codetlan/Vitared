Ext.define('Vitared.store.Hospitals', {
    extend: 'Ext.data.Store',
    requires:[
        'Vitared.model.Hospital',
        'Vitared.proxy.Drupal'],

    config:{
        model:'Vitared.model.Hospital',
        data : [
            {
                name: "Ángeles Pedregal",
                specialist: "Todas las especialidades",
                ranking: 5,
                horarios: 'Lunes a Domingo 24 Hrs.',
                address: 'Av. de las Américas 45, Int 201 Centro Zapopan, Jalisco CP 78635',
                telefonos: [
                    {1: '(333) 5623948'},
                    {2: '(333) 5622949'}
                ]
            },{
                name: "Médica Sur",
                specialist: "Todas las especialidades",
                ranking: 4,
                horarios: 'Lunes a Domingo 24 Hrs.',
                address: 'Benito Juarez 10, Int 301 Albert Mexico, Distrito Federal CP 93842',
                telefonos: [
                    {1: '(555) 5453268'},
                    {2: '(333) 5834234'}
                ]
            },{
                name: "Hospital Mocel",
                specialist: "Todas las especialidades",
                ranking: 3,
                horarios: 'Lunes a Domingo 24 Hrs.',
                address: 'Villa Panamericana 5, Int 300 San Andres Michoacan, Maravatio CP 93843',
                telefonos: [
                    {1: '(444) 3294023'},
                    {2: '(444) 9349231'}
                ]
            },{
                name: "Dentalia Patriotismo",
                specialist: "Clínica Dental",
                ranking: 2,
                horarios: 'Lunes a Domingo 24 Hrs.',
                address: 'Dr. Neva 20, Int 401 Doctores Mexico, Distrito Federal CP 95302',
                telefonos: [
                    {1: '(222) 3494034'},
                    {2: '(222) 9232431'}
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