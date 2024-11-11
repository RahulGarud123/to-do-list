import React from "react";

const List = (props) => {
  console.log(props.items);
  return (
    <>
      <div className="container py-2 ">
        <div className="col-3 d-flex justify-content-between align-items-center">
          <p className="fs-10">Search By Status</p>
        </div>
        <div className="col-3 d-flex justify-content-between align-items-center">
          <select
            className="form-select"
            name="status"
            defaultValue=""
            onChange={props.handleCheckStatus}
          >
            <option value="All">All</option>
            <option value="Todo">Todo</option>
            <option value="InProgress">InProgress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="container py-2 ">
        {props.deleteMessage ? (
          <p className="text-center text-danger">Item Deleted Successfully</p>
        ) : (
          ""
        )}
        {props.items.map((elem, index) => {
          let statusClassName = "";
          if (elem.status === "Todo") {
            statusClassName = "fs-14 badge rounded-pill bg-danger";
          } else if (elem.status === "InProgress") {
            statusClassName = "fs-14 badge rounded-pill bg-warning";
          } else if (elem.status === "Completed") {
            statusClassName = "fs-14 badge rounded-pill bg-success";
          }
          return (
            <div
              className="bg-danger row border rounded shadow p-6 mb-3 bg-white rounded  p-2"
              key={elem.id}
            >
              <div className="col-7 d-flex justify-content-between align-items-center">
                <p className="fs-10">
                  {elem.name} - {elem.desc}
                </p>
              </div>
              <div className="col-1 d-flex justify-content-between align-items-center">
                <p className={statusClassName}>{elem.status}</p>
              </div>
              <div className="col-1 d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-primary mx-6"
                  onClick={() => props.handleEdit(elem.id)}
                >
                  Edit
                </button>
              </div>
              <div className="col-1 d-flex justify-content-between align-items-center">
                {props.showDelete ? (
                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => props.handleDelete(elem.id)}
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
