Ext.define('Vitared.store.Medics', {
    extend: 'Ext.data.Store',
    requires:[
        'Vitared.model.Medic',
        'Vitared.proxy.Drupal'],

    config:{
        model:'Vitared.model.Medic',
        data : [
            {name: "Dr. Arturo Ornelas",    specialist: "Pedagogo", ranking: 5},
            {name: "Dr. Dario Méndez", specialist: "Oftalmologo", ranking: 4},
            {name: "Dra. Marisol Salazar", specialist: "Medico general", ranking: 3},
            {name: "Dr. Eduardo Flores", specialist: "Cardiologo", ranking: 2}
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