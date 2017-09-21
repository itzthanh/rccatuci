<?php
$cssDir = "css"; //Folder where .css files are located

//Links each page to its respective .css file
$styles = [
"home.php" => "home.css",
"about.php" => "about.css",
"board.php" => "board.css",
"faq.php" => "faq.css",
"membershipInfo.php" => "membershipInfo.css",
"points.php" => "points.css",
"fundraising.php" => "fundraising.css",
"announcements.php" => "announcements.css",
"calendar.php" => "calendar.css",
"contact.php" => "contact.css",
"families.php" => "families.css",
"points.php" => "points.css",
"campus_opp.php" => "campus_opp.css",
"board_apply.php" => "board_apply.css",
"photos.php" => "photos.css",
"captain_america.php" => "family_points.css",
"black_widow.php" => "family_points.css",
"iron_man.php" => "family_points.css",
"thor.php" => "family_points.css"
];
?>

<!-- Links .css files common to all pages -->
<link rel="stylesheet" type="text/css" href="bootstrap-3.3.6-dist\css\bootstrap.css">
<link href='https://fonts.googleapis.com/css?family=Work+Sans:600,500' rel='stylesheet' type='text/css'>
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="<?="$cssDir/hamburgers/dist/hamburgers.css"?>">
<link rel="stylesheet" type="text/css" href="js/jqueryui/jquery-ui.min.css">
<link rel="stylesheet" type="text/css" href="<?="$cssDir/header.css"?>">
<link rel="stylesheet" type="text/css" href="<?="$cssDir/footer.css"?>">
<!-- Links .css files specific to current page -->
<link rel="stylesheet" type="text/css" href="<?="$cssDir/$styles[$this_page]"?>">
