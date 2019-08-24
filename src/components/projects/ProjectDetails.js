import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;

  console.log(props);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio
            repellat, voluptas et illo numquam voluptatum corrupti quaerat
            dolorum, explicabo doloremque non alias consequatur vel, dolore nam
            ex impedit modi.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div className="">Posted by The Net Ninja</div>
          <div>2nd September. 2018</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
