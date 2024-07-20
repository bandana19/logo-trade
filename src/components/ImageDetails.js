import React, { Fragment } from "react";

const ImageDetails = ({ showDetails, setShowDetails, data }) => {
  return (
    <Fragment>
      {showDetails && (
        <div className="image-details-modal">
          <div className="image-modal-box">
            <div className=" ">
              <div className="img-box">
                <img src={data.image} />
              </div>
              <button className="dowload-button">Next</button>
            </div>

            <div className=" p-2">
              <h1 className="product-title">{data.title}</h1>
              <p className="f-w">
                <span className="f-s">Brand Name: </span> Often, logos feature
                the name of the company or brand. If you have a specific brand
                name associated with the logo, that would typically be used.
              </p>

              <p className="f-w">
                <span className="f-s">Tagline: </span> Some logos include a
                tagline or slogan that summarizes the company's mission or
                values.
              </p>

              <h2 className="product-title">Description: </h2>
              <p className="f-w">
                <span className="f-s">Business Type: </span> The description
                related to the logo usually describes the nature of the
                business. For example, if your company is in technology, your
                logo might reflect themes like technology, innovation, or
                creativity.{" "}
              </p>
              <p className="f-w">
                <span className="f-s">Design Elements: </span> Describing the
                design elements of the logo such as colors, shapes, or symbols
                can provide insight into your brand's core values or
                personality.
              </p>

              <button
                className="cancle-button"
                onClick={() => setShowDetails(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ImageDetails;
