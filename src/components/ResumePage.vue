<template>
<div id="resume" class="subpage">
  <div class="lozad" data-toggle-class="parallax-background"></div>
  <header class="header-box">
    <h1>I'll just leave this here</h1>
  </header>
  <article class="main-article-wide">
    <p><a href="/assets/JHDeerin_Resume_Web.pdf" target="_blank">Download my one-page resume</a></p>

    <resume-section title="Education">
        <p><a href=""><b>Georgia Institute of Technology</b></a>, Atlanta, GA
            <ul>
                <li>August 2016 - December 2020 (Expected)</li>
                <li>B.S. Computer Science, Minor in Philosophy of Science</li>
                <li>GPA: 4.0/4.0</li>
            </ul>
        </p>
    </resume-section>

    <resume-section title="Skills and Awards">
        <p>
            <ul>
                <li><b>Programming</b>: Python, C/C++, Ada, Java, Javascript, HTML, CSS</li>
                <li><b>Technologies</b>: Git, Vagrant, Vue.js, Atlassian Suite, Unity, Blender, GIMP/Photoshop</li>
                <li><b>Awards</b>: Eagle Scout, VGDev Exemplary Contributor, Bits of Good 2018 Best Team Project</li>
            </ul>
        </p>
    </resume-section>

    <resume-section title="Experience">
        <resume-experience-item
            workplace="NASA Jet Propulsion Laboratory"
            location="Pasadena, CA"
            start-time="May 2020" end-time="August 2020"
            position="Flight Software Engineering Intern"
            :descriptions="[
                'Refactored C++ code on F’, a software framework for small-scale satellites used on Mars Helicopter',
                'Designed and implemented a command-line interface for the F’ Ground Data System in Python, including tab completion, UNIX integration, and multi-platform support',
                'Implemented a dynamic user-configurable GUI for the GDS using Vue.js and ES6/HTML/CSS',
            ]">
        </resume-experience-item>

        <resume-experience-item
            workplace="Georgia Tech Research Institute"
            location="Atlanta, GA"
            start-time="January 2018" end-time="August 2019"
            position="Electronic Warfare and Avionics Development Co-op"
            :descriptions="[
                'Designed, implemented, and tested cross-platform radio communication and other libraries for Windows, Linux, and VxWorks 653 in Ada/C for use in electronic warfare systems in military aircraft',
                'Wrote 100+ unit and integration tests in Ada/C/C++ for over a dozen new and existing modules, catching multiple years-old bugs and assisting in safety-critical refactoring efforts'
            ]">
        </resume-experience-item>

        <resume-experience-item
            workplace="12:34 MicroTechnologies"
            location="Lancaster, PA"
            start-time="May 2017" end-time="August 2017"
            position="Web Development Intern"
            :descriptions="[
                'Implemented a customer-management web app for 110+ Microsoft CSP customers in C#/ES6/HTML/CSS',
                'Researched and drafted reports on existing CSP customers, making recommendations on additional development services the company could offer; presented findings before CEO and Lead Developer'
            ]">
        </resume-experience-item>
    </resume-section>

    <resume-section title="Projects">
        <resume-experience-item
            workplace="Midtown Assistance Center Tutoring App"
            start-time="August 2018" end-time="April 2019"
            :descriptions="[
                'Assisted in Bits of Good’s planning and development of a MERN-stack web app for connecting underprivileged students with tutors in the Atlanta area',
                'Improved UX by implementing tooltips and automatic sign-ins, based on user feedback'
            ]">
        </resume-experience-item>
    </resume-section>

    <resume-section title="Activities">
        <p>
            <ul>
                <li><a href=""><b>Bits of Good</b></a>, <i>Senior Developer</i>: Nonprofit software development, worked on web applications for World Water Relief and Midtown Assistance Center</li>
                <li><a href=""><b>VGDev</b></a>, <i>Member</i>: Game development, worked on VR FPS Bit.Spike and roguelike Shifting Dungeon</li>
                <li><a href=""><b>Baptist Collegiate Ministries</b></a>, <i>Bible Study Co-Leader</i>: Prayer team member and volunteer</li>
                <li><a href=""><b>Georgia Tech Academic Team</b></a>, <i>Treasurer</i>: Helped organize/run multiple college tournaments</li>
            </ul>
        </p>
    </resume-section>
  </article>
</div>
</template>

<script>
import ResumeSection from './ResumeSection.vue'
import ResumeExperienceItem from './ResumeExperienceItem.vue'

export default {
  components: {
    'resume-experience-item': ResumeExperienceItem,
    'resume-section': ResumeSection
  }
}
</script>

<style scoped>
.parallax-background {
  background: url(/assets/img/resumePhoto.webp) no-repeat scroll right top/cover;
}
</style>
