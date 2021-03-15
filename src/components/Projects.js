/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import Block from './Block';
import '../index.css';

class Projects extends Component {
    render() {
        return (
            <div className="mb-8">
                <Block title="Projects"
                body="I have mainly have experience with programming in Java, Python, and C++. Here is a brief overview of some of my work."
                src="null"
                titleClass="text-3xl font-bold my-2"
                />
            </div>
        )
    }
}

export default Projects;