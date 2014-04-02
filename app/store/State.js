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
            {name: "value",  type: "string"},
            {name: "estado",  type: "int"}
        ],
        data:[
            {text: 'Aguascalientes', value: 'Aguascalientes', estado: 1},
            {text: 'Baja California', value: 'Baja California', estado: 2},
            {text: 'Baja California Sur', value: 'Baja California Sur', estado: 3},
            {text: 'Campeche', value: 'Campeche', estado: 4},
            {text: 'Chiapas', value: 'Chiapas', estado: 5},
            {text: 'Chihuahua', value: 'Chihuahua', estado: 6},
            {text: 'Coahuila', value: 'Coahuila', estado: 7},
            {text: 'Colima', value: 'Colima', estado: 8},
            {text: 'Distrito Federal', value: 'Distrito Federal', estado: 9},
            {text: 'Durango', value: 'Durango', estado: 10},
            {text: 'Guanajuato', value: 'Guanajuato', estado: 11},
            {text: 'Guerrero', value: 'Guerrero', estado: 12},
            {text: 'Hidalgo', value: 'Hidalgo', estado: 13},
            {text: 'Jalisco', value: 'Jalisco', estado: 14},
            {text: 'Mexico', value: 'Mexico', estado: 15},
            {text: 'Michoacan', value: 'Michoacan', estado: 16},
            {text: 'Morelos', value: 'Morelos', estado: 17},
            {text: 'Nayarit', value: 'Nayarit', estado: 18},
            {text: 'Nuevo León', value: 'Nuevo León', estado: 19},
            {text: 'Oaxaca', value: 'Oaxaca', estado: 20},
            {text: 'Puebla', value: 'Puebla', estado: 21},
            {text: 'Queretaro', value: 'Queretaro', estado: 22},
            {text: 'Quintana Roo', value: 'Quintana Roo', estado: 23},
            {text: 'San Luis Potosi', value: 'San Luis Potosi', estado: 24},
            {text: 'Sinaloa', value: 'Sinaloa', estado: 25},
            {text: 'Sonora', value: 'Sonora', estado: 26},
            {text: 'Tabasco', value: 'Tabasco', estado: 27},
            {text: 'Tamaulipas', value: 'Tamaulipas', estado: 28},
            {text: 'Tlaxcala', value: 'Tlaxcala', estado: 29},
            {text: 'Veracruz', value: 'Veracruz', estado: 30},
            {text: 'Yucatan', value: 'Yucatan', estado: 31},
            {text: 'Zacatecas', value: 'Zacatecas', estado: 32}
        ],
        autoLoad: true
    }
});