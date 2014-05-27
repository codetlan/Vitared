/**
 * @class Vitared.store.Searchs
 * @extends Ext.data.Store
 * This is the store to handle the searchs
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.store.State', {
    extend: 'Ext.data.Store',
    config: {
        fields: [
            {name: "text", type: "string"},
            {name: "value",  type: "int"}
        ],
        data:[
            {text: 'Aguascalientes', value: 1},
            {text: 'Baja California', value: 2},
            {text: 'Baja California Sur', value: 3},
            {text: 'Campeche', value: 4},
            {text: 'Chiapas', value: 5},
            {text: 'Chihuahua', value: 6},
            {text: 'Coahuila', value: 7},
            {text: 'Colima', value: 8},
            {text: 'Distrito Federal', value: 9},
            {text: 'Durango', value: 10},
            {text: 'Guanajuato', value: 11},
            {text: 'Guerrero', value: 12},
            {text: 'Hidalgo', value: 13},
            {text: 'Jalisco', value: 14},
            {text: 'Michoacán', value: 15},
            {text: 'Morelos', value: 16},
            {text: 'México', value: 17},
            {text: 'Nayarit', value: 18},
            {text: 'Nuevo León', value: 19},
            {text: 'Oaxaca', value: 20},
            {text: 'Puebla', value: 21},
            {text: 'Querétaro', value: 22},
            {text: 'Quintana Roo', value: 23},
            {text: 'San Luis Potosí', value: 24},
            {text: 'Sinaloa', value: 25},
            {text: 'Sonora', value: 26},
            {text: 'Tabasco', value: 27},
            {text: 'Tamaulipas', value: 28},
            {text: 'Tlaxcala', value: 29},
            {text: 'Veracruz', value: 30},
            {text: 'Yucatán', value: 31},
            {text: 'Zacatecas', value: 32}
        ]
    }
});