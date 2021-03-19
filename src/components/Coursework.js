/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import Block from './Block';
import CodingProject from './CodingProject';
import '../index.css';

class Coursework extends Component {
    render() {
        return (
            <div>
                <Block title="Coursework"
                    body="Below is a brief overview of some of the key courses I have completed."
                src="null"
                titleClass="text-3xl font-bold my-2"
                />
                <div className="m-8 grid grid-flow-row grid-cols-1 grid-rows-6 xl:grid-cols-3 xl:grid-rows-2 gap-6 w-4/5 max-w-screen-xl mx-auto">
                    <CodingProject
                        repoName="AP Computer Science"
                        repoLink="https://github.com/sidnb13/scio-test-offs"
                        textColors="dark:text-green-700 text-green-400"
                        languages="JavaScript (Google Apps Script)"
                        writeup="A Google Apps Script project to efficiently manage the distribution of test materials during team tryouts each season. This was done to curb the tedious process of sending out emails for each and every event and eliminate possibility of errors."
                    />
                    <CodingProject
                        repoName="Data Structures"
                        repoLink="https://github.com/sidnb13/adv-cs"
                        textColors="dark:text-red-700 text-red-400"
                        languages="C++"
                        writeup="All of my lab work for the LASA Advanced CS course. All assignments were focused on advanced data structure implementation and real-world applications."
                    />
                    <CodingProject
                        repoName="Chemical Compounds"
                        repoLink="https://github.com/sidnb13/chemical-compounds"
                        textColors="dark:text-indigo-700 text-indigo-400"
                        languages="Java"
                        writeup="A tool that generates ionic compounds given an anion and cation while observing IUPAC standards and conventions."
                    />
                </div>
            </div>
        )
    }
}

export default Coursework;