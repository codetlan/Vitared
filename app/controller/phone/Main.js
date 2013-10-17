/**
 * @class Vitared.controller.phone.Main
 * @extends Vitared.controller.Main
 * Main controller of the phone version
 */
Ext.define('Vitared.controller.phone.Main', {
    extend: 'Vitared.controller.Main',

    config: {
        refs: {
            main: {
                selector: 'main'
            },
            navigationHome: 'navigationhome',
            medicNavigation: 'medicnavigation',
            hospitalNavigation: 'hospitalnavigation',
            laboratoryNavigation: 'laboratorynavigation',
            pharmacyNavigation: 'pharmacynavigation',
            home: 'main #cardcontainer',
            homePanel: 'homepanel'
        },
        control: {
            'loginform': {
                logeado: 'onUserLogin'
            },
            'medicnavigation list': {
                tap: 'onItemMedic'
            },
            'hospitalnavigation list': {
                itemtap: 'onItemHospital'
            },
            'laboratorynavigation list': {
                itemtap: 'onItemLaboratory'
            },
            'pharmacynavigation list': {
                itemtap: 'onItemPharmacy'
            },
            'navigationhome':{
                pop: 'onNavigationHomePop'
            },
            'navigationhome #mapButton': {
                tap: 'onMap'
            },
            'homepanel': {
                activeitemchange: 'onActiveTab'
            },
            'locationmap': {
                maprender: 'onMapRender'
            }
        }
    },

    /**
     * cuando la aplicación inicia
     */
    launch: function () {
        var store = Ext.getStore('Medics');

        store.load();
    },

    onUserLogin: function (argument) {
        var me = this;
        me.getHome().setActiveItem(1);
    },

    onActiveTab: function (t, value, oldValue, eOpts) {
        var store;

        switch (value.title) {
            case 'Medicos':
                store = Ext.getStore('Medics');
                break;
            case 'Hospitales':
                store = Ext.getStore('Hospitals');
                break;
            case 'Farmacias':
                store = Ext.getStore('Pharmacies');
                break;
            case 'Laboratorios':
                store = Ext.getStore('Laboratories');
                break;
        }

        store.load();
    },

    onItemMedic: function () {
        var me = this,
            view = me.getNavigationHome();

        view.push({
            xtype: 'medicdetails'
        });
    },

    onItemHospital: function () {
        var me = this,
            view = me.getHospitalNavigation();

        view.push({
            title: 'Hospital',
            html: 'Second view!'
        });
    },

    onItemPharmacy: function () {
        var me = this,
            view = me.getPharmacyNavigation();

        view.push({
            title: 'Farmacia',
            html: 'Second view!'
        });
    },

    onItemLaboratory: function () {
        var me = this,
            view = me.getLaboratoryNavigation();

        view.push({
            title: 'Laboratorios',
            html: 'Second view!'
        });

    },

    onMap: function (btn, e, o) {
        var me = this,
            view = me.getNavigationHome();

        btn.up('navigationhome').push({
            xtype: 'locationmap'
        });
        btn.hide();
    },

    onMapRender: function (t, map, e) {
        setTimeout(function(){
            var marker = new google.maps.Marker({
                    title: 'Estoy aqui',
                    position: map.center,
                    map: map
                }),

            infoWindow = new google.maps.InfoWindow({
                content: marker.title,
                maxWidth: 300
            });

            infoWindow.open(map, marker);

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
        }, 800);
    },

    onNavigationHomePop: function(navigation){
        navigation.down('#mapButton').show();
    }

});