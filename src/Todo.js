import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const Todo = () => {
  const [showForm, setshowform] = useState(true);
  const [showNew, setshowNew] = useState(true);
  const [showDelete, setshowDelete] = useState(true);
  const [toggleSubmit, settoggleSubmit] = useState(true);
  const [isEditItem, setisEditItem] = useState(null);
  const [showList, setshowList] = useState(true);
  const [editMessage, seteditMessage] = useState(false);
  const [deleteMessage, setdeleteMessage] = useState(false);
  const [deleteMessagesuccess, setdeleteMessagesuccess] = useState(false);
  const [inputTitle, setinputTitle] = useState("");
  const [inputDesc, setinputDesc] = useState("");
  const [inputStatus, setinputStatus] = useState("");
  // const [checkStatus, setCheckStatus] = useState(null);
  const [items, setitems] = useState([
    {
      id: "001",
      name: "Default Task",
      desc: "Default Description",
      status: "Todo",
    },
  ]);

  //   HANDLING INPUT FIELDS
  const handleChangeTitle = (e) => {
    setinputTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setinputDesc(e.target.value);
  };
  const handleChangeStatus = (e) => {
    setinputStatus(e.target.value);
  };
  //   HANDLING INPUT FIELDS

  //   SUBMITTING FORM
  const handleSubmit = (e) => {
    setshowList(true);
    setshowNew(true);

    e.preventDefault();
    if (!inputTitle || !inputDesc || !inputStatus) {
      alert("fill data");
      showList(false);
    } else if (inputTitle && !toggleSubmit) {
      setitems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return {
              ...elem,
              name: inputTitle,
              desc: inputDesc,
              status: inputStatus,
            };
          }
          return elem;
        })
      );

      setinputTitle("");
      setinputDesc("");
      setinputStatus("");
      settoggleSubmit(true);
      setshowform(true);
      setshowDelete(true);
    } else {
      const allinputTitle = {
        id: new Date().getTime().toString(),
        name: inputTitle,
        desc: inputDesc,
        status: inputStatus,
      };
      setitems([allinputTitle, ...items]);
      setinputTitle("");
      setinputDesc("");
      setinputStatus("");
      setshowform(true);
    }
  };
  //   SUBMITTING FORM

  //   DELETE
  const handleDelete = (index) => {
    console.log(index);
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setdeleteMessage(true);

    setTimeout(() => {
      setitems(updatedItems);
      setdeleteMessage(false);
    }, 2000);
    setdeleteMessagesuccess(false);
  };
  //   DELETE

  //   EDIT
  const handleEdit = (id) => {
    setshowList(false);
    setshowDelete(false);
    setshowNew(false);
    setshowform(true);

    settoggleSubmit(false);
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setinputTitle(newEditItem.name);
    setinputDesc(newEditItem.desc);
    setinputStatus(newEditItem.status);
    // setshowDelete(true)

    setisEditItem(id);
    console.log(newEditItem);
  };
  //   EDIT

  // ADD NEW TASK
  const handleAdd = () => {
    //   alert("hello")
    setshowform(true);
    setshowList(true);
    setshowNew(false);
  };
  // ADD NEW TASK

  const handleCheckStatus = (e) => {
    console.log(items);
    setitems(
      items.filter((elem) => {
        console.log(elem.status);
        console.log(typeof elem.status);
        console.log(e.target.value);
        console.log(typeof e.target.value);
        if (elem.status === e.target.value) {
          return {
            ...elem,
            name: inputTitle,
            desc: inputDesc,
            status: inputStatus,
          };
        }
        return elem;
      })
    );
  };

  return (
    <>
      {showNew ? (
        <div className="container">
          <div className="col-12 text-end">
            <button className="btn btn-primary " onClick={handleAdd}>
              New
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {showForm ? (
        <Form
          toggleSubmit={toggleSubmit}
          handleSubmit={handleSubmit}
          handleChangeTitle={handleChangeTitle}
          inputTitle={inputTitle}
          handleChangeDescription={handleChangeDescription}
          inputDesc={inputDesc}
          handleChangeStatus={handleChangeStatus}
        />
      ) : (
        ""
      )}

      {showList ? (
        <List
          items={items}
          deleteMessage={deleteMessage}
          showDelete={showDelete}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleCheckStatus={handleCheckStatus}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Todo;
