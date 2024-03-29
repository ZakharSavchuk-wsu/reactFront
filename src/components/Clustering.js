import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { v4 as uuidv4 } from 'uuid'
import { CLEANER_ENDPOINTS } from './constants/constants';
var fileDownload = require('js-file-download');
// var fs = require('fs');

const dumpClusterCounts = 3
class Clustering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            centroid: null,
            Terms: '',
            NumberOfClusters: 0,
            filePath: null,
            selectedFile: null,
            filekey: null,
            newFileName: null,
            isFakeLoading: false,
            termsData: [
                {
                    id: uuidv4(),
                    value: ''
                }
            ]
        }
        this.handleChangeClusternumber = this.handleChangeClusternumber.bind(this);
        this.handleChangeTerms = this.handleChangeTerms.bind(this);
    }



    handleChangeClusternumber(event) {
        this.setState({ NumberOfClusters: event.target.value });
    }
    handleChangeTerms(event) {
        this.setState({ Terms: event.target.value });
    }

    handleChangeTermsData = (id) => (event) => {
        const { termsData } = this.state
        const { value } = event.target
        const newTermsData = termsData.map(term => {
            if (term.id === id) return { ...term, value }
            return term
        })
        this.setState({ termsData: newTermsData })
    }

    handleAddTerm = () => {
        const newTerm = {
            id: uuidv4(),
            value: ''
        }
        this.setState(prev => ({
            termsData: [...prev.termsData, newTerm]
        }))
    }

    handleRemoveTerm = (id) => () => {
        const { termsData } = this.state
        const newTermsData = termsData.filter(term => term.id !== id)
        this.setState({ termsData: newTermsData })
    }

    singleFileChangedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            isFakeLoading: true
        });

        setTimeout(() => {
            this.setState({
                NumberOfClusters: dumpClusterCounts,
                isFakeLoading: false
            })
        }, 2000)
    };

    generateTermString = (data) => {
        const generatedString = data.map((term, index) => {
            return `${index}:${term.value}`
        }).join(';')
        return generatedString
    }

    singleFileUploadHandler = (event) => {
        const data = new FormData();

        data.append('NumberOfClusters', `${this.state.NumberOfClusters}`);
        data.append('File', this.state.selectedFile);
        data.append('Terms', `${this.generateTermString(this.state.termsData)}`);
        var config = {
            method: 'post',
            url: CLEANER_ENDPOINTS.CLUSTERING,
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data`
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                fileDownload(JSON.stringify(response.data, null, ' '), 'Cluster.json');
                console.log(JSON.stringify(response.data));
                // this.setState({
                //     centroid: centr.centroids
                // })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // fileFilter = (event) => {
    //     axios.post(`/api/profile/filter`, { filePath: this.state.filePath })
    //         .then((response) => {
    //             const message = 'No file uploaded';
    //             const qosMessage = 'There`s no atribute like qos';
    //             if (response.data === message) {
    //                 this.ocShowAlert(response.data, 'yellow');
    //             } else {
    //                 if (response.data === qosMessage) {
    //                     this.ocShowAlert(response.data, 'blue');
    //                 } else {
    //                     // Success
    //                     let someData = response.data;
    //                     // console.log(someData);
    //                     this.setState({ newFileName: someData });
    //                     this.ocShowAlert(`File Filtered`, '#3089cf');
    //                     console.log(this.state.newFileName);
    //                 }
    //             }
    //         })
    // };

    // fileDownload = (event) => {
    //     axios.post(`/api/profile/filedownload`, { responseType: 'blob', newFileName: this.state.newFileName })
    //         .then((response) => {
    //             const message = 'No file uploaded';
    //             // const qosMessage = 'There`s no atribute like qos';
    //             if (response.data === message) {
    //                 this.ocShowAlert(response.data, 'yellow');
    //             } else {
    //                 // 	if (response.data === qosMessage) {
    //                 // 		this.ocShowAlert(response.data, 'blue');
    //                 // 	} else {
    //                 // Success
    //                 fileDownload(JSON.stringify(response.data, null, ' '), 'UniqRule.json');
    //                 console.log(response.data);
    //                 // this.setState({ newFileName: someData });
    //                 // this.ocShowAlert(`File Filtered`, '#3089cf');
    //                 // console.log(this.state.newFileName);
    //             }
    //             // }
    //         })
    // };

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
        const { termsData, NumberOfClusters, isFakeLoading } = this.state
        return (
            <div className='container'>
                {/* For Alert box*/}
                <div id="oc-alert-container"></div>
                {/* Single File Upload*/}
                <div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
                    <div className="card-header">
                        <h3 style={{ color: '#555', marginLeft: '12px' }}>Single File Upload</h3>
                        <p className="text-muted" style={{ marginLeft: '12px' }}>Please upload your file only in .CSV format</p>
                    </div>
                    <div className="card-body">
                        {/* <p className="card-text">Enter number of clusters</p>
                        <input type='text' value={this.state.NumberOfClusters} onChange={this.handleChangeClusternumber} />
                        <p className="card-text">Select your local file for clustering</p> */}
                        {/* <p className="card-text">0:low;1:middle;2:high;3:very-high</p> */}
                        {/* <input type='text' value={this.state.Terms} onChange={this.handleChangeTerms} /> */}
                        {isFakeLoading &&
                            <div class="d-flex align-items-center mb-3">
                                <strong>Data is procesing...</strong>
                                <div class="spinner-border ml-1 text-primary" role="status" aria-hidden="true"></div>
                            </div>
                        }
                        {NumberOfClusters ?
                            <div
                                className='inputsWrapper mb-3'
                            >
                                <div class="alert alert-primary" role="alert">
                                    The system identified 3 clusters
                                </div>
                                {termsData.map(term => {
                                    const { id, value } = term
                                    return (
                                        <div
                                            className='inputWithClose mt-1'
                                        >
                                            <input
                                                key={id}
                                                type='text'
                                                value={value}
                                                onChange={this.handleChangeTermsData(id)}
                                            />
                                            <button
                                                onClick={this.handleRemoveTerm(id)}
                                                className='abortButton btn-danger'
                                                disabled={termsData.length === 1}
                                            >
                                                ABORT
                                            </button>
                                        </div>
                                    )
                                })}
                                {termsData.length < dumpClusterCounts &&
                                    <div className="mt-2">
                                        <button className="btn btn-success" onClick={this.handleAddTerm}>Add term data</button>
                                    </div>
                                }
                            </div> : null
                        }
                        <input type="file" onChange={this.singleFileChangedHandler} />
                        <div className='row'>
                            <div className="mt-5 ml-4">
                                <button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload!</button>
                            </div>
                            {/* <div className="mt-5 ml-4">
                                <button className="btn btn-success" onClick={this.fileFilter}>Filter!</button>
                            </div>
                            <div className="mt-5 ml-4">
                                <a className="btn btn-success" href={this.state.locationFile} >Download!</a>
                                <button className="btn btn-success" onClick={this.fileDownload} >Download!</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clustering;
