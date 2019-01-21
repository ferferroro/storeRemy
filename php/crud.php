<?php

    header( "Content-type: application/json" );
    $host =  'localhost';
    $user = 'root';
    $password = '';
    $dbname = 'storeremy';

    // Set DSN
    $dsn = 'mysql:host='. $host .';dbname='. $dbname;
    
    // Create a PDO instance
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    $search = "%%";
    $sql = 'SELECT * FROM supplier WHERE name LIKE ?';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$search]);
    $suppliers = $stmt->fetchAll();

    echo json_encode($suppliers);
    // foreach($suppliers as $suppliers){
    //     echo $suppliers->name . '<br>';
    // }

?>
