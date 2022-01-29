import React from 'react';
import PersonalInfo from '../Personal-Info/Personal-Info';
import Socials from '../socials/Socials';
import Skills from '../skills/Skills';
import Education from '../education/Education';
import ProjectsOrJobs from '../projects-or-jobs/projects-or-jobs';
import Projects from '../projects/Projects';
import Experience from '../experience/Experience';

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      personalInfo,
      socials,
      skills,
      education,
      projOrJob,
      projects,
      experience,
      helpers,
    } = this.props.allInfo;

    const { renderProjects } = this.props.allInfo.projOrJob;

    return (
      <div id="input-wrap">
        <PersonalInfo personalInfo={personalInfo} helpers={helpers} />
        <Socials socials={socials} helpers={helpers} />
        <Skills skills={skills} helpers={helpers} />
        <Education education={education} helpers={helpers} />
        <ProjectsOrJobs projOrJob={projOrJob} helpers={helpers} />

        {renderProjects === 'true' ? (
          <Projects projects={projects} helpers={helpers} />
        ) : (
          <Experience experience={experience} helpers={helpers} />
        )}
      </div>
    );
  }
}

export default InputArea;
