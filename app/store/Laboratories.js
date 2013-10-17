Ext.define('Vitared.store.Laboratories', {
    extend: 'Ext.data.Store',
    requires:[
        'Vitared.model.Laboratory',
        'Vitared.proxy.Drupal'],

    config:{
        model:'Vitared.model.Laboratory',
        data : [
            {name: "Chopo Patriotismo", ranking: 5},
            {name: "Chopo Polanco", ranking: 4},
            {name: "Laboratorios Polanco", ranking: 3},
            {name: "Laboratorios Olarte", ranking: 2}
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