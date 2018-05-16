function threeStart() {
    initThree();
    initScene();
    initCamera();
    initLight();
    initObject();
    render();
    animate();
    renderer.domElement.addEventListener('mousedown', onMouseD);
    renderer.domElement.addEventListener('mousemove', onMove);
    renderer.domElement.addEventListener('mouseup',onUp);

    //使用轨道控制器实现交互
    controller = new THREE.OrbitControls(camera, renderer.domElement);
    //controller.enabled = false;
    //controller.target = new THREE.Vector3(0, 0, 0);//设置控制点
}
threeStart();

