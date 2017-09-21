<?php
$scriptDir = "js";

$scripts = [
"about.php" => "about.js",
"board.php" => "board.js",
"faq.php" => "faq.js",
"membershipInfo.php" => "membershipInfo.js",
"fundraising.php" => "fundraising.js",
"announcements.php" => "announcements.js",
"families.php" => "families.js",
"points.php" => "points.js",
"board_apply.php" => "board_apply.js",
"photos.php" => "photos.js" 
];

?>

<!--Include JQuery-->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="js/jqueryui/external/jquery/jquery.js"></script>
<script type="text/javascript" src="js/jqueryui/jquery-ui.min.js"></script>
<!--Instafeed.js library-->
<script type="text/javascript" src="instafeed.min.js"></script>
<!--Link appropriate .js file to current page-->
<script type="text/javascript" src= "<?="$scriptDir/$scripts[$this_page]"?>"></script>

