import React, { Component } from 'react';
import data from './../assets/1-data.PNG';
import dataset from './../assets/2dataset.PNG';
import cluster3 from './../assets/3-cluster.PNG';
import cluster4 from './../assets/4-cluster.PNG';
import app from './../assets/5-app.PNG';
import model6 from './../assets/6-model.PNG';
import model7 from './../assets/7-model.PNG';
import visual from './../assets/8-visual.PNG';

class HomeComponent extends Component {
    render() {
        return (
            <div className='container mt-4 mb-4'>
                <div className="row" >
                    <div className="col-sm-5 lead">
                        Data volumes that require some analysis and process-
                        ing are growing steadily today. According to a source,
                        the average annual amount of data in the world
                        that needs processing is increasing exponentially. As a
                        result, information management takes more time and
                        resources than ever before. In order to minimize the
                        computational complexity of these processes, a number
                        of methods are being actively used and explored today to
                        improve efficiency and minimize the cost of processing
                        large amounts of data.
                        According to a research made by We Are Social and
                        Hootsuite, the number of people using the Internet has
                        increased over the past year, with more than 1 million
                        daily users appearing from 2018.
                    
                    </div>
                    <div className="col-sm-7">
                        <div className="card">
                            <img src={data} className="card-img-top" alt="data" />
                            <div className="card-body">
                                <h5 className="card-body">Increasing of average amount of data per year that needs processing</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-sm-12 lead">
                <ul>
                            <li>There are now 5.1 billion unique mobile users in
                            the world, an increase of 100 million over the last
                    year.
                    </li>
                            <li>The number of internet users reaches almost 4.4
                    billion, an increase of 366 million over the last year.</li>
                            <li>The number of active users of social media reaches
                            3.4 billion, an increase of 288 million over the last
                    year.</li>
                            <li>The number of mobile users on social media reaches
                    3.2 billion, an increase of 297 million.</li>
                        </ul>
                    </div> 
                </div>
                <div className="row" >
                    <div className="col-sm-12 lead">Looking at this data, it is clear that the amount of
                    content and data that users produce will also increase
                    steadily. According to a source [3], the amount of data
                    generated every second is more than 30,000 Gigabytes.
                    You can use clustering to analyze this data, which
                    can group similar computing objects into clusters and
                    show how many and how busy the servers are during
                    computing. Each of these groups should be processed
                    independently, which allows to manage the direct process
                    of processing, to determine the type of analysis and work
                    on information, to effectively allocate resources. It is
                    better for analysts to select groups of similar objects and
                    study their features separately than to study the entire
                    sample of data. When designing and developing real
                    smart systems, there is a problem - the formation of a
                    complex mathematical model that will include various
                    technical features of the equipment and the physical
                    characteristics of the environment (complex calculations
                    may require additional computational resources). In the
                    course of further development, it may be necessary to
                    take into account new conditions, which may lead to a
                    complete revision of the existing model. In this case,
                    different conditions can be defined as some rules (IF
                    ... THAN) using fuzzy logic. To get these rules, you
                    can use experts who set the terms themselves. And you
                    can teach the system to build these rules on its own,
                    using different clustering algorithms. Non-hierarchical
                    algorithms according to [4] are not suitable for large
                    volumes of data. Since the K-Means and Fuzzy C-
                    Means algorithms are universal, hierarchical clustering
                    algorithms are proposed in [5]. In order to have an idea
                    of how to choose the optimal algorithm for a particular
                    subject area, we need to solve the problem of which
                    algorithm is more appropriate to choose. Each algorithm
                    fits to its subject area, according to certain criteria. In [6]
                    it is proposed to determine the algorithmic complexity
                    of the algorithms, and in [7] it is proposed to determine
                    which of the algorithms is best suited for the construction
                    of fuzzy knowledge bases.
                    Consider solving the problem of predicting the degree
                    of energy efficiency of servers at certain values involved
                    in the process of calculating the processor frequency and
                    number of cores.
                    Clustering plays an important role in dealing with large
                    amounts of data, both in the modeling technique and as a
                    pre-processing step in many implementations of the data
                    mining process.
                    </div>
                </div>
                <div className="row mt-4 ml-1" >
                    <div className="lead"><u><strong>ALGORITHMS</strong></u></div>
                </div>
                <div className="row" >
                    <div className="col-sm-12 mt-4 lead">
                        <ul>
                            <li>
                                K-means algorithm Advantages of the method: ease
                                of use; speed of use; clarity and transparency of
                                the algorithm. Disadvantages of the method: the
                                algorithm is too sensitive to emissions that can
                                distort the mean; slow work on large databases;
                                the number of clusters must be set. The algorithm
                                of clear clustering has certain disadvantages: in the
                                process of work it is very difficult to determine the
                                degree of fuzzy (blurring) of cluster boundaries, and
                                the actual number of clusters cannot be calculated
                                mathematically, but is given by an expert at the
                                beginning of processing.
                            </li>
                            <li>
                                Fuzzy C-means fuzzy clustering algorithm. Advan-
                                tages: The fuzzy definition of an object in a cluster
                                allows you to identify objects on the border into
                                clusters. Disadvantages: Computational complexity,
                                cluster number assignment.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-sm-12 lead">
                        K-means Clustering K-means Clustering is one of
                        the machine learning algorithms. This algorithm is a
                        non-hierarchical, iterative method of clustering, it has
                        become very popular due to its simplicity, clarity of
                        implementation and high quality of work. The basic idea
                        of the k-means algorithm is that the data should be
                        broken down into clusters, after which the center of mass
                        for each cluster obtained in the previous step is iteratively
                        recalculated, then the vectors are again broken down into
                        clusters with new centers of mass. The purpose of the
                        algorithm is to divide n observations into k clusters so
                        that each observation belongs to only one cluster. [9]
                        Fuzzy C-Means Clustering Fuzzy C-means algorithm
                        is similar to the human thinking style, which in the future
                        will allow to create rules of fuzzy inference of type
                        Mamdani or Sugeno, allows to control degree of blur
                        of borders of clusters and to take into account fuzzy
                        belonging of certain data to a certain group, provides
                        more flexibility, than clear methods, allowing each point
                        in space belongs to several clusters. This algorithm
                        allows each data sample object to be located in each
                        cluster with a different degree of belonging and is less
                        sensitive to emissions. This method should solve the
                        problem of defining the identity of an object in a cluster
                        if it is on the boundary of several clusters. The fuzzy C-
                        mean algorithm is suitable if the clustering objects have
                        the following requirements:
                        <ul>
                            <li>
                                High dimensionality of data space   - objects are
                                described by a large number of attributes, therefore,
                                the algorithm should be adapted to work in high
                                dimensional data spaces.
                            </li>
                            <li>
                                Large amount of data.
                            </li>
                            <li>
                                Clustering is done to obtain fuzzy rules based on
                                built clusters.
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="row mt-4 ml-1" >
                    <div className="lead"><u><strong> COMPARISON OF CLUSTERING ALGORITHMS</strong></u></div>
                </div>
                <div className="row" >
                    <div className="col-sm-12 mt-4 lead">
                        Algorithmic complexity and performance To use clus-
                        tering algorithms, you need to understand their algorith-
                        mic complexity, because typically large datasets need
                        to be clustered. The larger the input sequence enters
                        the clustering input, the longer the algorithm will run.
                        According to [6], the time complexity of the K-means
                        O(ncdi) algorithm and the FCM of the O(ncd2i) al-
                        gorithm, where n is the number of points, the input
                        sequence, d is the amount of space dimension, c is the
                        number of clusters, and the number of iterations. That
                        is, as the number of clusters increases, the performance
                        of the FCM algorithm will decrease. The time spent
                        calculating the K-means algorithm will be 2 times greater
                        than that of the FCM algorithm. We can conclude that
                        K-means is the best algorithm for performance.
                    </div>
                </div>
                <div className="row mt-4 ml-1" >
                    <div className="lead"><u><strong>BUILDING FUZZY KNOWLEDGE BASES</strong></u></div>
                </div>
                <div className="row" >
                    <div className="col-sm-7 mt-4 lead">
                        You also need to understand the need for fuzzy
                        systems. If clustering is performed to construct fuzzy
                        rules, then it is better to choose the FCM algorithm.
                        This algorithm makes it possible to see the affiliation
                        of each object to the cluster and to determine which
                        cluster it belongs to, especially relevant for data that are
                        at the boundary of two clusters, that is, there is some
                        uncertainty about the choice of a point.<br />
                        In Fuzzy C Means clustering, more accuracy can be
                        achieved to determine the degree of belonging to each
                        point. For example, by adjusting the constant , this can
                        be achieved to minimize the criterion J. From the article
                        [7] we can conclude that by reducing , in order to
                        minimize the objective function, better data distribution
                        can be achieved. But for such improvement, it should be
                        noted that the execution time is significantly increased,
                        as the number of iterations increases. For K-clustering,
                        it is also suitable for fuzzy systems. However, looking
                        at Figure 3, it can be seen that this clustering “roughly”
                        separates points into clusters that are not accurate enough
                        for points at the cluster boundary.<br />
                        Practical implementation of the clustering algorithm
                        by example The algorithm was written in C # program-
                        ming language using the ASP.NET Core platform. In
                        terms of architecture, the application is completely client-
                        server. There is an explicit client level in the application,
                        such as a browser. And an application layer that uses
                        an algorithm to execute a clustering algorithm. The
                        application also uses REST technology. The project uses
                        an ASP.NET Core MVC Web-based API.<br />
                        The server side receives the data transmitted in the file
                        through the interface and performs fuzzy clustering with
                        the initial parameters specified by the expert (number of
                        clusters, precision, minimization). The client side of the
                        web application includes a graphical interface for data in-
                        put for processing, and a page for outputting data results.
                        The clustered data is displayed on the page as a graph
                        written using the open-source Javascript library Plotly.js.
                        Written on the popular libraries d3.js and slack.gl, it
                        is a high-level declarative graph library. For a clearer
                        and more convenient output, we have used the division
                        into three clusters, each responsible for red, green or
                        blue. Each point on the graph represents one dimension
                        in the dataset: its color is represented in RGB (red,
                        green, blue) format, where each parameter is a cluster
                        belonging. With this display method, you can show to
                        which cluster this dimension is most relevant, which
                        data has not been clustered accurately (these points are
                        marked in indeterminate gray). To obtain the result of the
                        experiment, a clustering of server energy efficiency data
                        (number of threads, data processing frequency, energy
                        consumed by the machine) was collected at the Dresden
                        University of Technology. In addition, processing was
                        performed with different clarity of cluster boundaries,
                        which made it possible to correct processing uncertainty.
                        As a result, an application was developed in which the
                        expert can process his data on different algorithms and
                        also to perform analytic on the basis of visualization,
                        adjusting the parameters - to set up clustering for the
                        conditions of his task.
                    </div>
                    <div className="col-sm-5 mt-4">
                        <div className="card">
                            <img src={dataset} className="card-img-top" alt="data" />
                            <div className="card-body">
                                <h5 className="card-body">The data set</h5>
                            </div>
                        </div> 
                        <div className="card">
                            <img src={cluster3} className="card-img-top" alt="data" />
                            <div className="card-body">
                                <h5 className="card-body">Clustering with clear allocation of clusters</h5>
                            </div>
                        </div>   
                        <div className="card">
                            <img src={cluster4} className="card-img-top" alt="data" />
                            <div className="card-body">
                                <h5 className="card-body">Fuzzy clustering. Each point has its own degree of belonging</h5>
                            </div>
                        </div>       
                        <div className="card">
                            <img src={app} className="card-img-top" alt="data" />
                            <div className="card-body">
                                <h5 className="card-body">Architecture of the created application</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 ml-1" >
                    <div className="lead"><u><strong>CONCLUSIONS</strong></u></div>
                </div>
                <div className="row" >
                    <div className="col-sm-6 mt-4 lead">
                        This part of project provides a comparative analysis of K-
                        means Clustering algorithms and Fuzzy C-means fuzzy
                        clustering algorithm and tested each for data taken from
                        Article [10] on the performance of computing servers.
                        Comparative analysis is carried out on the criterion of
                        algorithmic complexity of algorithms and on the criterion
                        of building fuzzy knowledge bases. And showed that
                        the K-means algorithm has less algorithmic complexity,
                        which will allow to spend less resources to execute
                        clustering algorithms. But fuzzy C-means is better suited
                        to building fuzzy knowledge bases, which allows you
                        to more gently divide objects into clusters and show
                        more precisely which cluster the object belongs to. This
                        will give a better opportunity to build fuzzy knowledge
                        bases. In the future, it is planned to use already given
                        clustering algorithms - to build fuzzy knowledge bases,
                        using different types of fuzzy inference rules.
                    </div>
                    <div className="col-sm-6 mt-4 ">
                    <div className="card">
                            <img src={model6} className="card-img-top" alt="data" />
                            <div className="card-body">
                                <h5 className="card-body">Visualization of clustered data with minimization of criterion J</h5>
                            </div>
                        </div>
                    </div> 
                    <div className='row'>  
                    <div className="col-sm-6 mt-4 ">
                        <div className="card">
                            <img src={model7} className="card-img-top" alt="data" />
                            <div className="card-body">
                                <h5 className="card-body">Visualization of clustered data with minimization of criterion J for</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 mt-4 ">
                        <div className="card">
                            <img src={visual} className="card-img-top" alt="data" />
                            <div className="card-body">
                                <h5 className="card-body">Visualization of the K-means algorithm for 2 clusters in 2-dimensional space</h5>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default HomeComponent
