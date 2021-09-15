import './style.css'

import * as THREE from 'three';
import { PointLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import System from './system'
import Star from './star';
import Planet from './planet';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({

  canvas: document.querySelector('#bg'),

});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xF00FF87});
const torus = new THREE.Mesh(geometry, material);



const controls = new OrbitControls(camera, renderer.domElement);


  
const colors =  [   0xffffff, // Estrella Blanca
                    0xF00F7FF, // Estrella Normal
                    0xFFF2E00, //Gigante Roja
                    0xFFF4E01 // Estrella de neutrones
                ]



const systemList = [];


for(let i = 0; i < 100; i++){

  
  let name = "#"+THREE.MathUtils.randInt(0,100);
  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(2000));
  let sRad = THREE.MathUtils.randFloat(0.8,1.5);
  let newStar = new Star("",{x,y,z}, sRad, scene);
  let nPlanets = THREE.MathUtils.randInt(0,9);
  let planetList = [];
  for(let j = 0; j < nPlanets; j++){
    
    let pDist = THREE.MathUtils.randFloat(10.0,50.0);
    let pAngle = THREE.MathUtils.randFloat(0.0,359.9);
    let pRad = THREE.MathUtils.randFloat(0.1,0.5)+(pDist*0.00025);
    let pSpeed = THREE.MathUtils.randFloatSpread(-0.5)/(pDist*2);
    
    let randColor = new THREE.Color(THREE.MathUtils.randFloat(0.0,1.0),THREE.MathUtils.randFloat(0.0,1.0),THREE.MathUtils.randFloat(0.0,1.0))

 


    let planet = new Planet("", pRad, randColor,  newStar, pDist, pAngle, pSpeed, scene);
    planetList.push(planet);
  }

  let newSystem = new System("", planetList, newStar, {x,y,z});

  systemList.push(newSystem);
}




function animate(){
  requestAnimationFrame(animate);

  systemList.forEach(s => {
    s.update();
  })

  controls.update();

  renderer.render(scene, camera);
}

animate();