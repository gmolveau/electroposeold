<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title>Electroposé</title>
	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
	<link rel="icon" href="images/favicon.ico" type="image/x-icon">
	<link href="bootstrap/dist/css/bootstrap.css" rel="stylesheet" media="screen">
	<script src="http://code.jquery.com/jquery.js"></script>
	<link href="bootstrap/dist/css/style.css" rel="stylesheet" media="screen">
	<script src="bootstrap/dist/css/bootstrap.css"></script>
	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	<script type="text/javascript" src="bloxhover/bloxhover.jquery.js"></script>
	<script type="text/javascript" src="functions.js"></script>
	<script>$(document).ready(function() {
		$('.sound').bloxhover({effect: 'horizontal', duration: 400, sliceCount: 9, delay: 100});
		});
	</script>
	<script src="scrolling/jquery.scrollTo-1.4.2-min.js"></script>
	<script src="scrolling/jquery.localscroll-1.2.7-min.js"></script>
</head>

<?php
$user = "root"; //user DB
$pass = "_<WyBeCT5,3"; // passwd user DB
$liensc = array("0" => "0",); //init lien soundcloud
$lienyt = array("0" => "0",); //init lien youtube
$artwork = array("0" => "0",); //init lien artwork
$genre = array("0" => "0",); //init genre
$name = array("0" => "0",); //init genre

$i=0;
$dbh = new PDO('mysql:host=localhost;dbname=electropose', $user, $pass); //connexion DB
foreach($dbh->query('SELECT * FROM sounds') as $row) { //boucle
	$liensc[$i]=$row[2]; //lien soundcloud correspond colonne 2
	$lienyt[$i]=$row[3]; //lien youtube correspond colonne 3
	$artwork[$i]=$row[4]; // lien artwork correspond colonne 4
	$genre[$i]=$row[5]; // genre correpond colonne 5
	$name[$i]=$row[1]; // name correpond colonne 1 dans la DB
	$i=$i+1; //incrmentation
}
?>

<body>
<!-- SCM Music Player http://scmplayer.net -->
<script type="text/javascript" src="http://vps22975.ovh.net/electropose/scm/script.js" 
data-config="{'skin':'skins/simpleBlack/skin.css','volume':50,'autoplay':false,'shuffle':false,'repeat':1,'placement':'bottom','showplaylist':false,'playlist':''}" >
</script>
<!-- SCM Music Player script end -->


<nav class="navbar navbar-default" role="navigation">
<div class="container-fluid">
	<!-- Brand and toggle get grouped for better mobile display -->
	<div class="navbar-header">
		<a class="navbar-brand" href="#">Electroposé</a>
	</div>
	<!-- Collect the nav links, forms, and other content for toggling -->
	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<ul class="nav navbar-nav">
			<li><a class="fa fa-youtube-square fa-2x" href="http://www.youtube.com/user/electropose1"></a></li>
			<li><a class="fa fa-cloud fa-2x" href="https://soundcloud.com/electropose"></a></li>
			<li><a class ="fa fa-facebook fa-2x" href="https://www.facebook.com/electropose?fref=ts"></a></li>
			<li><a class ="fa fa-twitter fa-2x" href="https://twitter.com/electropose"></a></li>
		</ul>
		<form action="javascript:void();" class="navbar-form navbar-left" role="search" 						onSubmit="findString(this.t1.value)"> <!-- call findString -->
			<div class="form-group">
				<input type="text" id="t1" class="form-control" value="" placeholder="Recherche...">
			</div>
			<a href="#footer">Link to Footer</a>
		</form>	
	</div><!-- /.navbar-collapse -->
</div><!-- /.container-fluid -->
</nav>

<?php //CREER 1 ROW DE 2 DIV COL-6 AVEC 1 SON PAR DIV
echo "<div class='container-fluid'>";
for ($j = 0; $j <= count($liensc)-1; $j++) {
	if (($j % 2) == 0) {
		$onclickqueue = "SCM.queue({title:\"".$name[$j]."\",url:\"".$liensc[$j]."\"});";
		$onclickplay = "SCM.play({title:\"".$name[$j]."\",url:\"".$liensc[$j]."\"});";
		echo "<div class='row'>";
			echo "<div id='".$name[$j]."' class='col-md-6'></br>";	
				echo "<div class='half center-block'>";
					echo "<div class='sound'>";
						echo "<img src=".$artwork[$j]." class='img-rounded center-block' />";
						echo "<div>";
						echo "<p class='titre'>$name[$j]</p></br></br>";
						echo "<p class='titre'>$genre[$j]</p></br></br>";
						echo "<i class='fa fa-play fa-3x play' onclick='$onclickplay'></i>";
						echo "<i class='fa fa-plus fa-3x plus' onclick='$onclickqueue'></i>";
						echo "</div>";
					echo "</div>"; //div sound
				echo "</div>";//div half
				echo "<p class='center-block'>".$name[$j]."</p></br>";
			echo "</div>";//div EP
	}
	else {
		$onclickqueue = "SCM.queue({title:\"".$name[$j]."\",url:\"".$liensc[$j]."\"});";
		$onclickplay = "SCM.play({title:\"".$name[$j]."\",url:\"".$liensc[$j]."\"});";
		echo "<div id='".$name[$j]."' class='col-md-6'></br>"; //créer une div pchq son 
			echo "<div class=' half center-block'>";
				echo "<div class='sound'>";
					echo "<img src=".$artwork[$j]." class='img-rounded center-block' />";
					echo "<div>";
					echo "<p class='titre'>$name[$j]</p></br></br>";
					echo "<p class='titre'>$genre[$j]</p></br></br>";
					echo "<i class='fa fa-play fa-3x play ' onclick='$onclickplay'></i>";
					echo "<i class='fa fa-plus fa-3x plus' onclick='$onclickqueue'></i>";
					echo "</div>";
				echo "</div>";//div half
			echo "</div>";//div sound
			echo "<p class='artiste'>".$name[$j]."</p></br>";
		echo "</div>";//div EP
	echo "</div>";//div row
	}
}
echo "</div>";
echo "<div id='footer'>testTEST</div>";
/*
1 lignes = 2 div sons | 1 div son = youtube_soundcloud_genre_titre_artwork OR youtube_soundcloud_genre_titre = hidden
quand mouseover{artwork} -> bouttons : Play : + 
quand onclick{play} -> SCM.play({title:'titre',url:'soundcloud'});
quand onclick{+} -> SCM.queue({title:'titre',url:'soundcloud'});

*/

/*
echo "<iframe align='right' width='400' height='166' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=".$liensc[$j]."'></iframe>"; //affiche widget soundcloud
/*
$restYT = substr($lienyt[$j], -11); //retourne ID vidéo YT

echo "<iframe align='right' width='400' height='225'  src='http://www.youtube.com/embed/".$restYT."?wmode=transparent&amp;autohide=1&amp;egm=0&amp;hd=1&amp;iv_load_policy=3&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;showsearch=0' frameborder='0' allowfullscreen=''></iframe>";

*/

?>
</body>
</html>


