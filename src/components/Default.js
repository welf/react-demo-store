import React from "react";

const Default = props => {
  console.log(props);
  return (
    <section className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-uppercase text-title pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h4>
            the requested URL
            <span className="text-danger">
              {` ...${props.location.pathname}`}
            </span>{" "}
            does not exist
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Default;
