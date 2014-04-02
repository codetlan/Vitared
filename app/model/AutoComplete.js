/**
 * @class Vitared.model.AutoComplete
 * @extends Ext.data.Model
 * The model for the autocomplete search
 * @oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.model.AutoComplete', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'palabra',
                type: 'string'
            }
        ]
    }
});
