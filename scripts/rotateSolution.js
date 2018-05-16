var rotationEnding = true;
function U_(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 0;
    var rotateObject = getRotationObject(5, 2);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })
    
}

function U(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 0;
    var rotateObject = getRotationObject(5, 1);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })

}

function u_(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[0], cubes[1], cubes[2], cubes[3], cubes[4], cubes[5],
                      cubes[9], cubes[10], cubes[11], cubes[12], cubes[13], cubes[14],
                      cubes[18], cubes[19], cubes[20], cubes[21], cubes[22], cubes[23])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 4, currentTimeStamp, 0, 0, next);
    })

}

function u(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[0], cubes[1], cubes[2], cubes[3], cubes[4], cubes[5],
        cubes[9], cubes[10], cubes[11], cubes[12], cubes[13], cubes[14],
        cubes[18], cubes[19], cubes[20], cubes[21], cubes[22], cubes[23])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 3, currentTimeStamp, 0, 0, next);
    })

}
function D(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 6;
    var rotateObject = getRotationObject(5, 2);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })
}
function D_(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 6;
    var rotateObject = getRotationObject(5, 1);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })
}
function d(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[6], cubes[7], cubes[8], cubes[3], cubes[4], cubes[5],
        cubes[15], cubes[16], cubes[17], cubes[12], cubes[13], cubes[14],
        cubes[24], cubes[25], cubes[26], cubes[21], cubes[22], cubes[23])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 4, currentTimeStamp, 0, 0, next);
    })
}
function d_(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[6], cubes[7], cubes[8], cubes[3], cubes[4], cubes[5],
        cubes[15], cubes[16], cubes[17], cubes[12], cubes[13], cubes[14],
        cubes[24], cubes[25], cubes[26], cubes[21], cubes[22], cubes[23])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 3, currentTimeStamp, 0, 0, next);
    })
}
function L(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 0;
    var rotateObject = getRotationObject(5, 3);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })
}
function L_(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 0;
    var rotateObject = getRotationObject(5, 4);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })
}
function l(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[0], cubes[1], cubes[6], cubes[3], cubes[4], cubes[7],
        cubes[9], cubes[10], cubes[12], cubes[13], cubes[15], cubes[16],
        cubes[18], cubes[19], cubes[24], cubes[21], cubes[22], cubes[25])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 2, currentTimeStamp, 0, 0, next);
    })
}
function l_(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[0], cubes[1], cubes[6], cubes[3], cubes[4], cubes[7],
        cubes[9], cubes[10], cubes[12], cubes[13], cubes[15], cubes[16],
        cubes[18], cubes[19], cubes[24], cubes[21], cubes[22], cubes[25])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 1, currentTimeStamp, 0, 0, next);
    })
}
function R(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 2;
    var rotateObject = getRotationObject(5, 4);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })
}
function R_(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 2;
    var rotateObject = getRotationObject(5, 3);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })
}
function r(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[2], cubes[1], cubes[8], cubes[5], cubes[4], cubes[7],
        cubes[11], cubes[10], cubes[14], cubes[13], cubes[17], cubes[16],
        cubes[20], cubes[19], cubes[26], cubes[23], cubes[22], cubes[25])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 1, currentTimeStamp, 0, 0, next);
    })
}
function r_(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[2], cubes[1], cubes[8], cubes[5], cubes[4], cubes[7],
        cubes[11], cubes[10], cubes[14], cubes[13], cubes[17], cubes[16],
        cubes[20], cubes[19], cubes[26], cubes[23], cubes[22], cubes[25])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 2, currentTimeStamp, 0, 0, next);
    })
}
function F(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 0;
    var rotateObject = getRotationObject(3, 2);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })
}
function F_(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 0;
    var rotateObject = getRotationObject(3, 1);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })
}
function f(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[0], cubes[1], cubes[2], cubes[3], cubes[4], cubes[5],
        cubes[6], cubes[7], cubes[8], cubes[9], cubes[10], cubes[11],
        cubes[12], cubes[13], cubes[14], cubes[15], cubes[16], cubes[17])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 5, currentTimeStamp, 0, 0, next);
    })
}
function f_(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[0], cubes[1], cubes[2], cubes[3], cubes[4], cubes[5],
        cubes[6], cubes[7], cubes[8], cubes[9], cubes[10], cubes[11],
        cubes[12], cubes[13], cubes[14], cubes[15], cubes[16], cubes[17])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 6, currentTimeStamp, 0, 0, next);
    })
}
function B(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 18;
    var rotateObject = getRotationObject(3, 1);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })
}
function B_(next) {
    //rotationEnding = false;
    pressPosition.object.indexFlag = 18;
    var rotateObject = getRotationObject(3, 2);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotateObject, rotateObject.direction, currentTimeStamp, 0, 0, next);
    })
}
function b(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[18], cubes[19], cubes[20], cubes[21], cubes[22], cubes[23],
        cubes[24], cubes[25], cubes[26], cubes[9], cubes[10], cubes[11],
        cubes[12], cubes[13], cubes[14], cubes[15], cubes[16], cubes[17])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 6, currentTimeStamp, 0, 0, next);
    })
}
function b_(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[18], cubes[19], cubes[20], cubes[21], cubes[22], cubes[23],
        cubes[24], cubes[25], cubes[26], cubes[9], cubes[10], cubes[11],
        cubes[12], cubes[13], cubes[14], cubes[15], cubes[16], cubes[17])
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 5, currentTimeStamp, 0, 0, next);
    })
}
//绕x旋转
function M(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[1],cubes[4],cubes[7],cubes[10],cubes[13],cubes[16],cubes[19],cubes[22],cubes[25]);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 1, currentTimeStamp, 0, 0, next);
    })
}
function M_(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[1],cubes[4],cubes[7],cubes[10],cubes[13],cubes[16],cubes[19],cubes[22],cubes[25]);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 2, currentTimeStamp, 0, 0, next);
    })
}
//绕y旋转
function m(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[3],cubes[4],cubes[5],cubes[12],cubes[13],cubes[14],cubes[21],cubes[22],cubes[23]);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 3, currentTimeStamp, 0, 0, next);
    })
}
function m_(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[3],cubes[4],cubes[5],cubes[12],cubes[13],cubes[14],cubes[21],cubes[22],cubes[23]);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 4, currentTimeStamp, 0, 0, next);
    })
}
//绕z旋转
function mm(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[9],cubes[10],cubes[11],cubes[12],cubes[13],cubes[14],cubes[15],cubes[16],cubes[17]);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 5, currentTimeStamp, 0, 0, next);
    })
}
function mm_(next) {
    //rotationEnding = false;
    var rotationObject = [];
    rotationObject.push(cubes[9],cubes[10],cubes[11],cubes[12],cubes[13],cubes[14],cubes[15],cubes[16],cubes[17]);
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 6, currentTimeStamp, 0, 0, next);
    })
}
function xx(next) {
    //rotationEnding = false;
    var rotationObject = [];
    for (var i = 0; i < 27;i++){
        rotationObject.push(cubes[i]);
    }
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 1, currentTimeStamp, 0, 0, next);
    })
}
function xx_(next) {
    //rotationEnding = false;
    var rotationObject = [];
    for (var i = 0; i < 27;i++){
        rotationObject.push(cubes[i]);
    }
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 2, currentTimeStamp, 0, 0, next);
    })
}
function yy(next) {
    //rotationEnding = false;
    var rotationObject = [];
    for (var i = 0; i < 27;i++){
        rotationObject.push(cubes[i]);
    }
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 3, currentTimeStamp, 0, 0, next);
    })
}
function yy_(next) {
    //rotationEnding = false;
    var rotationObject = [];
    for (var i = 0; i < 27;i++){
        rotationObject.push(cubes[i]);
    }
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 4, currentTimeStamp, 0, 0, next);
    })
}
function zz(next) {
    //rotationEnding = false;
    var rotationObject = [];
    for (var i = 0; i < 27;i++){
        rotationObject.push(cubes[i]);
    }
    requestAnimationFrame(function (currentTimeStamp) {
        rotationAnimation(rotationObject, 5, currentTimeStamp, 0, 0, next);
    })
}
function UU() {
    U(function () {
        U(function () {
        })
    });
}

/**
 *
 * 返回值0白色，1黄色，2红色，3橙色，4蓝色，5绿色
 */
function getFaceColorByVector(cube,vector){
    var faces = cube.geometry.faces;
    var normalMatrix = cube.normalMatrix;
    /**
     * 小方块面的法向量乘以其法向量矩阵得到的是视图坐标系中的向量；
     * 世界坐标系转换成视图坐标系需要乘以视图矩阵的逆反矩阵。
     */
    var viewMatrix = new THREE.Matrix4();
    var viewCenter = new THREE.Vector3(0, 0, 0);
    viewMatrix.lookAt(camera.position,viewCenter,camera.up);
    viewMatrix.getInverse(viewMatrix);
    var tempVector = vector.clone();
    tempVector.applyMatrix4(viewMatrix);
    var angles = [];

    for(var i=0;i<faces.length;i++){
        var tempNormal = faces[i].normal.clone();
        tempNormal.applyMatrix3(normalMatrix);
        angles.push(tempNormal.angleTo(tempVector));
    }
    Array.prototype.max = function () { return Math.max.apply({},this); }
    Array.prototype.min = function () { return Math.min.apply({},this); }
    //console.log(faces[angles.indexOf(angles.min())].materialIndex);
    return faces[angles.indexOf(angles.min())].materialIndex;
}