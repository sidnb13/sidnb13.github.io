/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import '../index.css';

class ScioEvent extends Component {
    render() {
        return (
            <div className="dark:bg-gray-400 bg-gray-700 rounded-2xl shadow-2xl overflow-hidden h-auto transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-100">
                <a href={this.props.img} target="_blank">
                    <img src={this.props.img} alt="" className="object-cover h-64 lg:h-max w-max mx-auto opacity-75"></img>
                </a>
                <div className="p-5">
                    <div className="flex justify-between">
                        <div className="flex">
                            <a href={this.props.eventLink} target="_blank">
                                <h1 className={this.props.textColors + " text-2xl font-bold hover:underline"}>{this.props.eventName} </h1>
                            </a>
                            <a href={this.props.eventLink} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 mt-1.5" fill="none" viewBox="0 0 24 24" stroke="gray">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </a>
                        </div>
                        <p className="dark:text-gray-600 text-gray-500 text-base uppercase font-bold my-2 ml-50">{this.props.years}</p>
                    </div>
                    <h2 className="dark:text-gray-600 text-gray-500 text-sm uppercase font-bold mb-2">{this.props.category}</h2>
                    <p className="dark:text-black text-gray-400 top-0 right-0">
                        {this.props.writeup}
                    </p>
                    <h1 className="dark:text-black text-gray-300 text-lg font-semibold my-2">Notable awards</h1>
                    <p className="dark:text-black text-gray-400 mr-4">
                        {this.props.awards}
                    </p>
                    {
                        this.props.category === "Engineering"
                            ?
                        <React.Fragment>
                            {/* <h1 className="dark:text-black text-gray-300 text-lg font-semibold my-2">See it in action</h1> */}
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