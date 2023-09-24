import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute, f as each } from "../../chunks/ssr.js";
import "lozad";
import { b as base } from "../../chunks/paths.js";
const HomePage_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".parallax-background.svelte-qvuife{background:url(/assets/img/homePhoto.jpg) no-repeat scroll center center/cover}.header-box.svelte-qvuife{margin-top:15vh}",
  map: null
};
const HomePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<div id="home" class="subpage" data-svelte-h="svelte-1ll080g"><div class="parallax-background svelte-qvuife"></div> <header class="header-box svelte-qvuife"><h1>Hi.</h1> <h1>I&#39;m <a href="#about">Jake</a>.</h1> <h1>I Write <a href="#works">Code</a>.</h1></header> </div>`;
});
const NavbarMenu_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "nav.svelte-1b6invh.svelte-1b6invh{position:absolute;top:0;margin:0 auto;width:calc(100% - 10px);text-align:center;font-size:2.965vh;background:rgba(0, 0, 0, 0.5);box-shadow:0 0px 2em 2.5em rgba(0, 0, 0, 0.5);z-index:99}a.svelte-1b6invh.svelte-1b6invh{color:white}a.svelte-1b6invh.svelte-1b6invh:visited{color:white}a.svelte-1b6invh.svelte-1b6invh::after{background:white}ul.svelte-1b6invh.svelte-1b6invh{display:flex;justify-content:space-evenly;width:100%;padding:10px 0}ul.svelte-1b6invh>li.svelte-1b6invh{display:inline-flex;justify-content:center;width:100%;padding:5px}ul.svelte-1b6invh>li.svelte-1b6invh:not(:first-child){border-left:1px white solid}ul.svelte-1b6invh>li.selected.svelte-1b6invh{border:1px white solid}ul.svelte-1b6invh>li.selected.svelte-1b6invh:not(:last-child){border-right:none}@media(max-width: 850px){nav.svelte-1b6invh.svelte-1b6invh{font-size:1em}}",
  map: null
};
const NavbarMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selected = "" } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css$8);
  return `<nav class="svelte-1b6invh"><ul class="svelte-1b6invh"><li class="${["svelte-1b6invh", ""].join(" ").trim()}"><a href="#home" class="svelte-1b6invh" data-svelte-h="svelte-3kk0d6">Home</a></li> <li class="${["svelte-1b6invh", ""].join(" ").trim()}"><a href="#about" class="svelte-1b6invh" data-svelte-h="svelte-11ve3y6">About Me</a></li> <li class="${["svelte-1b6invh", ""].join(" ").trim()}"><a href="#resume" class="svelte-1b6invh" data-svelte-h="svelte-1sbjabq">Resume</a></li> <li class="${["svelte-1b6invh", ""].join(" ").trim()}"><a href="#works" class="svelte-1b6invh" data-svelte-h="svelte-tuc55i">Sample Works</a></li> <li class="${["svelte-1b6invh", ""].join(" ").trim()}"><a href="#contact" class="svelte-1b6invh" data-svelte-h="svelte-1039506">Contact Me</a></li></ul> </nav>`;
});
const ContactIcons_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".contact-icons.svelte-mv5im9.svelte-mv5im9{display:inline-flex;align-items:center}.contact-icons.svelte-mv5im9 svg.svelte-mv5im9{margin:0 0.3em;width:1.2em;height:1.2em}.contact-icons.svelte-mv5im9 svg.svelte-mv5im9{fill:white;transition:ease-out 0.2s all}.contact-icons.svelte-mv5im9 a:hover svg.svelte-mv5im9{fill:#3fafef}",
  map: null
};
const ContactIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<span class="contact-icons svelte-mv5im9" data-svelte-h="svelte-o1l5v9"><a href="https://www.linkedin.com/in/jhdeerin/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-mv5im9"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a> <a href="https://github.com/JHDeerin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-mv5im9"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a> <a href="mailto:jdeerin3@gatech.edu" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-mv5im9"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"></path></svg></a> </span>`;
});
const AboutPage_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "#about.svelte-v94kcb .parallax-background{background:url(/assets/img/aboutPhoto.jpg) no-repeat scroll right top/cover}@media(max-width: 850px){#about.svelte-v94kcb .parallax-background{height:33%}}",
  map: null
};
const AboutPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div id="about" class="subpage svelte-v94kcb"><div class="lozad" data-toggle-class="parallax-background"></div> <div class="header-box" data-svelte-h="svelte-1lla6q5"><header><h1>A bit about me</h1></header></div> <article class="main-article"><h2 data-svelte-h="svelte-1rjvxa3">In 5 Words</h2> <p data-svelte-h="svelte-dvpvq4">Too short, <a href="#50-word-bio">so I&#39;ll cheat.</a></p> <h2 id="50-word-bio" data-svelte-h="svelte-s2ezie">In 50 Words</h2> <p data-svelte-h="svelte-1qc8xk4">Joseph &quot;Jake&quot; H. Deerin, <i>machinator litteratus</i> (computer/otherwise). Born, raised, born
			again, discovered computers, played games, tried to make games (failed) by learning programming
			(succeeded?). Did many uncool high school things, succeeded at some. Studied computers at Georgia
			Tech, worked on flying/rocket-propelled/staggeringly normal computers. Still at large.</p> <h2 data-svelte-h="svelte-1cr4459">In Too Many Words</h2> <p data-svelte-h="svelte-gfnqrd">Joseph &quot;Jake&quot; H. Deerin was born on February 5<sup>th</sup>, 1998, in the middle of a
			Pennsylvania snowstorm he can&#39;t quite remember. At the age of 8, he decided he was going to
			learn how computers worked to impress his friends. He failed. At first. Horribly.</p> <p data-svelte-h="svelte-1rfph5s">After revisiting programming in high school, Jake has been consistently working with code
			since 2013. In high school, Jake won multiple region-level awards while leading the Video Game
			Design team for Manheim Township&#39;s <a href="http://lancasteronline.com/news/tsa-region-competition/image_4c4ab224-cd0b-11e5-9b01-cff136977e9a.html">Technology Student Association</a>
			before flopping hard at States - only to become the 2016 Debating Technology Issues State Champion,
			establishing both the depth of his acumen and his utter lack of a social life. He concurrently
			cemented his status as the school&#39;s ultra-nerd by serving as captain of the
			<a href="https://www.naqt.com/about/quiz-bowl.html">Quiz Bowl team</a>
			throughout his Junior and Senior years, having the honor of leading them to a
			<a href="https://www.naqt.com/stats/team-performance.jsp?team_id=93205&playoffs=true">13<sup>th</sup>-place finish</a>
			at the 2016 High School National Championship and of
			<a href="https://twitter.com/manheimtownship/status/574939992646098944">twice</a> <a href="https://gpqb.wordpress.com/2016/02/15/announcement-pa-nasat-team-selections">representing</a> Pennsylvania at the National All-Star Academic Tournament.</p> <p data-svelte-h="svelte-14hlhvy">In an unrelated plot twist, he surprisingly managed to earn his Eagle Scout requirements with
			2 days to spare, and was awarded the honor by Troop 99 in the spring of 2016.</p> <p data-svelte-h="svelte-1hj6eoa">In 2020, Jake completed a Bachelor&#39;s Degree in Computer Science at the <a href="http://www.gatech.edu">Georgia Institute of Technology</a>, where he was involved with the
			<a href="https://www.gtbcm.com">Baptist Collegiate Ministry</a>,
			<a href="https://bitsofgood.org">Bits of Good software</a>,
			<a href="http://www.vgdev.org">VGDev Game Development club</a>
			and the <a href="http://quizbowl.gtorg.gatech.edu">Georgia Tech Academic Team</a>. Between
			semesters, Jake worked at
			<a href="https://www.jpl.nasa.gov">NASA</a>, the
			<a href="https://gtri.gatech.edu">Georgia Tech Research Institute</a>, and
			<a href="https://www.1234micro.com">12:34 MicroTechnologies</a>.</p> <p data-svelte-h="svelte-7pdf7m">He remains at large, and currently tries to teach old cash registers new tricks at <a href="https://www.ncr.com/">NCR</a>.</p> <p style="text-align: center"><a href="#contact" data-svelte-h="svelte-ikstz6"><strong>Get in touch</strong></a> <br> ${validate_component(ContactIcons, "ContactIcons").$$render($$result, {}, {}, {})}</p></article> </div>`;
});
const ResumeSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<section><h2>${escape(title)}</h2> <hr> ${slots.default ? slots.default({}) : ``}</section>`;
});
const ResumeExperienceItem_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "ul.svelte-z8f256{margin-top:1em;margin-bottom:1em}",
  map: null
};
const ResumeExperienceItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { workplace = "" } = $$props;
  let { workplaceLink = "" } = $$props;
  let { location = "" } = $$props;
  let { startTime = "" } = $$props;
  let { endTime = "" } = $$props;
  let { position = "" } = $$props;
  let { descriptions = [] } = $$props;
  if ($$props.workplace === void 0 && $$bindings.workplace && workplace !== void 0)
    $$bindings.workplace(workplace);
  if ($$props.workplaceLink === void 0 && $$bindings.workplaceLink && workplaceLink !== void 0)
    $$bindings.workplaceLink(workplaceLink);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.startTime === void 0 && $$bindings.startTime && startTime !== void 0)
    $$bindings.startTime(startTime);
  if ($$props.endTime === void 0 && $$bindings.endTime && endTime !== void 0)
    $$bindings.endTime(endTime);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.descriptions === void 0 && $$bindings.descriptions && descriptions !== void 0)
    $$bindings.descriptions(descriptions);
  $$result.css.add(css$5);
  return `<div><a${add_attribute("href", workplaceLink, 0)}><b>${escape(workplace)}</b></a>${location ? `<span>, ${escape(location)}</span>` : ``} <ul class="svelte-z8f256">${startTime ? `<li>${escape(startTime)} – ${escape(endTime)}</li>` : ``} ${position ? `<li><i>${escape(position)}</i></li>` : ``} ${each(descriptions, (desc) => {
    return `<li>– ${escape(desc)} </li>`;
  })}</ul> </div>`;
});
const ResumePage_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "#resume.svelte-jreg1s .parallax-background{background:url(/assets/img/resumePhoto.jpg) no-repeat scroll right top/cover}@media(max-width: 850px){#resume.svelte-jreg1s .parallax-background{height:25%}}",
  map: null
};
const ResumePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div id="resume" class="subpage svelte-jreg1s"><div class="lozad" data-toggle-class="parallax-background"></div> <header class="header-box" data-svelte-h="svelte-lupt53"><h1>I&#39;ll just leave this here</h1></header> <article class="main-article-wide"><p data-svelte-h="svelte-juwm6t"><a href="${escape(base, true) + "/assets/JHDeerin_Resume_Web.pdf"}" target="_blank">Download my one-page resume</a></p> ${validate_component(ResumeSection, "ResumeSection").$$render($$result, { title: "Education" }, {}, {
    default: () => {
      return `<a href="https://www.gatech.edu" data-svelte-h="svelte-1djnkgr"><b>Georgia Institute of Technology</b></a>, Atlanta, GA
			<ul data-svelte-h="svelte-139cagd"><li>August 2016 - December 2020</li> <li>B.S. Computer Science, Minor in Philosophy of Science</li> <li>GPA: 4.0/4.0</li></ul>`;
    }
  })} ${validate_component(ResumeSection, "ResumeSection").$$render($$result, { title: "Skills and Awards" }, {}, {
    default: () => {
      return `<ul data-svelte-h="svelte-1boh1bp"><li><b>Programming</b>: Python, C/C++, Ada, Java, Javascript, HTML, CSS</li> <li><b>Technologies</b>: Git, Vagrant, Vue.js, Atlassian Suite, Unity, Blender, GIMP/Photoshop</li> <li><b>Awards</b>: Eagle Scout, VGDev Exemplary Contributor, Bits of Good 2018 Best Team
					Project</li></ul>`;
    }
  })} ${validate_component(ResumeSection, "ResumeSection").$$render($$result, { title: "Experience" }, {}, {
    default: () => {
      return `${validate_component(ResumeExperienceItem, "ResumeExperienceItem").$$render(
        $$result,
        {
          workplace: "NASA Jet Propulsion Laboratory",
          workplaceLink: "https://www.jpl.nasa.gov",
          location: "Pasadena, CA",
          startTime: "May 2020",
          endTime: "August 2020",
          position: "Flight Software Engineering Intern",
          descriptions: [
            "Refactored C++ code on F’, a software framework for small-scale satellites used on Mars Helicopter",
            "Designed and implemented a command-line interface for the F’ Ground Data System in Python, including tab completion, UNIX integration, and multi-platform support",
            "Implemented a dynamic user-configurable GUI for the GDS using Vue.js and ES6/HTML/CSS"
          ]
        },
        {},
        {}
      )} ${validate_component(ResumeExperienceItem, "ResumeExperienceItem").$$render(
        $$result,
        {
          workplace: "Georgia Tech Research Institute",
          workplaceLink: "https://gtri.gatech.edu",
          location: "Atlanta, GA",
          startTime: "January 2018",
          endTime: "August 2019",
          position: "Electronic Warfare and Avionics Development Co-op",
          descriptions: [
            "Designed, implemented, and tested cross-platform radio communication and other libraries for Windows, Linux, and VxWorks 653 in Ada/C for use in electronic warfare systems in military aircraft",
            "Wrote 100+ unit and integration tests in Ada/C/C++ for over a dozen new and existing modules, catching multiple years-old bugs and assisting in safety-critical refactoring efforts"
          ]
        },
        {},
        {}
      )} ${validate_component(ResumeExperienceItem, "ResumeExperienceItem").$$render(
        $$result,
        {
          workplace: "12:34 MicroTechnologies",
          workplaceLink: "https://www.1234micro.com",
          location: "Lancaster, PA",
          startTime: "May 2017",
          endTime: "August 2017",
          position: "Web Development Intern",
          descriptions: [
            "Implemented a customer-management web app for 110+ Microsoft CSP customers in C#/ES6/HTML/CSS",
            "Researched and drafted reports on existing CSP customers, making recommendations on additional development services the company could offer; presented findings before CEO and Lead Developer"
          ]
        },
        {},
        {}
      )}`;
    }
  })} ${validate_component(ResumeSection, "ResumeSection").$$render($$result, { title: "Projects" }, {}, {
    default: () => {
      return `${validate_component(ResumeExperienceItem, "ResumeExperienceItem").$$render(
        $$result,
        {
          workplace: "Midtown Assistance Center Tutoring App",
          workplaceLink: "https://www.mac-tutoring.com",
          startTime: "August 2018",
          endTime: "April 2019",
          descriptions: [
            "Assisted in Bits of Good’s planning and development of a MERN-stack web app for connecting underprivileged students with tutors in the Atlanta area",
            "Improved UX by implementing tooltips and automatic sign-ins, based on user feedback"
          ]
        },
        {},
        {}
      )}`;
    }
  })} ${validate_component(ResumeSection, "ResumeSection").$$render($$result, { title: "Activities" }, {}, {
    default: () => {
      return `<ul data-svelte-h="svelte-ayu5zv"><li><a href="https://bitsofgood.org"><b>Bits of Good</b></a>, <i>Senior Developer</i>:
					Nonprofit software development, worked on web applications for World Water Relief and
					Midtown Assistance Center</li> <li><a href="http://www.vgdev.org"><b>VGDev</b></a>, <i>Member</i>: Game development, worked
					on VR FPS Bit.Spike and roguelike Shifting Dungeon</li> <li><a href="https://bitsofgood.org"><b>Baptist Collegiate Ministries</b></a>,
					<i>Bible Study Co-Leader</i>: Prayer team member and volunteer</li> <li><a href="http://quizbowl.gtorg.gatech.edu"><b>Georgia Tech Academic Team</b></a>,
					<i>Treasurer</i>: Helped organize/run multiple college tournaments</li></ul>`;
    }
  })}</article> </div>`;
});
const SampleWorkItem_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".work-caption.svelte-1cj3jkc.svelte-1cj3jkc{display:flex;flex-direction:column;justify-content:center;align-items:center;top:0;left:0;overflow:hidden;width:100%;height:100%;opacity:0;font-size:1em;text-align:center;transition:0.2s ease-out all;background:rgba(0, 0, 0, 0.5)}.work-caption.svelte-1cj3jkc.svelte-1cj3jkc:hover{opacity:100}.work-caption.svelte-1cj3jkc p.svelte-1cj3jkc{margin:0.5em}.work-item-background{background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:var(--background-image)}.sample-work-item.svelte-1cj3jkc.svelte-1cj3jkc{aspect-ratio:1/1}@media(min-width: 1920px){.work-caption.svelte-1cj3jkc.svelte-1cj3jkc{font-size:0.833vw}}",
  map: null
};
const SampleWorkItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { imgUrl = "" } = $$props;
  let { githubUrl = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imgUrl === void 0 && $$bindings.imgUrl && imgUrl !== void 0)
    $$bindings.imgUrl(imgUrl);
  if ($$props.githubUrl === void 0 && $$bindings.githubUrl && githubUrl !== void 0)
    $$bindings.githubUrl(githubUrl);
  $$result.css.add(css$3);
  return ` <div class="sample-work-item lozad svelte-1cj3jkc" style="${"--background-image: url(" + escape(imgUrl, true) + ")"}" data-toggle-class="work-item-background"><div class="work-caption svelte-1cj3jkc"><p class="svelte-1cj3jkc"><b>${escape(title)}</b></p> <p class="svelte-1cj3jkc">${escape(description)}</p> <p class="svelte-1cj3jkc"><a${add_attribute("href", githubUrl, 0)}>View on GitHub</a></p></div> </div>`;
});
const WorksPage_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#background-canvas.svelte-14nwa3e{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.display-grid.svelte-14nwa3e{display:grid;grid-gap:1px;grid-template-columns:1fr 1fr 1fr;grid-auto-rows:1fr;margin-left:20vw;padding:0;width:60vw}@media(max-width: 850px){.display-grid.svelte-14nwa3e{grid-template-columns:1fr 1fr;margin:0 auto;margin-top:1rem;width:100%}}",
  map: null
};
const WorksPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div id="works" class="subpage"><canvas id="background-canvas" class="svelte-14nwa3e"></canvas> <header class="header-box" data-svelte-h="svelte-18o09fd"><h1>My labor (and my leisure, too)</h1></header> <article class="display-grid svelte-14nwa3e">${validate_component(SampleWorkItem, "SampleWorkItem").$$render(
    $$result,
    {
      title: "2020 Website Redesign",
      description: "This website didn't design itself, y'know.",
      imgUrl: "/assets/img/redesigned_website.jpg",
      githubUrl: "https://github.com/JHDeerin/JHDeerin.github.io"
    },
    {},
    {}
  )} ${validate_component(SampleWorkItem, "SampleWorkItem").$$render(
    $$result,
    {
      title: "NASA F' CLI",
      description: "I created a command-line suite for NASA's F' project.",
      imgUrl: "/assets/img/tab_complete_commands_min.gif",
      githubUrl: "https://github.com/nasa/fprime"
    },
    {},
    {}
  )} ${validate_component(SampleWorkItem, "SampleWorkItem").$$render(
    $$result,
    {
      title: "N-Body Galaxy Simulation",
      description: "A browser-based galaxy simulation made for Computational Physics.",
      imgUrl: "/assets/img/galaxy_sim_ultramin.gif",
      githubUrl: "https://github.com/JHDeerin/PHYS3266_NBodyGalaxy"
    },
    {},
    {}
  )} ${validate_component(SampleWorkItem, "SampleWorkItem").$$render(
    $$result,
    {
      title: "Jake's CS Notes",
      description: "A dynamic website for hosting my class notes from Georgia Tech.",
      imgUrl: "/assets/img/notes_page.png",
      githubUrl: "https://github.com/JHDeerin/notesPageTest"
    },
    {},
    {}
  )} ${validate_component(SampleWorkItem, "SampleWorkItem").$$render(
    $$result,
    {
      title: "MAC Tutoring Website",
      description: "A Bits of Good 2018 project connecting underprivileged students with tutors.",
      imgUrl: "/assets/img/mac_tutoring.jpg",
      githubUrl: "https://github.com/GTBitsOfGood/midtown-assistance-center"
    },
    {},
    {}
  )} ${validate_component(SampleWorkItem, "SampleWorkItem").$$render(
    $$result,
    {
      title: "Bit.Spike",
      description: "VGDev's first game built for virtual reality.",
      imgUrl: "/assets/img/project_bitspike.jpg",
      githubUrl: "https://vgdev.gtorg.gatech.edu/game/bit-spike"
    },
    {},
    {}
  )}</article> <footer class="header-box" data-svelte-h="svelte-lw1tyz"><h2>...and the rest can be found <a href="https://github.com/JHDeerin">on GitHub</a></h2></footer> </div>`;
});
const ContactPage_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#contact.svelte-1mfh60e .parallax-background{background:url(/assets/img/contactPhoto.jpg) no-repeat scroll center center/cover;height:100%}#contact-header.svelte-1mfh60e.svelte-1mfh60e{margin-left:auto;margin-right:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;width:60vw;text-align:center;font-size:3vh}#contact-header.svelte-1mfh60e h1.svelte-1mfh60e{font-size:5.925vh;margin-bottom:5vh}#contact-header.svelte-1mfh60e img.svelte-1mfh60e{width:60%}#contact-header.svelte-1mfh60e .contact-icons{display:flex}#contact-header.svelte-1mfh60e .contact-icons svg{margin:3.125vh;width:10vh;height:10vh}@media(max-width: 850px){#contact-header.svelte-1mfh60e.svelte-1mfh60e{font-size:1.2em}#contact-header.svelte-1mfh60e h1.svelte-1mfh60e{font-size:2em}#contact-header.svelte-1mfh60e img.svelte-1mfh60e{width:100%}}",
  map: null
};
const ContactPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="contact" class="subpage svelte-1mfh60e"> <div class="lozad" data-toggle-class="parallax-background"></div> <header id="contact-header" class="header-box svelte-1mfh60e"><h1 class="svelte-1mfh60e" data-svelte-h="svelte-kty1sg">Let&#39;s have a talk</h1> <p data-svelte-h="svelte-phow0i">Have a question, concern, or just want to get in touch? No matter what, I&#39;d love to hear from
			you.</p> ${validate_component(ContactIcons, "ContactIcons").$$render($$result, { class: "contact-icons" }, {}, {})} <img src="${escape(base, true) + "/assets/img/jake_signature_white.png"}" alt="Jake Deerin" class="svelte-1mfh60e"></header> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".subpage{display:block;position:relative;overflow:hidden;padding:1px 0;width:100vw;min-height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="main" class="parallax-container">${validate_component(NavbarMenu, "NavbarMenu").$$render($$result, { selected: "Home" }, {}, {})} ${validate_component(HomePage, "HomePage").$$render($$result, {}, {}, {})} ${validate_component(AboutPage, "AboutPage").$$render($$result, {}, {}, {})} ${validate_component(ResumePage, "ResumePage").$$render($$result, {}, {}, {})} ${validate_component(WorksPage, "WorksPage").$$render($$result, {}, {}, {})} ${validate_component(ContactPage, "ContactPage").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default
};
