import React, { Component } from 'react';
import './StepsComponent.css'

class StepsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DATA: [{
                name: 'Clear Statistical Data',
                info: 'Preprocessing of data sets applies pre-cleaning of data from randomly occurring errors, using a combination of existing efficient approaches into a single algorithm that dynamically analyzes the data and determines the necessary types of cleaning',
                link: 'https://ru.wikipedia.org/wiki/%D0%9E%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85'
            }, {
                name: 'Create Clusters',
                info: 'Building fuzzy logical rules using universal methods of clustering in the classical implementation. They are algorithms K-means and Fuzzy C-means',
                link: 'https://neerc.ifmo.ru/wiki/index.php?title=%D0%9A%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F'
            },
            {
                name: 'Delete Duplicates and Conflicts; Formating data for Metagraph',
                info: 'Clustering method may create conflicting and duplicate rules. This block is used to create unique array of fuzzy knowledge base rules and conducting an additional automatic procedure for formatting rules according to the principle of nodes and links',
                link: '/uploads'
            },
            {
                name: 'Visualization of Metagraph',
                info: 'This block presents the use of methods of visualization of fuzzy logical rules in the form of a metagraph, as a new method of graphical analysis of complex logical structures. It allows describing and visualizing the logical relationships of interconnected sets of elements and their interaction with other groups of elements.',
                link: '/metagraph'
            }]
        };
    }

    render() {
        return (
            <div className='StepComponent'>
                <div className='list'>
                    {this.state.DATA.map((item, index) => {
                        return (
                            <div key={index} className='list-of-items'>
                                <div className='title-name'>{item.name}</div>
                                <div className='points'>
                                    <p id='point'>{item.info}</p>
                                </div>
                                <div className='rectangle'></div>
                                <div className='order'>
                                    <a id='button-order' href={item.link} type='button'>GO</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        )
    }
}


export default StepsComponent;