/**
 * @class Vitared.view.medics.MedicTpl
 * @extends Ext.XTemplate
 * Template for displaying details of medics
 * @author oswaldo@codetlan.com
 * @codetlan
 */
Ext.define('Vitared.view.medics.MedicDetailsTpl', {
    extend: 'Vitared.view.home.SearchField',
    xtype: 'medicdetails',

    config: {
        scrollable: {
            direction: 'vertical'
        },
        /*showAnimation: Ext.os.is.Android ? true : {
            type: 'slide',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: Ext.os.is.Android ? true : {
            type: 'slideOut',
            duration: 250,
            easing: 'ease-out'
        },*/
        style: 'background: #f2f2f2',
        tpl: ['<tpl for=".">' +
            '<div class="container">' +
            '<div class="header">' +
            '<div class="left user-image">' +
            '<img src="{foto}" alt="">' +
            '<tpl if="this.validatePromociones(promociones) == true">' +
            '<div class="promo">' +
            '<img class="left estrella" src="resources/images/promo-especial.png" alt="">' +
            '</div><!-- promo -->' +
            '</tpl>' +
            '</div><!-- left -->' +
            '<div class="right user-data">' +
            '<h1>{name} {first_name} {last_name}</h1>' +
            '<h2>{especialidad}</h2>' +
            '<h2>{localidad}</h2>' +
            '<h5>Atiende en {num_consul}</h5>' +
            '<img src="resources/images/membresia.png" alt="" class="membresia">' +
            '<img src="resources/images/vita.png" alt="" class="vita">' +
            '</div><!-- left -->' +
            '</div><!-- header -->' +
            '<tpl if="this.validatePromociones(promociones) == true">' +
            '<div class="datos">' +
            '<div class="dato redes">' +
            '<p>{promociones}</p>'+
            '</div>' +
            '</div>' +
            '</tpl>' +
            '<h6>INFO</h6>' +
            '<div class="datos">' +
            '<div class="dato redes">' +
            '<tpl if="this.validateWeb(web) == true">' +
            '<p><a href="{web}" target="_blank">{web}</a></p>' +
            '</tpl>' +
            '<tpl if="this.validateMail(email) == true">' +
            '<p><a href="mailto:{email}">{email}</a></p>' +
            '</tpl>' +
            '<ul>' +
            '<tpl if="this.validateTwitter(twitter) == true">' +
            '<li>' +
            '<a href="{twitter}" target="_blank"><img src="resources/images/twitter.png" width="100%" height="100%" alt="{twitter}"></a>' +
            '</li>' +
            '</tpl>' +
            '<tpl if="this.validateFacebook(facebook) == true">' +
            '<li>' +
            '<a href="{facebook}" target="_blank"><img src="resources/images/facebook.png" alt="{facebook}"></a>' +
            '</li>' +
            '</tpl>' +
            '</ul>' +
            '</div><!-- dato -->' +
            '</div><!-- datos -->' +
            '<div class="lista">' +
            '<h6>Consultorios</h6>' +
            '<ul>' +
            '<tpl for="consultorio">' +
            '<li>' +
            '<p class="titulo">Consultorio propio</p>' +
            '<p class="numeracion" style="display: none">{[xindex - 1]}</p>' +
            '<p>{calle}</p>' +
            '<p>Colonia {colonia}</p>' +
            '<p>{municipio}</p>' +
            '<p>{Horarios}</p>' +
            '<p>Llamar Directo: <a class="negra" href="tel:{numero_telefono}">{telefono}</a></p>' +
            '<div class="mas-boton">' +
            '<img src="resources/images/mas-boton.png" alt="">' +
            '</div>' +
            '</li>' +
            '</tpl>' +
            '</ul>' +
            '</div><!-- lista -->' +
            '<tpl if="this.validateCedula(cedula_profesional) == true">' +
            '<h6>Cedula Profesional</h6>' +
            '<div class="datos">' +
            '<div class="dato redes">' +
            '<p>{cedula_profesional}</p>' +
            '</div>' +
            '</div>' +
            '</tpl>' +
            '<tpl if="this.validateUniversidad(universidad_de_egreso) == true">' +
            '<h6>Universidad de Ingreso</h6>' +
            '<div class="datos">' +
            '<div class="dato redes">' +
            '<p>{universidad_de_egreso}</p>' +
            '</div>' +
            '</div>' +
            '</tpl>' +
            '<tpl if="this.validatePractica(antecedentes_de_practica) == true">' +
            '<h6>Antecedentes de Practica</h6>' +
            '<div class="datos">' +
            '<div class="dato redes">' +
            '<p>{antecedentes_de_practica}</p>' +
            '</div>' +
            '</div>' +
            '</tpl>' +
            '<tpl if="this.validateResena(resena_de_servicios) == true">' +
            '<h6>Resena de servicios</h6>' +
            '<div class="datos">' +
            '<div class="dato redes">' +
            '<p>{resena_de_servicios}</p>' +
            '</div>' +
            '</div>' +
            '</tpl>' +
            '<tpl if="this.validateServicios(listado_de_servicios) == true">' +
            '<h6>Listado de Servicios</h6>' +
            '<div class="datos">' +
            '<div class="dato redes">' +
            '<p>{listado_de_servicios}</p>' +
            '</div>' +
            '</div>' +
            '</tpl>' +
            '<tpl if="this.validatePublicaciones(publicaciones) == true">' +
            '<h6>Publicaciones</h6>' +
            '<div class="datos">' +
            '<div class="dato redes">' +
            '<p>{publicaciones}</p>' +
            '</div>' +
            '</div>' +
            '</tpl>' +
            '<tpl if="this.validateImagenPublicacion(imagen_publicacion) == true">' +
            '<h6>Imagenes de Publicaciones</h6>' +
            '<div class="datos">' +
            '<div class="dato redes">' +
            '<div><img src="{imagen_publicacion}" width="100%" height="100%"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</tpl>' +
            '</tpl>' +
            '<div class="clear:both"></div>',
        {
            validateWeb: function (web) {
                if (web !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            validateTwitter: function (twitter) {
                if (twitter !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            validateFacebook: function (facebook){
                if (facebook !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            validateMail: function (email){
                if (email !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            validatePromociones: function (promociones){
                if (promociones !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            validatePublicaciones: function (publicaciones){
                if (publicaciones !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            validateImagenPublicacion: function (imagen_publicacion){
                if (imagen_publicacion !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            validateCedula: function (cedula_profesional){
                if (cedula_profesional !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            validateUniversidad: function (universidad_de_egreso){
                if (universidad_de_egreso !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            validatePractica: function(antecedentes_de_practica){
                if (antecedentes_de_practica !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            validateResena: function(resena_de_servicios){
                if (resena_de_servicios !== '') {
                    return true;
                } else {
                    return false;
                }
            },
            validateServicios: function(listado_de_servicios){
                if (listado_de_servicios !== '') {
                    return true;
                } else {
                    return false;
                }
            }
        }]
    }

});
