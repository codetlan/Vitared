/**
 * @class Vitared.model.Search
 * @extends Ext.data.Model
 * The model for the searchs
 * @oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.model.Search', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'nid',
                type: 'string',
                mapping: 'node.nid'
            }
        ]
    }
});
