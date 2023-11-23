import React, { Component, useEffect } from "react";
import $ from "jquery";
import "jquery-validation";

class Form extends Component {

     


    componentDidMount() {
        // Fonction de validation
        $("#quickForm").validate({
          rules: {
            email: {
              required: true,
              email: true,                                                                                                                                                                                                  
            },
            password: {
              required: true,
              minlength: 5,
            },
            terms: {
              required: true,
            },
          },
          messages: {
            email: {
              required: "Please enter an email address",
              email: "Please enter a valid email address",
            },
            password: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long",
            },
            terms: "Please accept our terms",
          },
          errorElement: "span",
          errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            element.closest(".form-group").append(error);
          },
          highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid");
          },
          unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass("is-invalid");
          },
        });
      }
  render() {
    return (
      <div>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Quick Example</h3>
          </div>
          <form id="quickForm">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputFile">File input</label>
                <div className="input-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="exampleInputFile"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="exampleInputFile"
                    >
                      Choose file
                    </label>
                  </div>
                  <div className="input-group-append">
                    <span className="input-group-text">Upload</span>
                  </div>
                </div>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
