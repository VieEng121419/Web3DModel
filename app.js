//Variables

let container;
let camera;
let renderer;
let scene;
let car;

function init(){
    container = document.querySelector('.scene');

    //Create scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 100000;


    //Camera Setup
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(-10, 100, 1570);

    const ambient = new THREE.AmbientLight(0x404040,30);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(10,10,10);
    scene.add(light);
    //Renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    //Load Model
    let loader = new THREE.GLTFLoader();
    loader.load('./3d_model/scene.gltf', function(gltf){
        scene.add(gltf.scene); 
        car = gltf.scene.children[0];        
        animate();
    })
}

function animate(){
    requestAnimationFrame(animate);
    car.rotation.z += 0.008;
    car.rotation.x = -1.2;
    renderer.render(scene,camera);
}

init();