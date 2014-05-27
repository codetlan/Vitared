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
        tabBar:{
            style: {
                //'background': '#064b88'
            }
        },
        items: [
            {
                title: 'Médicos',
                iconCls: 'fa fa-stethoscope boton-medico',
                layout: 'fit',
                items: [
                    {
                        xtype: 'medicnavigation'
                    }
                ]
            },
            {
                title: 'Proveedores',
                iconCls: 'fa fa-medkit boton-medico',
                layout: 'fit',
                items: [
                    {
                        xtype: 'hospitalnavigation'
                    }
                ]
            }
            /*{
                title: 'medicos',
                iconCls: 'medicos',
                layout: 'fit',
                items: [
                    {
                        xtype: 'medicnavigation'
                    }
                ]
            },
            {
                title: 'hospitales',
                iconCls: 'hospitales-not-active',
                layout: 'fit',
                items: [
                    {
                        xtype: 'hospitalnavigation'
                    }
                ]
            },
            {
                title: 'farmacias',
                iconCls: 'farmacias-not-active',
                layout: 'fit',
                items: [
                    {
                        xtype: 'pharmacynavigation'
                    }
                ]
            },
            {
                title: 'laboratorios',
                iconCls: 'laboratorios-not-active',
                layout: 'fit',
                items: [
                    {
                        xtype: 'laboratorynavigation'
                    }
                ]
            },
            {
                title: 'otros',
                iconCls: 'otros-not-active',
                layout: 'fit',
                items: [
                    {
                        xtype: 'othernavigation'
                    }
                ]
            }*/
        ]
    }
});
