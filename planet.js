import * as THREE from 'three';

class Planet{
    constructor(name, radius, color, star, distance, angle, speed, scene){
        this.name = name;
        this.radius = radius;
        this.color = color;
        this.star = star;
        this.distance = distance;
        this.angle = angle;
        this.speed = speed;
        this.scene = scene;

        this.geometry = new THREE.SphereGeometry( this.radius*2, 8, 8);
        this.material = new THREE.MeshStandardMaterial({color: this.color});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.x = this.star.position.x+Math.cos(this.angle)*this.distance;
        this.mesh.position.y = this.star.position.y-Math.sin(this.angle)*this.distance;
        this.mesh.position.z = this.star.position.z+Math.cos(this.angle*0.5)*this.distance;
        this.scene.add(this.mesh);

    }

    update(){
        
        this.angle += this.speed;
        // if(this.angle > 359){
        //     this.angle = 0;
        // }

        this.mesh.position.x = this.star.position.x+Math.cos(this.angle)*this.distance;
        this.mesh.position.y = this.star.position.y-Math.sin(this.angle)*this.distance;
        this.mesh.position.z = this.star.position.z+Math.cos(this.angle*0.5)*this.distance;
        this.mesh.rotateOnWorldAxis.z = this.angle;
    }


}

export default Planet;