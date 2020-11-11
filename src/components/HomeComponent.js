import React, { Component } from 'react'

class HomeComponent extends Component {
    render() {
        return (
            <div className='container mt-4 mb-4'>
                <dl className="row" >
                    <dt className="col-sm-2 lead"><u><strong>Description</strong></u></dt>
                    <dd className="col-sm-9 lead">Today, humanity is moving to work in the
                    digital space. While processing large amounts of informa-
                    tion in digital space, data processing systems can analyze
                    data, create logical inference systems and building some
                    conditions in which data must be homogeneous, similar,
                    and grouped into clusters. Such systems can analyze the
                    data and create logical output systems according to the
                    rules. Some conditions are required to build such systems:
                    the data must be homogeneous, similar to each other and
                    grouped into clusters. One way to help achieve this is
                    through clustered data analysis. There are a large number
                    of cluster analysis methods available today, but not all of
                    them provide positive results. The project offers criteria
                    that allow you to select algorithms that are appropriate
                    for application in a specific subject area, namely the
                    algorithmic complexity of the algorithm, the accuracy of
                    the object’s belonging to the cluster, the attribution of the
                    object to one or another cluster at the boundary of two
                    clusters, the ability to build from clusters fuzzy logic rules.
                    Also described is the architecture of the created system,
                    which clusters the data with different algorithms to use
                    from the desired area. The algorithms were tested to solve
                    the problem of data clustering to predict the degree of
                    server energy efficiency at certain values involved in the
                    processor frequency and number of cores calculations. The
                    use of algorithms allowed us to analyze and look at the
                    features of each, to determine the fuzzy C-average as the
                    most appropriate for this task.</dd>
                    <dt className="col-sm-2  mt-4 lead"><u><strong>Main goal</strong></u></dt>
                    <dd className="col-sm-9  mt-4 lead">
                        This project presents an approach of structuring fuzzy knowledge base in the format of
                        logical rules, taking into account the transformation of numerical values into terms of linguistic variables
                        and the use of optimal methods for formatting conflicting and duplicate rules under consideration of
                        their logical inter-connections. For visualization of these logical rules to use the metagraph theory
                        apparatus as a method of graphical analysis of complex logical structures has been used.
                    </dd>
                    <dt className="col-sm-2  mt-4 lead"><u><strong>Keywords</strong></u></dt>
                    <dd className="col-sm-9  mt-4 lead">Statistical data, fuzzy logic, fuzzy knowledge base, metagraph theory apparatus.</dd>
                </dl>
                <div className="row mt-4 ml-1" >
                    <div className="lead"><u><strong>Proposed data processing algorithm</strong></u></div>
                </div>
                <div className="row" >
                    <div className="col-sm-12 mt-4 lead">
                        Input data are submitted in any format, and then their processing and analysis is performed in
                        JSON format. Due to its conciseness compared to xml and csv, the json format is more efficient for
                        serializing complex structures.<br />
                        A step-by-step approach as follows is used to convert a data sample into a format of rules and
                        further work on them:
                        <ul>
                            <li>
                                Preprocessing of data sets applies pre-cleaning of data from randomly occurring errors, using
                                a combination of existing efficient approaches into a single algorithm that dynamically
                                analyzes the data and determines the necessary types of cleaning;
                            </li>
                            <li>
                                Building fuzzy logical rules using clustering algorithms;
                            </li>
                            <li>
                                Clearing the fuzzy knowledge base rule array from duplicates and conflicts.
                            </li>
                        </ul>
                        The input data which enter the system are processed, are influenced by a number of different
                        factors, such as: collecting and forming a set from various sources, transmitting it through the World
                        Wide Web, conditions for collecting information from sensors (temperature, mechanical influences),
                        software failures and many others. Each of these factors potentially reduces the quality of the data to be
                        processed. As a result, invalid, false, or missing values can occur in the final data sets, that makes it
                        almost impossible to obtain high-quality results of big data calculations. To increase the reliability of the
                        results when processing large amounts of calculated data, they are cleared of accidentally occurring
                        errors, for which the following basic algorithms are used to eliminate data incorrectness [4; 5]:
                        <ul>
                            <li>
                                Recover missed and damaged records;
                            </li>
                            <li>
                                Delete duplicate records;
                            </li>
                            <li>
                                Correction of peak and irrelevant values.
                            </li>
                        </ul>
                        At the next stage of processing of large amounts of data in the proposed system, the method is
                        used which will process, analyze data and build fuzzy logical rules using clustering algorithms. Universal
                        methods of clustering in the classical implementation are for example algorithms K-means and Fuzzy C-
                        means [2; 3]. When the system converts numerical values into terms of linguistic variables, then the
                        membership functions obtained at the stage of constructing membership functions from clusters, which
                        in turn are formed from statistical data, are used. After the stage of building membership functions, each
                        object from the input sample will create a separate new view rule like If … And …Then.<br />
                        It should be noted that this approach may create conflicting and duplicate rules. This is due to the
                        nature of the data, or the data at the boundaries of the cluster distribution fall into different clusters and
                        begins to contradict each other. Therefore, to avoid foregoing anomalies, the third stage is applied.
                        Forming a unique array of fuzzy knowledge base rules begins with combining the same rules. Each new
                        rule is added to an intermediate set with a weight of 1. Each duplicate rule will increase the weight of the
                        duplicate by the growth factor of the rule weight, which is usually k=1 and, accordingly, is not included
                        in the resulting set of rules. If the rule conflicts, it is entered in the intermediate sample as independent
                        and processed in the same way.<br />
                        But the resulting set of rules may contain conflicting rules. To eliminate them, the second stage
                        is performed, in which the set of rules is cleared of conflicts. From a set of conflicting rules (there can
                        be more than two of them), the rule with the highest weight is selected, and this rule will remain in the
                        resulting set, but its weight becomes equal to the arithmetic mean of all the weights of the conflicting
                        rules.<br />
                        The proposed above-mentioned algorithm is described in [7]. As a result of processing the set of
                        rules, a new set is obtained, in which there are no duplicate and conflicting rules. This set of rules can be
                        used in the inference mechanism. <br />
                        Some methods for visualizing the fuzzy knowledge base which were analyzed in [7] do not meet
                        the requirements for the speed of logical inference, reliability, and accuracy. Using a simple graph, it is
                        not possible to represent and visualize the logical relationships of interconnected sets of elements and
                        their interaction with other groups of elements. In this case, the method of generating images of graphs
                        and graph structures takes into account criteria that show which image is considered to be good. In [9],
                        criteria were identified and a comparative analysis of the presentation of fuzzy knowledge bases was
                        performed.<br />
                        The results of the aforementioned analysis allow us to propose a representation of the fuzzy 
                        knowledge base in the form of a metagraph. This method allows describing and visualizing the logical 
                        relationships of interrelated sets of elements and their interaction with other groups of elements. That is 
                        why it is appropriate and relevant to create software for automatic construction of metagraphs, which 
                        will visualize complex logical structures. This will allow us to visually edit logical structures, define and 
                        analyze their properties that are difficult to detect using a text or formal representation. Frequent changes 
                        in information in the fuzzy knowledge base lead to the need to update the metagraph image automatically, 
                        since this is difficult to implement manually [8]. <br />
                        In the proposed approach, metagraphs are used to verify the generated meta-descriptions of fuzzy 
                        knowledge bases and clean them from anomalous data. <br />
                        Formally, the design of many processes in reality is not always clear and therefore requires the 
                        use of a special mathematical apparatus for making decisions that are close to human thinking.
                    </div>
                </div>
            </div>
        )
    }
}


export default HomeComponent
