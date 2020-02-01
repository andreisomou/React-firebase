import React from "react";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded, useFirestoreConnect } from "react-redux-firebase";
import { SystemState } from "../store";
import { Table } from "antd";

const personsQuery = {
  collection: "persons",
  limitTo: 10
};
const columns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "age",
    dataIndex: "age"
  },
  {
    title: "gender",
    dataIndex: "gender",
    render: (genre: Number) => <>{genre === 1 ? "male" : "female"}</>
  }
];

function List(prop: any): JSX.Element {
  useFirestoreConnect(() => [personsQuery]);
  const persons = useSelector(
    (state: SystemState) => state.firestore.ordered.persons
  );
  if (!isLoaded(persons)) {
    return <div>Loading</div>;
  }
  if (isEmpty(persons)) {
    return <div>Persons list is empty</div>;
  }
  return (
    <ul>
      <Table columns={columns} dataSource={persons} bordered />
    </ul>
  );
}

export default List;
