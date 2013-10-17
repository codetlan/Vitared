Ext.define('Vitared.view.home.HomePanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.homepanel',

    requires: [
        'Vitared.view.home.NavigationHome',
        'Vitared.view.medics.MedicNavigation',
        'Vitared.view.hospitals.HospitalNavigation',
        'Vitared.view.pharmacies.PharmacyNavigation',
        'Vitared.view.laboratories.LaboratoryNavigation'],

    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Medicos',
                iconCls: 'user',
                layout: 'fit',
                items: [
                    {
                        xtype: 'medicnavigation'
                    }
                ]
            },
            {
                title: 'Hospitales',
                iconCls: 'home',
                layout: 'fit',
                items: [
                    {
                        xtype: 'hospitalnavigation'
                    }
                ]
            },
            {
                title: 'Farmacias',
                iconCls: 'favorites',
                layout: 'fit',
                items: [
                    {
                        xtype: 'pharmacynavigation'
                    }
                ]
            },
            {
                title: 'Laboratorios',
                iconCls: 'settings',
                layout: 'fit',
                items: [
                    {
                        xtype: 'laboratorynavigation'
                    }
                ]
            }
        ]
    }
});
