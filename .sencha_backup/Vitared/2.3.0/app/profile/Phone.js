/**
 * @class Vitared.profile.Phone
 * @extends Ext.app.Profile
 * This is the phone profile
 * @oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'phone',
        namespace: 'phone',
        controllers: ['Main'],
        views: ['Main']
    },
    isActive: function(){
        return Ext.os.is.Phone;
    },
    launch: function(){
        Ext.create('Vitared.view.phone.Main');
    }
});