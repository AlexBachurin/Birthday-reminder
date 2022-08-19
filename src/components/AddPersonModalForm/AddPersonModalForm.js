import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { Wrapper } from "./Wrapper";
import { CloseOutlined } from "@ant-design/icons";
import UploadButton from "../UploadButton/UploadButton";

const { Option } = Select;

const AddPersonModalForm = ({ closeFormModal }) => {
	const [birthDate, setBirthDate] = useState("");
	const [birthdayError, setBirthdayError] = useState(false);
	//state for person image
	const [imageUrl, setImageUrl] = useState();
	//submit
	const onFinish = (values) => {
		if (!birthDate) {
			console.log("Please enter date");
			setBirthdayError(true);
		} else {
			console.log("Success:", values);
			const { name, prefix, phone } = values;
			const newUser = {
				name,
				phoneNumber: `+${prefix}${phone}`,
				photo: imageUrl,
				birthday: birthDate,
			};
			console.log(newUser);
		}
	};

	//date change control
	const onChange = (date, dateString) => {
		setBirthDate(dateString);
	};
	//prefix for phone
	const prefixSelector = (
		<Form.Item initialValue="7" name="prefix" noStyle>
			<Select style={{ width: 60 }}>
				<Option value="7">+7</Option>
				<Option value="375">+375</Option>
			</Select>
		</Form.Item>
	);
	//clear birthday error after 3 sec
	useEffect(() => {
		const timerId = setTimeout(() => {
			setBirthdayError(false);
		}, 3000);
		return () => {
			clearTimeout(timerId);
		};
	}, [birthdayError]);
	return (
		<Wrapper>
			<div className="modal-content">
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					// onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Name"
						name="name"
						rules={[{ required: true, message: "Please input person name" }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Phone"
						name="phone"
						rules={[
							{ required: false, message: "Please input your password!" },
						]}
					>
						<Input addonBefore={prefixSelector} style={{ width: "100%" }} />
					</Form.Item>

					<Form.Item
						label="Date"
						rules={[{ required: true, message: "Please pick a birthday date" }]}
					>
						<DatePicker onChange={onChange} />
						<p className="date-error">
							{birthdayError ? "Please enter date" : null}
						</p>
					</Form.Item>
					<Form.Item label="Photo" className="upload-item">
						<UploadButton imageUrl={imageUrl} setImageUrl={setImageUrl} />
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
				<CloseOutlined onClick={() => closeFormModal()} className="close-btn" />
			</div>
		</Wrapper>
	);
};

export default AddPersonModalForm;
