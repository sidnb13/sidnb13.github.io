/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import '../index.css';

class CodingProject extends Component {
    render() {
        return (
            <div className={"dark:bg-gray-400 bg-gray-700 rounded-2xl shadow-2xl h-auto transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-100 " + this.props.optionalClass}>
                <div className="pt-5 px-5">
                    <div className="flex">
                        <a href={this.props.repoLink} target="_blank">
                            <h1 className={this.props.textColors + " text-2xl font-bold hover:underline"}>{this.props.repoName}</h1>
                        </a>
                        <a href={this.props.repoLink} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 mt-1.5" fill="none" viewBox="0 0 24 24" stroke="gray">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
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