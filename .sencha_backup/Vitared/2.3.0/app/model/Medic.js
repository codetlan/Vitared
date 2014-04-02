/**
 * @class Vitared.model.Medic
 * @extends Ext.data.Model
 * The model for the courses
 */
Ext.define('Vitared.model.Medic', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'specialist',
                type: 'string'
            },
            {
                name: 'ranking',
                type: 'integer'
            },
            {
                name: 'url',
                type: 'string'
            },
            {
                name: 'facebook',
                type: 'string'
            },
            {
                name: 'twitter',
                type: 'string'
            },
            {
                name: 'contact',
                type: 'object'
            }
        ]
    }
});
