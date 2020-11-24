import React, { PureComponent } from 'react';
import Graph from './Graph';
import './Metagraph.css';
import graph from './UniqRules-92569867-14cd-430d-a485-2c753d3ae7d7.json';
import axios from 'axios';
import $ from 'jquery';

class Metagraph extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isNewFile: false,
      metaFileName: null,
      selectedFile: null,
      // data: graph,
      nodes: graph.nodes,
      links: graph.links,
      width: '0',
      height: '0'
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);   // handler for window resizing
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  singleFileUploadHandler = (event) => {
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append('metafile', this.state.selectedFile, this.state.selectedFile.name);
      axios.post('/api/profile/upload-metagraph', data, {
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
              console.log('filedata', response.data);
              // console.log('data', this.state.data)

              this.setState({ metaFileName: fileName })
              this.ocShowAlert(`File Uploaded`, '#3089cf');
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

  buildMetagraph = (event) => {
    axios.post('/api/profile/buildmetagraph', { metaFileName: this.state.metaFileName })
      .then((response) => {
        const message = 'No file uploaded';
        const nodeMessage = 'There`re no atributes id or group in nodes';
        const linkMessage = 'There`re no atributes id or group in nodes';
        const nokeysMessage = 'There`re no atributes nodes or links';
        if (response.data === message) {
          this.ocShowAlert(response.data, 'yellow');
        } else {
          if (response.data === nodeMessage) {
            this.ocShowAlert(response.data, 'yellow');
          } else {
            if (response.data === linkMessage) {
              this.ocShowAlert(response.data, 'yellow');
            } else {
              if (response.data === nokeysMessage) {
                this.ocShowAlert(response.data, 'yellow');
              } else {
                // Success
                let metaData = response.data;
                this.setState({ nodes: metaData.nodes, links: metaData.links });
                console.log('nodes', this.state.nodes)
                console.log('links', this.state.links)
                this.ocShowAlert(`Metagraph is ready`, '#3089cf');
              }
            }
          }
        }
      })
  };

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

  componentDidMount() {
    this.updateWindowDimensions();
    this.buildMetagraph();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    return (
      <div className='App'>
        {/* For Alert box*/}
        <div className='container'>
          <div id="oc-alert-container"></div>
          <div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
            <div className="card-header">
              <h3 style={{ color: '#555', marginLeft: '12px' }}>Metagraph Visualization</h3>
              <p className="text-muted" style={{ marginLeft: '12px' }}>Please upload your file only in .JSON format</p>
            </div>
            <div className="card-body">
              <p className="card-text">Please upload the file received after step <b>'Delete Duplicates and Conflicts; Formating data for Metagraph'</b></p>
              <input type="file" onChange={this.onChangeHandler} />
              <div className='row'>
                <div className="mt-5 ml-4">
                  <button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload!</button>
                </div>
                <div className="mt-5 ml-4">
                  <button className="btn btn-success" onClick={this.buildMetagraph}>Build Metagraph</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='App-body'>
          <div>
            <Graph
              nodes={this.state.nodes}
              links={this.state.links}
              width={this.state.width}
              height={this.state.height}
            />
          </div>
        </div>
      </div>
    );
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
}

export default Metagraph;
