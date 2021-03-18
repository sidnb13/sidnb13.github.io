/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import '../index.css';

class ScioEvent extends Component {
    render() {
        return (
            <div className="dark:bg-gray-400 bg-gray-700 rounded-2xl shadow-2xl overflow-hidden h-auto transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-100">
                <img src={this.props.img} alt="" className="object-cover h-64 lg:h-max w-max mx-auto opacity-75"></img>
                <div className="p-5">
                    <div className="flex justify-between">
                        <a href={this.props.eventLink} target="_blank">
                            <h1 className={this.props.textColors + " text-2xl font-bold hover:underline"}>{this.props.eventName}</h1>
                        </a>
                        <p className="dark:text-gray-600 text-gray-500 text-base uppercase font-bold my-2">{this.props.years}</p>
                    </div>
                    <h2 className="dark:text-gray-600 text-gray-500 text-sm uppercase font-bold mb-2">{this.props.category}</h2>
                    <p className="dark:text-black text-gray-400 top-0 right-0">
                        {this.props.writeup}
                    </p>
                    <h1 className="dark:text-black text-gray-300 text-lg font-semibold my-2">Awards</h1>
                    <p className="dark:text-black text-gray-400 mr-4">
                        {this.props.awards}
                    </p>
                    {
                        this.props.category === "Engineering"
                            ?
                        <React.Fragment>
                            <h1 className="dark:text-black text-gray-300 text-lg font-semibold my-2">See it in action</h1>
                                <iframe className="flex my-4 mx-auto rounded-2xl w-3/4" height="240" src={this.props.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                        </React.Fragment>
                            :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default ScioEvent;