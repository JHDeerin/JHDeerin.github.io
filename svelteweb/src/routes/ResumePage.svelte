<script>
	import ResumeSection from './ResumeSection.svelte';
	import ResumeExperienceItem from './ResumeExperienceItem.svelte';
</script>

<div id="resume" class="subpage">
	<!-- TODO: Lazily load background image! -->
	<div class="parallax-background" />
	<header class="header-box">
		<h1>I'll just leave this here</h1>
	</header>
	<article class="main-article-wide">
		<p><a href="/assets/JHDeerin_Resume_Web.pdf" target="_blank">Download my one-page resume</a></p>

		<ResumeSection title="Education">
			<a href="https://www.gatech.edu"><b>Georgia Institute of Technology</b></a>, Atlanta, GA
			<ul>
				<li>August 2016 - December 2020 (Expected)</li>
				<li>B.S. Computer Science, Minor in Philosophy of Science</li>
				<li>GPA: 4.0/4.0</li>
			</ul>
		</ResumeSection>

		<ResumeSection title="Skills and Awards">
			<ul>
				<li><b>Programming</b>: Python, C/C++, Ada, Java, Javascript, HTML, CSS</li>
				<li>
					<b>Technologies</b>: Git, Vagrant, Vue.js, Atlassian Suite, Unity, Blender, GIMP/Photoshop
				</li>
				<li>
					<b>Awards</b>: Eagle Scout, VGDev Exemplary Contributor, Bits of Good 2018 Best Team
					Project
				</li>
			</ul>
		</ResumeSection>

		<ResumeSection title="Experience">
			<ResumeExperienceItem
				workplace="NASA Jet Propulsion Laboratory"
				workplaceLink="https://www.jpl.nasa.gov"
				location="Pasadena, CA"
				startTime="May 2020"
				endTime="August 2020"
				position="Flight Software Engineering Intern"
				descriptions={[
					'Refactored C++ code on F’, a software framework for small-scale satellites used on Mars Helicopter',
					'Designed and implemented a command-line interface for the F’ Ground Data System in Python, including tab completion, UNIX integration, and multi-platform support',
					'Implemented a dynamic user-configurable GUI for the GDS using Vue.js and ES6/HTML/CSS'
				]}
			/>

			<ResumeExperienceItem
				workplace="Georgia Tech Research Institute"
				workplaceLink="https://gtri.gatech.edu"
				location="Atlanta, GA"
				startTime="January 2018"
				endTime="August 2019"
				position="Electronic Warfare and Avionics Development Co-op"
				descriptions={[
					'Designed, implemented, and tested cross-platform radio communication and other libraries for Windows, Linux, and VxWorks 653 in Ada/C for use in electronic warfare systems in military aircraft',
					'Wrote 100+ unit and integration tests in Ada/C/C++ for over a dozen new and existing modules, catching multiple years-old bugs and assisting in safety-critical refactoring efforts'
				]}
			/>

			<ResumeExperienceItem
				workplace="12:34 MicroTechnologies"
				workplaceLink="https://www.1234micro.com"
				location="Lancaster, PA"
				startTime="May 2017"
				endTime="August 2017"
				position="Web Development Intern"
				descriptions={[
					'Implemented a customer-management web app for 110+ Microsoft CSP customers in C#/ES6/HTML/CSS',
					'Researched and drafted reports on existing CSP customers, making recommendations on additional development services the company could offer; presented findings before CEO and Lead Developer'
				]}
			/>
		</ResumeSection>

		<ResumeSection title="Projects">
			<ResumeExperienceItem
				workplace="Midtown Assistance Center Tutoring App"
				workplaceLink="https://www.mac-tutoring.com"
				startTime="August 2018"
				endTime="April 2019"
				descriptions={[
					'Assisted in Bits of Good’s planning and development of a MERN-stack web app for connecting underprivileged students with tutors in the Atlanta area',
					'Improved UX by implementing tooltips and automatic sign-ins, based on user feedback'
				]}
			/>
		</ResumeSection>

		<ResumeSection title="Activities">
			<ul>
				<li>
					<a href="https://bitsofgood.org"><b>Bits of Good</b></a>, <i>Senior Developer</i>:
					Nonprofit software development, worked on web applications for World Water Relief and
					Midtown Assistance Center
				</li>
				<li>
					<a href="http://www.vgdev.org"><b>VGDev</b></a>, <i>Member</i>: Game development, worked
					on VR FPS Bit.Spike and roguelike Shifting Dungeon
				</li>
				<li>
					<a href="https://bitsofgood.org"><b>Baptist Collegiate Ministries</b></a>,
					<i>Bible Study Co-Leader</i>: Prayer team member and volunteer
				</li>
				<li>
					<a href="http://quizbowl.gtorg.gatech.edu"><b>Georgia Tech Academic Team</b></a>,
					<i>Treasurer</i>: Helped organize/run multiple college tournaments
				</li>
			</ul>
		</ResumeSection>
	</article>
</div>

<style>
	.parallax-background {
		background: url(/assets/img/resumePhoto.jpg) no-repeat scroll right top/cover;
	}

	@media (max-width: 850px) {
		#resume .parallax-background {
			height: 25%;
		}
	}
</style>
