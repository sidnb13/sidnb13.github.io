/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import Block from './Block';
import CodingProject from './CodingProject';
import '../index.css';

import calculus from '../static/calculus.png'
import linear from '../static/linear.png'
import multivariable from '../static/multivariable.png'

var mathPictures = [calculus, linear , multivariable];

class Projects extends Component {
    render() {
        return (
            <div>
                <Block title="Projects"
                body="I have programmed in Java and C++, with additional experience with Python and JavaScript. I am currently interested in web development frameworks such as React as well as command-line tools and scripting. See a few of my projects below."
                src="null"
                titleClass="text-3xl font-bold my-2"
                />
                <div className="m-8 grid grid-flow-row grid-cols-1 grid-rows-4 xl:grid-cols-2 xl:grid-rows-2 gap-6 w-4/5 max-w-screen-xl mx-auto">
                    <CodingProject
                        repoName="Chemical Equation Balancer"
                        repoLink="https://github.com/sidnb13/chemical-balancer"
                        textColors="dark:text-blue-700 text-blue-400"
                        languages="Java"
                        writeup={
                            <React.Fragment>
                                A utility which balances chemical equations using linear algebra, performs stoichiometry with molar mass calculations, and parses chemical formulas accurately with regular expressions.
                                Here is an <a className="underline" href="https://github.com/sidnb13/chemical-balancer/blob/master/writeup.pdf" target="_blank">associated writeup</a> which was presented to my chemistry class.
                            </React.Fragment>
                        }
                    />
                    <CodingProject
                        repoName="Automated Test-Offs Script"
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
                <CodingProject
                        optionalClass="col-span-2 w-4/5 mx-auto"
                        repoName="Mathematics Class Notes"
                        repoLink="https://github.com/sidnb13/latex-notes"
                        textColors="dark:text-yellow-700 text-yellow-400"
                        languages="LaTeX"
                        src={
                            <div className="flex flex-col md:flex-row gap-8 md:gap-5 mx-auto items-center">
                                <a target="_blank" href="https://github.com/sidnb13/latex-class-notes/tree/master/calculus-bc-reference" className="w-3/4 md:w-1/3">
                                    <img src={mathPictures[0]} alt="" className="rounded-t-2xl border-4 border-red-500 md:rounded-2xl opacity-80"></img>
                                </a>
                                <a target="_blank" href="https://github.com/sidnb13/latex-class-notes/tree/master/linear-algebra-reference" className="w-3/4 md:w-1/3">
                                    <img src={mathPictures[1]} alt="" className="rounded-none border-4 border-green-500 md:rounded-2xl opacity-80"></img>
                                </a>
                                <a target="_blank" href="https://github.com/sidnb13/latex-class-notes/tree/master/multivariable-calculus-reference" className="w-3/4 md:w-1/3">
                                    <img src={mathPictures[2]} alt="" className="rounded-b-2xl border-4 border-blue-500 md:rounded-2xl opacity-80"></img>
                                </a>
                            </div>
                        }
                        writeup={
                            <React.Fragment>
                                A repository of my class notes for AP Calculus BC, Multivariable Calculus, and Linear Algebra. This was a great opportunity for me to apply LaTeX typesetting skills, gain exposure to professional libraries such as TikZ for plotting, and practice proofwriting. Click on the different screenshots below to see the respective TeX code.
                                I have also written a few answers on <a className="underline" href="https://math.stackexchange.com/users/876156/sidnb13?tab=answers" target="_blank">Math Stack Exchange</a>.
                            </React.Fragment>
                        }
                    />
            </div>
        )
    }
}

export default Projects;