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
            homePanel: 'homepanel',
            medicDetails: 'medicdetails',
            detailsType: 'detailstype'
        },
        control: {
            'medicnavigation list': {
                tap: 'onItemMedic'
            },
            'hospitalnavigation list': {
                tap: 'onItemHospital'
            },
            'laboratorynavigation list': {
                tap: 'onItemLaboratory'
            },
            'pharmacynavigation list': {
                tap: 'onItemPharmacy'
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
            },
            'medicdetails':{
                show: 'onDetailContact'
            },
            'detailscontainer map':{
                maprender: 'onDetailMap'
            }
        }
    },

    /**
     * cuando la aplicación inicia
     */
    launch: function () {
        var store = Ext.getStore('Medics');

        //store.load();

        var geo = Ext.create('Ext.util.Geolocation', {
            autoUpdate: false,
            listeners: {
                locationupdate: function(geo) {
                    //alert('New latitude: ' + geo.getLatitude() + ' New Longitude: ' + geo.getLongitude());
                },
                locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                    if(bTimeout){
                        alert('Timeout occurred.');
                    } else {
                        alert('Error occurred.');
                    }
                }
            }
        });
        geo.updateLocation();
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

        //store.load();
    },

    onItemMedic: function (record, listItem, index, e) {
        var me = this,
            view = me.getMedicNavigation();

        view.push({
            xtype: 'medicdetails'
        });

        me.getMedicDetails().setData(record.getData());


    },

    onItemHospital: function (record, listItem, index, e) {
        var me = this,
            view = me.getHospitalNavigation();

        view.push({
            xtype: 'detailscontainer'
        });
        me.getDetailsType().setData(record.getData());
    },

    onItemPharmacy: function (record, listItem, index, e) {
        var me = this,
            view = me.getPharmacyNavigation();

        view.push({
            xtype: 'detailscontainer'
        });
        me.getDetailsType().setData(record.getData());
    },

    onItemLaboratory: function (record, listItem, index, e) {
        var me = this,
            view = me.getLaboratoryNavigation();

        view.push({
            xtype: 'detailscontainer'
        });
        me.getDetailsType().setData(record.getData());
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
    },

    onDetailContact: function(t, e){
        //console.log(t, e);
    },

    onDetailMap: function (t, map, e){
        setTimeout(function(){
            var marker = new google.maps.Marker({
                    title: 'Hospital',
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
    }

});