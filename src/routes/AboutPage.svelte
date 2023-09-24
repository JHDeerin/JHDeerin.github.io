<script>
	import ContactIcons from './ContactIcons.svelte';
</script>

<div id="about" class="subpage">
	<div class="lozad" data-toggle-class="parallax-background" />
	<div class="header-box">
		<header>
			<h1>A bit about me</h1>
		</header>
	</div>
	<article class="main-article">
		<h2>In 5 Words</h2>
		<p>Too short, <a href="#50-word-bio">so I'll cheat.</a></p>

		<h2 id="50-word-bio">In 50 Words</h2>
		<p>
			Joseph "Jake" H. Deerin, <i>machinator litteratus</i> (computer/otherwise). Born, raised, born
			again, discovered computers, played games, tried to make games (failed) by learning programming
			(succeeded?). Did many uncool high school things, succeeded at some. Studied computers at Georgia
			Tech, worked on flying/rocket-propelled/staggeringly normal computers. Still at large.
		</p>

		<h2>In Too Many Words</h2>
		<p>
			Joseph "Jake" H. Deerin was born on February 5<sup>th</sup>, 1998, in the middle of a
			Pennsylvania snowstorm he can't quite remember. At the age of 8, he decided he was going to
			learn how computers worked to impress his friends. He failed. At first. Horribly.
		</p>

		<p>
			After revisiting programming in high school, Jake has been consistently working with code
			since 2013. In high school, Jake won multiple region-level awards while leading the Video Game
			Design team for Manheim Township's <a
				href="http://lancasteronline.com/news/tsa-region-competition/image_4c4ab224-cd0b-11e5-9b01-cff136977e9a.html"
				>Technology Student Association</a
			>
			before flopping hard at States - only to become the 2016 Debating Technology Issues State Champion,
			establishing both the depth of his acumen and his utter lack of a social life. He concurrently
			cemented his status as the school's ultra-nerd by serving as captain of the
			<a href="https://www.naqt.com/about/quiz-bowl.html">Quiz Bowl team</a>
			throughout his Junior and Senior years, having the honor of leading them to a
			<a href="https://www.naqt.com/stats/team-performance.jsp?team_id=93205&playoffs=true"
				>13<sup>th</sup>-place finish</a
			>
			at the 2016 High School National Championship and of
			<a href="https://twitter.com/manheimtownship/status/574939992646098944">twice</a>
			<a href="https://gpqb.wordpress.com/2016/02/15/announcement-pa-nasat-team-selections"
				>representing</a
			> Pennsylvania at the National All-Star Academic Tournament.
		</p>

		<p>
			In an unrelated plot twist, he surprisingly managed to earn his Eagle Scout requirements with
			2 days to spare, and was awarded the honor by Troop 99 in the spring of 2016.
		</p>

		<p>
			In 2020, Jake completed a Bachelor's Degree in Computer Science at the <a
				href="http://www.gatech.edu">Georgia Institute of Technology</a
			>, where he was involved with the
			<a href="https://www.gtbcm.com">Baptist Collegiate Ministry</a>,
			<a href="https://bitsofgood.org">Bits of Good software</a>,
			<a href="http://www.vgdev.org">VGDev Game Development club</a>
			and the <a href="http://quizbowl.gtorg.gatech.edu">Georgia Tech Academic Team</a>. Between
			semesters, Jake worked at
			<a href="https://www.jpl.nasa.gov">NASA</a>, the
			<a href="https://gtri.gatech.edu">Georgia Tech Research Institute</a>, and
			<a href="https://www.1234micro.com">12:34 MicroTechnologies</a>.
		</p>

		<p>
			He remains at large, and currently tries to teach old cash registers new tricks at <a
				href="https://www.ncr.com/">NCR</a
			>.
		</p>

		<p style="text-align: center">
			<a href="#contact"><strong>Get in touch</strong></a>
			<br />
			<ContactIcons />
		</p>
	</article>
</div>

<style>
	#about :global(.parallax-background) {
		background: url(/assets/img/aboutPhoto.jpg) no-repeat scroll right top/cover;
	}

	@media (max-width: 850px) {
		#about :global(.parallax-background) {
			height: 33%;
		}
	}
</style>
