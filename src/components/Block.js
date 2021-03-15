/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import '../index.css';

class Block extends Component {
    render() {
        return (
            <div className={"sm:flex bg-gray-400 dark:bg-gray-700 w-4/5 rounded-2xl shadow-2xl overflow-hidden mx-auto mt-12 max-w-screen-xl transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-100"}>
                {this.props.img}
                <div className="p-5">
                    <h1 className={"text-black dark:text-gray-200 " + this.props.titleClass}>
                        {this.props.title}
                    </h1>
                    <p className="text-black dark:text-gray-400 mb-2 mr-4">
                        {this.props.body}
                    </p>
                    {this.props.extraComponent != null ? this.props.extraComponent : null}
                </div>
            </div>
        )
    }
}

export default Block;