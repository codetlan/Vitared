Ext.define('Vitared.view.pharmacies.PharmacyTpl', {
    extend: 'Ext.XTemplate',
    constructor: function () {
        var html;
        html = [
            '<img src="./resources/images/pharmacy.png" width="70" height="70" style="float: left; clear: left; margin: 0 20px 0 0">',
            '{name}<br><div style="font-size: 16px;"> a {ranking}00 mts</div>',
            '<tpl switch="ranking">',
            '<tpl case="0">',
            '<br>',
            '<tpl case="1">',
            '<img src="./resources/images/star.png">',
            '<tpl case="2">',
            '<img src="./resources/images/star.png"><img src="./resources/images/star.png">',
            '<tpl case="3">',
            '<img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png">',
            '<tpl case="4">',
            '<img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png">',
            '<tpl case="5">',
            '<img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png"><img src="./resources/images/star.png">',
            '</tpl>',
            '<div class="clear:both"></div>'];
        this.callParent(html);
    }
});
