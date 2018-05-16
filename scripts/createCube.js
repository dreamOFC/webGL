var width;
var height;
var initStatus = [];//魔方初始状态

var cubeParams = {//魔方参数
    x: -150,
    y: 150,
    z: 150,
    num: 3,
    len: 100,
    //右、左
    //上、下
    //前、后
    colors: ['#ffffff', '#FFD500',
        '#C41E3A', '#FF5800',
        '#0051BA', '#009E60']
};
function SimpleCube(x, y, z, num, len, colors) {
    var cubes = [];
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < num * num; j++) {
            var cubeGeometry = new THREE.BoxGeometry(len, len, len);
            var materials = [];     //每一面的材质,一共六个面
            //给每一个面中加入纹理
            for (var k = 0; k < 6; k++) {
                var texture = new THREE.Texture(faces(colors[k]));
                texture.needsUpdate = true;
                materials.push(new THREE.MeshLambertMaterial({
                    map: texture
                }));
            }
            var cubeMaterial = new THREE.MeshFaceMaterial(materials);
            var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            //中心坐标
            cube.position.x = (x + len / 2) + (j % 3) * len;
            cube.position.y = (y - len / 2) - parseInt(j / 3) * len;
            cube.position.z = (z - len / 2) - i * len;
            cube.indexFlag = i * 9 + j;
            cubes.push(cube)
        }
    }

    /**
     * 贴图编号0123456分别对应右、左、上、下、前、后
     * 看不见的面设置成黑色
     */
    var text = new THREE.TextureLoader().load("black.jpg");
    for (var i=0;i < 18;i++) {
        cubes[i].material[ 5 ].map = text;
    }
    for (var i=9;i < 27;i++) {
        cubes[i].material[ 4 ].map = text;
    }
    for (var i=0;i < 9;i++) {
        cubes[i*3].material[ 0 ].map = text;
        cubes[i*3+1].material[ 0 ].map = text;
    }
    for (var i=0;i < 9;i++) {
        cubes[i*3+2].material[ 1 ].map = text;
        cubes[i*3+1].material[ 1 ].map = text;
    }
    for (var i=0;i < 3;i++) {
        for (var j = 0;j < 6;j++){
            cubes[i*9+j].material[ 3 ].map = text;
        }
    }
    for (var i=0;i < 3;i++) {
        for (var j = 3;j < 9;j++){
            cubes[i*9+j].material[ 2 ].map = text;
        }
    }
    return cubes;
}

//生成每一小面的纹理，根据提供颜色值，生成圆角矩形
function faces(rgbaColor) {
    var canvas = document.createElement('canvas');
    //设置画板大小
    canvas.width = 256;
    canvas.height = 256;
    var context = canvas.getContext('2d');
    if (context) {
        //绘制带边框的圆角矩形
        fillRoundRect(context,0,0,256,256,50,rgbaColor);
    } else {
        alert('您的浏览器不支持Canvas.');
    }
    return canvas;
}
function fillRoundRect(cxt,x,y,width,height,radius,fillColor) {
    if(2 * radius > width || 2 * radius > height){return false;}
    cxt.save();
    cxt.translate(x,y);
    cxt.fillStyle = "#000";
    cxt.fillRect(0, 0, width, height);
    //绘制圆角矩形的各个边
    drawRoundRectPath(cxt, width-20, height-20, radius);
    cxt.fillStyle = fillColor;
    cxt.fill();
    cxt.restore();
}
function drawRoundRectPath(cxt,width,height,radius){
    cxt.translate(10, 10);
    cxt.beginPath();
    cxt.arc(width-radius,height-radius,radius,0,Math.PI/2);
    cxt.lineTo(radius,height);
    cxt.arc(radius,height-radius,radius,Math.PI/2,Math.PI);
    cxt.lineTo(0,radius);
    cxt.arc(radius,radius,radius,Math.PI,Math.PI*3/2);
    cxt.lineTo(width-radius,0);
    cxt.arc(width-radius,radius,radius,Math.PI*3/2,Math.PI*2);
    cxt.lineTo(width,height-radius);
    cxt.closePath();
}
