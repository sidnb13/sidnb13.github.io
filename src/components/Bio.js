/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import Block from './Block';
import profile from '../static/sid.jpg';
import '../index.css';
import resume from '../static/resume.pdf'

const extraComponent = (
    <React.Fragment>
        <div className="bg-gray-500 dark:bg-gray-400 p-1.5 w-44 rounded-lg space-x-2 flex mt-8 justify-center">
            <a href="https://www.linkedin.com/in/sidharth-baskaran/" target="_blank">
                <img alt="" className="h-5 w-5 mx-2" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQm9sZCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIzLjk5NCAyNHYtLjAwMWguMDA2di04LjgwMmMwLTQuMzA2LS45MjctNy42MjMtNS45NjEtNy42MjMtMi40MiAwLTQuMDQ0IDEuMzI4LTQuNzA3IDIuNTg3aC0uMDd2LTIuMTg1aC00Ljc3M3YxNi4wMjNoNC45N3YtNy45MzRjMC0yLjA4OS4zOTYtNC4xMDkgMi45ODMtNC4xMDkgMi41NDkgMCAyLjU4NyAyLjM4NCAyLjU4NyA0LjI0M3Y3LjgwMXoiLz48cGF0aCBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIvPjxwYXRoIGQ9Im0yLjg4MiAwYy0xLjU5MSAwLTIuODgyIDEuMjkxLTIuODgyIDIuODgyczEuMjkxIDIuOTA5IDIuODgyIDIuOTA5IDIuODgyLTEuMzE4IDIuODgyLTIuOTA5Yy0uMDAxLTEuNTkxLTEuMjkyLTIuODgyLTIuODgyLTIuODgyeiIvPjwvc3ZnPg==" />
            </a>
            <a href="https://github.com/sidnb13" target="_blank">
                <img alt="" className="h-5 w-5 mx-2" src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIgLjVjLTYuNjMgMC0xMiA1LjI4LTEyIDExLjc5MiAwIDUuMjExIDMuNDM4IDkuNjMgOC4yMDUgMTEuMTg4LjYuMTExLjgyLS4yNTQuODItLjU2NyAwLS4yOC0uMDEtMS4wMjItLjAxNS0yLjAwNS0zLjMzOC43MTEtNC4wNDItMS41ODItNC4wNDItMS41ODItLjU0Ni0xLjM2MS0xLjMzNS0xLjcyNS0xLjMzNS0xLjcyNS0xLjA4Ny0uNzMxLjA4NC0uNzE2LjA4NC0uNzE2IDEuMjA1LjA4MiAxLjgzOCAxLjIxNSAxLjgzOCAxLjIxNSAxLjA3IDEuODAzIDIuODA5IDEuMjgyIDMuNDk1Ljk4MS4xMDgtLjc2My40MTctMS4yODIuNzYtMS41NzctMi42NjUtLjI5NS01LjQ2Ni0xLjMwOS01LjQ2Ni01LjgyNyAwLTEuMjg3LjQ2NS0yLjMzOSAxLjIzNS0zLjE2NC0uMTM1LS4yOTgtLjU0LTEuNDk3LjEwNS0zLjEyMSAwIDAgMS4wMDUtLjMxNiAzLjMgMS4yMDkuOTYtLjI2MiAxLjk4LS4zOTIgMy0uMzk4IDEuMDIuMDA2IDIuMDQuMTM2IDMgLjM5OCAyLjI4LTEuNTI1IDMuMjg1LTEuMjA5IDMuMjg1LTEuMjA5LjY0NSAxLjYyNC4yNCAyLjgyMy4xMiAzLjEyMS43NjUuODI1IDEuMjMgMS44NzcgMS4yMyAzLjE2NCAwIDQuNTMtMi44MDUgNS41MjctNS40NzUgNS44MTcuNDIuMzU0LjgxIDEuMDc3LjgxIDIuMTgyIDAgMS41NzgtLjAxNSAyLjg0Ni0uMDE1IDMuMjI5IDAgLjMwOS4yMS42NzguODI1LjU2IDQuODAxLTEuNTQ4IDguMjM2LTUuOTcgOC4yMzYtMTEuMTczIDAtNi41MTItNS4zNzMtMTEuNzkyLTEyLTExLjc5MnoiIGZpbGw9IiMyMTIxMjEiLz48L3N2Zz4=" />
            </a>
            <a href="mailto:sidnbaskaran@gmail.com" target="_blank">
                <img alt="" className="h-5 w-5 mx-2" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NjcsNjFINDVDMjAuMjE4LDYxLDAsODEuMTk2LDAsMTA2djMwMGMwLDI0LjcyLDIwLjEyOCw0NSw0NSw0NWg0MjJjMjQuNzIsMCw0NS0yMC4xMjgsNDUtNDVWMTA2DQoJCQlDNTEyLDgxLjI4LDQ5MS44NzIsNjEsNDY3LDYxeiBNNDYwLjc4Niw5MUwyNTYuOTU0LDI5NC44MzNMNTEuMzU5LDkxSDQ2MC43ODZ6IE0zMCwzOTkuNzg4VjExMi4wNjlsMTQ0LjQ3OSwxNDMuMjRMMzAsMzk5Ljc4OHoNCgkJCSBNNTEuMjEzLDQyMWwxNDQuNTctMTQ0LjU3bDUwLjY1Nyw1MC4yMjJjNS44NjQsNS44MTQsMTUuMzI3LDUuNzk1LDIxLjE2Ny0wLjA0NkwzMTcsMjc3LjIxM0w0NjAuNzg3LDQyMUg1MS4yMTN6IE00ODIsMzk5Ljc4Nw0KCQkJTDMzOC4yMTMsMjU2TDQ4MiwxMTIuMjEyVjM5OS43ODd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
            </a>
            <a href={resume} target="_blank">
                <p className="mx-2 hover:underline dark:text-gray-600 text-gray-700 text-sm uppercase font-bold">Resume</p>
            </a>
        </div>
    </React.Fragment>
);

class Bio extends Component {
    render() {
        return (
            <Block
                title="Sidharth Baskaran"
                body={<React.Fragment>
                    Hello, I'm Sid, a rising senior at the <a href="https://www.lasahighschool.org/" target="_blank" className="underline">Liberal Arts and Science Academy High School</a> (LASA) in Austin, Texas. My interests mainly lie in engineering and computer science.
                    In my free time, I enjoy working on Science Olympiad events, personal projects, and learning new technologies.
                </React.Fragment>}
                img={<img src={profile} alt="" className="object-cover w-44 rounded-3xl mt-4 sm:mt-0 sm:rounded-none lg:h-64 lg:w-72 mx-auto"></img>}
                titleClass="text-5xl font-bold my-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                extraComponent={extraComponent}
            />
        )
    }
}

export default Bio;