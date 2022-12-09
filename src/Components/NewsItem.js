import React, { Component } from 'react'
import AlterNewsImg from '../Components/Alternate-News-Img.png'

export class NewsItem extends Component {
    render() {
        let { title, description, urlToImage, url, author, source, time } = this.props;
        return (
            <>
                <div className="my-2">
                    <div className="card bg-dark text-light">
                        {/* NewsItem Source Badge*/}
                        <span className="position-absolute top-0 start-0 translate-end badge rounded-pill bg-danger">{source}</span>
                        {/* NewsItem Card Image*/}
                        <img src={!urlToImage ? AlterNewsImg : urlToImage} className="card-img-top card-img" alt="..." />
                        {/*NewsItem Card Body*/}
                        <div className="card-body">
                            <h5 className="card-title text-blue">{title}...</h5>
                            <small><p className="card-text text-blue">Author : {author}...</p></small>
                            <p className="card-text text-blue mb-0">{description}...</p>
                            <p className="card-text mt-0"><small className="text-muted">{new Date(time).toUTCString()}</small></p>
                            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
