//创建渲染器
var renderer;
function initThree() {
    width = window.innerWidth;
    height = window.innerHeight;
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0xFFFFFF, 1.0);
    document.getElementById('div_cube').appendChild(renderer.domElement);

}
//创建相机
var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 800;
    camera.position.y = 600;
    camera.position.z = 600;
    camera.up.x = 0;             //坐标系正方向设置为y轴，即右手坐标系
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt({             //相机照哪个方向
        x: 0,
        y: 0,
        z: 0
    });
}
//创建场景
var scene;
function initScene() {
    scene = new THREE.Scene();
}
//创建光照
var hemisphereLight1;
var hemisphereLight2;
function initLight() {
    hemisphereLight1 = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
    hemisphereLight1.position.set(500, 500, 0);
    hemisphereLight1.visible = true;
    scene.add(hemisphereLight1);

    hemisphereLight2 = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
    hemisphereLight2.position.set(-500, -500, 0);
    scene.add(hemisphereLight2);

}
//创建魔方
var cubes;
function initObject() {
    cubes = SimpleCube(cubeParams.x, cubeParams.y, cubeParams.z, cubeParams.num, cubeParams.len, cubeParams.colors);
    for (var i = 0; i < cubes.length; i++) {
        initStatus.push({
            x: cubes[i].position.x,
            y: cubes[i].position.y,
            z: cubes[i].position.z,
            indexFlag: cubes[i].indexFlag
        })
        scene.add(cubes[i]);
    }
    //创建辅助魔方方便寻找操作平面
    var cubeAid = new THREE.BoxGeometry(300,300,300);
    var hex = '#000000';
    for ( var i = 0; i < cubeAid.faces.length; i++ ) {
        cubeAid.faces[ i ].color.set( hex );
    }
    var cubeMaterial = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors,opacity: 0, transparent: true});
    var cube = new THREE.Mesh( cubeAid, cubeMaterial );
    cube.customizeType = 'FLAG';
    scene.add( cube );

}
//开始渲染
function render() {
    renderer.clear();
    renderer.render(scene, camera);
}
function animate() {
    requestAnimationFrame(animate);
    render();
    TWEEN.update();
}