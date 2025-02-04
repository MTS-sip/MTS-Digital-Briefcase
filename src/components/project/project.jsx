import PropTypes from 'prop-types';

function Project({ title, description, link }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Project</a>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;