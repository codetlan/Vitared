Ext.define('Vitared.view.medics.MedicDetailsTpl', {
    extend: 'Vitared.view.home.SearchField',
    xtype: 'medicdetails',

    config: {
        scrollable: {
            direction: 'vertical'
        },
        data: [
            {
                name: "Dr. Arturo Ornelas", specialist: 'Pedagogo', ranking: 5, url: 'www.codetlan.com', facebook: 'https://www.facebook.com/Codetlan', twitter: 'https://twitter.com/Codetlan', contact: [
                {type: 'Consultorio', address: 'Av. de las Americas #45'},
                {type: 'Hospital Hidalgo', address: 'Av. Hidalgo #2630'}
            ]
            }
        ],
        tpl: '<tpl for=".">' +
            '<div style="margin: 0 0 120px 0px"><img src="./resources/images/user.png" width="150" height="150" style="float: left; clear: left; margin-top: 20px;">' +
            '<div style="margin-top: 20px; font-size: 20px; position: relative; top: 50px; left: 10px;">{name}<br>{specialist}<br>' +
            '<tpl switch="ranking">' +
            '<tpl case="0">' +
            '<br>' +
            '<tpl case="1">' +
            '<img src="./resources/images/star.png">' +
            '<tpl case="2">' +
            '<img src="./resources/images/star.png"><img src="./resources/images/star.png">' +
            '<tpl case="3">' +
            '<img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png">' +
            '<tpl case="4">' +
            '<img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png">' +
            '<tpl case="5">' +
            '<img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png"></div></div>' +
            '<HR width=90% height=40% align="center">' +
            '<div style="margin: 0 0 0 0px"><img src="./resources/images/web.png" width="70" height="70"><a href="{url}" style="font-size: 20px; position: relative; bottom: 30px; left: 10px;" target="_blank">{url}</a></div><br>' +
            '<div style="margin: 0 0 130px 0px;"><a href="www.codetlan.com"><img src="./resources/images/mail.png" width="40" height="40"></a>&nbsp;<img src="./resources/images/facebook.png" width="40" height="40">&nbsp;<img src="./resources/images/twitter.png" width="40" height="40">&nbsp;<img src="./resources/images/linkedin.png" width="40" height="40"></div>' +
            '</tpl><br>' +
            '<table style="margin: 0 0 10px 0px; border-radius: 5px 5px; -moz-border-radius: 10px;" border="1" cellspacing="10" cellpadding="10">' +
            '<tpl for="contact">' +
            '<tr style="border-radius: 5px 5px;"><td>{type}<br>{address}</td></tr>' +
            '</tpl>' +
            '</table><br>' +
            '</tpl>' +
            '<div class="clear:both"></div>'
    }
});
