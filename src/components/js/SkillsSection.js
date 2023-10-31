import React from 'react'
import '../../App.css';
import '../css/SkillsSection.css';  

function SkillsSection() {
  return (
    <div className='container'>
        <div className='container-title'>
            <h1> SKILLS </h1>
        </div>

        <div className='container-content'>
            <div className='content-box'>
              <div className='content-box-logo'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 80" height="3em">
                  <g fill='#fff'>
                    <path d="M33.751,36.274c-0.171-0.856-0.588-1.67-1.25-2.332c-0.639-0.639-1.419-1.049-2.24-1.231   c-1.478-0.33-3.088,0.081-4.237,1.231c-1.788,1.788-3.239,9.715-3.239,9.715s7.927-1.45,9.715-3.239   C33.626,39.293,34.044,37.725,33.751,36.274z"/>
                    <path d="M33.766,32.676c0.75,0.75,1.294,1.664,1.594,2.668c2.264-1.403,4.983-3.455,7.896-5.983   c-0.704-1.261-1.591-2.446-2.66-3.516c-1.047-1.047-2.202-1.917-3.431-2.613c-0.762,0.877-1.481,1.737-2.152,2.572   c-1.551,1.93-2.845,3.728-3.826,5.307C32.156,31.417,33.04,31.95,33.766,32.676z"/>
                    <path d="M62.168,4.475c-1.718-1.718-10.173,3.8-18.767,12.17c-0.348,0.339-0.697,0.683-1.047,1.033   c-1.411,1.411-2.744,2.817-3.982,4.19c1.267,0.754,2.44,1.664,3.489,2.713c1.074,1.075,2,2.276,2.762,3.572   c0.831-0.749,1.675-1.532,2.524-2.348c0.559-0.536,1.121-1.086,1.684-1.649c2.559-2.559,4.891-5.118,6.877-7.51   C60.659,10.677,63.445,5.752,62.168,4.475z"/>
                    <path d="M58.224,18.733c-0.155,0.187-0.315,0.375-0.473,0.562v35.324H6.249V18.294h30.965c0.914-0.98,1.86-1.96,2.828-2.928   c0.342-0.342,0.705-0.7,1.077-1.063c3.515-3.423,7.101-6.476,10.32-8.797H3.778C2.251,5.506,1,6.757,1,8.285v8.574h0.03v37.828   c0,2.84,2.311,5.151,5.151,5.151h51.637c2.841,0,5.152-2.311,5.152-5.151V16.859H63v-4.561   C61.778,14.216,60.158,16.403,58.224,18.733z M19.689,10.017c1.028,0,1.868,0.841,1.868,1.868c0,1.027-0.841,1.868-1.868,1.868   c-1.027,0-1.868-0.841-1.868-1.868C17.822,10.858,18.662,10.017,19.689,10.017z M13.864,10.017c1.027,0,1.868,0.841,1.868,1.868   c0,1.027-0.841,1.868-1.868,1.868c-1.028,0-1.868-0.841-1.868-1.868C11.995,10.858,12.836,10.017,13.864,10.017z M6.169,11.886   c0-1.028,0.84-1.868,1.868-1.868c1.027,0,1.868,0.841,1.868,1.868c0,1.027-0.841,1.868-1.868,1.868   C7.01,13.753,6.169,12.913,6.169,11.886z"/>
                  </g>
                </svg>
              </div>

              <div className='content-box-title'>
                <h2> Front-End </h2>
              </div>

              <div className='content-box-text'>
                <ul>
                  <li>
                    <i className="fa-brands fa-react fa-2xl"></i>
                    <a className='text'> React JS </a>
                  </li>
                  <li>
                    <i className="fa-brands fa-html5 fa-2xl"></i>
                    <a className='text'> HTML </a>
                  </li>
                  <li style={{marginTop: '25px'}}>
                    <i class="fa-brands fa-css3-alt fa-2xl"></i>
                    <a className='text'> CSS </a>
                  </li>
                  <li style={{marginTop: '25px'}}>
                    <i class="fa-brands fa-square-js fa-2xl"></i>
                    <a className='text'> JavaScript </a>
                  </li>
                  <li>
                    <i class="fa-brands fa-wpforms fa-2xl"></i>
                    <a className='text'> WPF </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='content-box'>
                <div className='content-box-logo'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" height="3em">
                  <g fill='#fff'>
                    <path d="M23.56055,10.93945l-4-4a1.49984,1.49984,0,0,0-2.1211,2.1211l2.87081,2.8708a.09709.09709,0,0,1,0,.1373l-2.79413,2.79412a1.57476,1.57476,0,0,0-.16186,2.10535,1.49973,1.49973,0,0,0,2.20628.09243l4-4A1.49985,1.49985,0,0,0,23.56055,10.93945Z"/>
                    <path d="M6.56055,6.93945a1.49947,1.49947,0,0,0-2.1211,0l-4,4a1.49985,1.49985,0,0,0,0,2.1211l4,4a1.49973,1.49973,0,0,0,2.20628-.09243,1.57476,1.57476,0,0,0-.16186-2.10535L3.68974,12.06865a.09709.09709,0,0,1,0-.1373l2.87081-2.8708A1.49947,1.49947,0,0,0,6.56055,6.93945Z"/>
                    <rect x="2.25393" y="10.50014" width="19.49214" height="2.99972" rx="1" transform="translate(-2.55214 20.73128) rotate(-75.96376)"/>
                  </g>
                </svg>
                </div>

                <div className='content-box-title'>
                  <h2> Back-End </h2>
                </div>

                <div className='content-box-text'>
                  <ul>
                    <li>
                      <svg height="2em" viewBox="0 -1.428 255.582 290.108" width="45"  xmlns="http://www.w3.org/2000/svg">
                        <g fill="#fff">
                          <path d="m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z"/>
                          <path d="m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z"/>
                          </g>
                      </svg>
                      <a className='text'> C# </a>
                    </li>
                    <li style={{marginTop: '25px'}}>
                      <i className="fa-brands fa-java fa-2xl"></i>
                      <a className='text'> Java </a>
                    </li>
                    <li style={{marginTop: '25px'}}>
                      <i className="fa-brands fa-python fa-2xl"></i>
                      <a className='text'> Python </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-database fa-2xl"></i>
                      <a className='text'> SQL </a>
                    </li>
                  </ul>
                </div>
            </div>

            <div className='content-box'>
              <div className='content-box-logo'>
              <svg xmlns="http://www.w3.org/2000/svg" height="3em" width="38.4" viewBox="0 0 512 512">
                <g fill='#fff'>
                  <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                </g>
              </svg>
              </div>

              <div className='content-box-title'>
                <h2> Tools </h2>
              </div>

              <div className='content-box-text'>
                <ul>
                  <li>
                    <svg height="2em" width="50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <g fill='#fff'>
                        <path class="cls-1" d="M374.31,23.47,184.46,209.65,68,117.94,22.12,141.78V369.24L68,393.08l116.48-91.71L374.31,487.55l115.57-46.77V70.24ZM66.15,326.13V184.89l75.21,70.62Zm310.91,29.35-129.31-100,129.31-100V355.48Z"/>
                      </g>
                    </svg>
                    <a className='text'> Visual Studio </a>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="2em" viewBox="0 0 48 48">
                      <g fill='#fff'>
                        <path d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path>
                        <path d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path>
                        <path d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                      </g>
                    </svg>
                    <a className='text'> Visual Studio Code </a>
                  </li>
                  <li style={{marginTop: '25px'}}>
                    <i class="fa-brands fa-github fa-2xl"></i>
                    <a className='text'> Github </a>
                  </li>
                  <li style={{marginTop: '25px'}}>
                    <i className="fa-solid fa-database fa-2xl"></i>
                    <a className='text'> SQL Server </a>
                  </li>
                  <li style={{marginTop: '25px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="2em" viewBox="0,0,256,256" style={{marginLeft: '-7px'}}>
                    <g fill="#fff">
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M2,2v20h20v-20zM4.75,11.375h1.25v-5.375h-1.25v-1.625h4.25v1.625h-1.25v5.375h1.25v1.625h-4.25zM11.5,19.25h-7.5v-1.25h7.5zM16,9.875c0,1.125 -0.25,3.25 -3,3.25c-1.5,0 -2.315,-0.902 -2.625,-1.271l1.154,-1.319c0.208,0.231 0.721,0.84 1.471,0.84c1.125,0 1.125,-1.125 1.125,-1.5v-5.5h1.875z"/>
                      </g>
                    </g>
                  </svg>
                    <a className='text'> IntelliJ IDEA </a>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="2em" viewBox="0 0 24 24" style={{marginLeft: '-7px'}}>
                      <g fill='#fff'>
                        <path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 15.056 3.3741563 17.787094 5.5351562 19.621094 L 9.5839844 12.582031 L 9.2949219 12.292969 C 9.1059219 12.104969 9 11.850937 9 11.585938 L 9 7.75 C 9 7.336 9.336 7 9.75 7 L 11 7 L 11 5.5 C 11 5.224 11.224 5 11.5 5 L 12.5 5 C 12.776 5 13 5.224 13 5.5 L 13 7 L 14.25 7 C 14.664 7 15 7.336 15 7.75 L 15 11.585938 C 15 11.850938 14.895031 12.105969 14.707031 12.292969 L 14.417969 12.582031 L 15.888672 15.142578 C 16.413672 14.491578 16.785641 13.706125 16.931641 12.828125 C 17.022641 12.283125 17.537031 11.915859 18.082031 12.005859 C 18.627031 12.095859 18.995297 12.61125 18.904297 13.15625 C 18.655297 14.65325 17.947453 15.968703 16.939453 16.970703 L 18.464844 19.621094 C 20.625844 17.787094 22 15.056 22 12 C 22 6.477 17.523 2 12 2 z M 18.464844 19.621094 C 17.954844 20.054094 17.403453 20.438672 16.814453 20.763672 L 18.029297 22.875 C 18.073297 22.951 18.134938 23.014594 18.210938 23.058594 L 19.457031 23.783203 C 19.493031 23.803203 19.534125 23.814453 19.578125 23.814453 C 19.716125 23.814453 19.828125 23.702453 19.828125 23.564453 L 19.828125 22.128906 C 19.827125 22.040906 19.804719 21.954906 19.761719 21.878906 L 18.464844 19.621094 z M 16.814453 20.763672 L 15.318359 18.164062 C 14.326359 18.696063 13.198 19 12 19 C 10.823 19 9.6946406 18.712063 8.6816406 18.164062 L 7.1855469 20.763672 C 8.6135469 21.549672 10.254 22 12 22 C 13.746 22 15.386453 21.549672 16.814453 20.763672 z M 7.1855469 20.763672 C 6.5955469 20.440672 6.0441563 20.054094 5.5351562 19.621094 L 4.2382812 21.878906 C 4.1942813 21.954906 4.171875 22.039953 4.171875 22.126953 L 4.171875 23.564453 C 4.171875 23.702453 4.283875 23.814453 4.421875 23.814453 C 4.465875 23.814453 4.5089219 23.80125 4.5449219 23.78125 L 5.7890625 23.056641 C 5.8650625 23.012641 5.9286563 22.949047 5.9726562 22.873047 L 7.1855469 20.763672 z M 12 9 A 1.5 1.5 0 0 0 12 12 A 1.5 1.5 0 0 0 12 9 z M 11.048828 14.048828 L 9.6796875 16.427734 C 10.389687 16.801734 11.178 17 12 17 C 12.836 17 13.620406 16.783922 14.316406 16.419922 L 12.951172 14.048828 L 12.533203 14.466797 C 12.238203 14.761797 11.761797 14.761797 11.466797 14.466797 L 11.048828 14.048828 z" />
                      </g>
                    </svg>
                    <a className='text'> Android Studio </a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsSection