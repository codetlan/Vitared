Ext.define('Vitared.store.Medics', {
    extend: 'Ext.data.Store',
    requires: [
        'Vitared.model.Medic',
        'Vitared.proxy.Drupal'],

    config: {
        model: 'Vitared.model.Medic',
        data: [
            {
                name: "Dr. Arturo Ornelas",
                specialist: "Pedagogo",
                ranking: 5,
                url: 'www.codetlan.com',
                facebook: 'https://www.facebook.com/Codetlan',
                twitter: 'https://twitter.com/Codetlan',
                contact: [
                    {
                        type: 'Consultorio', address: 'Av. de las Americas #45'
                    },
                    {
                        type: 'Hospital Hidalgo', address: 'Av. Hidalgo #2630'
                    }
                ]
            },
            {
                name: "Dr. Dario Méndez",
                specialist: "Oftalmologo",
                ranking: 4,
                url: 'www.google.com',
                facebook: 'https://www.facebook.com/Waldiix',
                twitter: 'https://twitter.com/Waldiixx',
                contact: [
                    {
                        type: 'Consultorio', address: 'Av. de las Americas #45'
                    },
                    {
                        type: 'Hospital Hidalgo', address: 'Av. Hidalgo #2630'
                    }
                ]
            },
            {
                name: "Dra. Marisol Salazar",
                specialist: "Medico general",
                ranking: 3,
                url: 'www.hallist.com',
                facebook: 'https://www.facebook.com/WeAreHALLIST',
                twitter: 'https://twitter.com/hallist',
                contact: [
                    {
                        type: 'Consultorio', address: 'Av. de las Americas #45'
                    },
                    {
                        type: 'Hospital Hidalgo', address: 'Av. Hidalgo #2630'
                    }
                ]
            },
            {
                name: "Dr. Eduardo Flores",
                specialist: "Cardiologo",
                ranking: 2,
                url: 'www.google.com',
                facebook: 'https://www.facebook.com/Senchamx',
                twitter: 'https://twitter.com/sencha',
                contact: [
                    {
                        type: 'Consultorio', address: 'Av. de las Americas #45'
                    },
                    {
                        type: 'Hospital Hidalgo', address: 'Av. Hidalgo #2630'
                    }
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