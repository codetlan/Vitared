/**
 * @class Vitared.view.pharmacies.PharmacyNavigation
 * @extends Vitared.view.home.NavigationHome
 * View of the pharmacy navigation
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.pharmacies.PharmacyNavigation', {
    extend: 'Vitared.view.home.NavigationHome',
    xtype: 'pharmacynavigation',

    requires: [
        'Ext.List',
        'Vitared.view.pharmacies.PharmacyTpl',
        'Vitared.view.shared.DetailsContainer'
    ],

    initialize: function () {
        var me = this;

        me.down('container').add([
            {
                xtype: 'markermap',
                flex: 3
            },
            {
                xtype: 'list',
                itemTpl: Ext.create('Vitared.view.pharmacies.PharmacyTpl'),
                flex: 3,
                store: 'Pharmacies',
                masked: {
                    xtype: 'loadmask',
                    message: 'Cargando...'
                },
                loadingText: 'Cargando...',
                emptyText: 'No hay Farmacias ...',
                scope: this/*,
                onItemDisclosure: function (record, listItem, index, e) {
                    this.fireEvent("tap", record, listItem, index, e);
                }*/
            },
            {
                xtype: 'container',
                html: "<a href='http://vitared.com.mx/ad/www/delivery/ck.php?n=ae9b3dbd&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='http://vitared.com.mx/ad/www/delivery/avw.php?zoneid=8&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=ae9b3dbd' border='0' alt='' style='width: 100%; height: 50px;' /></a>",
                height: 50,
                listeners:{
                    show:function(){
                        var m3_u = (location.protocol=='https:'?'https://vitared.com.mx/ad/www/delivery/ajs.php':'http://vitared.com.mx/ad/www/delivery/ajs.php');
                        var m3_r = Math.floor(Math.random()*99999999999);
                        if (!document.MAX_used) document.MAX_used = ',';
                        document.write ("<scr"+"ipt type='text/javascript' src='"+m3_u);
                        document.write ("?zoneid=8");
                        document.write ('&amp;cb=' + m3_r);
                        if (document.MAX_used != ',') document.write ("&amp;exclude=" + document.MAX_used);
                        document.write (document.charset ? '&amp;charset='+document.charset : (document.characterSet ? '&amp;charset='+document.characterSet : ''));
                        document.write ("&amp;loc=" + escape(window.location));
                        if (document.referrer) document.write ("&amp;referer=" + escape(document.referrer));
                        if (document.context) document.write ("&context=" + escape(document.context));
                        if (document.mmm_fo) document.write ("&amp;mmm_fo=1");
                        document.write ("'><\/scr"+"ipt>");

                    }
                }
            }
        ]);

        me.callParent();
    }
});
