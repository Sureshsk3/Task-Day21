import React, { useState } from "react";

function Body(props) {
  let [btn, btnFn] = useState(true);

  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>

          <img
            className="card-img-top"
            src={props.dataAll.images[0]}
            alt="..."
          />

          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props.dataAll.title}</h5>
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                &nbsp; &nbsp;
                <span style={{ color: "#000", fontWeight: "bold" }}>
                  {props.dataAll.rating}%
                </span>
              </div>
              <span
                className="text "
                style={{ color: "#000", fontWeight: "bold" }}
              >
                $ -&nbsp;{props.dataAll.price}
              </span>
              <span> {console.log(props.dataAll)} </span>
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {btn ? (
                <button
                  className="btn btn-success"
                  onClick={() => {
                    btnFn((prev) => !prev);
                    props.cartFn((current) => ++current);
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    btnFn((prev) => !prev);
                    props.cartFn((current) => --current);
                  }}
                >
                  Remove Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
