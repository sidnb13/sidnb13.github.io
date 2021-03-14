/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import '../index.css';

class SciO extends Component {
    render() {
        return (
            <div>
                <div className="lg:flex bg-gray-400 dark:bg-gray-700 w-3/4 rounded-2xl shadow-2xl overflow-hidden mx-auto mt-12 max-w-screen-xl transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-110">
                    <img src="https://cdn.pixabay.com/photo/2016/05/08/14/58/icon-1379228_1280.png" alt="" className="lg:flex object-cover h-44 w-max lg:h-auto lg:w-32"></img>
                    <div className="p-5">
                        <h1 className="text-black dark:text-white text-3xl font-bold my-2">{this.props.title}</h1>
                        <p className="text-black dark:text-gray-400 mb-4 mr-4">
                            I have participated in Science Olympiad for the past five years, with a focus in engineering and physics events.
                            My designs have placed at competitive tournaments such as MIT and UPenn, with various accolades at in-state invitationals. Check out some of my builds below.
                        </p>
                    </div>
                </div>
                <div className="m-8 grid grid-flow-col grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-8 w-3/4 mx-auto">
                    <div className="bg-gray-400 dark:bg-gray-700 transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-110 rounded-2xl p-5">
                        <h1 className="text-black dark:text-white text-3xl font-bold my-2">Boomilever</h1>
                        <p className="text-black dark:text-gray-400 mb-4 mr-4">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                    <div className="bg-gray-400 dark:bg-gray-700 transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-110 rounded-2xl p-5">
                        <h1 className="text-black dark:text-white text-3xl font-bold my-2">Boomilever</h1>
                        <p className="text-black dark:text-gray-400 mb-4 mr-4">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                    <div className="bg-gray-400 dark:bg-gray-700 transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-110 rounded-2xl p-5">
                        <h1 className="text-black dark:text-white text-3xl font-bold my-2">Boomilever</h1>
                        <p className="text-black dark:text-gray-400 mb-4 mr-4">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                    <div className="bg-gray-400 dark:bg-gray-700 transition duration-500 lg:ease-in-out lg:transform hover:-translate-y-1 hover:scale-110 rounded-2xl p-5">
                        <h1 className="text-black dark:text-white text-3xl font-bold my-2">Boomilever</h1>
                        <p className="text-black dark:text-gray-400 mb-4 mr-4">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SciO;