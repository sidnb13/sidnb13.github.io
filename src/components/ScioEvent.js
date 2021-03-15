/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import '../index.css';

class ScioEvent extends Component {
    render() {
        return (
            <div className="bg-gray-400 dark:bg-gray-700 rounded-2xl shadow-2xl overflow-hidden h-auto w-75% sm:w-auto transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-100">
                {this.props.img}
                <div className="p-5">
                    <a href={this.props.eventLink} target="_blank">
                        <h1 className={this.props.textColors + " text-2xl font-bold my-2 hover:underline"}>{this.props.eventName}</h1>
                    </a>
                    <h2 className="text-black dark:text-gray-500 text-sm uppercase font-bold my-2">{this.props.category}</h2>
                    <p className="text-black dark:text-gray-400 mr-4">
                        {this.props.writeup}
                    </p>
                    <h1 className="text-black dark:text-gray-300 text-lg font-semibold my-2">Awards</h1>
                    <p className="text-black dark:text-gray-400 mr-4">
                        {this.props.awards}
                    </p>
                    <h1 className="text-black dark:text-gray-300 text-lg font-semibold my-2">{this.props.category === "Engineering" ? "See it in action" : "Sample test"}</h1>
                    {
                        this.props.category !== "Engineering" ?
                        <p className="text-black dark:text-gray-400">
                            {this.props.videoUrl}
                        </p>
                            :
                        <iframe className="flex object-cover my-4 mx-auto rounded-2xl" src={this.props.videoUrl} width="400" height="240" title="boomi-video"></iframe>
                    }
                </div>
            </div>
        )
    }
}

export default ScioEvent;