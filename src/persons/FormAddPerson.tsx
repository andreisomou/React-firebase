import { Button, Form, Input, Radio, InputNumber } from "antd";
import { FormComponentProps } from "antd/lib/form/Form";
import React, { FormEvent } from "react";
import { useFirestore } from "react-redux-firebase";

type FormAddPersonProps = FormComponentProps;

function FormAddPersonImpl(props: FormAddPersonProps): JSX.Element {
  const { form } = props;
  const { validateFields, getFieldDecorator } = form;
  const firestore = useFirestore();
  const handleAddClick = (event: FormEvent<any>) => {
    event.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        values.done = false;
        firestore.collection("persons").add(values);
        form.resetFields();
      }
    });
  };
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 4 }
  };
  const buttonItemLayout = {
    wrapperCol: { span: 1, offset: 4 }
  };

  return (
    <Form onSubmit={handleAddClick}>
      <Form.Item label="Name" {...formItemLayout}>
        {getFieldDecorator("name", {
          rules: [{ required: true, message: "Please input your name!" }]
        })(<Input placeholder="Amory smith" />)}
      </Form.Item>
      <Form.Item label="Age" {...formItemLayout}>
        {getFieldDecorator("age", {
          rules: [{ required: true, message: "Please input your age!" }]
        })(<InputNumber placeholder="27" />)}
      </Form.Item>
      <Form.Item label="Gender" {...formItemLayout}>
        {getFieldDecorator("gender", {
          initialValue: 1,
          rules: [{ required: true, message: "Please input your gender!" }]
        })(
          <Radio.Group>
            <Radio value={1}>Male</Radio>
            <Radio value={0}>Female</Radio>
          </Radio.Group>
        )}
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}
const FormAddPerson = Form.create()(FormAddPersonImpl);
export default FormAddPerson;
