import React, { Component } from 'react'
import NewsItem from './NewsItem'
import loadingImg from './Loading-Gif.gif'
import PropTypes from 'prop-types'

export class News extends Component {
    // Empty Articles Array
    articles = []  
    // Defaults and PropTypes
    static defaultProps={
        country: 'in',
        pageSize: 6,
        category: 'general',        
    }
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    // Constructor
    constructor(props) {
        super(props)
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            pageSize: this.props.pageSize
        }
    }
    // Code Before Refactoring-Till Video-33    
    // React LifeCycle Method
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfb1dd7809474bad80fa526a54424b30&pageSize=${this.props.pageSize}&page=1`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }
    // Previous Page Button Function
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfb1dd7809474bad80fa526a54424b30&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
        console.log('Previous')
    }
    // Next Page Button Function
    handleNextClick = async () => {
        if ((this.state.page + 1) > (Math.ceil((this.state.totalResults) / (this.state.pageSize)))) {
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfb1dd7809474bad80fa526a54424b30&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            })
        }
        console.log('Next');
    }
    
    // // Code After Refactoring-From Video-33  
    // async updateNews(){         
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfb1dd7809474bad80fa526a54424b30&page=${this.state.page}&pageSize=${this.props.pageSize}`
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    // }     
    // async componentDidMount() {
    //     this.updateNews()
    // }
    // handlePrevClick = async () => {
    //    this.setState({page: this.state.page - 1})
    //    this.updateNews()
    // }
    // handleNextClick = async () => {
    //    this.setState({page: this.state.page + 1})
    //    this.updateNews()
    // }

    render() {
        return (
            <>
                <div className="container mt-3">
                    {/* Heading for the News Component */}
                    <h1 className='text-light text-center'>NewsMonkey - Top Headlines</h1>
                    <br />
                    {/* Page Top Overlay of Previous and Next page buttons */}
                    <div className="container d-flex justify-content-between">
                        <button type="button" className="btn btn-dark px-3" onClick={this.handlePrevClick} disabled={this.state.page <= 1}> &larr; </button>
                        <button type="button" className="btn btn-dark px-3" onClick={this.handleNextClick} disabled={((this.state.page + 1) > (Math.ceil((this.state.totalResults) / (this.state.pageSize))))}> &rarr; </button>
                    </div>
                    {/* News Item component imported from NewsItem.js */}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((elements) => {
                            return <div className="col-md-4" key={elements.url}>
                                <NewsItem title={elements.title ? elements.title.slice(0, 58) : ""} description={elements.description ? elements.description.slice(0, 105) : ""} urlToImage={elements.urlToImage} url={elements.url} author={elements.author ? elements.author.slice(0, 33) : ""} source={elements.source.name} time={elements.publishedAt}/>
                            </div>
                        })}
                    </div>
                    {/*Loading image used while data is been fetched from API*/}
                    {this.state.loading && <div className="loadingImg text-center">
                        <img src={loadingImg} alt="" />
                    </div>}
                    {/* Page Bottom Overlay of Previous and Next page buttons */}
                    <div className="container d-flex justify-content-between">
                        <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page <= 1}> &larr; Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={((this.state.page + 1) > (Math.ceil((this.state.totalResults) / (this.state.pageSize))))}>Next &rarr; </button>
                    </div>
                </div>
            </>
        )
    }
}

export default News
