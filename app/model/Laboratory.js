/**
 * @class Cursame.model.Assignment
 * @extends Ext.data.Model
 * The model for the courses
 */
Ext.define('Vitared.model.Laboratory', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'ranking',
                type: 'integer'
            }
        ]
    }
});