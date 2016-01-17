<?php 
    //Get JSON from the P&W api
    $src = file_get_contents('');
    //Convert into a JSON object
    $json = json_decode($src, true);
?>

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
<!DOCTYPE html>
<html>
    <head>
        <title>MensaHQ | Leaderboards</title>
        <?php include 'head_master.php'; ?>
    </head>
    
    <body>
        <?php include 'nav_master.php'; ?>
        
        
        
    </body>
</html>
