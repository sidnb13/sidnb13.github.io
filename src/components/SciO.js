/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import Block from './Block';
import ScioEvent from './ScioEvent';

import boomileverRules from '../static/boomilever.pdf'
import wsRules from '../static/wright-stuff.pdf'
import buggyRules from '../static/buggy.pdf'
import circuitRules from '../static/circuit.pdf'
import soundsRules from '../static/sounds.pdf'

import boomilever from '../static/boomilever.png'
import buggy from '../static/battery-buggy.jpg'
import wrightStuff from '../static/wright-stuff.JPG'
import circuit from '../static/circuit-problem.png'
import sounds from '../static/sounds-problem.png'
import soLogo from '../static/so-logo.png'
    
import '../index.css';

class SciO extends Component {
    render() {
        return (
            <React.Fragment>
                <Block
                    title={<a href="https://www.soinc.org/info/about-science-olympiad" target="_blank" className="hover:underline">Science Olympiad</a>}
                    titleClass="text-3xl font-bold my-2"
                    body={<React.Fragment>
                            <a href="https://soinc.org/" className="underline" target="_blank">Science Olympiad</a> competitions are composed of 23 events covering genetics, earth science, chemistry, anatomy, physics, geology, mechanical engineering and technology. 
                            I have competed in Science Olympiad for the past five years with a focus on engineering and physics events.
                            My designs have placed at competitive tournaments such as <a href="https://scioly.mit.edu/" className="underline" target="_blank">MIT</a> and <a href="https://pennscienceolympiad.org/" className="underline" target="_blank">UPenn</a> with
                            various accolades at in-state invitationals such as <a href="https://www.atxscioly.org/" className="underline" target="_blank">UT Austin</a>. I have also competed in the National Tournament twice (2017, 2018) and am currently a captain of the LASA Science Olympiad team.
                            Below are some of the events I've done in the past or am currently working on.
                        </React.Fragment>}
                />
                <div className="m-8 grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-6 w-4/5 max-w-screen-xl mx-auto">
                    <ScioEvent
                        eventName="Boomilever"
                        years="2018-2020"
                        category="Engineering"
                        textColors="dark:text-blue-700 text-blue-400"
                        eventLink={boomileverRules}
                        videoUrl="https://www.youtube.com/embed/HCguPhHuHLU"
                        writeup="A lightweight wood structure optimized for the best structural efficiency within challenging design constraints. 
                        Designed with AutoCAD and constructed with medium-density balsa and spruce wood. My best design had a structural efficiency (load/device mass) of ~1700."
                        awards="3rd at UT (2019), 5th at MIT (2020), 6th at UPenn (2020), 1st at Texas Regionals (2020)"
                        img={boomilever}
                    />
                    <ScioEvent
                        eventName="Wright Stuff"
                        category="Engineering"
                        years="2016-2020"
                        textColors="dark:text-red-700 text-red-400"
                        eventLink={wsRules}
                        videoUrl="https://www.youtube.com/embed/TSzcEJf8Sqg"
                        writeup="A lightweight, rubber-powered indoor free-flight monoplane designed to achieve the maximum flight time.
                        Built utilizing low-density balsa wood, carbon fiber, competition-grade rubber bands, and mylar airfoil. Flight times of my best planes were in excess of 2 minutes."
                        awards="1st at UT (2019), 1st at CyFalls (2019), 3rd at MIT (2020), 2nd at Texas Regionals (2020)"
                        img={wrightStuff}
                    />
                    <ScioEvent
                        eventName="Rotor Egg Drop"
                        category="Engineering"
                        years="2017"
                        textColors="dark:text-green-700 text-green-400"
                        eventLink={"https://www.wright.edu/sites/www.wright.edu/files/page/attachments/ROTOR%20EGG%20DROP%28B%29%2014final7-17.pdf"}
                        videoUrl="https://www.youtube.com/embed/qUFSpqiZ4OU"
                        writeup="A trial event at the 2017 National Tournament where the objective was to construct an unpowered autorotation device to safely transport a raw egg from a specified height to the ground. My design utilized balsa wood, carbon fiber, and miniature bearings."
                        awards="17th place at 2017 National Tournament (Dayton, OH)"
                        img={soLogo}
                    />
                    <ScioEvent
                        eventName="Battery Buggy"
                        category="Engineering"
                        years="2017-2018"
                        textColors="dark:text-yellow-700 text-yellow-400"
                        eventLink={buggyRules}
                        videoUrl="https://www.youtube.com/embed/kc0jHr2SEis"
                        writeup="A vehicle that uses electrical energy as its sole means of propulsion,
                        quickly travels a specified distance, and stops as close as possible to a specified finish point. My design utilized a powerful electromechanical braking system integrated with a kill switch integrated into the circuitry."
                        awards="Competed in 2018 National Tournament (Fort Collins, CO)"
                        img={buggy}
                    />
                    <ScioEvent
                        eventName="Circuit Lab"
                        years="2020-Present"
                        category="Physics"
                        textColors="dark:text-pink-700 text-pink-400"
                        eventLink={circuitRules}
                        videoUrl={null}
                        writeup="A comprehensive test covering topics including circuit analysis (KCL/KVL, node and mesh techniques, basic op-amp circuits, RC circuits), electricity and magnetism (Faraday, Biot-Savart, and Lenz laws), and digital logic (Logic gates, minimization, and Karnaugh maps)."
                        awards="5th at MIT (2021), 7th at Rice (2021), 2nd at CyFalls (2020)"
                        img={circuit}
                    
                    />
                    <ScioEvent
                        eventName="Sounds of Music"
                        category="Physics"
                        years="2020-Present"
                        textColors="dark:text-indigo-700 text-indigo-400"
                        eventLink={soundsRules}
                        videoUrl={null}
                        writeup="A comprehensive test covering topics including acoustic theory, physics of sound waves, and music theory."
                        awards="2nd at CyFalls (2020)"
                        img={sounds}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default SciO;