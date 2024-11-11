import React, { useState } from "react";

const Form = (props) => {
  return (
    <>
      <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="text-center">
            <h2>{props.toggleSubmit ? "Add Task" : " Edit Task"}</h2>
          </div>
          <form className="col-12 p-2" onSubmit={props.handleSubmit}>
            <label htmlFor="title" className="my-2">
              Enter Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              className="w-100 my-1 p-2"
              onChange={props.handleChangeTitle}
              value={props.inputTitle}
            />
            <label className="my-2" htmlFor="description">
              Enter Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              className="w-100 my-1 p-2"
              onChange={props.handleChangeDescription}
              value={props.inputDesc}
            />
            <label className="my-2" htmlFor="status">
              Select Status
            </label>
            <select
              className="form-select"
              name="status"
              defaultValue="Todo"
              onChange={props.handleChangeStatus}
            >
              <option value="Todo">Todo</option>
              <option value="InProgress">InProgress</option>
              <option value="Completed">Completed</option>
            </select>
            {/* <div className="text-center"> */}
            {props.toggleSubmit ? (
              <button className="btn btn-primary my-2">Save</button>
            ) : (
              <button className="btn btn-primary my-2">Update</button>
            )}
            {/* </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
