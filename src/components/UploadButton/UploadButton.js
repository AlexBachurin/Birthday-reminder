import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import React, { useState } from "react";
import { beforeUpload, getBase64 } from "../../utils/uploadPicture";

const UploadButton = ({ imageUrl, setImageUrl }) => {
	const [loading, setLoading] = useState(false);
	//state to store picture

	const handleChange = (info) => {
		if (info.file.status === "uploading") {
			setLoading(true);
			return;
		}

		if (info.file.status === "done") {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, (url) => {
				setLoading(false);
				setImageUrl(url);
			});
		}
	};

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div
				style={{
					marginTop: 8,
				}}
			>
				Upload
			</div>
		</div>
	);
	return (
		<Upload
			name="avatar"
			listType="picture-card"
			className="avatar-uploader"
			showUploadList={false}
			action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
			beforeUpload={beforeUpload}
			onChange={handleChange}
		>
			{imageUrl ? (
				<img
					src={imageUrl}
					alt="avatar"
					style={{
						width: "100%",
					}}
				/>
			) : (
				uploadButton
			)}
		</Upload>
	);
};

export default UploadButton;
