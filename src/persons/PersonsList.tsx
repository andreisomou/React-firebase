import { Card } from "antd";
import React, { PureComponent } from "react";
import FormAddPerson from "./FormAddPerson";
import styled from "styled-components";
import List from "./List";

class PersonsList extends PureComponent {
  public render() {
    return (
      <div>
        <Card bordered={false} title="Add User" id="add-user">
          <FormAddPerson />
        </Card>
        <StyledList>
          <List />
        </StyledList>
      </div>
    );
  }
}
const StyledList = styled.div``;
export default PersonsList;
