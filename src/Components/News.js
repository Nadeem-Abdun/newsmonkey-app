import React, { Component } from 'react'
import NewsItem from './NewsItem'
import loadingImg from './Loading-Gif.gif'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    // Empty Articles Array
    articles = []
    // Defaults and PropTypes
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    // String Capitalizing Function
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // Constructor
    constructor(props) {
        super(props)
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            pageSize: this.props.pageSize,
            totalResults: 0
        }
    }

    async componentDidMount() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        this.props.setProgress(100);

    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };
   
    render() {
        return (
            <>
                <div className="container mt-3">
                    {/* Heading for the News Component As Per Current Category */}
                    <h1 className='text-light text-center margin-heading'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines {this.capitalizeFirstLetter(this.props.county)}</h1>
                    <br />
                    {/* Providing Infinite Scroll for News Item component */}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<div className="loadingImg text-center my-2"><img src={loadingImg} alt="" /></div>}>
                        {/* News Item component imported from NewsItem.js */}
                        <div className="container">
                            <div className="row">
                                {this.state.articles.map((elements) => {
                                    return <div className="col-md-4" key={elements.url}>
                                        <NewsItem title={elements.title ? elements.title.slice(0, 58) : ""} description={elements.description ? elements.description.slice(0, 105) : ""} urlToImage={elements.urlToImage} url={elements.url} author={elements.author ? elements.author.slice(0, 33) : "Unknown"} source={elements.source.name} time={elements.publishedAt} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }
}

export default News
