<script>
	import { onMount } from 'svelte';
	import SampleWorkItem from './SampleWorkItem.svelte';

	onMount(() => {
		const canvas = document.getElementById('background-canvas');
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		const ctx = canvas.getContext('2d');

		const backgroundPointDensity = 250.0 / (1920 * 1080);
		const numBackgroundPoints = Math.floor(backgroundPointDensity * canvas.width * canvas.height);
		let backgroundPoints = [];
		for (let i = 0; i < numBackgroundPoints; i++) {
			backgroundPoints.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				z: Math.random() * 3 + 2,
				xVel: (-2.0 + Math.random() * 4.0) / 60,
				yVel: (-2.0 + Math.random() * 4.0) / 60,
				gridBoxX: -1,
				gridBoxY: -1,
				connections: [] /*Connections one-way, low index -> high index*/
			});
		}

		function dist(pt1, pt2) {
			return Math.sqrt((pt1.x - pt2.x) ** 2 + (pt1.y - pt2.y) ** 2 + (pt1.z - pt2.z) ** 2);
		}

		const minDistance = 100;
		const wrappingWidth = canvas.width + 2 * minDistance;
		const wrappingHeight = canvas.height + 2 * minDistance;
		function updatePointPositions() {
			function wrapPointCoords(pt) {
				// handle wrapping when a point goes off-screen (extend bounds so point doesn't disappear suddenly while connected to an on-screen point)
				// TODO: Technically a bug where a far-away point (high z-value) can still wrap while displayed on screen, but in practice this isn't usually noticed
				pt.x = ((pt.x + minDistance + wrappingWidth) % wrappingWidth) - minDistance;
				pt.y = ((pt.y + minDistance + wrappingHeight) % wrappingHeight) - minDistance;
			}

			function updatePointPos(pt) {
				pt.x += pt.xVel;
				pt.y += pt.yVel;
				wrapPointCoords(pt);
			}

			// partition screen into grid to optimize distance checks
			function partitionPtGridBox(pt) {
				pt.gridBoxX = Math.floor((pt.x + minDistance) / minDistance);
				pt.gridBoxY = Math.floor((pt.y + minDistance) / minDistance);
			}

			function updatePointConnections() {
				for (let i = 0; i < backgroundPoints.length; i++) {
					let pt1 = backgroundPoints[i];
					pt1.connections = [];
					// Avoid duplicate pairs w/ j=i+1
					for (let j = i + 1; j < backgroundPoints.length; j++) {
						const pt2 = backgroundPoints[j];
						if (
							Math.abs(pt1.gridBoxX - pt2.gridBoxX) > 1 ||
							Math.abs(pt1.gridBoxY - pt2.gridBoxY) > 1
						) {
							// Points are definitely farther than min distance
							continue;
						}
						const distance = dist(pt1, pt2);
						if (distance <= minDistance) {
							pt1.connections.push({
								index: j,
								dist: distance
							});
						}
					}
				}
			}

			// NOTE: Here be side effects
			backgroundPoints.map(updatePointPos);
			backgroundPoints.map(partitionPtGridBox);
			updatePointConnections();
		}

		function drawPoints() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Create display points w/ basic 3D effect
			const worksSubpage = document.getElementById('works');
			const scrollAmt = worksSubpage.getBoundingClientRect().top;
			function createDisplayPt(pt) {
				let displayPt = {
					x: pt.x,
					y: pt.y - scrollAmt / pt.z,
					radius: Math.ceil(5 / pt.z),
					connections: pt.connections
				};
				return displayPt;
			}

			// Get all line info; use line color as key so we can batch some draw calls
			// (since we're capped at 2 decimal places, guaranteed to be <100 calls)
			function getLineInfo(displayPts) {
				let lineInfo = {};
				for (let displayPt1 of displayPts) {
					for (let connection of displayPt1.connections) {
						let lineColor = `rgba(120, 128, 140, ${(
							0.6 *
							(1.0 - connection.dist / minDistance)
						).toFixed(2)})`;

						if (!(lineColor in lineInfo)) {
							lineInfo[lineColor] = [];
						}
						lineInfo[lineColor].push({
							displayPt1: displayPt1,
							displayPt2: displayPts[connection.index]
						});
					}
				}
				return lineInfo;
			}

			// Draw lines connecting points
			function drawLines(lineInfo) {
				for (let lineColor in lineInfo) {
					ctx.strokeStyle = lineColor;
					ctx.beginPath(); // Important to avoid multiple draws
					lineInfo[lineColor].forEach((linePts) => {
						const displayPt1 = linePts.displayPt1;
						const displayPt2 = linePts.displayPt2;
						ctx.moveTo(displayPt1.x, displayPt1.y);
						ctx.lineTo(displayPt2.x, displayPt2.y);
					});
					ctx.stroke();
				}
			}

			// Draw points themselves
			function drawPoints(displayPts) {
				ctx.fillStyle = 'rgb(82, 83, 87)';
				ctx.beginPath();
				for (let i = 0; i < displayPts.length; i++) {
					let displayPt = displayPts[i];
					ctx.moveTo(displayPt.x, displayPt.y);
					ctx.arc(displayPt.x, displayPt.y, displayPt.radius, 0, 2 * Math.PI);
				}
				ctx.fill();
			}

			const displayPts = backgroundPoints.map(createDisplayPt);
			drawLines(getLineInfo(displayPts));
			drawPoints(displayPts);
		}

		let isCanvasVisible = false;
		let canvasVisibleCheck = new IntersectionObserver((entries) => {
			isCanvasVisible = entries[0].isIntersecting;
		});
		canvasVisibleCheck.observe(canvas);
		function updatePoints() {
			updatePointPositions();
			if (isCanvasVisible) {
				drawPoints();
			}
			window.requestAnimationFrame(updatePoints);
		}

		window.requestAnimationFrame(updatePoints);
	});
</script>

<div id="works" class="subpage">
	<canvas id="background-canvas" />
	<header class="header-box">
		<h1>My labor (and my leisure, too)</h1>
	</header>
	<article class="display-grid">
		<SampleWorkItem
			title="2020 Website Redesign"
			description="This website didn't design itself, y'know."
			imgUrl="/assets/img/redesigned_website.jpg"
			githubUrl="https://github.com/JHDeerin/JHDeerin.github.io"
		/>
		<SampleWorkItem
			title="NASA F' CLI"
			description="I created a command-line suite for NASA's F' project."
			imgUrl="/assets/img/tab_complete_commands_min.gif"
			githubUrl="https://github.com/nasa/fprime"
		/>
		<SampleWorkItem
			title="N-Body Galaxy Simulation"
			description="A browser-based galaxy simulation made for Computational Physics."
			imgUrl="/assets/img/galaxy_sim_ultramin.gif"
			githubUrl="https://github.com/JHDeerin/PHYS3266_NBodyGalaxy"
		/>
		<SampleWorkItem
			title="Jake's CS Notes"
			description="A dynamic website for hosting my class notes from Georgia Tech."
			imgUrl="/assets/img/notes_page.png"
			githubUrl="https://github.com/JHDeerin/notesPageTest"
		/>
		<SampleWorkItem
			title="MAC Tutoring Website"
			description="A Bits of Good 2018 project connecting underprivileged students with tutors."
			imgUrl="/assets/img/mac_tutoring.jpg"
			githubUrl="https://github.com/GTBitsOfGood/midtown-assistance-center"
		/>
		<SampleWorkItem
			title="Bit.Spike"
			description="VGDev's first game built for virtual reality."
			imgUrl="/assets/img/project_bitspike.jpg"
			githubUrl="https://vgdev.gtorg.gatech.edu/game/bit-spike"
		/>
	</article>
	<footer class="header-box">
		<h2>...and the rest can be found <a href="https://github.com/JHDeerin">on GitHub</a></h2>
	</footer>
</div>

<style>
	#background-canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.display-grid {
		display: grid;
		grid-gap: 1px;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-rows: 1fr;
		margin-left: 20vw; /* To line up with 2nd navbar element*/
		padding: 0;
		width: 60vw;
	}

	@media (max-width: 850px) {
		.display-grid {
			grid-template-columns: 1fr 1fr;
			margin: 0 auto;
			margin-top: 1rem;
			width: 100%;
		}
	}
</style>
