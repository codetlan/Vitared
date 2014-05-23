/**
 * @class Vitared.view.home.AutoCompleteTpl
 * @extends Ext.XTemplate
 * Template for the results search
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.home.AutoCompleteTpl', {
    extend: 'Ext.XTemplate',
    constructor: function () {
        var html;
        html = [
            '<div>{palabra}</div>',
            '<div class="clear:both"></div>'];
        this.callParent(html);
    }
});
