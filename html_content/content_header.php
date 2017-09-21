<!--content_header.php-->
	<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
	<script>
	$(function(){
  		$('.navTab').each(function() {
    		if ($(this).prop('href') == window.location.href) {
      			$(this).addClass('current');
    		}
  		});
	});
	</script>
	<header class="header">
		<div class="topBar">
			<div class="logo">
				<a href="home.php"><img src="images/icons/logo.png"></a>
			</div>
			<div class="smIcons">
				<ul>
					<li id="fbIcon">
						<a href="https://www.facebook.com/groups/40998671664/"><img id="fbIcon" src="images/icons/facebook.png"></a>
					</li>
					<li id="igIcon">
						<a href="https://www.instagram.com/rccatuci/"><img id="igIcon" src="images/icons/instagram.png"></a>
					</li>
					<li id="emailIcon">
						<a href="contact"><img id="emailIcon" src="images/icons/email.png"></a>
					</li>
				</ul>
			</div>
			<div id="announcement">
				<p><a href="announcements">Announcements</a></p>
			</div>
		</div>
		<div class="navFix">
			<nav class="nav">
				<ul>
					<li><a class = "navTab" href="home.php"> Home</a></li>
					<li><a class = "navTab" href="about.php">About</a>
					</li>
					<li class=hasChildren><a class = "navTab" href="membershipInfo.php">Membership</a>
						<ul class="subMenu">
							<li><a class = "navTab" href="membershipInfo.php">Info</a></li>
							<li><a class = "navTab" href="points.php">Current Points</a></li>
							<li><a class = "navTab" href="fundraising.php">Fundraising</a></li>
							<li><a class = "navTab" href="families.php">Families</a></li>
						</ul>
					</li>
					<li class=hasChildren><a class = "navTab" href="announcements.php">Schedule</a>
						<ul class="subMenu">
							<li><a class = "navTab" href="announcements.php">Announcements</a></li>
							<li><a class = "navTab" href="calendar.php">Calendar</a></li>
						</ul>
					</li>
					<li class=hasChildren><a class = "navTab" href="board.php">Board</a>
						<ul class="subMenu">
							<li><a class = "navTab" href="board.php">2016-2017</a></li>
							<!--<li><a class = "navTab" href="board_apply.php">Apply</a></li>-->
						</ul>
					<li><a class = "navTab" href="photos.php">Photos</a></li>
					<li><a class = "navTab" href="faq.php">FAQ</a></li>
					<li><a class = "navTab" href="campus_opp.php">Campus Opportunities</a></li>
				</ul>
			</nav>
		</div>
	</header>


