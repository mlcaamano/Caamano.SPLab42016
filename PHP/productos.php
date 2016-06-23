<?php

class producto
{
	public $id;
	public $nombre;
	public $porcentaje;
	
		public function SetFoto($valor)
	{
		$this->foto = $valor;
	}


	public static function TraerTodosLosProductos()
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM misproductos");
		$consulta->execute();
		return $consulta->fetchall(PDO::FETCH_CLASS, "producto");
	}
	
	public static function BorrarUnProducto($id)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("DELETE FROM misproductos WHERE id='$id'");
		$consulta->execute();
		return $consulta->rowCount();
	}

	public static function InsetarUnProducto($producto)
	{
		$objetoAccesoDato=AccesoDatos::dameUnObjetoAcceso();
		$consulta=$objetoAccesoDato->RetornarConsulta("INSERT into misproductos (nombre, porcentaje) VALUES ('$producto->nombre', '$producto->porcentaje')");
		$consulta->execute();
		return $objetoAccesoDato->RetornarUltimoIdInsertado();				
	}	
}



?>