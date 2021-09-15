import * as THREE from 'three';
import Star from './star';
import Planet from './planet';

class System{
    constructor(name, planets, star, position){
        this.name = name;
        this.planets = planets;
        this.star = star;
        this.position = position;
    }

    addPlanet(planet){

        this.planets.push(planet);
    }

    // set star(value){
    //     this.star= value;
    // }

    update(){
        

        this.planets.forEach(p =>{
            
            p.update();
            
        })

    }



}

export default System;