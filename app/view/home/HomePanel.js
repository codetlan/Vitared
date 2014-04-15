/**
 * @class Vitared.view.home.HomePanel
 * @extends Ext.tab.Panel
 * Home Vitared
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.home.HomePanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.homepanel',

    requires: [
        'Vitared.view.home.NavigationHome',
        'Vitared.view.medics.MedicNavigation',
        'Vitared.view.hospitals.HospitalNavigation',
        'Vitared.view.pharmacies.PharmacyNavigation',
        'Vitared.view.laboratories.LaboratoryNavigation',
        'Vitared.view.others.OtherNavigation'],

    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Medicos',
                iconCls: 'fa fa-stethoscope',
                layout: 'fit',
                items: [
                    {
                        xtype: 'medicnavigation'
                    }
                ]
            },
            {
                title: 'Hospitales',
                iconCls: 'fa fa-h-square',
                layout: 'fit',
                items: [
                    {
                        xtype: 'hospitalnavigation'
                    }
                ]
            },
            {
                title: 'Farmacias',
                iconCls: 'fa fa-medkit',
                layout: 'fit',
                items: [
                    {
                        xtype: 'pharmacynavigation'
                    }
                ]
            },
            {
                title: 'Laboratorios',
                iconCls: 'fa fa-flask',
                layout: 'fit',
                items: [
                    {
                        xtype: 'laboratorynavigation'
                    }
                ]
            },
            {
                title: 'Otros',
                iconCls: 'fa fa-hospital-o',
                layout: 'fit',
                items: [
                    {
                        xtype: 'othernavigation'
                    }
                ]
            }
        ]
    }
});
