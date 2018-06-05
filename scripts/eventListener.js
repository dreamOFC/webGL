var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
//var mouseArray = [];
var pressPlaneNormal;
var pressDown = false;
var pressPosition;
var movePosition;
var subVector;
var isOnMove = false;           //作为屏幕鼠标移动判断的一个标识

function onMouseD(event) {
    if(!rotationEnding){
        return;
    }
    event.preventDefault();
    pressDown = true;
    isOnMove = false;
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length != 0) {                //射线与物体有相交
        controller.enabled = false;
        if (intersects[0].object.customizeType === 'FLAG'){
            pressPosition = intersects[1];
            pressPlaneNormal = intersects[0];
        }else{
            pressPosition = intersects[0];          //记录当前按压位置的小魔方块
            pressPlaneNormal = intersects[1];
        }
        //console.log(pressPlaneNormal);
        console.log(pressPosition);
    }
}

function onMove(event) {
    if (pressDown && pressPosition) {
        if (isOnMove == false) {
            //console.log("hi");
            var temp = new THREE.Vector2();
            temp.x = (event.clientX / window.innerWidth) * 2 - 1;
            temp.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(temp, camera);
            var intersects = raycaster.intersectObjects(scene.children);
            if (intersects.length != 0) {
                movePosition = intersects[0];
                //console.log(pressPosition);
                //console.log(movePosition);
                subVector = pressPosition.point.sub(movePosition.point);
                var pn = getPlaneNormal(pressPlaneNormal);         //获取了点击平面法向量
                var dire = getDirection(subVector.x, subVector.y, subVector.z);     //获取了旋转方向
                console.log(pn);
                console.log(dire);
                console.log(subVector);
                var rotationObject = getRotationObject(pn,  dire);
                requestAnimationFrame(function (currentTimeStamp) {
                    rotationAnimation(rotationObject, rotationObject.direction, currentTimeStamp, 0, 0, null);
                })
                //rotationObject[2].visible = false;
            }
        }
        isOnMove = true;
        event.preventDefault();
    }
}

function onUp(event) {
    if (pressDown) {
        mouse.x = (event.offsetX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.offsetY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children);
    }
    pressDown = false;
    isOnMove = false;
    controller.enabled = true;
}

function rotationAnimation(object, axis, currentTimeStamp, startTimeStamp, flagTimeStamp, next) {
    //console.log(startTimeStamp+ "  start");
    if (startTimeStamp === 0){
        rotationEnding = false;
        startTimeStamp = currentTimeStamp;
        flagTimeStamp = currentTimeStamp;
    }
    if (currentTimeStamp - startTimeStamp >= 500){
        currentTimeStamp = startTimeStamp + 500;
        updateObject(object);
    }
    switch (axis){
        case 1:
            var vec = new THREE.Vector3(1, 0, 0);
            for (var i = 0;i < object.length;i++){
                rotateAroundWorldAxisX(object[i], vec, -0.5 * Math.PI * (currentTimeStamp - flagTimeStamp)/500);
            }
            break;
        case 2:
            var vec = new THREE.Vector3(1, 0, 0);
            for (var i = 0;i < object.length;i++){
                rotateAroundWorldAxisX(object[i], vec, 0.5 * Math.PI* (currentTimeStamp - flagTimeStamp)/500);
            }
            break;
        case 3:
            var vec = new THREE.Vector3(0, 1, 0);
            for (var i = 0;i < object.length;i++){
                rotateAroundWorldAxisY(object[i], vec, -0.5 * Math.PI* (currentTimeStamp - flagTimeStamp)/500);
            }
            break;
        case 4:
            var vec = new THREE.Vector3(0, 1, 0);
            for (var i = 0;i < object.length;i++){
                rotateAroundWorldAxisY(object[i], vec, 0.5 * Math.PI* (currentTimeStamp - flagTimeStamp)/500);
            }
            break;
        case 5:
            var vec = new THREE.Vector3(0, 0, 1);
            for (var i = 0;i < object.length;i++){
                rotateAroundWorldAxisZ(object[i], vec, -0.5 * Math.PI* (currentTimeStamp - flagTimeStamp)/500);
            }
            break;
        case 6:
            var vec = new THREE.Vector3(0, 0, 1);
            for (var i = 0;i < object.length;i++){
                rotateAroundWorldAxisZ(object[i], vec, 0.5 * Math.PI* (currentTimeStamp - flagTimeStamp)/500);
            }
            break;
    }
    if (!rotationEnding){
        requestAnimationFrame(function (currentTimeStamp1) {
            rotationAnimation(object, axis, currentTimeStamp1, startTimeStamp, currentTimeStamp, next);
        })
    }else if (next) {
        next();
    }
}

/**
 * 12是x变化,x变化绕y轴或者绕z轴旋转
 * 34是y变化，y变化绕x轴或者z轴旋转
 * 56是z变化
 * 135减小，246增大
 */
function getDirection(a, b, c) {
    if (Math.abs(a) > Math.abs(b) && Math.abs(a) > Math.abs(c)) {
        //return a > 0 ? 1 : 2;
        if (a > 0) {
            return 1;   //减小
        } else {
            return 2;
        }
    } else if (Math.abs(b) > Math.abs(a) && Math.abs(b) > Math.abs(c)) {
        if (b > 0) {
            return 3;   //减小
        } else {
            return 4;
        }
    } else if (Math.abs(c) > Math.abs(b) && Math.abs(c) > Math.abs(a)) {
        if (c > 0) {
            return 5;   //减小
        } else {
            return 6;
        }
    }
}
/*var rotWorldMatrix = new THREE.Matrix4();
rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
rotWorldMatrix.multiply(object.matrix);                // pre-multiply
object.matrix = rotWorldMatrix;
object.rotation.setFromRotationMatrix(object.matrix);*/
function rotateAroundWorldAxisX(object, axis, rad) {
    var y0 = object.position.y;
    var z0 = object.position.z;
    var q = new THREE.Quaternion();
    q.setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), rad );
    object.quaternion.premultiply( q );
    object.position.y = Math.cos(rad)*y0-Math.sin(rad)*z0;
    object.position.z = Math.cos(rad)*z0+Math.sin(rad)*y0;
}

function rotateAroundWorldAxisY(object, axis, radius) {
    var x0 = object.position.x;
    var z0 = object.position.z;
    var q = new THREE.Quaternion();
    q.setFromAxisAngle( axis, radius );
    object.quaternion.premultiply( q );

    /*new TWEEN.Tween(object.position)
        .to({x: Math.cos(rad)*x0+Math.sin(rad)*z0,
             y: object.position.y,
             z: Math.cos(rad)*z0-Math.sin(rad)*x0,
             rotation: axis}, 1000)
        .easing(TWEEN.Easing.Quartic.InOut)
        .start();*/

    object.position.x = Math.cos(radius)*x0+Math.sin(radius)*z0;
    object.position.z = Math.cos(radius)*z0-Math.sin(radius)*x0;

    /*new TWEEN.Tween(object.rotation)
        .to({
            x: rad,
            y: 0,
            z: rad
        },1000)
        .easing(TWEEN.Easing.Quartic.InOut)
        .start();*/
}
function rotateAroundWorldAxisZ(object, axis, rad) {
    var x0 = object.position.x;
    var y0 = object.position.y;
    var q = new THREE.Quaternion();
    q.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), rad );
    object.quaternion.premultiply( q );
    object.position.x = Math.cos(rad)*x0-Math.sin(rad)*y0;
    object.position.y = Math.cos(rad)*y0+Math.sin(rad)*x0;
}

//点击位置可以确定出点击正方体的平面，将平面中的小正方体加入container中并进行旋转
function getRotationObject(normal, direction) {
    /**
    normal作为点击平面法向量的一个标识，可以用来判断当前旋转的物体都有哪些
     1表示法向量为x正方向，2为负方向
     3表示法向量为y正方向
     5表示法向量为z正方向
     direction表示旋转方向，每一个面都可以绕三个个轴旋转
     */
    var boxs = []
    switch (direction){
        case 1:
            switch (normal){
                case 3:
                    boxs.direction = 6;
                    if (pressPosition.object.indexFlag <=2 && pressPosition.object.indexFlag >= 0){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=11 && pressPosition.object.indexFlag >= 9) {
                        for (var i = 9; i < 18;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=20 && pressPosition.object.indexFlag >= 18) {
                        for (var i = 18; i < 27;i++){
                            boxs.push(cubes[i]);
                        }
                    }
                    break;
                case  4:
                    boxs.direction = 5;
                    if (pressPosition.object.indexFlag <=8 && pressPosition.object.indexFlag >= 6){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=17 && pressPosition.object.indexFlag >= 15) {
                        for (var i = 9; i < 18;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=26 && pressPosition.object.indexFlag >= 24) {
                        for (var i = 18; i < 27;i++){
                            boxs.push(cubes[i]);
                        }
                    }
                    break;
                case  5:
                    boxs.direction = 3;
                    if (pressPosition.object.indexFlag <=2 && pressPosition.object.indexFlag >= 0){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag <=5 && pressPosition.object.indexFlag >= 3) {
                        for (var i = 0; i < 3;i++){
                            for (var j = 3; j < 6;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag <=8 && pressPosition.object.indexFlag >= 6) {
                        for (var i = 0; i < 3;i++){
                            for (var j = 6; j < 9;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }
                    break;
                case  6:
                    boxs.direction = 4;
                    if (pressPosition.object.indexFlag <=20 && pressPosition.object.indexFlag >= 18){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag <=23 && pressPosition.object.indexFlag >= 21) {
                        for (var i = 0; i < 3;i++){
                            for (var j = 3; j < 6;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag <=26 && pressPosition.object.indexFlag >= 24) {
                        for (var i = 0; i < 3;i++){
                            for (var j = 6; j < 9;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }
                    break;
            }
            break;
        case 2:
            switch (normal){
                case 3:
                    boxs.direction = 5;
                    if (pressPosition.object.indexFlag <=2 && pressPosition.object.indexFlag >= 0){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=11 && pressPosition.object.indexFlag >= 9) {
                        for (var i = 9; i < 18;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=20 && pressPosition.object.indexFlag >= 18) {
                        for (var i = 18; i < 27;i++){
                            boxs.push(cubes[i]);
                        }
                    }
                    break;
                case  4:
                    boxs.direction = 6;
                    if (pressPosition.object.indexFlag <=8 && pressPosition.object.indexFlag >= 6){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=17 && pressPosition.object.indexFlag >= 15) {
                        for (var i = 9; i < 18;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=26 && pressPosition.object.indexFlag >= 24) {
                        for (var i = 18; i < 27;i++){
                            boxs.push(cubes[i]);
                        }
                    }
                    break;
                case  5:
                    boxs.direction = 4;
                    if (pressPosition.object.indexFlag <=2 && pressPosition.object.indexFlag >= 0){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag <=5 && pressPosition.object.indexFlag >= 3) {
                        for (var i = 0; i < 3;i++){
                            for (var j = 3; j < 6;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag <=8 && pressPosition.object.indexFlag >= 6) {
                        for (var i = 0; i < 3;i++){
                            for (var j = 6; j < 9;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }
                    break;
                case  6:
                    boxs.direction = 3;
                    if (pressPosition.object.indexFlag <=20 && pressPosition.object.indexFlag >= 18){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag <=23 && pressPosition.object.indexFlag >= 21) {
                        for (var i = 0; i < 3;i++){
                            for (var j = 3; j < 6;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag <=26 && pressPosition.object.indexFlag >= 24) {
                        for (var i = 0; i < 3;i++){
                            for (var j = 6; j < 9;j++){
                                boxs.push(cubes[j+i*9]);
                            }
                        }
                    }
                    break;
            }
            break;
        case 3:
            switch (normal){
                case  1:
                    boxs.direction = 5;
                    if (pressPosition.object.indexFlag <=8
                        && pressPosition.object.indexFlag >= 2
                        && pressPosition.object.indexFlag % 3 == 2){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=17
                        && pressPosition.object.indexFlag >= 11
                        && pressPosition.object.indexFlag % 3 == 2) {
                        for (var i = 9; i < 18;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=26
                        && pressPosition.object.indexFlag >= 20
                        && pressPosition.object.indexFlag % 3 == 2) {
                        for (var i = 18; i < 27;i++){
                            boxs.push(cubes[i]);
                        }
                    }
                    break;
                case  2:
                    boxs.direction = 6;
                    if (pressPosition.object.indexFlag <=6
                        && pressPosition.object.indexFlag >= 0
                        && pressPosition.object.indexFlag % 3 == 0){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=15
                        && pressPosition.object.indexFlag >= 9
                        && pressPosition.object.indexFlag % 3 == 0) {
                        for (var i = 9; i < 18;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=24
                        && pressPosition.object.indexFlag >= 18
                        && pressPosition.object.indexFlag % 3 == 0) {
                        for (var i = 18; i < 27;i++){
                            boxs.push(cubes[i]);
                        }
                    }
                    break;
                case  5:
                    boxs.direction = 2;
                    if (pressPosition.object.indexFlag <=6
                        && pressPosition.object.indexFlag >= 0
                        && pressPosition.object.indexFlag % 3 == 0){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3])
                        }
                    }else if (pressPosition.object.indexFlag <=7
                        && pressPosition.object.indexFlag >= 1
                        && pressPosition.object.indexFlag % 3 == 1){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+1])
                        }
                    }else if (pressPosition.object.indexFlag <=8
                        && pressPosition.object.indexFlag >= 2
                        && pressPosition.object.indexFlag % 3 == 2){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+2])
                        }
                    }
                    break;
                case  6:
                    boxs.direction = 1;
                    if (pressPosition.object.indexFlag <=24
                        && pressPosition.object.indexFlag >= 18
                        && pressPosition.object.indexFlag % 3 == 0){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3])
                        }
                    }else if (pressPosition.object.indexFlag <=25
                        && pressPosition.object.indexFlag >= 19
                        && pressPosition.object.indexFlag % 3 == 1){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+1])
                        }
                    }else if (pressPosition.object.indexFlag <=26
                        && pressPosition.object.indexFlag >= 19
                        && pressPosition.object.indexFlag % 3 == 2){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+2])
                        }
                    }
                    break;
            }
            break;
        case 4:
            switch (normal){
                case  1:
                    boxs.direction = 6;
                    if (pressPosition.object.indexFlag <=8
                        && pressPosition.object.indexFlag >= 2
                        && pressPosition.object.indexFlag % 3 == 2){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=17
                        && pressPosition.object.indexFlag >= 11
                        && pressPosition.object.indexFlag % 3 == 2) {
                        for (var i = 9; i < 18;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=26
                        && pressPosition.object.indexFlag >= 20
                        && pressPosition.object.indexFlag % 3 == 2) {
                        for (var i = 18; i < 27;i++){
                            boxs.push(cubes[i]);
                        }
                    }
                    break;
                case  2:
                    boxs.direction = 5;
                    if (pressPosition.object.indexFlag <=6
                        && pressPosition.object.indexFlag >= 0
                        && pressPosition.object.indexFlag % 3 == 0){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=15
                        && pressPosition.object.indexFlag >= 9
                        && pressPosition.object.indexFlag % 3 == 0) {
                        for (var i = 9; i < 18;i++){
                            boxs.push(cubes[i]);
                        }
                    }else if (pressPosition.object.indexFlag <=24
                        && pressPosition.object.indexFlag >= 18
                        && pressPosition.object.indexFlag % 3 == 0) {
                        for (var i = 18; i < 27;i++){
                            boxs.push(cubes[i]);
                        }
                    }
                    break;
                case  5:
                    boxs.direction = 1;
                    if (pressPosition.object.indexFlag <=6
                        && pressPosition.object.indexFlag >= 0
                        && pressPosition.object.indexFlag % 3 == 0){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3])
                        }
                    }else if (pressPosition.object.indexFlag <=7
                        && pressPosition.object.indexFlag >= 1
                        && pressPosition.object.indexFlag % 3 == 1){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+1])
                        }
                    }else if (pressPosition.object.indexFlag <=8
                        && pressPosition.object.indexFlag >= 2
                        && pressPosition.object.indexFlag % 3 == 2){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+2])
                        }
                    }
                    break;
                case  6:
                    boxs.direction = 2;
                    if (pressPosition.object.indexFlag <=24
                        && pressPosition.object.indexFlag >= 18
                        && pressPosition.object.indexFlag % 3 == 0){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3])
                        }
                    }else if (pressPosition.object.indexFlag <=25
                        && pressPosition.object.indexFlag >= 19
                        && pressPosition.object.indexFlag % 3 == 1){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+1])
                        }
                    }else if (pressPosition.object.indexFlag <=26
                        && pressPosition.object.indexFlag >= 19
                        && pressPosition.object.indexFlag % 3 == 2){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+2])
                        }
                    }
                    break;
            }
            break;
        case 5:
            switch (normal){
                case  1:
                    boxs.direction = 4;
                    if (pressPosition.object.indexFlag ==2
                        || pressPosition.object.indexFlag ==11
                        || pressPosition.object.indexFlag ==20){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag ==5
                        || pressPosition.object.indexFlag ==14
                        || pressPosition.object.indexFlag ==23){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i+3]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag ==8
                        || pressPosition.object.indexFlag ==17
                        || pressPosition.object.indexFlag ==26){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i+6]);
                            }
                        }
                    }
                    break;
                case  2:
                    boxs.direction = 3;
                    if (pressPosition.object.indexFlag ==0
                        || pressPosition.object.indexFlag ==9
                        || pressPosition.object.indexFlag ==18){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag ==3
                        || pressPosition.object.indexFlag ==12
                        || pressPosition.object.indexFlag ==21){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i+3]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag ==6
                        || pressPosition.object.indexFlag ==15
                        || pressPosition.object.indexFlag ==24){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i+6]);
                            }
                        }
                    }
                    break;
                case  3:
                    boxs.direction = 1;
                    if (pressPosition.object.indexFlag ==0
                        || pressPosition.object.indexFlag ==9
                        || pressPosition.object.indexFlag ==18){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3]);
                        }
                    }else if (pressPosition.object.indexFlag ==1
                        || pressPosition.object.indexFlag ==10
                        || pressPosition.object.indexFlag ==19){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+1]);
                        }
                    }else if (pressPosition.object.indexFlag ==2
                        || pressPosition.object.indexFlag ==11
                        || pressPosition.object.indexFlag ==20){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+2]);
                        }
                    }
                    break;
                case  4:
                    boxs.direction = 2;
                    if (pressPosition.object.indexFlag ==6
                        || pressPosition.object.indexFlag ==15
                        || pressPosition.object.indexFlag ==24){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3]);
                        }
                    }else if (pressPosition.object.indexFlag ==7
                        || pressPosition.object.indexFlag ==16
                        || pressPosition.object.indexFlag ==25){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+1]);
                        }
                    }else if (pressPosition.object.indexFlag ==8
                        || pressPosition.object.indexFlag ==17
                        || pressPosition.object.indexFlag ==26){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+2]);
                        }
                    }
                    break;
            }
            break;
        case 6:
            switch (normal){
                case  1:
                    boxs.direction = 3;
                    if (pressPosition.object.indexFlag ==2
                        || pressPosition.object.indexFlag ==11
                        || pressPosition.object.indexFlag ==20){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag ==5
                        || pressPosition.object.indexFlag ==14
                        || pressPosition.object.indexFlag ==23){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i+3]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag ==8
                        || pressPosition.object.indexFlag ==17
                        || pressPosition.object.indexFlag ==26){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i+6]);
                            }
                        }
                    }
                    break;
                case  2:
                    boxs.direction = 4;
                    if (pressPosition.object.indexFlag ==0
                        || pressPosition.object.indexFlag ==9
                        || pressPosition.object.indexFlag ==18){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag ==3
                        || pressPosition.object.indexFlag ==12
                        || pressPosition.object.indexFlag ==21){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i+3]);
                            }
                        }
                    }else if (pressPosition.object.indexFlag ==6
                        || pressPosition.object.indexFlag ==15
                        || pressPosition.object.indexFlag ==24){
                        for (var i = 0; i < 3;i++){
                            for (var j = 0; j < 3;j++){
                                boxs.push(cubes[j+9*i+6]);
                            }
                        }
                    }
                    break;
                case  3:
                    boxs.direction = 2;
                    if (pressPosition.object.indexFlag ==0
                        || pressPosition.object.indexFlag ==9
                        || pressPosition.object.indexFlag ==18){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3]);
                        }
                    }else if (pressPosition.object.indexFlag ==1
                        || pressPosition.object.indexFlag ==10
                        || pressPosition.object.indexFlag ==19){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+1]);
                        }
                    }else if (pressPosition.object.indexFlag ==2
                        || pressPosition.object.indexFlag ==11
                        || pressPosition.object.indexFlag ==20){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+2]);
                        }
                    }
                    break;
                case  4:
                    boxs.direction = 1;
                    if (pressPosition.object.indexFlag ==6
                        || pressPosition.object.indexFlag ==15
                        || pressPosition.object.indexFlag ==24){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3]);
                        }
                    }else if (pressPosition.object.indexFlag ==7
                        || pressPosition.object.indexFlag ==16
                        || pressPosition.object.indexFlag ==25){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+1]);
                        }
                    }else if (pressPosition.object.indexFlag ==8
                        || pressPosition.object.indexFlag ==17
                        || pressPosition.object.indexFlag ==26){
                        for (var i = 0; i < 9;i++){
                            boxs.push(cubes[i*3+2]);
                        }
                    }
                    break;
            }
            break;

    }
    return boxs;
}
//确定所点击平面的法向量
function getPlaneNormal(intersect) {
    var normal = intersect.face.normal;
    var x1 = new THREE.Vector3(1, 0, 0);
    var x2 = new THREE.Vector3(-1, 0, 0);
    var y1 = new THREE.Vector3(0, 1, 0);
    var y2 = new THREE.Vector3(0, -1, 0);
    var z1 = new THREE.Vector3(0, 0, 1);
    var z2 = new THREE.Vector3(0, 0, -1);

    if (normal.equals(x1)) {
        return 1;
    }else if (normal.equals(x2)){
        return 2;
    } else if (normal.equals(y1)){
        return 3;
    }else if (normal.equals(y2)){
        return 4;
    }else if (normal.equals(z1)){
        return 5;
    }else if (normal.equals(z2)){
        return 6;
    }
}
function updateObject(object) {
    rotationEnding = true;
    for (var i = 0; i < object.length;i++){
        for (var j = 0;j < initStatus.length;j++){
            if (Math.abs(object[i].position.x - initStatus[j].x)<=cubeParams.len/2 &&
                Math.abs(object[i].position.y - initStatus[j].y)<=cubeParams.len/2 &&
                Math.abs(object[i].position.z - initStatus[j].z)<=cubeParams.len/2 ){
                object[i].indexFlag = initStatus[j].indexFlag;
                cubes[initStatus[j].indexFlag] = object[i];
                break;
            }
        }
    }
}

