import Project from './Project';
import PropTypes from 'prop-types';

const Navigation = ({ section }) => {
  return (
    <section className="p-6">
      {section === "about" && (
        <div>
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg">Software developer and code.</p>
        </div>
      )}
      {section === "portfolio" && (
        <div>
          <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
          <p className="text-lg">Click here to view some of my projects:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Project title="Project One" description="Description of project one." link="#" />
            <Project title="Project Two" description="Description of project two." link="#" />
            <Project title="Project Three" description="Description of project three." link="#" />
          </div>
        </div>
      )}
      {section === "contact" && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg">I can be reached at <a href="mailto:example@example.com" className="text-blue-500">example@example.com</a></p>
        </div>
      )}
      {section === "resume" && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Resume</h1>
          <p className="text-lg">Resume link <a href="/resume.pdf" className="text-blue-500 underline">here</a>.</p>
        </div>
      )}
    </section>
  );
}

Navigation.propTypes = {
  section: PropTypes.string.isRequired,
};

export default Navigation;
