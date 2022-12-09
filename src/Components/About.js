import React, { Component } from 'react'
import AboutImg from '../Components/About-Bg-Img.jpg'

export default class About extends Component {
    render() {
        return (
            <>
                <div className="container about-container">
                    <div className="card text-bg-dark">
                        <img src={AboutImg} className="card-img about-card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h3 className="card-title text-light line-height-about">About NewsMonkey App</h3>
                            <p className="card-text text-light line-height-about about-text">
                                NewsMonkey is a simple latest news fetching app for searching and retrieving live articles from all over the web.

                                News articles in NewsMonkey are written to inform and educate readers on current affairs/events. They are used to provide readers with information they need/want to know about the world around them. You will either be told what to write your article on or have a choice of topics related to the module this assessment is for.

                                News articles from NewsMonkey give as much information as possible at the time of publication; if a journalist writes about an ongoing case there may be limited information available, so they might interview people related to the case, or try find background information to help inform readers more.

                                News articles in NewsMonkey are written on a whole range of topics due to the large target audiences of newspapers. Most papers will have several sections ranging from current national and international affairs to sports and celebrity news. There are some papers, however which solely focus on a specific topic, therefore have a smaller target audience.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
