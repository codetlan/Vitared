Ext.define('Vitared.view.LoginForm',{
   extend: 'Ext.form.Panel',
    xtype: 'loginform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Password'
    ],

    config: {
        items:[{
            xtype: 'fieldset',
            defaults: {
                required: true
            },
            items:[{
                xtype: 'emailfield',
                name: 'email',
                placeHolder: 'Email',
                clearIcon: true
            },{
                xtype: 'passwordfield',
                name: 'password',
                placeHolder: 'Password',
                clearIcon: true
            }]
        },{
            xtype: 'fieldset',
            items: [{
                xtype: 'button',
                text: 'Ingresar',
                ui: 'accept',
                scope: this,
                handler: function (btn) {
                    var form = btn.up('formpanel'),
                        obj = form.getValues();
                    form.setMasked({
                        xtype: 'loadmask',
                        message: 'Ingredsando...'
                    });
                    console.log(obj);
                    form.fireEvent("logeado", form);
                    /*Ext.Ajax.request({
                        url: 'http://dev-vitared.gotpantheon.com/api/user/login.json',
                        params: {
                            name: obj.email,
                            pass: obj.password
                        },
                        method :'POST',
                        success: function(response) {
                            console.log(response);
                        }
                    });*/
                }
            }]
        }]
    }
});