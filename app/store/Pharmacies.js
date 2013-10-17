Ext.define('Vitared.store.Pharmacies', {
    extend: 'Ext.data.Store',
    requires:[
        'Vitared.model.Pharmacy',
        'Vitared.proxy.Drupal'],

    config:{
        model:'Vitared.model.Pharmacy',
        data : [
            {name: "San Pablo", ranking: 5},
            {name: "San Pablo", ranking: 4},
            {name: "Farmacias del Ahorro", ranking: 3},
            {name: "San Isidro", ranking: 2}
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