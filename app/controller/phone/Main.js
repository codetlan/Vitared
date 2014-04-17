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
            city: 'locationform #city',
            state: 'locationform #state'
        },
        control: {
            'medicnavigation list': {
                itemtap: 'onItemMedic'
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
            'othernavigation list': {
                itemtap: 'onItemOther'
            },
            'navigationhome': {
                pop: 'onNavigationHomePop'
            },
            'navigationhome #infoButton': {
                tap: 'onInfo'
            },
            'navigationhome #addLocation': {
                tap: 'showModalLocation'
            },
            'locationform #cancelarFormLocation': {
                tap: 'hideModalLocation'
            },
            'locationform #state': {
                change: 'onChangeState'
            },
            'locationform #guardarLocation': {
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
            store = Ext.getStore('Searchs');

        var geo = Ext.create('Ext.util.Geolocation', {
            autoUpdate: false,
            listeners: {
                locationupdate: function (geo) {
                    me.latitude = geo.getLatitude();
                    me.longitude = geo.getLongitude();

                    me.onLoadStores('Searchs', '', me.latitude + ',' + me.longitude);
                },
                locationerror: function (geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                    me.latitude = geo.getLatitude();
                    me.longitude = geo.getLongitude();
                    me.onLoadStores(store, '', me.latitude + ',' + me.longitude);
                }
            }
        });
        geo.updateLocation();

        var storeid = me.getHomePanel().getActiveItem().down('list').getStore().getStoreId(),
            store1 = Ext.getStore(storeid);


        store1.on('load', function (store, records, successful, operation, eOpts) {
            var map = me.getHomePanel().getActiveItem().down('container').down('markermap').getMap(),
                bounds = new google.maps.LatLngBounds();

            if (!Ext.isEmpty(records)) {
                Ext.Array.each(records, function (item, index, ItSelf) {
                    var latitud = item.get('latitud'),
                        longitud = item.get('longitud'), marker;

                    if (!Ext.isEmpty(latitud) && !Ext.isEmpty(longitud)) {
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(latitud, longitud),
                            map: map
                        });

                        me.markers.push(marker);

                        bounds.extend(marker.position);

                        var infoWindow = new google.maps.InfoWindow();

                        if (store1 == 'Searchs') {
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
            }
        });

    },

    onLoadStores: function (storeId, search, geo, tipo) {
        var me = this;

        Ext.getStore(storeId).setParams({});

        if (storeId != 'Searchs') {
            var store = Ext.getStore(storeId),
                store2 = Ext.getStore(storeId),
                ciudad = me.ciudad ? me.ciudad : '',
                params = {
                    field_tipo_de_proveedor: tipo,
                    search_api_views_fulltext: search,
                    field_geo: geo,
                    ciudad: me.ciudad
                },
                url = "https://www.vitared.com.mx/middleware/proveedor.php";
        } else {
            store = Ext.getStore('Searchs');
            //store2 = Ext.getStore(storeId);
            ciudad = me.ciudad ? me.ciudad : '';
                params = {
                search_api_views_fulltext: search,
                field_geo: geo,
                ciudad: me.ciudad
            };
            //url = "http://vitared.com.mx/app/consulta/medico/";
        }

        store.setParams(params);
        store.load({
            callback: function (records, operation) {
                var map = me.getHomePanel().getActiveItem().down('container').down('markermap').getMap(),
                    bounds = new google.maps.LatLngBounds(), marker;

                me.clearMap();

                if (!Ext.isEmpty(records)) {
                    Ext.Array.each(records, function (item, index, ItSelf) {
                        var latitud = item.get('latitud'),
                            longitud = item.get('longitud'), marker;

                        if (!Ext.isEmpty(latitud) && !Ext.isEmpty(longitud)) {
                            marker = new google.maps.Marker({
                                position: new google.maps.LatLng(latitud, longitud),
                                map: map
                            });

                            me.markers.push(marker);

                            bounds.extend(marker.position);

                            var infoWindow = new google.maps.InfoWindow();

                            if (storeId == 'Searchs') {
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

                    geocoder = new google.maps.Geocoder();

                    geocoder.geocode({'latLng': latlng}, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                marker = new google.maps.Marker({
                                    position: latlng,
                                    map: map
                                });
                                me.markers.push(marker);

                                bounds.extend(marker.position);

                                var infoWindow = new google.maps.InfoWindow();
                                infoWindow.setContent('No hay '+me.getHomePanel().getActiveItem().title+'...');
                                infoWindow.open(map, marker);

                                /*google.maps.event.addListener(marker, 'click', function () {
                                    infoWindow.setContent(results[0].formatted_address);
                                    infoWindow.open(map, marker);
                                });*/
                            }
                        } else {
                            me.getStoreLoad('');
                        }
                    });
                }
                map.fitBounds(bounds);
            }
        });
        store.data.sort('orden', 'ASC');
    },

    onActiveTab: function (t, value, oldValue, eOpts) {
        var me = this,
            store = value.down('navigationview').down('list').getStore().getStoreId(), search = '',
            geo = me.latitude + ',' + me.longitude, tipo,
            active = value.title,
            item = me.getHomePanel().getTabBar().getItems();

        if (me.searchList) {
            me.searchList.hide();
        }
        switch (store) {
            case 'Hospitals':
                tipo = 'Hospital';
                item.getAt(0).setIconCls('medicos-not-active');
                item.getAt(1).setIconCls('hospitales');
                item.getAt(2).setIconCls('farmacias-not-active');
                item.getAt(3).setIconCls('laboratorios-not-active');
                item.getAt(4).setIconCls('otros-not-active');
                break;
            case 'Pharmacies':
                tipo = "Farmacia";
                item.getAt(0).setIconCls('medicos-not-active');
                item.getAt(1).setIconCls('hospitales-not-active');
                item.getAt(2).setIconCls('farmacias');
                item.getAt(3).setIconCls('laboratorios-not-active');
                item.getAt(4).setIconCls('otros-not-active');
                break;
            case 'Laboratories':
                tipo = "Laboratorio";
                item.getAt(0).setIconCls('medicos-not-active');
                item.getAt(1).setIconCls('hospitales-not-active');
                item.getAt(2).setIconCls('farmacias-not-active');
                item.getAt(3).setIconCls('laboratorios');
                item.getAt(4).setIconCls('otros-not-active');
                break;
            case 'Others':
                tipo = "Otros";
                item.getAt(0).setIconCls('medicos-not-active');
                item.getAt(1).setIconCls('hospitales-not-active');
                item.getAt(2).setIconCls('farmacias-not-active');
                item.getAt(3).setIconCls('laboratorios-not-active');
                item.getAt(4).setIconCls('otros');
                break;
            default:
                item.getAt(0).setIconCls('medicos');
                item.getAt(1).setIconCls('hospitales-not-active');
                item.getAt(2).setIconCls('farmacias-not-active');
                item.getAt(3).setIconCls('laboratorios-not-active');
                item.getAt(4).setIconCls('otros-not-active');

        }
        Ext.getStore(store).resetCurrentPage();
        me.onLoadStores(store, search, geo, tipo);
    },

    onItemMedic: function (t, index, target, record, e, eOpts) {
        var me = this,
            view = me.getMedicNavigation(),
            nid = record.get('nid'),
            store = Ext.getStore('MedicsDetails');
        /*proxy = store.getProxy(),
         url = "http://vitared.com.mx:3001/busqueda/medicos/";*/

        view.push({
            xtype: 'medicdetails'
        });
        view.down('#addLocation').hide();
        me.getMedicDetails().setData(record.getData());

        /*proxy.setUrl(url + nid);
         store.load({
         callback: function (record, operation) {
         view.push({
         xtype: 'medicdetails'
         });
         view.down('#addLocation').hide();
         me.getMedicDetails().setData(record[0].getData());
         }
         });*/
    },

    onItemHospital: function (t, index, target, record, e, eOpts) {
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
            calle: record.get('calle'),
            colonia: record.get('localidad'),
            telefono: record.get('telefono'),
            horario: record.get('horario'),
            numero_telefono: record.get('numero_telefono')
        });
        map = view.down('locationmap').getMap();
        //me.onItemMap(map, name, latitud, longitud);
        me.trazarRuta(map, latitud, longitud);

    },

    onItemPharmacy: function (t, index, target, record, e, eOpts) {
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
            calle: record.get('calle'),
            colonia: record.get('localidad'),
            telefono: record.get('telefono'),
            horario: record.get('horario'),
            numero_telefono: record.get('numero_telefono')
        });
        map = view.down('locationmap').getMap();
        //me.onItemMap(map, name, latitud, longitud);
        me.trazarRuta(map, latitud, longitud);
    },

    onItemLaboratory: function (t, index, target, record, e, eOpts) {
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
            calle: record.get('calle'),
            colonia: record.get('localidad'),
            telefono: record.get('telefono'),
            horario: record.get('horario'),
            numero_telefono: record.get('numero_telefono')
        });
        map = view.down('locationmap').getMap();
        //me.onItemMap(map, name, latitud, longitud);
        me.trazarRuta(map, latitud, longitud);
    },

    onItemOther: function (t, index, target, record, e, eOpts) {
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
            calle: record.get('calle'),
            colonia: record.get('localidad'),
            telefono: record.get('telefono'),
            horario: record.get('horario'),
            numero_telefono: record.get('numero_telefono')
        });
        map = view.down('locationmap').getMap();
        //me.onItemMap(map, name, latitud, longitud);
        me.trazarRuta(map, latitud, longitud);
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

    onNavigationHomePop: function (navigation, view) {
        var me = this;

        navigation.down('#infoButton').show();
        if (navigation.getItems().getCount() == 2) {
            navigation.down('#addLocation').show();
        }

        var search = me.getSearchContainer().down('searchfield').getValue();

        //me.getStoreLoad(search);
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
            me.trazarRuta(map, data.consultorio[num_consultorio].Latitud, data.consultorio[num_consultorio].Longitud);
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
            searchActive = t,
            storeAuto, proxy,
            search = t.getValue(),
            url,
            view = me.getMedicNavigation();

        me.getHomePanel().getActiveItem().down('list').getStore().getStoreId() == 'Searchs' ? url = 'https://www.vitared.com.mx/middleware/medicos-autocomplete.php?' : url = 'http://vitared.com.mx:3001/hospitales/';

        if (!me.searchList) {
            me.searchList = Ext.Viewport.add({
                xtype: 'autocompletelist',
                layout: 'fit',
                width: (Ext.os.deviceType === 'Phone') ? 300 : 400,
                height: 200
            });
            me.searchList.showBy(searchActive);
        }

        storeAuto = Ext.getStore('AutoCompletes');
        proxy = storeAuto.getProxy();

        if (search != '') {
            if (e.event.keyCode == 13) {
                me.searchList.hide();
                /*proxy.setUrl(url + search);
                 storeAuto.load();*/
                view.pop();
                me.getHomePanel().getActiveItem().down('#searching').setValue(search);
                searchActive.setValue(search);
                me.getStoreLoad(search);
                me.clearMap();
            } else {
                me.searchList.showBy(searchActive);
                proxy.setUrl(url + search);
                storeAuto.load();
                var num_record = storeAuto.getAllCount();
                me.searchList.setHeight(num_record * 23);
                me.searchList.doRefresh();
            }
        } else {
            me.searchList.hide();
        }
    },

    onSearhAutoComplete: function (t, index, target, record, e, eOpts) {
        var me = this,
            searchActive = me.getHomePanel().getActiveItem().down('#searching'),
            search = record.get('palabra'),
            view = me.getMedicNavigation();

        me.searchList.hide();
        view.pop();
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

    showModalLocation: function () {
        var me = this;
        if (!me.locationForm) {
            me.locationForm = Ext.Viewport.add({
                xtype: 'panel',
                modal: true,
                width: (Ext.os.deviceType === 'Phone') ? 300 : 400,
                height: 200,
                layout: 'fit',
                items: {
                    xtype: 'locationform'
                }
            });
            me.getLocationForm().down('#state').fireEvent('change', me, me.getLocationForm().down('#state').getValue());
        } else {
            me.getLocationForm().down('#state').setValue(me.estado);
            me.getLocationForm().down('#city').setValue(me.ciudad);
        }
        me.locationForm.showBy(me.getHomePanel().getActiveItem().down('navigationview').down('#addLocation'));

    },

    hideModalLocation: function () {
        var me = this;
        me.locationForm.hide();
    },

    onChangeState: function (t, newValue, OldValue, e) {
        var me = this,
            city = Ext.getStore('City');

        city.clearFilter();

        var filter = new Ext.util.Filter({
            filterFn: function (item) {
                return item.get('value') == newValue;
            }
        });
        city.filter([filter]);
        me.getCity().setStore(city);
    },

    onSaveLocation: function () {
        var me = this;

        me.estado = me.getLocationForm().down('#state').getRecord().get('text');
        me.ciudad = me.getLocationForm().down('#city').getRecord().get('text');

        me.getLocationForm().reset();
        me.locationForm.hide();

        geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': me.estado + ', ' + me.ciudad}, function (results, status) {
            //si el estado de la llamado es OK
            if (status == google.maps.GeocoderStatus.OK) {
                me.latitude = results[0].geometry.location.lat();
                me.longitude = results[0].geometry.location.lng();
                me.getStoreLoad('');
            } else {
                me.getStoreLoad('');
            }
        });
    }

});