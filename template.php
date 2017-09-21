<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Red Cross @ UC Irvine</title>
		<!--CSS-->
		<?php include "stylesheets.php"; ?>
		<link rel="icon" href="Red-Cross.png">
	</head>
	<body>
	<div id="mainContainer">
		<!--Common Header-->
		<div id="headerTemplate">
		<?php include "html_content/content_header.php"; ?>
		</div>
		<div id="contentTemplate">
		<section>
			<!--Content of page goes here and is determined by $this_page value-->
			<?php include "html_content/content_$this_page"; ?>
		</section>
		</div>
		<!--Common Footer-->

		<!--JS-->
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script type="text/javascript" src="js/jqueryui/external/jquery/jquery.js"></script>
		<script type="text/javascript" src="js/jqueryui/jquery-ui.min.js"></script>
		<script type="text/javascript" src= "js/header.js"></script>
		<?php include "scripts.php"; ?>


	</div>
		<div id="footerTemplate">
			<?php include "html_content/content_footer.php"; ?>
		</div>
	</body>
</html>