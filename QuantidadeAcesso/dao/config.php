<?php
	$dsn = "mysql:dbname=controleacesso;host=localhost:8889";
	$dbuser = "root";
	$dbpass = "root";

	try{
		$pdo = new PDO($dsn,$dbuser,$dbpass);

	}catch(PDOException $e){
		echo "Falhou a conexão: ".$e->getMessage();
	}
?>