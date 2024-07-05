export default function Home() {
  return (
    <div className="justify-center mx-auto px-8 py-12 max-w-screen-sm space-y-2 flex-grow">
      <div className="flex space-x-8 items-center pb-4">
        <img
          src="/pfp.jpeg"
          alt=""
          width={120}
          height={120}
          className="rounded-full aspect-square object-cover"
          key={1}
        />
        <div className="justify-items-right">
          <h1 className="text-4xl text-black font-extrabold dark:text-gray-100 font-serif">
            Sidharth Baskaran
          </h1>
          <div className="flex gap-2 rounded-lg pt-2 bg-transparent">
            <a
              href="https://github.com/sidnb13"
              target="_blank"
              className="hover:opacity-50"
            >
              <svg
                className="fill-black"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="24px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <path
                  d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9c1.4,0.3,2.6,0.4,3.8,0.4c8.3,0,11.5-6.1,11.5-11.4
          c0-5.5-0.2-19.9-0.3-39.1c-8.4,1.9-15.9,2.7-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6
          c-19.5-13.7-0.1-14.1,1.4-14.1c0.1,0,0.1,0,0.1,0c22.5,2,34.3,23.8,34.3,23.8c11.2,19.6,26.2,25.1,39.6,25.1c10.5,0,20-3.4,25.6-6
          c2-14.8,7.8-24.9,14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,1.6-0.5,5-0.5
          c8.1,0,26.4,3.1,56.6,24.1c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7c30.2-21,48.5-24.1,56.6-24.1c3.4,0,5,0.5,5,0.5
          c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3c8,7.1,15.2,21.1,15.2,42.5
          c0,30.7-0.3,55.5-0.3,63c0,5.4,3.1,11.5,11.4,11.5c1.2,0,2.6-0.1,4-0.4C415.9,449.2,480,363.1,480,261.7C480,134.9,379.7,32,256,32z
          "
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/sidharth-baskaran/"
              target="_blank"
              className="hover:opacity-50"
            >
              <svg
                className="fill-black"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="24px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M417.2,64H96.8C79.3,64,64,76.6,64,93.9v321.1c0,17.4,15.3,32.9,32.8,32.9h320.3c17.6,0,30.8-15.6,30.8-32.9V93.9
            C448,76.6,434.7,64,417.2,64z M183,384h-55V213h55V384z M157.4,187H157c-17.6,0-29-13.1-29-29.5c0-16.7,11.7-29.5,29.7-29.5
            c18,0,29,12.7,29.4,29.5C187.1,173.9,175.7,187,157.4,187z M384,384h-55v-93.5c0-22.4-8-37.7-27.9-37.7
            c-15.2,0-24.2,10.3-28.2,20.3c-1.5,3.6-1.9,8.5-1.9,13.5V384h-55V213h55v23.8c8-11.4,20.5-27.8,49.6-27.8
            c36.1,0,63.4,23.8,63.4,75.1V384z"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://twitter.com/sidnbaskaran"
              target="_blank"
              className="hover:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="24px"
                height="24px"
                x="0px"
                y="0px"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            {/* <a
              href="https://news.ycombinator.com/user?id=sidnb13"
              target="_blank"
              className="hover:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="24px"
                height="24px"
                x="0px"
                y="0px"
              > */}
            {/* ! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            {/* <path d="M448 32v448H0V32h448zM236 287.5L313.5 142h-32.7L235 233c-4.7 9.3-9 18.3-12.8 26.8L210 233l-45.2-91h-35l76.7 143.8v94.5H236v-92.8z" /> */}
            {/* </svg> */}
            {/* </a> */}
            <a
              href="https://scholar.google.com/citations?hl=en&user=OHjj7lcAAAAJ"
              target="_blank"
              className="hover:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="24px"
                height="24px"
                x="0px"
                y="0px"
              >
                <path d="M390.9 298.5c0 0 0 .1 .1 .1c9.2 19.4 14.4 41.1 14.4 64C405.3 445.1 338.5 512 256 512s-149.3-66.9-149.3-149.3c0-22.9 5.2-44.6 14.4-64h0c1.7-3.6 3.6-7.2 5.6-10.7c4.4-7.6 9.4-14.7 15-21.3c27.4-32.6 68.5-53.3 114.4-53.3c33.6 0 64.6 11.1 89.6 29.9c9.1 6.9 17.4 14.7 24.8 23.5c5.6 6.6 10.6 13.8 15 21.3c2 3.4 3.8 7 5.5 10.5zm26.4-18.8c-30.1-58.4-91-98.4-161.3-98.4s-131.2 40-161.3 98.4L0 202.7 256 0 512 202.7l-94.7 77.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-lg font-bold dark:text-gray-100">About</h1>
      <p className="text-left text-gray-600 text-sm">
        I am currently a founding engineer and researcher at
        <a
          href="https://automorphic.ai/"
          target="_blank"
          className="font-semibold no-underline hover:underline text-blue-500"
        >
          {" "}
          Automorphic (YC S23){" "}
        </a>
        in San Francisco, conducting research on building steerable,
        knowledgeable language models. I&apos;m also affiliated with{" "}
        <a
          href="https://confirmlabs.org/"
          target="_blank"
          className="font-semibold no-underline hover:underline text-blue-500"
        >
          Confirm Labs
        </a>
        , working on intepretability projects such as a hypernetwork-based model editor and new ways to leverage SAEs for circuit discovery.
      </p>
      <p className="text-left text-gray-600 text-sm">
        My general research interests include intepretability, alignment, domain adaptation methods, and foundation models for science.
      </p>
      <p className="text-left text-gray-600 text-sm">
        For the past year I&apos;ve been on leave from Georgia Tech, where I finished
        my first year studying Computer Science.
      </p>
      <p className="text-left text-gray-600 text-sm">
        I also enjoy
        <a href="https://tmgps.org/" target="_blank" className="no-underline hover:underline text-gray-500"> rowing my own gears</a>,
        cycling, music of the past, and a good book or blog.
      </p>
      <p className="text-left text-gray-600 text-sm">
        I have a{" "}
        <a
          href="/static/resume.pdf"
          target="_blank"
          className="font-semibold no-underline hover:underline text-blue-500"
        >
          resume
        </a>
        , and you can reach me via{" "}
        <a
          href="mailto:sidnbaskaran@gmail.com"
          className="no-underline hover:underline font-semibold text-blue-500"
        >
          email
        </a>
        .
      </p>
      <div className="absolute inset-x-0 bottom-0">
        <p className="pb-4 text-center text-gray-400 dark:text-gray-600 text-xs">
          © Sidharth Baskaran 2024.{" "}
        </p>
      </div>
    </div>
  );
}
