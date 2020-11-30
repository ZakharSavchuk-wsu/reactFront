import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
var fileDownload = require('js-file-download');
const serverAddress = 'http://diginet-server';
class FileUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filePath: null,
			selectedFile: null,
			filekey: null,
			newFileName: null
		}
	}

	singleFileChangedHandler = (event) => {
		this.setState({
			selectedFile: event.target.files[0]
		});
	};

	singleFileUploadHandler = (event) => {
		const data = new FormData();
		// If file selected
		if (this.state.selectedFile) {
			data.append('profileImage', this.state.selectedFile, this.state.selectedFile.name);
			axios.post(`${serverAddress}/api/profile/profile-img-upload`, data, {
				headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				}
			})
				.then((response) => {
					if (200 === response.status) {
						// If file size is larger than expected.
						if (response.data.error) {
							if ('LIMIT_FILE_SIZE' === response.data.error.code) {
								this.ocShowAlert('Max size: 2MB', 'red');
							} else {
								console.log(response.data);
								// If not the given file type
								this.ocShowAlert(response.data.error, 'red');
							}
						} else {
							// Success
							let fileName = response.data;
							// console.log('filedata', fileName);
							this.setState({ filekey: fileName.image, filePath: fileName.location })
							this.ocShowAlert('File Uploaded', '#3089cf');
							console.log(this.state.filekey)
							console.log(this.state.filePath)
						}
					}
				}).catch((error) => {
					// If another error
					this.ocShowAlert(error, 'red');
				});
		} else {
			// if file not selected throw error
			this.ocShowAlert('Please upload file', 'red');
		}
	};

	fileFilter = (event) => {
		axios.post(`${serverAddress}/api/profile/filter`, { filePath: this.state.filePath })
			.then((response) => {
				const message = 'No file uploaded';
				const qosMessage = 'There`s no atribute like qos';
				if (response.data === message) {
					this.ocShowAlert(response.data, 'yellow');
				} else {
					if (response.data === qosMessage) {
						this.ocShowAlert(response.data, 'blue');
					} else {
						// Success
						let someData = response.data;
						// console.log(someData);
						this.setState({ newFileName: someData });
						this.ocShowAlert(`File Filtered`, '#3089cf');
						console.log(this.state.newFileName);
					}
				}
			})
	};

	fileDownload = (event) => {
		axios.post(`${serverAddress}/api/profile/filedownload`, { responseType: 'blob', newFileName: this.state.newFileName })
			.then((response) => {
				const message = 'No file uploaded';
				// const qosMessage = 'There`s no atribute like qos';
				if (response.data === message) {
					this.ocShowAlert(response.data, 'yellow');
				} else {
					// 	if (response.data === qosMessage) {
					// 		this.ocShowAlert(response.data, 'blue');
					// 	} else {
					// Success
					fileDownload(JSON.stringify(response.data, null, ' '), 'UniqRule.json');
					console.log(response.data);
					// this.setState({ newFileName: someData });
					// this.ocShowAlert(`File Filtered`, '#3089cf');
					// console.log(this.state.newFileName);
				}
				// }
			})
	};

	// ShowAlert Function
	ocShowAlert = (message, background = '#3089cf') => {
		let alertContainer = document.querySelector('#oc-alert-container'),
			alertEl = document.createElement('div'),
			textNode = document.createTextNode(message);
		alertEl.setAttribute('class', 'oc-alert-pop-up');
		$(alertEl).css('background', background);
		alertEl.appendChild(textNode);
		alertContainer.appendChild(alertEl);
		setTimeout(function () {
			$(alertEl).fadeOut('slow');
			$(alertEl).remove();
		}, 10000);
	};

	render() {
		return (
			<div className='container'>
				{/* For Alert box*/}
				<div id="oc-alert-container"></div>
				{/* Single File Upload*/}
				<div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
					<div className="card-header">
						<h3 style={{ color: '#555', marginLeft: '12px' }}>Single File Upload</h3>
						<p className="text-muted" style={{ marginLeft: '12px' }}>Please upload your file only in .JSON format</p>
					</div>
					<div className="card-body">
						<p className="card-text">Select your local file for filtering</p>
						<input type="file" onChange={this.singleFileChangedHandler} />
						<div className='row'>
							<div className="mt-5 ml-4">
								<button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload!</button>
							</div>
							<div className="mt-5 ml-4">
								<button className="btn btn-success" onClick={this.fileFilter}>Filter!</button>
							</div>
							<div className="mt-5 ml-4">
								{/* <a className="btn btn-success" href={this.state.locationFile} >Download!</a> */}
								<button className="btn btn-success" onClick={this.fileDownload} >Download!</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FileUpload;