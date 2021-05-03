import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
var fileDownload = require('js-file-download');
// var fs = require('fs');
class Clean extends Component {
    constructor(props) {
        super(props);
        this.state = {
            centroid: null,
            ReplaceMissingValue: false,
            FilterData: false,
            filePath: null,
            selectedFile: null,
            filekey: null,
            newFileName: null,
            NormalizeData: false
        }
        this.handleChangeClusternumber = this.handleChangeClusternumber.bind(this);
        this.handleChangeTerms = this.handleChangeTerms.bind(this);
        this.handleChangeNormalizeData = this.handleChangeNormalizeData.bind(this);
    }



    handleChangeClusternumber(event) {
        this.setState({ FilterData: event.target.value });
    }
    handleChangeNormalizeData(event) {
        this.setState({ NormalizeData: event.target.value });
    }
    handleChangeTerms(event) {
        this.setState({ ReplaceMissingValue: event.target.value });
    }

    singleFileChangedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    };

    singleFileUploadHandler = (event) => {
        const data = new FormData();
        data.append('cleanseParams', `{'FilterData' : ${this.state.FilterData},'ReplaceMissingValue': ${this.state.ReplaceMissingValue}, 'NormalizeData': ${this.state.NormalizeData}}`);
        // data.append('FilterData', `${this.state.FilterData}`);
        // data.append('NormalizeData', `${this.state.NormalizeData}`);
        data.append('File', this.state.selectedFile);
        // data.append('ReplaceMissingValue', `${this.state.ReplaceMissingValue}`);
        console.log(data)
        var config = {
            method: 'post',
            url: 'https://fkb-dev.azurewebsites.net/api/cleanse',
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data`
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                fileDownload((response.data), 'Cluster.csv');
                // console.log(JSON.stringify( response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

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
                        <p className="text-muted" style={{ marginLeft: '12px' }}>Please upload your file only in .CSV format</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Filter Data</p>
                        <input type='text' value={this.state.FilterData} onChange={this.handleChangeClusternumber} />
                        <p className="card-text">Replace Missing Value</p>
                        <input type='text' value={this.state.ReplaceMissingValue} onChange={this.handleChangeTerms} />
                        <p className="card-text">Normalize Data</p>
                        <input type='text' value={this.state.NormalizeData} onChange={this.handleChangeNormalizeData} />
                        <p className="card-text">Select your local file for clustering</p>
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

export default Clean;
