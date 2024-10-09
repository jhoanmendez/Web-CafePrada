/***********************************************************
 	PROYECTO: Control de Acceso Aguialarmas
 	MODULO OPERADOR
 	VISTA.JS
 	Contiene las funciones de presentacion de formularios
 	MLM. sep/19/2018
 	ver: 1.0


 CAMBIAR COMENTARIOS DE UNA LINEA ???????????	
***********************************************************/
class Vista {
	constructor() {
	}
	/********************************************************* 
	Elimina todos los elementos de destino
	*/
	limpiar(destino){
		document.getElementById(destino).innerHTML = "";
	}

	/********************************************************** 
		Carga FORM en DESTINO. confirma que la plantilla exista
	*/

	mostrarPlantilla(form, destino){
		var template = document.getElementById(form);
		if (template){	//si la plantilla existe...
			var clon = template.content.cloneNode(true);
			document.getElementById(destino).innerHTML = "";
			document.getElementById(destino).appendChild(clon); //inserta
		}
	}

	/********************************************************* 
		inserta filas en la tabla idTabla, segun las filas del arreglo datos
		El orden en que estan los elementos de la fila son los mismos
		de las columnas de la tabla. 
		Toma el indice del elemento como identificador para editar.
		frmElemento es el id del formulario donde se desplegaran los datos
		al pulsar el boton editar de cada fila.
	*/
	mostrarDatosTabla(idTabla, datos, frmElemento){
		// Elimnar filas
		$(idTabla+" > tbody").html("");
		var txt = '';
		for(var i = 0; i < datos.length; i++){
			txt += '<tr>';
			for ( var key in datos[i]) {
				txt += '<td>' + datos[i][key] + '</td>';
		  	}
		  	txt += '<td><div class="btn-group-vertical"><button type="button" class="btn2"';
		  	txt += ' id="btnEditAdmin" onclick="setDatosForm(' + i + ')">';
		  	txt += '<img src="/static/img/logo7.png" ></button></div></td></tr>';  
		}
		$(idTabla+" > tbody").html(txt);
	}

	/********************************************************* 
		Lee valores de los inputs de un formulario
		los devuelve en arreglo, cada item con el id del imput
	*/
	getDatosForm(idForm) {
	  let nArray = {};
		let form = document.getElementById(idForm).elements;
		for (let i = 0; i < form.length; i++) {
		       nArray[form[i].id] = form[i].value;
	  }  
	  return nArray;
	}

	/********************************************************* 
		Toma el valor de los atributos del objeto (modelo)
		y las muestra en los inputs en pantalla (frmDestino), 
		que tengan el mismo ID del nombre de cada atributo del objeto
	*/
	setDatosForm(modelo){		//ojo agregar parametro formulario destino. conrolador 59
		for ( var key in modelo) {
			var x = key ;
			var y = modelo[key];
			document.getElementById(x).value= y; //OJO DEBE SER UN IMPUT DENTRO DEL FORM
	  	}  
	}

	/********************************************************* 
		Limpia todos los imputs de un formulario
	*/
	limpiarImputs(idForm){
		document.getElementById(idForm).reset();
/*		let elements = document.getElementById(idForm).elements;
		//VERIFICAR SI ES NECESARIO EL SIGUIENTE BLOQUE....
		for(let i = 0; i < elements.length; i++) { 
			let field_type = elements[i].type.toLowerCase();
			switch(field_type) {
				case "text": 
				case "password": 
				case "textarea":
			    case "hidden":
			    case "email":	
					elements[i].value = ""; 
					break;
		        
				case "radio":
				case "checkbox":
		  			if (elements[i].checked) {
		   				elements[i].checked = false; 
					}
					break;

				case "select-one":
				case "select-multi":
		            		elements[i].selectedIndex = -1;
					break;
				default: 
					break;
			}
	    }
	    */
	}


	/********************************************************* 
		Valida que todos los imputs de un formulario contengan
		datos, segun tipo de imput
		devuelte texto con 'ok' o mensaje de error
	*/
	validarDatosForm(form){
		let elements = document.getElementById(form).elements;
		let msj = 'ok';
		for(let i = 0; i < elements.length; i++) { 
			let field_type = elements[i].type.toLowerCase();
			switch(field_type) {
				case "text": 
				case "textarea":
			    case "hidden":
					if(elements[i].value.length == 0)
						msj = 'Los campos deben contener texto'; 
					break;

				case "password": 
					if(elements[i].value.length < 5)
						msj = 'El password debe tener al menos cinco caracteres'; 
					break;
			    case "email":
			    	if(!this.isEmail(elements[i].value))
						msj = 'No es un correo electronico valido'; 
					break;

				case "select-one":
				case "select-multi":
		            //elements[i].selectedIndex = -1;
					if(elements[i].selectedIndex < 0)
						msj = 'Debe seleccionar una opción'; 
					break;

				case "number": 
					if(elements[i].value < 1)
						msj = 'Debe digitar un numero positivo, mayor a cero'; 
					break;

				default: 
					break;
			}
	    }
	    return msj;
	}

	isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	/***********************************************************
		Despliega nombre del usuario en barra superior 
	*/
	mostrarNombreUsuario(nombre){
			document.getElementById('nombreUsuario').innerHTML = nombre;		
	}

	/***********************************************************
		Despliega informacion en la barra inferior 
	*/
	mostrarAviso(aviso){
		document.getElementById('divMsj').innerHTML = aviso;
	}


}