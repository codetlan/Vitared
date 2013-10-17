Ext.define('Vitared.store.Hospitals', {
    extend: 'Ext.data.Store',
    requires:[
        'Vitared.model.Hospital',
        'Vitared.proxy.Drupal'],

    config:{
        model:'Vitared.model.Hospital',
        data : [
            {name: "Ángeles Pedregal",    specialist: "Todas las especialidades", ranking: 5},
            {name: "Médica Sur", specialist: "Todas las especialidades", ranking: 4},
            {name: "Hospital Mocel", specialist: "Todas las especialidades", ranking: 3},
            {name: "Dentalia Patriotismo", specialist: "Clínica Dental", ranking: 2}
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