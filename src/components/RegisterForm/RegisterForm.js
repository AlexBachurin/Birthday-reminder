import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { Wrapper } from "./Wrapper";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ setShowLogin }) => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const onFinish = (values) => {
		// console.log("Received values of form: ", values);
		dispatch(createUserWithEmailAndPassword(values));
		navigate("/");
	};
	return (
		<Wrapper>
			<h2 className="title">Register</h2>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
			>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: "Please input your Username!",
						},
					]}
				>
					<Input
						prefix={<UserOutlined className="site-form-item-icon" />}
						placeholder="Username"
					/>
				</Form.Item>
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
						Register
					</Button>{" "}
					Or{" "}
					<button
						onClick={() => setShowLogin(true)}
						type="button"
						className="register-btn"
					>
						have an account? login now
					</button>
				</Form.Item>
			</Form>
		</Wrapper>
	);
};

export default RegisterForm;
