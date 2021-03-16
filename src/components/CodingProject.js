/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import '../index.css';

class CodingProject extends Component {
    render() {
        return (
            <div className={"dark:bg-gray-400 bg-gray-700 rounded-2xl shadow-2xl h-auto transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-100 " + this.props.optionalClass}>
                <div className="pt-5 px-5">
                    <div className="flex justify-between">
                        <a href={this.props.repoLink} target="_blank">
                            <h1 className={this.props.textColors + " text-2xl font-bold hover:underline"}>{this.props.repoName}</h1>
                        </a>
                    </div>
                    <h2 className="dark:text-gray-600 text-gray-500 text-sm uppercase font-bold my-2">{this.props.languages}</h2>
                    <p className="dark:text-black text-gray-400 top-0 right-0">
                        {this.props.writeup}
                    </p>
                </div>
                <div className="p-5">
                    {this.props.src}
                </div>
            </div>
        )
    }
}

export default CodingProject;