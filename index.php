<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>MensaHQ | Home</title>
        <?php include 'Templates/head_master.php'; ?>
    </head>
    <body>
        <?php include 'Templates/nav_master.php'; ?>
<div class='container-fluid'>
            <div class="row">
                <!--Empty spacer coloumn, also contains the audio file for easy
                hiding on mobile-->
                <div class="col-md-1">
                    <audio id="bg-music" autoplay loop>
                        <source src="Other/Empire_of_Angels.mp3" type="audio/mpeg">
                    </audio>
                    <!---Script for adjusting volume.-->
                    <script>
                        var aud = document.getElementById("bg-music");
                        aud.volume = 0.20;
                    </script>
                    
                </div>
                
                <!-- Left Banner -->
                <div class='col-md-3 banner'>
                    <h2>Mensa Origins</h2>
                    <p>Stuff about Mensa's Origins
                    blah...</p>
                    
                    <h2>About Us</h2>
                    <p>General info & random shit</p>
                </div>
                
                <!-- Center Image -->
                <div class="col-md-4">
                    <img id='ctr-img' src='Images/Mensa-Flag.jpg' alt='Mensa Flag'/>
                </div>
                
                <!-- Right Banner -->
                <div class="col-md-3 banner">
                    <h2>Dioism</h2>
                    <p>WRYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
                        YYYYYYYYYYYYYYYYYYY!</p>
                    
                    <h2>Joining</h2>
                    <p>Follow these simple steps to join Mensa HQ;</p>
                    <ol>
                        <li>Don't Suck</li>
                        <li>Embrace Dio</li>
                        <li>?????</li>
                        <li>Profit!</li>
                    </ol>
                </div>
                
                <!-- Spacer Colomn -->
                <div class="col-md-1"></div>
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </body>
</html>
