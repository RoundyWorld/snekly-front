import React from 'react';
import './page.css';
// import lovina from '../assets/lovina.png';

function Resume() {
	return (
        <div className='resume'>
            <div className="flex-container">
            <div className="flex-left">
                {/* <img src={lovina} alt="Lovina Roundy" className="profile-image" /> */}
            </div>
            <div className="flex-right">
                <header>
                <hr />
                <h1>Lovina Roundy</h1>
                <hr />
                <h2>Profile</h2>
                <p>Software engineer messing around. Also you can hire me.</p>
                <ul>
                    <li>6+ years software development</li>
                    <li>6+ years professional writing</li>
                    <li>Extensive experience with rest APIs, full-stack development, and user interactions</li>
                    <li>Passionate about solving real-world problems, eager to learn new technologies</li>
                </ul>
                <h2>Skills</h2>
                <ul>
                    <li>6+ years software development</li>
                    <li>6+ years professional writing</li>
                    <li>Extensive experience with rest APIs, full-stack development, and user interactions</li>
                    <li>Passionate about solving real-world problems, eager to learn new technologies</li>
                </ul>
                <h2>Contact</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/lovina-roundy/" target="_blank" rel="noopener noreferrer">Lovina's LinkedIn</a></li>
                    <li><a href="https://github.com/LovinaRoundy" target="_blank" rel="noopener noreferrer">Lovina's Github</a></li>
                    <li><a href="https://github.com/RoundyWorld" target="_blank" rel="noopener noreferrer">RoundyWorld's Github</a></li>
                </ul>
                </header>
            </div>
            </div>
            <div className="container">
            <h2>Experience</h2>
            <h3>Software Engineer, Recursion Pharmaceuticals</h3>
            <ul>
                <li>Built and maintained 3 PostgreSQL databases to store experiment data for over 2K experiments testing over 1M compounds. Assisted in updating AI analysis pipelines that aggregated ~23 petabytes of raw experiment data.</li>
                <li>Enabled internal and partner scientists to investigate processed experiment data with custom-built full-stack visualization tools.</li>
                <li>Maintained and iterated on internal access APIs to allow scientists to investigate post-analysis data.</li>
                <li>Improved application response times from minutes to seconds and sub-seconds and increased application stability while supporting datasets that were ~6 times wider and ~3 times longer.</li>
            </ul>
            <h3>Software Engineer, Domo</h3>
            <ul>
                <li>Built and maintained over two dozen connectors to social platform web APIs using Java. Extracted data from web APIs according to company and customer specifications.</li>
                <li>Wrote unit and integration tests for connectors using the Mockito framework. Monitored connector health using Domo's visualization and data gathering tools.</li>
                <li>Built front-end connector tools with Gradle, HTML, CSS, and JavaScript and researched the feasibility of new customer-requested connectors.</li>
                <li>Integrated Microsoft Azure speech and lang Cognitive Services into customer-facing chatbots.</li>
            </ul>
            <h3>Technical Writer, Xactware</h3>
            <ul>
                <li>Transitioned user manuals to a context-sensitive, interactive, multimedia user guide. Created and maintained content for 19 different product flavors in 7 different languages.</li>
                <li>Collaborated with 3 software development Scrum teams, including attending product demos and daily stand-ups, writing on-screen content, and documenting sprint information.</li>
                <li>Initiated the creation of a company-specific style guide with 2 other people. Organized a style committee that created and refined the company style guide.</li>
                <li>Researched and proposed the creation of a new, unified method for handling language translation across departments.</li>			
            </ul>
            </div>
        </div>
	);
};

export default Resume;



