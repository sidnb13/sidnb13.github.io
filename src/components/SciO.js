/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import Block from './Block';
import ScioEvent from './ScioEvent';

import boomilever from '../static/boomilever.jpg'
import boomileverRules from '../static/boomilever.pdf'
import wsRules from '../static/wright-stuff.pdf'
import buggyRules from '../static/buggy.pdf'
import circuitRules from '../static/circuit.pdf'
import soundsRules from '../static/sounds.pdf'

import circuit from '../static/circuit-problem.png'
import sounds from '../static/sounds-problem.png'
    
import '../index.css';

class SciO extends Component {
    render() {
        return (
            <div>
                <Block
                    title="Science Olympiad"
                    titleClass="text-3xl font-bold my-2"
                    body={<React.Fragment>
                            I have participated in Science Olympiad for the past five years, including competing at the National Tournament twice, with a focus in engineering and physics events.
                            My designs have placed at competitive tournaments such as <a href="https://scioly.mit.edu/" className="underline" target="_blank">MIT</a> and <a href="https://pennscienceolympiad.org/" className="underline" target="_blank">UPenn</a> with
                            various accolades at in-state invitationals such as <a href="https://www.atxscioly.org/" className="underline" target="_blank">UT Austin</a>.
                            Here are some of the events I've participated in.
                        </React.Fragment>}
                />
                <div className="m-8 grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-6 w-4/5 mx-auto">
                    <ScioEvent
                        eventName="Boomilever"
                        category="Engineering"
                        textColors="text-blue-700 dark:text-blue-400"
                        eventLink={boomileverRules}
                        videoUrl="https://drive.google.com/file/d/0B7tL8Hx7dYA5RGJEdGtIMFpOTVU/preview"
                        writeup="A lightweight wooden device designed to hold the maximum weight and have the highest structural efficiency. 
                        Designed with AutoCAD and constructed with medium-density balsa and spruce wood."
                        awards="3rd at UT (2019), 5th at MIT (2020), 6th at UPenn (2020), 1st at Texas Regionals (2020)"
                        img={<img src={boomilever} alt="" className="object-cover h-64 lg:h-max w-max mx-auto"></img>}
                    />
                    <ScioEvent
                        eventName="Wright Stuff"
                        category="Engineering"
                        textColors="text-red-700 dark:text-red-400"
                        eventLink={wsRules}
                        videoUrl="https://drive.google.com/file/d/1JzQCt3n_9y7423pr0s2qg6HI9NvN2tj6/preview"
                        writeup="A lightweight, rubber-powered indoor free-flight aircraft designed to achieve the maximum flight time possible.
                        Built with materials such as carbon fiber, mylar, and low-density mylar."
                        awards="1st at UT (2019), 1st at CyFalls (2019), 3rd at MIT (2020), 2nd at Texas Regionals (2020)"
                        img={<img src={boomilever} alt="" className="object-cover h-64 lg:h-max w-max mx-auto"></img>}
                    />
                    <ScioEvent
                        eventName="Rotor Egg Drop"
                        category="Engineering"
                        textColors="text-green-700 dark:text-green-400"
                        eventLink={"https://www.wright.edu/sites/www.wright.edu/files/page/attachments/ROTOR%20EGG%20DROP%28B%29%2014final7-17.pdf"}
                        videoUrl="https://drive.google.com/file/d/0B7tL8Hx7dYA5RGJEdGtIMFpOTVU/preview"
                        writeup="A trial event at the 2017 National tournament where the objective was to construct an aerial device that could safely deliver an egg to the ground from extreme heights.
                        My design utilized mylar, balsa, and miniature bearings."
                        awards="17th place at 2017 National Tournament (Dayton, OH)"
                        img={<img src={boomilever} alt="" className="object-cover h-64 lg:h-max w-max mx-auto"></img>}
                    />
                    <ScioEvent
                        eventName="Battery Buggy"
                        category="Engineering"
                        textColors="text-yellow-700 dark:text-yellow-400"
                        eventLink={buggyRules}
                        videoUrl="https://drive.google.com/file/d/0B7tL8Hx7dYA5RGJEdGtIMFpOTVU/preview"
                        writeup="An electric vehicle designed to precisely stop at a predetermined point, with the objective of accurately hitting this point to win. My design utilized a powerful electromechanical braking system integrated with a kill switch integrated into the circuitry."
                        awards="Competed in 2018 National Tournament (Fort Collins, CO)"
                        img={<img src={boomilever} alt="" className="object-cover h-64 lg:h-max w-max mx-auto"></img>}
                    />
                    <ScioEvent
                        eventName="Circuit Lab"
                        category="Physics"
                        textColors="text-purple-700 dark:text-purple-400"
                        eventLink={circuitRules}
                        videoUrl={null}
                        writeup="A comprehensive test covering topics including circuit analysis, electricity and magnetism, and digital logic."
                        awards="5th at MIT (2021), 7th at Rice (2021)"
                        img={<img src={circuit} alt="" className="object-cover h-64 lg:h-max w-max mx-auto"></img>}
                    
                    />
                    <ScioEvent
                        eventName="Sounds of Music"
                        category="Physics"
                        textColors="text-indigo-700 dark:text-indigo-400"
                        eventLink={soundsRules}
                        videoUrl={null}
                        writeup="A comprehensive test covering topics including acoustic theory, physics of sound waves, and music theory."
                        awards="1st at UT (2019), 1st at CyFalls (2019), 3rd at MIT (2020), 2nd at Texas Regionals (2020)"
                        img={<img src={sounds} alt="" className="object-cover h-64 lg:h-max w-max mx-auto"></img>}
                    />
                </div>
            </div>
        )
    }
}

export default SciO;