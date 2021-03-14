/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import '../index.css';

class SciO extends Component {
    render() {
        return (
            <div className="flex bg-gray-400 dark:bg-gray-700 w-3/4 rounded-2xl shadow-2xl mx-auto my-10">
                <img src="https://cdn.pixabay.com/photo/2016/05/08/14/58/icon-1379228_1280.png" alt="" className="rounded-2xl w-32 h-32 ml-8 mr-4 my-4"></img>
                <div className="p-5">
                    <h1 className="text-black dark:text-white text-3xl font-bold my-2">{this.props.title}</h1>
                    <p className="text-black dark:text-gray-400 mb-4 mr-4">
                        I've been participating in Science Olympiad for the last five years, with a focus in engineering and physics events. 
                    </p>
                </div>
            </div>
        )
    }
}

export default SciO;