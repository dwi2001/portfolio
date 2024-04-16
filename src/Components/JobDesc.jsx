import React from "react";

const Jobdesc = ({ jobdesc }) => {
  if (!jobdesc || !jobdesc.length) {
    return <div>No job descriptions available</div>;
  }

  return (
    <div>
      <ul style={{ margin: "0 0" }}>
        {jobdesc.map((job, index) => (
          <div key={index}>
            <li style={{ margin: "-5px 0" }}>{job}</li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Jobdesc;
