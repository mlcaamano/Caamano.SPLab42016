<?php

class usuario
{
	public $id;
	public $correo;
	public $nombre;
	public $clave;
	public $tipo; 
	public $foto;
	
	
		public function SetFoto($valor)
	{
		$this->foto = $valor;
	}


	public static function TraerTodosLosUsuarios()
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM misusuarios");
		$consulta->execute();
		return $consulta->fetchall(PDO::FETCH_CLASS, "usuario");
	}
	
	public static function TraerUnUsuario($mail, $nombre ,$clave) 
	{	

		//vardump($mail);
		$objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM misusuarios WHERE Dni='$dni' AND Clave='$clave'");
		$consulta->execute();
		$UsuarioBuscado=$consulta->fetchObject('usuario');
		return $UsuarioBuscado;				
	}

	public static function BorrarUnUsuario($id)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("DELETE FROM misusuarios WHERE id='$id'");
		$consulta->execute();
		return $consulta->rowCount();
	}

	public static function InsetarUnUsuario($usuario)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("INSERT into misusuarios (correo, nombre, clave, tipo, foto) VALUES ('$usuario->correo', '$usuario->nombre', '$usuario->nombre', '$usuario->tipo', '$usuario->Foto')");
		$consulta->execute();
		return $objetoAccesoDato->RetornarUltimoIdInsertado();				
	}	

	public static function ModificarUnUsuario($usuario)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("UPDATE misusuarios SET Apellido='$usuario->Apellido', Nombres='$usuario->Nombres', Foto='$usuario->Foto' WHERE Dni='$usuario->Dni'");
		$consulta->execute();
	}

	public static function ModificarClave($clave)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("UPDATE misusuarios SET Clave='$clave->pass' WHERE Dni='$clave->Dni'");
		$consulta->execute();
	}


}



?>