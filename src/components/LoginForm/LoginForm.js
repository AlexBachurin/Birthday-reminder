import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { Wrapper } from "./Wrapper";
const LoginForm = ({ setShowLogin }) => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};
	return (
		<Wrapper>
			<h2 className="title">Login</h2>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
			>
				<Form.Item
					name="email"
					rules={[
						{
							type: "email",
							required: true,
							message: "Please input your Email!",
						},
					]}
				>
					<Input
						prefix={<UserOutlined className="site-form-item-icon" />}
						placeholder="Email"
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your Password!",
						},
					]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
					>
						Log in
					</Button>{" "}
					Or{" "}
					<button
						onClick={() => setShowLogin(false)}
						type="button"
						className="register-btn"
					>
						register now!
					</button>
				</Form.Item>
			</Form>
		</Wrapper>
	);
};

export default LoginForm;
