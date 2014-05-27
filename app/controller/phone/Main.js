/**
 * @class Vitared.controller.phone.Main
 * @extends Vitared.controller.Main
 * Main controller of the phone version
 * @oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.controller.phone.Main', {
    extend: 'Vitared.controller.Main',

    latitude: undefined, //latitude for the localization Map
    longitude: undefined, //longitude for the localization Map
    title: undefined,
    searchList: undefined,
    markers: [], // Array Markers Map
    locationForm: undefined,
    estado: undefined,
    ciudad: undefined,

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
            otherNavigation: 'othernavigation',
            home: 'main #cardcontainer',
            homePanel: 'homepanel',
            medicDetails: 'medicdetails',
            detailsType: 'detailstype',
            detailsContainer: 'detailscontainer',
            locationMap: 'locationmap',
            searchContainer: 'searchcontainer',
            detailsTpl: 'detailstpl',
            addLocation: 'navigationhome #addLocation',
            locationForm: 'locationform',
            city: 'locationform #city'
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
            'othernavigation list': {
                tap: 'onItemOther'
            },
            'navigationhome': {
                pop: 'onNavigationHomePop'
            },
            'navigationhome #infoButton': {
                tap: 'onInfo'
            },
            'navigationhome #addLocation':{
                tap: 'showModalLocation'
            },
            'locationform #cancelarFormLocation':{
                tap: 'hideModalLocation'
            },
            'locationform #state':{
                change: 'onChangeState'
            },
            'locationform #guardarLocation':{
                tap: 'onSaveLocation'
            },
            'homepanel': {
                activeitemchange: 'onActiveTab'
            },
            'detailscontainer button[action=routeMap]': {
                tap: 'onRouteMap'
            },
            'searchcontainer searchfield': {
                keyup: 'onSearch',
                focus: 'onSearch',
                clearicontap: 'onDeleteSearch'
            },
            'searchcontainer': {
                tap: 'onDetailContact'
            },
            'autocompletelist': {
                itemtap: 'onSearhAutoComplete'
            }
        }
    },

    /**
     * cuando la aplicación inicia
     */
    launch: function () {
        var me = this,
            store = Ext.getStore('Medics');

        var geo = Ext.create('Ext.util.Geolocation', {
            autoUpdate: false,
            listeners: {
                locationupdate: function (geo) {
                    me.latitude = geo.getLatitude();
                    me.longitude = geo.getLongitude();

                    me.onLoadStores('Medics', '', me.latitude + ',' + me.longitude);
                },
                locationerror: function (geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                    me.latitude = geo.getLatitude();
                    me.longitude = geo.getLongitude();
                    me.onLoadStores(store, '', me.latitude + ',' + me.longitude);
                }
            }
        });
        geo.updateLocation();
    },

    onLoadStores: function (storeId, search, geo, tipo) {
        var me = this;
        if (storeId != 'Medics') {
            var store = Ext.getStore('Suppliers'),
                store2 = Ext.getStore(storeId),
                params = {
                    field_tipo_de_proveedor: tipo,
                    search_api_views_fulltext: search,
                    field_geo: geo
                },
                url = "http://vitared.com.mx/app/consulta/proveedor/";
        } else {
            store = Ext.getStore('Searchs');
            store2 = Ext.getStore(storeId);
            params = {
                search_api_views_fulltext: search,
                field_geo: geo
            };
            url = "http://vitared.com.mx/app/consulta/medico/";
        }

        var nids = [],
            proxy = store2.getProxy();

        store.load({
            params: params,
            callback: function (records, operation) {
                Ext.Array.each(records, function (item, index, ItSelf) {
                    nids.push(item.get('nid'));
                });

                params = nids.join(",");
                params = params != '' ? params : '0';
                proxy.setUrl(url + params);
                store2.load({
                    callback: function (records, operation) {
                        var map = me.getHomePanel().getActiveItem().down('container').down('markermap').getMap(),
                            bounds = new google.maps.LatLngBounds(), marker;

                        me.clearMap();

                        if(!Ext.isEmpty(records)){
                            Ext.Array.each(records, function (item, index, ItSelf) {
                                var latitud = item.get('latitud'),
                                    longitud = item.get('longitud');

                                if(!Ext.isEmpty(latitud) && !Ext.isEmpty(longitud)) {
                                    marker = new google.maps.Marker({
                                        position: new google.maps.LatLng(latitud, longitud),
                                        map: map
                                    });

                                    me.markers.push(marker);

                                    bounds.extend(marker.position);

                                    var infoWindow = new google.maps.InfoWindow();

                                    if (storeId == 'Medics') {
                                        var name = 'Dr. ' + item.get('name') + ' ' + item.get('first_name') + ' ' + item.get('last_name');
                                    } else {
                                        name = item.get('name');
                                    }

                                    google.maps.event.addListener(marker, 'click', function () {
                                        infoWindow.setContent(name);
                                        infoWindow.open(map, marker);
                                    });
                                }
                            });
                        } else {
                            var latlng = new google.maps.LatLng(me.latitude, me.longitude);

                            geocoder.geocode({'latLng': latlng}, function(results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if (results[0]) {
                                        marker = new google.maps.Marker({
                                            position: latlng,
                                            map: map
                                        });
                                        var infoWindow = new google.maps.InfoWindow();
                                        infoWindow.setContent(results[0].formatted_address);
                                        infoWindow.open(map, marker);

                                        google.maps.event.addListener(marker, 'click', function () {
                                            infoWindow.setContent(results[0].formatted_address);
                                            infoWindow.open(map, marker);
                                        });
                                    }
                                } else {
                                    alert("No podemos encontrar la direcci&oacute;n, error: " + status);
                                }
                            });
                        }
                        map.fitBounds(bounds);
                    }
                });
            }
        });
    },

    onActiveTab: function (t, value, oldValue, eOpts) {
        var me = this,
            store = value.down('navigationview').down('list').getStore().getStoreId(), search = '',
            geo = me.latitude + ',' + me.longitude, tipo;

        if (me.searchList) {
            me.searchList.hide();
        }
        switch (store) {
            case 'Hospitals':
                tipo = 'Hospital';
                break;
            case 'Pharmacies':
                tipo = "Farmacia";
                break;
            case 'Laboratories':
                tipo = "Laboratorio";
                break;
            case 'Others':
                tipo = "Otros";
                break;
        }
        Ext.getStore(store).resetCurrentPage();
        me.onLoadStores(store, search, geo, tipo);
    },

    onItemMedic: function (record, listItem, index, e) {
        var me = this,
            view = me.getMedicNavigation(),
            nid = record.get('nid'),
            store = Ext.getStore('MedicsDetails'),
            proxy = store.getProxy(),
            url = "http://vitared.com.mx:3001/busqueda/medicos/";

        proxy.setUrl(url + nid);
        store.load({
            callback: function (record, operation) {
                view.push({
                    xtype: 'medicdetails'
                });
                view.down('#addLocation').hide();
                me.getMedicDetails().setData(record[0].getData());
            }
        });
    },

    onItemHospital: function (record, listItem, index, e) {
        var me = this, map,
            view = me.getHospitalNavigation(),
            latitud = record.get('latitud'),
            longitud = record.get('longitud'),
            name = record.get('name');

        view.push({
            xtype: 'detailscontainer',
            traceRoute: true
        });
        view.down('#addLocation').hide();
        view.down('detailstype').setData({
            name: name,
            calle: record.get('direcciones'),
            colonia: record.get('colonia'),
            telefono: record.get('telefono'),
            numero_telefono: record.get('numero_telefono')
        });
        map = view.down('locationmap').getMap();
        //me.onItemMap(map, name, latitud, longitud);
        me.trazarRuta(map,  latitud, longitud);

    },

    onItemPharmacy: function (record, listItem, index, e) {
        var me = this, map,
            view = me.getPharmacyNavigation(),
            latitud = record.get('latitud'),
            longitud = record.get('longitud'),
            name = record.get('name');

        view.push({
            xtype: 'detailscontainer',
            traceRoute: true
        });
        view.down('#addLocation').hide();
        view.down('detailstype').setData({
            name: name,
            calle: record.get('direcciones'),
            colonia: record.get('localidad'),
            telefono: record.get('telefono'),
            numero_telefono: record.get('numero_telefono')
        });
        map = view.down('locationmap').getMap();
        //me.onItemMap(map, name, latitud, longitud);
        me.trazarRuta(map,  latitud, longitud);
    },

    onItemLaboratory: function (record, listItem, index, e) {
        var me = this, map,
            view = me.getLaboratoryNavigation(),
            latitud = record.get('latitud'),
            longitud = record.get('longitud'),
            name = record.get('name');

        view.push({
            xtype: 'detailscontainer',
            traceRoute: true
        });
        view.down('#addLocation').hide();
        view.down('detailstype').setData({
            name: name,
            calle: record.get('direcciones'),
            colonia: record.get('colonia'),
            telefono: record.get('telefono'),
            numero_telefono: record.get('numero_telefono')
        });
        map = view.down('locationmap').getMap();
        //me.onItemMap(map, name, latitud, longitud);
        me.trazarRuta(map,  latitud, longitud);
    },

    onItemOther: function (record, listItem, index, e) {
        var me = this, map,
            view = me.getOtherNavigation(),
            latitud = record.get('latitud'),
            longitud = record.get('longitud'),
            name = record.get('name');

        view.push({
            xtype: 'detailscontainer',
            traceRoute: true
        });
        view.down('#addLocation').hide();
        view.down('detailstype').setData({
            name: name,
            calle: record.get('direcciones'),
            colonia: record.get('colonia'),
            telefono: record.get('telefono'),
            numero_telefono: record.get('numero_telefono')
        });
        map = view.down('locationmap').getMap();
        //me.onItemMap(map, name, latitud, longitud);
        me.trazarRuta(map,  latitud, longitud);
    },

    onItemMap: function (map, name, latitud, longitud) {
        var me = this;
        setTimeout(function () {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(latitud, longitud),
                map: map
            });

            var infoWindow = new google.maps.InfoWindow();

            map.setCenter(marker.getPosition());
            map.setZoom(18);

            infoWindow.setContent(name);
            infoWindow.open(map, marker);

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent(name);
                infoWindow.open(map, marker);
            });

        }, 450);
    },

    onInfo: function (btn, e, o) {
        var me = this;

        btn.up('navigationhome').down('#addLocation').hide();
        btn.up('navigationhome').push({
            xtype: 'container',
            html: '<div class="container">' +
                '<div class="botones-ubicacion">' +
                '<div class="llegar left info" style="width: 100%;">' +
                '<a href="https://www.membresiavitamedica.com.mx" target="_blank">Membresía Vitamédica</a>' +
                '</div>' +
                '</div>' +
                '<p>&nbsp; </p>' +
                '<div class="botones-ubicacion">' +
                '<div class="llamar left" style="width: 100%;">' +
                '<a href="https://www.vitared.com.mx/privacidad" target="_blank">Aviso de privacidad</a>' +
                '</div>' +
                '</div>' +
                '<p>&nbsp; </p>' +
                '<div class="botones-ubicacion">' +
                '<div class="llegar left info" style="width: 100%;">' +
                '<a href="https://www.vitared.com.mx/uso" target="_blank">Condiciones de uso</a>' +
                '</div>' +
                '</div>' +
                '</div>'
        });
        btn.hide();
    },

    trazarRuta: function (map, lat, lng) {
        var me = this;

        me.directionsService = new google.maps.DirectionsService();
        me.directionsDisplay = new google.maps.DirectionsRenderer();

        me.directionsDisplay.setMap(map);

        var origin = new google.maps.LatLng(me.latitude, me.longitude);
        var destination = new google.maps.LatLng(lat, lng);

        var request = {
            origin: origin,
            destination: destination,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };

        me.directionsService.route(request, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                me.directionsDisplay.setMap(map);
                me.directionsDisplay.setDirections(result);
            }
        });

    },

    onNavigationHomePop: function (navigation) {
        var me = this;
        navigation.down('#infoButton').show();
        navigation.down('#addLocation').show();

        me.getStoreLoad('');
    },

    onDetailContact: function (t, e, f, g, h) {
        var me = this, map, data, name, num_consultorio,
            view = me.getMedicNavigation();

        if (t[0].getTarget('div.mas-boton')) {
            num_consultorio = t[0].target.parentNode.parentNode.children[1].textContent;
            view.push({
                xtype: 'detailscontainer',
                traceRoute: true
            });
            data = me.getMedicDetails().getData();
            me.getDetailsType().setData({
                name: data.name,
                first_name: data.first_name,
                last_name: data.last_name,
                calle: data.consultorio[num_consultorio].calle,
                colonia: data.consultorio[num_consultorio].colonia,
                horario: data.consultorio[num_consultorio].Horarios,
                telefono: data.consultorio[num_consultorio].telefono,
                numero_telefono: data.consultorio[num_consultorio].numero_telefono
            });
            map = view.down('locationmap').getMap();
            //me.onItemMap(map, name, data.consultorio[num_consultorio].Latitud, data.consultorio[num_consultorio].Longitud);
            me.trazarRuta(map,  data.consultorio[num_consultorio].Latitud, data.consultorio[num_consultorio].Longitud);
        }
    },

    onRouteMap: function (t, e, eOpts) {
        var me = this, map,
            view = t.up('navigationview'),
            detailsContainer = t.up('detailscontainer'),
            data = detailsContainer.down('detailstype').getData(),
            latitud = data.Latitud,
            longitud = data.Longitud;

        me.getDetailsContainer().traceRoute = true;
        view.push({
            xtype: 'locationmap'
        });

        map = view.down('locationmap').getMap();
        me.trazarRuta(map, latitud, longitud);
    },

    onSearch: function (t, e, eOpts) {
        var me = this,
            searchActive = me.getHomePanel().getActiveItem().down('#searching'),
            storeAuto, proxy,
            search = t.getValue(),
            url;

        me.getHomePanel().getActiveItem().down('list').getStore().getStoreId() == 'Medics' ? url = 'http://vitared.com.mx:3001/medicos/' : url = 'http://vitared.com.mx:3001/hospitales/';

        if (!me.searchList) {
            me.searchList = Ext.Viewport.add({
                xtype: 'autocompletelist',
                layout: 'fit',
                width: (Ext.os.deviceType === 'Phone') ? 300 : 400,
                height: 300
            });
            me.searchList.showBy(searchActive);
        }

        storeAuto = Ext.getStore('AutoCompletes');
        proxy = storeAuto.getProxy();
        if (search != '') {
            me.searchList.showBy(searchActive);
            proxy.setUrl(url + search);
            storeAuto.load();
        } else {
            me.searchList.hide();
        }
    },

    onSearhAutoComplete: function (t, index, target, record, e, eOpts) {
        var me = this,
            searchActive = me.getHomePanel().getActiveItem().down('#searching'),
            search = record.get('palabra');

        me.searchList.hide();
        searchActive.setValue(search);
        me.getStoreLoad(search);
        me.clearMap();
    },

    onDeleteSearch: function (t, e, eOpts) {
        var me = this,
            search = '';

        me.searchList.hide();
        t.setValue('');
        me.getStoreLoad(search);
        me.clearMap();
    },

    getStoreLoad: function (search) {
        var me = this, tipo,
            geo = me.latitude + ',' + me.longitude,
            storeLoad = me.getHomePanel().getActiveItem().down('list').getStore().getStoreId();

        switch (storeLoad) {
            case 'Hospitals':
                tipo = 'Hospital';
                break;
            case 'Pharmacies':
                tipo = 'Farmacia';
                break;
            case 'Laboratories':
                tipo = 'Laboratorio';
                break;
            case 'Others':
                tipo = 'Otros';
                break;
        }
        Ext.getStore(storeLoad).resetCurrentPage();
        me.onLoadStores(storeLoad, search, geo, tipo);
    },

    clearMap: function () {
        var me = this;
        for (i = 0; i < me.markers.length; i++) {
            me.markers[i].setMap(null);
        }
    },

    showModalLocation:function() {
        var me = this;
        if(!me.locationForm){
            me.locationForm = Ext.Viewport.add({
                xtype:'panel',
                modal:true,
                width:(Ext.os.deviceType === 'Phone') ? 300:400,
                height:200,
                layout:'fit',
                items:{
                    xtype:'locationform'
                }
            });
        } else {
            me.getLocationForm().down('#state').setValue(me.estado);
            me.getLocationForm().down('#city').setValue(me.ciudad);
        }
        me.locationForm.showBy(me.getHomePanel().getActiveItem().down('navigationview').down('#addLocation'));
    },

    hideModalLocation:function() {
        var me = this;
        me.locationForm.hide();
    },

    onChangeState: function(t, newValue, OldValue, e){
        var me = this,
            city = Ext.getStore('City');

        city.clearFilter();
        city.filter("estado", newValue);
        city.load();
        me.getCity().setStore(city);
    },

    onSaveLocation: function(){
        var me = this;

        me.estado = me.getLocationForm().down('#state').getRecord().get('text');
        me.ciudad = me.getLocationForm().down('#city').getRecord().get('text');

        me.getLocationForm().reset();
        me.locationForm.hide();

        geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': me.estado +', '+ me.ciudad}, function(results, status) {
          //si el estado de la llamado es OK
          if (status == google.maps.GeocoderStatus.OK) {
            me.latitude = results[0].geometry.location.lat();
            me.longitude = results[0].geometry.location.lng();
            me.getStoreLoad('');
          } else {
            //si no es OK devuelvo error
            alert("No podemos encontrar la direcci&oacute;n, error: " + status);
          }
         });
    }

});