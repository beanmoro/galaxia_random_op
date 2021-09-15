import * as THREE from 'three';

class Star{
    constructor(name, position, radius, scene){
        this.name = name;
        this.position = position;
        this.radius = radius;
        this.scene = scene;

        this.geometry = new THREE.SphereGeometry( this.radius*2, 16, 16);
        this.material = new THREE.MeshBasicMaterial({color: 0xffffff});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);
        this.light = new THREE.PointLight(0xffffff, 0.2);
        this.light.position.set(this.position.x, this.position.y, this.position.z);
        this.scene.add(this.light, this.mesh);
    }

}

export default Star;