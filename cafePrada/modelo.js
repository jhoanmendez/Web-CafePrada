/********************************************************
 	PROYECTO: Control de Acceso Aguialarmas
 	MODULO OPERADOR
 	MODELO.JS
 	Contiene las Clases del modelo de datos
 	MLM. sep/19/2018
 	ver: 1.0
 *********************************************************/

//-------------- USUARIO DEL MODULO --------------------------------------------------
class Usuario {
	constructor(usuario, password) {
		this.userName = usuario;
		this.password = password;
		this.nombre = "";
		this.rol = 0;
		this.token = "";		
	}

	//+++++++ Toma los valores de DATOS y los carga en las correspondientes propiedades del objeto
	setData(datos){
		for ( var nomAtrib in datos) {
			this[nomAtrib] = datos[nomAtrib];
	  	}  
	}

	//+++++++ Devuelve un array con las propiedades del objeto, menos el password
	getData(){
	 	let nArray = {'userName': this.userName, 'nombre': this.nombre, 'rol': this.rol, 'password': this.password};
	  return nArray;

	}

	//+++++++ Consulta si existe el usuario -------------------------------------------
/*	verificarUsuario(callBack){
		var datos = {'opc': 'verificarUsuario', 'userName': this.userName, 'password': this.password};
		ejecutarAjax(datos, callBack);

	 let dataPost = {'host': 'php/despachador.php', 'auth': 'token', 'accept': 'json'};
	 dataPost['data'] = datos;
	 let dataJson = JSON.stringify(dataPost);
	}*/
}

//-------------- ADMINISTRADOR -----------------------------------------------------------
class Admin {
	constructor() {
		this.documAdmin = 0;
		this.nombres = "";
		this.apellidos = "";
		this.celular = 0;
		this.correoE = "";		
	}

	//+++++++ Toma los valores de DATOS y los carga en las correspondientes propiedades del objeto
	setData(datos){
		for ( var nomAtrib in datos) {
			this[nomAtrib] = datos[nomAtrib];
	  	}  
	}

	//+++++++ Devuelve un array con las propiedades del objeto, menos el password
	getData(){
	 	let nArray = {'documAdmin': this.documAdmin, 'nombres': this.nombres, 'apellidos': this.apellidos, 'celular': this.celular, 'correoE': this.correoE};
	  return nArray;
	}

	//+++++++ Consulta si existe el Admin -------------------------------------------
/*	verificarAdmin(callBack){
		var datos = {'opc': 'verificarAdmin', 'documAdmin': this.documAdmin, 'celular': this.celular};
		ejecutarAjax(datos, callBack);
	}
*/
	//Intenta crear un nuevo registro de Administrador. El servidor devuelve la respuesta
	crearAdmin(callBack){
		var datos = this.getData();
		datos['opc'] = 'crearAdmin';
		ejecutarAjax(datos, callBack)
	}

// Modifica un registro admin
	modificarAdmin(callBack){
		var datos = this.getData();
		datos['opc'] = 'modificarAdmin';
		ejecutarAjax(datos, callBack);
	}		
}

//-----------------------------------------------------------------------------------

