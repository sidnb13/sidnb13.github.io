/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import '../index.css';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="lg:flex bg-gray-400 dark:bg-gray-700 w-3/4 rounded-2xl shadow-2xl overflow-hidden mx-auto m-12 max-w-screen-xl transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-110">
                    <div className="px-6 py-4">
                        <h1 className="text-black dark:text-white text-3xl font-bold my-2">{this.props.title}</h1>
                        <p className="text-black dark:text-gray-400 mb-4 mr-4">
                            I have mainly have experience with programming in Java, Python, and C++. Here is a brief overview of some of my work.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Projects;