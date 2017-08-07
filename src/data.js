function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const ProjectsApi = {
	projects: [
  {
    id:"1",
    title:"Simon Game",
    description:"Created Using React. Meant for FCC",
    image:images['simon.png'],
    url:"https://codepen.io/SangT/full/QgxoJY/",
    gitUrl:"https://github.com/SangTran01/FCC-Simon-Game",
    tools:[
    'devicon-html5-plain-wordmark', 
    'devicon-css3-plain-wordmark', 
    'devicon-javascript-plain', 
    'devicon-jquery-plain-wordmark'
    ]
  }, 
  {
    id:"2",
    title:"React TicTacToe",
    description:"Created Using React. Meant for FCC",
    image:images['tictac.png'],
    url:"https://codepen.io/SangT/full/ZyvqVQ/",
    gitUrl:"https://github.com/SangTran01/React-TicTacToe",
    tools:[
    'devicon-react-original-wordmark',
    'devicon-babel-plain', 
    'devicon-webpack-plain-wordmark'
    ]
  }, 
  {
    id:"3",
    title:"React Pomodoro Clock",
    description:"Created Using React. Meant for FCC",
    image:images['clock.png'],
    url:"https://codepen.io/SangT/full/PjmWMy/",
    gitUrl:"https://github.com/SangTran01/React-Pomodoro-Clock",
    tools:[
    'devicon-react-original-wordmark',
    'devicon-babel-plain', 
    'devicon-webpack-plain-wordmark'
    ]
  }, 
  {
    id:"4",
    title:"React Youtube Search",
    description:"Created Using React. Meant for FCC",
    image:images['youtube.png'],
    url:"https://github.com/SangTran01/React-w-Youtube-API",
    gitUrl:"https://github.com/SangTran01/React-w-Youtube-API",
    tools:[
    'devicon-react-original-wordmark',
    'devicon-babel-plain', 
    'devicon-webpack-plain-wordmark'
    ]
  },
  {
    id:"5",
    title:"MERN TodoApp",
    description:"Created Using React. Meant for FCC",
    image:images['todo.png'],
    url:"https://frozen-sierra-17216.herokuapp.com/",
    gitUrl:"https://github.com/SangTran01/MERN-Todo",
    tools:[
    'devicon-mongodb-plain-wordmark',
    'devicon-express-original-wordmark',
    'devicon-react-original-wordmark',
    'devicon-nodejs-plain-wordmark'
    ]
  }, 
  {
    id:"6",
    title:"Simple Calculator",
    description:"Created Using React. Meant for FCC",
    image:images['calc.png'],
    url:"https://codepen.io/SangT/full/owBLyq/",
    gitUrl:"https://github.com/SangTran01/FCC-calculator-app",
    tools:[
    'devicon-html5-plain-wordmark', 
    'devicon-css3-plain-wordmark', 
    'devicon-javascript-plain', 
    'devicon-jquery-plain-wordmark'
    ]
  }, 
  {
    id:"7",
    title:"Check Weather",
    description:"Created Using React. Meant for FCC",
    image:images['weather.png'],
    url:"https://codepen.io/SangT/full/LLEdbb/",
    gitUrl:"https://github.com/SangTran01/FCC-weather-app",
    tools:[
    'devicon-html5-plain-wordmark', 
    'devicon-css3-plain-wordmark', 
    'devicon-javascript-plain', 
    'devicon-jquery-plain-wordmark'
    ]
  }, 
  {
    id:"8",
    title:"Wikipedia Search",
    description:"Created Using React. Meant for FCC",
    image:images['wikipedia.png'],
    url:"https://codepen.io/SangT/full/zzqWay/",
    gitUrl:"https://github.com/SangTran01/FCC-wikipedia-search",
    tools:[
    'devicon-html5-plain-wordmark', 
    'devicon-css3-plain-wordmark', 
    'devicon-javascript-plain', 
    'devicon-jquery-plain-wordmark'
    ]
  }, 
  {
    id:"9",
    title:"Twitch channel watcher",
    description:"Created Using React. Meant for FCC",
    image:images['twitch.png'],
    url:"https://codepen.io/SangT/full/KqgBQN/",
    gitUrl:"https://github.com/SangTran01/FCC-twitch-channel-watcher",
    tools:[
    'devicon-html5-plain-wordmark', 
    'devicon-css3-plain-wordmark', 
    'devicon-javascript-plain', 
    'devicon-jquery-plain-wordmark'
    ]
  },
  {
    id:"10",
    title:"Frogger Clone",
    description:"Created Using React. Meant for FCC",
    image:images['frogger.png'],
    url:"../frogger-clone/index.html",
    gitUrl:"https://github.com/SangTran01/FEND-Arcade-Game",
    tools:[
    'devicon-html5-plain-wordmark', 
    'devicon-css3-plain-wordmark', 
    'devicon-javascript-plain'
    ]
  },
  {
    id:"11",
    title:"Neighborhood Map",
    description:"Created Using React. Meant for FCC",
    image:images['map.png'],
    url:"../neighborhood-map/index.html",
    gitUrl:"https://github.com/SangTran01/P6-Neighborhood-Map",
    tools:[
    'devicon-html5-plain-wordmark', 
    'devicon-css3-plain-wordmark', 
    'devicon-javascript-plain',
    'devicon-google-plain-wordmark'
    ]
  },
  {
    id:"12",
    title:"RESTFUL Blog App",
    description:"Created Using React. Meant for FCC",
    image:images['blog.png'],
    url:"http://blog-app-project-3.appspot.com/",
    gitUrl:"https://github.com/SangTran01/P3-Multi-user-blog",
    tools:[
    'devicon-html5-plain-wordmark', 
    'devicon-css3-plain-wordmark', 
    'devicon-javascript-plain',
    ]
  },  
  ],
  all: function() {return this.projects},
  get: function(id) {
    return this.projects.find((project) => project.id === id);
  }
}

export default ProjectsApi;