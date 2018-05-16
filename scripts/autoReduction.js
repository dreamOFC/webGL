function startReduction() {
    bottomCenter();
}


//四棱四柱实现
function rectangularPoster() {
    if (getFaceColorByVector(cubes[4], zAxisP) != getFaceColorByVector(cubes[7], zAxisP)) {
        D(function () {
            if (getFaceColorByVector(cubes[4], zAxisP) != getFaceColorByVector(cubes[7], zAxisP)) {
                D(function () {
                    if (getFaceColorByVector(cubes[4], zAxisP) != getFaceColorByVector(cubes[7], zAxisP)) {
                        D(function () {
                            up_f2l();
                        })
                    } else {
                        up_f2l();
                    }
                })
            } else {
                up_f2l();
            }
        })
    } else {
        up_f2l();
    }
}

function bottomCenter() {
    if (getFaceColorByVector(cubes[16], new THREE.Vector3(0, -1, 0)) != 0) {
        xx(function () {
            if (getFaceColorByVector(cubes[16], new THREE.Vector3(0, -1, 0)) != 0) {
                xx(function () {
                    if (getFaceColorByVector(cubes[16], new THREE.Vector3(0, -1, 0)) != 0) {
                        xx(function () {
                            if (getFaceColorByVector(cubes[16], new THREE.Vector3(0, -1, 0)) != 0) {
                                xx(function () {
                                    if (getFaceColorByVector(cubes[16], new THREE.Vector3(0, -1, 0)) != 0) {
                                        zz(function () {
                                            if (getFaceColorByVector(cubes[16], new THREE.Vector3(0, -1, 0)) != 0) {
                                                zz(function () {
                                                    if (getFaceColorByVector(cubes[16], new THREE.Vector3(0, -1, 0)) != 0) {
                                                        zz(function () {
                                                            if (getFaceColorByVector(cubes[16], new THREE.Vector3(0, -1, 0)) != 0) {
                                                                zz(function () {
                                                                    bottomBorderCenter();
                                                                });
                                                            } else {
                                                                bottomBorderCenter();
                                                            }
                                                        });
                                                    } else {
                                                        bottomBorderCenter();
                                                    }
                                                });
                                            } else {
                                                bottomBorderCenter();
                                            }
                                        });
                                    } else {
                                        bottomBorderCenter();
                                    }
                                });
                            } else {
                                bottomBorderCenter();
                            }
                        });
                    } else {
                        bottomBorderCenter();
                    }
                });
            } else {
                bottomBorderCenter();
            }
        });
    } else {
        bottomBorderCenter();
    }
}

var xAxisP = new THREE.Vector3(1, 0, 0);
var yAxisP = new THREE.Vector3(0, 1, 0);
var zAxisP = new THREE.Vector3(0, 0, 1);
var xAxisN = new THREE.Vector3(-1, 0, 0);
var yAxisN = new THREE.Vector3(0, -1, 0);
var zAxisN = new THREE.Vector3(0, 0, -1);

/**
 * 查找出白色块在魔方中的位置并存入white数组中
 * 对该数组中的每一个元素设置一个额外属性表示当前白色块的朝向（便于在恢复时使用）
 * 前后左右上下朝向分别为123456
 */
function bottomBorderCenter() {
    var white = updateWhite();
    //转出蓝色,前面
    for (var i = 0; i < 4; i++) {
        switch (white[i].dir) {
            case 1:
                if (white[i].object == 1) {
                    var blue = getFaceColorByVector(cubes[1], yAxisP);
                    if (blue == 4) {
                        first(function () {
                            case1(white);
                        })
                    }
                } else if (white[i].object == 3) {
                    var blue = getFaceColorByVector(cubes[3], xAxisN);
                    if (blue == 4) {
                        second(function () {
                            case1(white);
                        })
                    }

                } else if (white[i].object == 5) {
                    var blue = getFaceColorByVector(cubes[5], xAxisP);
                    if (blue == 4) {
                        third(function () {
                            case1(white)
                        })
                    }
                } else if (white[i].object == 7) {
                    var blue = getFaceColorByVector(cubes[7], yAxisN);
                    if (blue == 4) {
                        forth(function () {
                            case1(white);
                        })
                    }
                }
                break;
            case 2:
                if (white[i].object == 19) {
                    if (getFaceColorByVector(cubes[19], yAxisP) == 4) {
                        U(function () {
                            U(function () {
                                first(function () {
                                    case1();
                                })
                            })
                        })
                    }
                } else if (white[i].object == 21) {
                    if (getFaceColorByVector(cubes[21], xAxisN) == 4) {
                        u(function () {
                            u(function () {
                                third(function () {
                                    case1();
                                })
                            })
                        })
                    }

                } else if (white[i].object == 23) {
                    if (getFaceColorByVector(cubes[23], xAxisP) == 4) {
                        u(function () {
                            u(function () {
                                second(function () {
                                    case1();
                                })
                            })
                        })
                    }

                } else if (white[i].object == 25) {
                    if (getFaceColorByVector(cubes[25], yAxisN) == 4) {
                        B(function () {
                            B(function () {
                                U(function () {
                                    U(function () {
                                        first(function () {
                                            case1();
                                        })
                                    })
                                })
                            })
                        })
                    }
                }
                break;
            case 3:
                if (white[i].object == 9) {
                    if (getFaceColorByVector(cubes[9], yAxisP) == 4) {
                        U_(function () {
                            first(function () {
                                case1();
                            })
                        })
                    }

                } else if (white[i].object == 3) {
                    console.log("case3")
                    if (getFaceColorByVector(cubes[3], zAxisP) == 4) {
                        m_(function () {
                            third(function () {
                                case1();
                            })
                        })
                    }

                } else if (white[i].object == 21) {
                    if (getFaceColorByVector(cubes[21], zAxisN) == 4) {
                        m_(function () {
                            second(function () {
                                case1();
                            })
                        })
                    }

                } else if (white[i].object == 15) {
                    if (getFaceColorByVector(cubes[15], yAxisN) == 4) {
                        L(function () {
                            L(function () {
                                U_(function () {
                                    first(function () {
                                        case1();
                                    })
                                })
                            })
                        })
                    }
                }
                break;
            case 4:
                if (white[i].object == 11) {
                    if (getFaceColorByVector(cubes[11], yAxisP) == 4) {
                        U(function () {
                            first(function () {
                                case1();
                            })
                        })
                    }

                } else if (white[i].object == 5) {
                    if (getFaceColorByVector(cubes[5], zAxisP) == 4) {
                        F(function () {
                            case1();
                        })
                    }

                } else if (white[i].object == 23) {
                    if (getFaceColorByVector(cubes[23], zAxisN) == 4) {
                        m(function () {
                            third(function () {
                                case1();
                            })
                        })
                    }

                } else if (white[i].object == 17) {
                    if (getFaceColorByVector(cubes[17], yAxisN) == 4) {
                        R(function () {
                            R(function () {
                                U(function () {
                                    first(function () {
                                        case1();
                                    })
                                })
                            })
                        })
                    }
                }
                break;
            case 5:
                if (white[i].object == 1) {
                    if (getFaceColorByVector(cubes[1], zAxisP) == 4) {
                        U_(function () {
                            M(function () {
                                U_(function () {
                                    M_(function () {
                                        first(function () {
                                            case1();
                                        })
                                    })
                                })
                            })
                        })
                    }

                } else if (white[i].object == 9) {
                    if (getFaceColorByVector(cubes[9], xAxisN) == 4) {
                        M(function () {
                            U(function () {
                                M_(function () {
                                    first(function () {
                                        case1();
                                    })
                                })
                            })
                        })
                    }
                } else if (white[i].object == 11) {
                    if (getFaceColorByVector(cubes[11], xAxisP) == 4) {
                        M(function () {
                            U_(function () {
                                M_(function () {
                                    first(function () {
                                        case1();
                                    })
                                })
                            })
                        })
                    }
                } else if (white[0].object == 19) {
                    if (getFaceColorByVector(cubes[19], zAxisN) == 4) {
                        U(function () {
                            M(function () {
                                U_(function () {
                                    M_(function () {
                                        first(function () {
                                            case1();
                                        })
                                    })
                                })
                            })
                        })
                    }
                }
                break;
            case 6:
                if (white[i].object == 7) {
                    if (getFaceColorByVector(cubes[7], zAxisP) == 4) {
                        case1();
                    }
                } else if (white[i].object == 15) {
                    if (getFaceColorByVector(cubes[15], xAxisN) == 4) {
                        L_(function () {
                            second(function () {
                                case1();
                            })
                        })
                    }
                } else if (white[i].object == 25) {
                    if (getFaceColorByVector(cubes[25], zAxisN) == 4) {
                        B(function () {
                            m(function () {
                                third(function () {
                                    case1();
                                })
                            })
                        })
                    }
                } else if (white[i].object == 17) {
                    if (getFaceColorByVector(cubes[17], xAxisP) == 4) {
                        R(function () {
                            third(function () {
                                case1()
                            })
                        })
                    }
                }
                break;
        }
    }
}

//转出橙色，左面,传入的是白色小块所在块的位置
function case1() {
    D(function () {
        var white = updateWhite();
        for (var i = 0; i < 4; i++) {
            switch (white[i].dir) {
                case 1:
                    if (white[i].object == 1) {
                        if (getFaceColorByVector(cubes[1], yAxisP) == 3) {
                            first(function () {
                                case2();
                            })
                        }
                    } else if (white[i].object == 3) {
                        if (getFaceColorByVector(cubes[3], xAxisN) == 3) {
                            second(function () {
                                case2();
                            })
                        }

                    } else if (white[i].object == 5) {
                        if (getFaceColorByVector(cubes[5], xAxisP) == 3) {
                            third(function () {
                                case2()
                            })
                        }
                    } else if (white[i].object == 7) {
                        if (getFaceColorByVector(cubes[7], yAxisN) == 3) {
                            forth(function () {
                                case2();
                            })
                        }
                    }
                    break;
                case 2:
                    if (white[i].object == 19) {
                        if (getFaceColorByVector(cubes[19], yAxisP) == 3) {
                            U(function () {
                                U(function () {
                                    first(function () {
                                        case2();
                                    })
                                })
                            })
                        }
                    } else if (white[i].object == 21) {
                        if (getFaceColorByVector(cubes[21], xAxisN) == 3) {
                            u(function () {
                                u(function () {
                                    third(function () {
                                        case2();
                                    })
                                })
                            })
                        }

                    } else if (white[i].object == 23) {
                        if (getFaceColorByVector(cubes[23], xAxisP) == 3) {
                            u(function () {
                                u(function () {
                                    second(function () {
                                        case2();
                                    })
                                })
                            })
                        }

                    } else if (white[i].object == 25) {
                        if (getFaceColorByVector(cubes[25], yAxisN) == 3) {
                            B(function () {
                                B(function () {
                                    U(function () {
                                        U(function () {
                                            first(function () {
                                                case2();
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 3:
                    if (white[i].object == 9) {
                        if (getFaceColorByVector(cubes[9], yAxisP) == 3) {
                            U_(function () {
                                first(function () {
                                    case2();
                                })
                            })
                        }

                    } else if (white[i].object == 3) {
                        if (getFaceColorByVector(cubes[3], zAxisP) == 3) {
                            m_(function () {
                                third(function () {
                                    case2();
                                })
                            })
                        }

                    } else if (white[i].object == 21) {
                        if (getFaceColorByVector(cubes[21], zAxisN) == 3) {
                            m_(function () {
                                second(function () {
                                    case2();
                                })
                            })
                        }

                    } else if (white[i].object == 15) {
                        if (getFaceColorByVector(cubes[15], yAxisN) == 3) {
                            L(function () {
                                L(function () {
                                    U_(function () {
                                        first(function () {
                                            case2();
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 4:
                    if (white[i].object == 11) {
                        if (getFaceColorByVector(cubes[11], yAxisP) == 3) {
                            U(function () {
                                first(function () {
                                    case2();
                                })
                            })
                        }

                    } else if (white[i].object == 5) {
                        if (getFaceColorByVector(cubes[5], zAxisP) == 3) {
                            F(function () {
                                case2()
                            })
                        }

                    } else if (white[i].object == 23) {
                        if (getFaceColorByVector(cubes[23], zAxisN) == 3) {
                            m(function () {
                                third(function () {
                                    case2();
                                })
                            })
                        }

                    } else if (white[i].object == 17) {
                        if (getFaceColorByVector(cubes[17], yAxisN) == 3) {
                            R(function () {
                                R(function () {
                                    U(function () {
                                        first(function () {
                                            case2();
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 5:
                    if (white[i].object == 1) {
                        if (getFaceColorByVector(cubes[1], zAxisP) == 3) {
                            U_(function () {
                                M(function () {
                                    U_(function () {
                                        M_(function () {
                                            first(function () {
                                                case2();
                                            })
                                        })
                                    })
                                })
                            })
                        }

                    } else if (white[i].object == 9) {
                        if (getFaceColorByVector(cubes[9], xAxisN) == 3) {
                            M(function () {
                                U(function () {
                                    M_(function () {
                                        first(function () {
                                            case2();
                                        })
                                    })
                                })
                            })
                        }
                    } else if (white[i].object == 11) {
                        if (getFaceColorByVector(cubes[11], xAxisP) == 3) {
                            M(function () {
                                U_(function () {
                                    M_(function () {
                                        first(function () {
                                            case2();
                                        })
                                    })
                                })
                            })
                        }
                    } else if (white[0].object == 19) {
                        if (getFaceColorByVector(cubes[19], zAxisN) == 3) {
                            U(function () {
                                M(function () {
                                    U_(function () {
                                        M_(function () {
                                            first(function () {
                                                case2();
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 6:
                    if (white[i].object == 7) {
                        if (getFaceColorByVector(cubes[7], zAxisP) == 3) {
                            case2();
                        }
                    } else if (white[i].object == 15) {
                        if (getFaceColorByVector(cubes[15], xAxisN) == 3) {
                            L_(function () {
                                second(function () {
                                    case2();
                                })
                            })
                        }
                    } else if (white[i].object == 25) {
                        if (getFaceColorByVector(cubes[25], zAxisN) == 3) {
                            B(function () {
                                m(function () {
                                    third(function () {
                                        case2();
                                    })
                                })
                            })
                        }
                    } else if (white[i].object == 17) {
                        if (getFaceColorByVector(cubes[17], xAxisP) == 3) {
                            R(function () {
                                third(function () {
                                    case2()
                                })
                            })
                        }
                    }
                    break;
            }
        }
    })
}

//转出绿色，后面
function case2() {
    D(function () {
        var white = updateWhite();
        for (var i = 0; i < 4; i++) {
            switch (white[i].dir) {
                case 1:
                    if (white[i].object == 1) {
                        if (getFaceColorByVector(cubes[1], yAxisP) == 5) {
                            first(function () {
                                case3();
                            })
                        }
                    } else if (white[i].object == 3) {
                        if (getFaceColorByVector(cubes[3], xAxisN) == 5) {
                            second(function () {
                                case3();
                            })
                        }

                    } else if (white[i].object == 5) {
                        if (getFaceColorByVector(cubes[5], xAxisP) == 5) {
                            third(function () {
                                case3()
                            })
                        }
                    } else if (white[i].object == 7) {
                        if (getFaceColorByVector(cubes[7], yAxisN) == 5) {
                            forth(function () {
                                case3();
                            })
                        }
                    }
                    break;
                case 2:
                    if (white[i].object == 19) {
                        if (getFaceColorByVector(cubes[19], yAxisP) == 5) {
                            U(function () {
                                U(function () {
                                    first(function () {
                                        case3();
                                    })
                                })
                            })
                        }
                    } else if (white[i].object == 21) {
                        if (getFaceColorByVector(cubes[21], xAxisN) == 5) {
                            u(function () {
                                u(function () {
                                    third(function () {
                                        case3();
                                    })
                                })
                            })
                        }

                    } else if (white[i].object == 23) {
                        if (getFaceColorByVector(cubes[23], xAxisP) == 5) {
                            u(function () {
                                u(function () {
                                    second(function () {
                                        case3();
                                    })
                                })
                            })
                        }

                    } else if (white[i].object == 25) {
                        if (getFaceColorByVector(cubes[25], yAxisN) == 5) {
                            B(function () {
                                B(function () {
                                    U(function () {
                                        U(function () {
                                            first(function () {
                                                case3();
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 3:
                    if (white[i].object == 9) {
                        if (getFaceColorByVector(cubes[9], yAxisP) == 5) {
                            U_(function () {
                                first(function () {
                                    case3();
                                })
                            })
                        }

                    } else if (white[i].object == 3) {
                        if (getFaceColorByVector(cubes[3], zAxisP) == 5) {
                            m_(function () {
                                third(function () {
                                    case3();
                                })
                            })
                        }

                    } else if (white[i].object == 21) {
                        if (getFaceColorByVector(cubes[21], zAxisN) == 5) {
                            m_(function () {
                                second(function () {
                                    case3();
                                })
                            })
                        }

                    } else if (white[i].object == 15) {
                        if (getFaceColorByVector(cubes[15], yAxisN) == 5) {
                            L(function () {
                                L(function () {
                                    U_(function () {
                                        first(function () {
                                            case3();
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 4:
                    if (white[i].object == 11) {
                        if (getFaceColorByVector(cubes[11], yAxisP) == 5) {
                            U(function () {
                                first(function () {
                                    case3();
                                })
                            })
                        }

                    } else if (white[i].object == 5) {
                        if (getFaceColorByVector(cubes[5], zAxisP) == 5) {
                            F(function () {
                                case3();
                            })
                        }

                    } else if (white[i].object == 23) {
                        if (getFaceColorByVector(cubes[23], zAxisN) == 5) {
                            m(function () {
                                third(function () {
                                    case3();
                                })
                            })
                        }

                    } else if (white[i].object == 17) {
                        if (getFaceColorByVector(cubes[17], yAxisN) == 5) {
                            R(function () {
                                R(function () {
                                    U(function () {
                                        first(function () {
                                            case3();
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 5:
                    if (white[i].object == 1) {
                        if (getFaceColorByVector(cubes[1], zAxisP) == 5) {
                            U_(function () {
                                M(function () {
                                    U_(function () {
                                        M_(function () {
                                            first(function () {
                                                case3();
                                            })
                                        })
                                    })
                                })
                            })
                        }

                    } else if (white[i].object == 9) {
                        if (getFaceColorByVector(cubes[9], xAxisN) == 5) {
                            M(function () {
                                U(function () {
                                    M_(function () {
                                        first(function () {
                                            case3();
                                        })
                                    })
                                })
                            })
                        }
                    } else if (white[i].object == 11) {
                        if (getFaceColorByVector(cubes[11], xAxisP) == 5) {
                            M(function () {
                                U_(function () {
                                    M_(function () {
                                        first(function () {
                                            case3();
                                        })
                                    })
                                })
                            })
                        }
                    } else if (white[0].object == 19) {
                        if (getFaceColorByVector(cubes[19], zAxisN) == 5) {
                            U(function () {
                                M(function () {
                                    U_(function () {
                                        M_(function () {
                                            first(function () {
                                                case3();
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 6:
                    if (white[i].object == 7) {
                        if (getFaceColorByVector(cubes[7], zAxisP) == 5) {
                            case3();
                        }
                    } else if (white[i].object == 15) {
                        if (getFaceColorByVector(cubes[15], xAxisN) == 5) {
                            L_(function () {
                                second(function () {
                                    case3();
                                })
                            })
                        }
                    } else if (white[i].object == 25) {
                        if (getFaceColorByVector(cubes[25], zAxisN) == 5) {
                            B(function () {
                                m(function () {
                                    third(function () {
                                        case3();
                                    })
                                })
                            })
                        }
                    } else if (white[i].object == 17) {
                        if (getFaceColorByVector(cubes[17], xAxisP) == 5) {
                            R(function () {
                                third(function () {
                                    case3()
                                })
                            })
                        }
                    }
                    break;
            }
        }
    })
}

//转出红色，右面
function case3() {
    D(function () {
        var white = updateWhite();
        for (var i = 0; i < 4; i++) {
            switch (white[i].dir) {
                case 1:
                    if (white[i].object == 1) {
                        if (getFaceColorByVector(cubes[1], yAxisP) == 2) {
                            first(function () {
                                rectangularPoster();
                            })
                        }
                    } else if (white[i].object == 3) {
                        if (getFaceColorByVector(cubes[3], xAxisN) == 2) {
                            second(function () {
                                rectangularPoster();
                            })
                        }

                    } else if (white[i].object == 5) {
                        if (getFaceColorByVector(cubes[5], xAxisP) == 2) {
                            third(function () {
                                rectangularPoster()
                            })
                        }
                    } else if (white[i].object == 7) {
                        if (getFaceColorByVector(cubes[7], yAxisN) == 2) {
                            forth(function () {
                                rectangularPoster();
                            })
                        }
                    }
                    break;
                case 2:
                    if (white[i].object == 19) {
                        if (getFaceColorByVector(cubes[19], yAxisP) == 2) {
                            U(function () {
                                U(function () {
                                    first(function () {
                                        rectangularPoster();
                                    })
                                })
                            })
                        }
                    } else if (white[i].object == 21) {
                        if (getFaceColorByVector(cubes[21], xAxisN) == 2) {
                            u(function () {
                                u(function () {
                                    third(function () {
                                        rectangularPoster();
                                    })
                                })
                            })
                        }

                    } else if (white[i].object == 23) {
                        if (getFaceColorByVector(cubes[23], xAxisP) == 2) {
                            u(function () {
                                u(function () {
                                    second(function () {
                                        rectangularPoster();
                                    })
                                })
                            })
                        }

                    } else if (white[i].object == 25) {
                        if (getFaceColorByVector(cubes[25], yAxisN) == 2) {
                            B(function () {
                                B(function () {
                                    U(function () {
                                        U(function () {
                                            first(function () {
                                                rectangularPoster();
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 3:
                    if (white[i].object == 9) {
                        if (getFaceColorByVector(cubes[9], yAxisP) == 2) {
                            U_(function () {
                                first(function () {
                                    rectangularPoster();
                                })
                            })
                        }

                    } else if (white[i].object == 3) {
                        if (getFaceColorByVector(cubes[3], zAxisP) == 2) {
                            m_(function () {
                                third(function () {
                                    rectangularPoster();
                                })
                            })
                        }

                    } else if (white[i].object == 21) {
                        if (getFaceColorByVector(cubes[21], zAxisN) == 2) {
                            m_(function () {
                                second(function () {
                                    rectangularPoster();
                                })
                            })
                        }

                    } else if (white[i].object == 15) {
                        if (getFaceColorByVector(cubes[15], yAxisN) == 2) {
                            L(function () {
                                L(function () {
                                    U_(function () {
                                        first(function () {
                                            rectangularPoster();
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 4:
                    if (white[i].object == 11) {
                        if (getFaceColorByVector(cubes[11], yAxisP) == 2) {
                            U(function () {
                                first(function () {
                                    rectangularPoster();
                                })
                            })
                        }

                    } else if (white[i].object == 5) {
                        if (getFaceColorByVector(cubes[5], zAxisP) == 2) {
                            F(function () {
                                rectangularPoster();
                            })
                        }

                    } else if (white[i].object == 23) {
                        if (getFaceColorByVector(cubes[23], zAxisN) == 2) {
                            m(function () {
                                third(function () {
                                    rectangularPoster();
                                })
                            })
                        }

                    } else if (white[i].object == 17) {
                        if (getFaceColorByVector(cubes[17], yAxisN) == 2) {
                            R(function () {
                                R(function () {
                                    U(function () {
                                        first(function () {
                                            rectangularPoster();
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 5:
                    if (white[i].object == 1) {
                        if (getFaceColorByVector(cubes[1], zAxisP) == 2) {
                            U_(function () {
                                M(function () {
                                    U_(function () {
                                        M_(function () {
                                            first(function () {
                                                rectangularPoster();
                                            })
                                        })
                                    })
                                })
                            })
                        }

                    } else if (white[i].object == 9) {
                        if (getFaceColorByVector(cubes[9], xAxisN) == 2) {
                            M(function () {
                                U(function () {
                                    M_(function () {
                                        first(function () {
                                            rectangularPoster();
                                        })
                                    })
                                })
                            })
                        }
                    } else if (white[i].object == 11) {
                        if (getFaceColorByVector(cubes[11], xAxisP) == 2) {
                            M(function () {
                                U_(function () {
                                    M_(function () {
                                        first(function () {
                                            rectangularPoster();
                                        })
                                    })
                                })
                            })
                        }
                    } else if (white[0].object == 19) {
                        if (getFaceColorByVector(cubes[19], zAxisN) == 2) {
                            U(function () {
                                M(function () {
                                    U_(function () {
                                        M_(function () {
                                            first(function () {
                                                rectangularPoster();
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                    break;
                case 6:
                    if (white[i].object == 7) {
                        if (getFaceColorByVector(cubes[7], zAxisP) == 2) {
                            rectangularPoster();
                        }
                    } else if (white[i].object == 15) {
                        if (getFaceColorByVector(cubes[15], xAxisN) == 2) {
                            L_(function () {
                                second(function () {
                                    rectangularPoster();
                                })
                            })
                        }
                    } else if (white[i].object == 25) {
                        if (getFaceColorByVector(cubes[25], zAxisN) == 2) {
                            B(function () {
                                m(function () {
                                    third(function () {
                                        rectangularPoster();
                                    })
                                })
                            })
                        }
                    } else if (white[i].object == 17) {
                        if (getFaceColorByVector(cubes[17], xAxisP) == 2) {
                            R(function () {
                                third(function () {
                                    rectangularPoster();
                                })
                            })
                        }
                    }
                    break;
            }
        }
    })
}

//所有的转动可以统一出四种主体旋转方式在此对其封装
function first(next) {
    U(function () {
        M(function () {
            U_(function () {
                M_(next);
            })
        })
    })
}

function second(next) {
    F(function () {
        first(next)
    })
}

function third(next) {
    F_(function () {
        first(next)
    })
}

function forth(next) {
    F(function () {
        F(function () {
            first(next)
        })
    })
}

function updateWhite() {
    var front = [1, 3, 5, 7];
    var back = [19, 21, 23, 25];
    var left = [3, 9, 15, 21];
    var right = [5, 11, 17, 23];
    var up = [1, 9, 11, 19];
    var bottom = [7, 15, 17, 25];
    var white = [];

    for (var i = 0; i < front.length; i++) {
        var cube = cubes[front[i]];
        if (getFaceColorByVector(cube, zAxisP) == 0) {
            white.push(
                {
                    object: front[i],
                    dir: 1
                });
        }
    }
    for (var i = 0; i < back.length; i++) {
        var cube = cubes[back[i]];
        if (getFaceColorByVector(cube, zAxisN) == 0) {
            white.push(
                {
                    object: back[i],
                    dir: 2
                });
        }
    }
    for (var i = 0; i < left.length; i++) {
        var cube = cubes[left[i]];
        if (getFaceColorByVector(cube, xAxisN) == 0) {
            white.push(
                {
                    object: left[i],
                    dir: 3
                });
        }
    }
    for (var i = 0; i < right.length; i++) {
        var cube = cubes[right[i]];
        if (getFaceColorByVector(cube, xAxisP) == 0) {
            white.push(
                {
                    object: right[i],
                    dir: 4
                });
        }
    }
    for (var i = 0; i < up.length; i++) {
        var cube = cubes[up[i]];
        if (getFaceColorByVector(cube, yAxisP) == 0) {
            white.push(
                {
                    object: up[i],
                    dir: 5
                });
        }
    }
    for (var i = 0; i < bottom.length; i++) {
        var cube = cubes[bottom[i]];
        if (getFaceColorByVector(cube, yAxisN) == 0) {
            white.push(
                {
                    object: bottom[i],
                    dir: 6
                });
        }
    }
    return white;
}

function up_f2l() {
    if (getFaceColorByVector(cubes[5], zAxisP) == getFaceColorByVector(cubes[3], zAxisP) &&
        getFaceColorByVector(cubes[3], xAxisN) == getFaceColorByVector(cubes[21], xAxisN) &&
        getFaceColorByVector(cubes[21], zAxisN) == getFaceColorByVector(cubes[23], zAxisN) &&
        getFaceColorByVector(cubes[5], xAxisP) == getFaceColorByVector(cubes[23], xAxisP) &&
        getFaceColorByVector(cubes[5], zAxisP) == getFaceColorByVector(cubes[8], zAxisP) &&
        getFaceColorByVector(cubes[3], zAxisP) == getFaceColorByVector(cubes[6], zAxisP) &&
        getFaceColorByVector(cubes[3], xAxisN) == getFaceColorByVector(cubes[6], xAxisN) &&
        getFaceColorByVector(cubes[21], xAxisN) == getFaceColorByVector(cubes[24], xAxisN) &&
        getFaceColorByVector(cubes[21], zAxisN) == getFaceColorByVector(cubes[24], zAxisN) &&
        getFaceColorByVector(cubes[23], xAxisP) == getFaceColorByVector(cubes[26], xAxisP) &&
        getFaceColorByVector(cubes[23], zAxisN) == getFaceColorByVector(cubes[26], zAxisN)) {
        oll();
        return;
    }
    switch (upIsWhite()) {
        case 0:
            //转一次
            U(function () {
                switch (upIsWhite()) {
                    case 0:
                        //转两次
                        U(function () {
                            switch (upIsWhite()) {
                                case 0:
                                    //转三次
                                    U(function () {
                                        switch (upIsWhite()) {
                                            case 0:
                                                bottom_f2l();
                                                break;
                                            case 1:
                                                //console.log("case1")
                                                upWhiteFirst();
                                                break;
                                            case  2:
                                                //console.log("case2")
                                                upWhiteSecond();
                                                break;
                                            case 3:
                                                //console.log("case3")
                                                upWhiteThird();
                                                break;
                                        }
                                    })
                                    break;
                                case 1:
                                    //console.log("case1")
                                    upWhiteFirst();
                                    break;
                                case  2:
                                    //console.log("case2")
                                    upWhiteSecond();
                                    break;
                                case 3:
                                    //console.log("case3")
                                    upWhiteThird();
                                    break;
                            }
                        })
                        break;
                    case 1:
                        //console.log("case1")
                        upWhiteFirst();
                        break;
                    case  2:
                        //console.log("case2")
                        upWhiteSecond();
                        break;
                    case 3:
                        //console.log("case3")
                        upWhiteThird();
                        break;
                }
            })
            break;
        case 1:
            //console.log("case1")
            upWhiteFirst();
            break;
        case  2:
            //console.log("case2")
            upWhiteSecond();
            break;
        case 3:
            //console.log("case3")
            upWhiteThird();
            break;
    }
}

var rank = 0;

function bottom_f2l() {
    switch (bottomIsWhite()) {
        case 4:
            //console.log("case4")
            bottomWhiteFirst();
            break;
        case  5:
            //console.log("case5")
            bottomWhiteSecond();
            break;
        case 6:
            //console.log("case6")
            bottomWhiteThird();
            break;
        case 0:
            f2lRank();
            break;
    }
}

function upIsWhite() {
    if (getFaceColorByVector(cubes[2], zAxisP) == 0
        || getFaceColorByVector(cubes[2], yAxisP) == 0
        || getFaceColorByVector(cubes[2], xAxisP) == 0) {
        if (getFaceColorByVector(cubes[2], zAxisP) == 0) {
            if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[2], yAxisP) &&
                getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[2], xAxisP))
                return 1;
        } else if (getFaceColorByVector(cubes[2], yAxisP) == 0) {
            if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[2], xAxisP) &&
                getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[2], zAxisP))
                return 2;
        } else if (getFaceColorByVector(cubes[2], xAxisP) == 0) {
            if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[2], zAxisP) &&
                getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[2], yAxisP))
                return 3;
        } else {
            return 0;
        }
    }
    return 0;
}

function bottomIsWhite() {
    if (getFaceColorByVector(cubes[8], yAxisN) == 0
        || getFaceColorByVector(cubes[8], xAxisP) == 0
        || getFaceColorByVector(cubes[8], zAxisP) == 0) {
        if (getFaceColorByVector(cubes[8], zAxisP) == 0) {
            if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[8], xAxisP) &&
                getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[8], yAxisN))
                return 4;
        } else if (getFaceColorByVector(cubes[8], yAxisN) == 0) {
            if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[8], zAxisP) &&
                getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[8], xAxisP))
                return 5;
        } else if (getFaceColorByVector(cubes[8], xAxisP) == 0) {
            if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[8], yAxisN) &&
                getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[8], zAxisP))
                return 6;
        } else {
            return 0;
        }
    }
    return 0;
}

function upWhiteFirst() {
    if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], zAxisP)) {
        f2lCase23();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], xAxisP)) {
        f2lCase22();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], yAxisP)) {
        f2lCase24();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], xAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], yAxisP)) {
        f2lCase25();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], zAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], yAxisP)) {
        f2lCase26();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], yAxisP)) {
        f2lCase27();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], zAxisP)) {
        f2lCase28();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], xAxisN)) {
        f2lCase29();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], zAxisN)) {
        f2lCase30();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], xAxisP)) {
        f2lCase31();
    } else {
        f2lRank();
    }
}

function upWhiteSecond() {
    if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], zAxisP)) {
        f2lCase13();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], xAxisP)) {
        f2lCase12();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], yAxisP)) {
        f2lCase14();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], xAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], yAxisP)) {
        f2lCase15();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], zAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], yAxisP)) {
        f2lCase16();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], yAxisP)) {
        f2lCase17();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], zAxisP)) {
        f2lCase18();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], xAxisN)) {
        f2lCase19();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], zAxisN)) {
        f2lCase20();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], xAxisP)) {
        f2lCase21();
    } else {
        f2lRank();
    }
}

function upWhiteThird() {
    if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], zAxisP)) {
        f2lCase33();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], xAxisP)) {
        f2lCase32();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], yAxisP)) {
        f2lCase34();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], xAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], yAxisP)) {
        f2lCase35();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], zAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], yAxisP)) {
        f2lCase36();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], yAxisP)) {
        f2lCase37();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], zAxisP)) {
        f2lCase38();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], xAxisN)) {
        f2lCase39();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], zAxisN)) {
        f2lCase40();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], xAxisP)) {
        f2lCase41();
    } else {
        f2lRank();
    }
}

function bottomWhiteFirst() {
    if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], zAxisP)) {
        f2lCase5();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], xAxisP)) {
        f2lCase4();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], yAxisP)) {
        f2lCase6();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], xAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], yAxisP)) {
        U_(function () {
            f2lCase6();
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], zAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], yAxisP)) {
        U_(function () {
            U_(function () {
                f2lCase6();
            })
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], yAxisP)) {
        U(function () {
            f2lCase6();
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], zAxisP)) {
        U_(function () {
            f2lCase7();
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], xAxisN)) {
        U_(function () {
            U_(function () {
                f2lCase7();
            })
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], zAxisN)) {
        U(function () {
            f2lCase7();
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], xAxisP)) {
        f2lCase7();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[4], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], xAxisP)) {
        d(function () {
            up_f2l();
        })
    } else {
        f2lRank();
    }
}

function bottomWhiteSecond() {
    if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], zAxisP)) {
        f2lCase1();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], yAxisP)) {
        f2lCase2();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], xAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], yAxisP)) {
        U_(function () {
            f2lCase2();
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], zAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], yAxisP)) {
        U_(function () {
            U_(function () {
                f2lCase2();
            })
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], yAxisP)) {
        U(function () {
            f2lCase2();
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], zAxisP)) {
        U_(function () {
            f2lCase3();
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], xAxisN)) {
        U_(function () {
            U_(function () {
                f2lCase3();
            })
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], zAxisN)) {
        U(function () {
            f2lCase3();
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], xAxisP)) {
        f2lCase3();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], xAxisP)) {
        d(function () {
            up_f2l();
        })
    } else {
        f2lRank();
    }
}

function bottomWhiteThird() {
    //中层反色
    if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], zAxisP)) {
        f2lCase9();
    }
    //中层同色
    else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[5], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[5], xAxisP)) {
        f2lCase8();
    }
    //顶层前
    else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], zAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], yAxisP)) {
        f2lCase10();
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], xAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], yAxisP)) {
        U_(function () {
            f2lCase10();
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], zAxisN) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], yAxisP)) {
        U_(function () {
            U_(function () {
                f2lCase10();
            })
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], xAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], yAxisP)) {
        U(function () {
            f2lCase10();
        })
    }
    //顶层右
    else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[1], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[1], zAxisP)) {
        U_(function () {
            f2lCase11();
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[9], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[9], xAxisN)) {
        U_(function () {
            U_(function () {
                f2lCase11();
            })
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[19], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[19], zAxisN)) {
        U(function () {
            f2lCase11();
        })
    } else if (getFaceColorByVector(cubes[4], zAxisP) == getFaceColorByVector(cubes[11], yAxisP) &&
        getFaceColorByVector(cubes[14], xAxisP) == getFaceColorByVector(cubes[11], xAxisP)) {
        f2lCase11();
    } else {
        f2lRank();
    }
}

function f2lRank() {
    R(function () {
        U(function () {
            R_(function () {
                d(function () {
                    up_f2l();
                })
            })
        })
    })
}

function f2lCase1() {
    console.log("f211")
    R(function () {
        U_(function () {
            R_(function () {
                U(function () {
                    yy_(function () {
                        R_(function () {
                            U(function () {
                                U(function () {
                                    R(function () {
                                        U_(function () {
                                            U_(function () {
                                                R_(function () {
                                                    U(function () {
                                                        R(function () {
                                                            up_f2l();
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase2() {
    console.log("f212")
    U(function () {
        R(function () {
            U_(function () {
                R_(function () {
                    U_(function () {
                        yy_(function () {
                            R_(function () {
                                U(function () {
                                    R(function () {
                                        up_f2l();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase3() {
    console.log("f213")
    R_(function () {
        F_(function () {
            R(function () {
                U(function () {
                    R(function () {
                        U_(function () {
                            R_(function () {
                                F(function () {
                                    d(function () {
                                        up_f2l();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase4() {
    console.log("f214")
    R(function () {
        U(function () {
            R_(function () {
                U_(function () {
                    R(function () {
                        U(function () {
                            U(function () {
                                R_(function () {
                                    U_(function () {
                                        R(function () {
                                            U(function () {
                                                R_(function () {
                                                    d(function () {
                                                        up_f2l();
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase5() {
    console.log("f215")
    R(function () {
        U_(function () {
            R_(function () {
                d(function () {
                    R_(function () {
                        U_(function () {
                            R(function () {
                                U_(function () {
                                    R_(function () {
                                        U_(function () {
                                            R(function () {
                                                d(function () {
                                                    up_f2l();
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase6() {
    console.log("f216")
    yy_(function () {
        R_U_RU(function () {
            R_U_R(function () {
                up_f2l();
            })
        })
    })
}

function f2lCase7() {
    console.log("f217")
    RU_R_U(function () {
        RU_R_(function () {
            d(function () {
                up_f2l();
            })
        })
    })
}

function f2lCase8() {
    console.log("f218")
    RU_R_U(function () {
        RU_U_R_U(function () {
            RU_R_(function () {
                d(function () {
                    up_f2l();
                })
            })
        })
    })
}

function f2lCase9() {
    console.log("f2149")
    RU(function () {
        F(function () {
            RUR_U_(function () {
                F_(function () {
                    R_(function () {
                        d(function () {
                            up_f2l();
                        })
                    })
                })
            })
        })
    })
}

function f2lCase10() {
    console.log("f2110")
    yy_(function () {
        R_URU_(function () {
            R_UR(function () {
                up_f2l();
            })
        })
    })
}

function f2lCase11() {
    console.log("f2111")
    RUR_U_(function () {
        RUR_(function () {
            d(function () {
                up_f2l();
            })
        })
    })
}

function f2lCase12() {
    console.log("f2112")
    R(function () {
        U(function () {
            R_(function () {
                U_(function () {
                    R(function () {
                        U(function () {
                            R_(function () {
                                U_(function () {
                                    R(function () {
                                        U(function () {
                                            R_(function () {
                                                d(function () {
                                                    up_f2l();
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase13() {
    console.log("f2113")
    RU_R_U(function () {
        yy_(function () {
            R_UR(function () {
                up_f2l();
            })
        })
    })
}

function f2lCase14() {
    console.log("f2114")
    yy_(function () {
        R_U2(function () {
            RUR_U_R(function () {
                up_f2l();
            })
        })
    })
}

function f2lCase15() {
    console.log("f2115")
    yy_(function () {
        U_(function () {
            R_U2(function () {
                RU_R_UR(function () {
                    up_f2l();
                })
            })
        })
    })
}

function f2lCase16() {
    console.log("f2116")
    yy_(function () {
        R_URU_U_(function () {
            R_U_R(function () {
                up_f2l();
            })
        })
    })
}

function f2lCase17() {
    console.log("f2117")
    F(function () {
        U(function () {
            RU_R_F_(function () {
                RU_R_(function () {
                    d(function () {
                        up_f2l();
                    })
                })
            })
        })
    })
}

function f2lCase18() {
    console.log("f2118")
    U(function () {
        RU_R_U_(function () {
            RU_R_U(function () {
                RU_R_(function () {
                    d(function () {
                        up_f2l();
                    })
                })
            })
        })
    })
}

function f2lCase19() {
    console.log("f2119")
    R(function () {
        U_(function () {
            R_(function () {
                U(function () {
                    U(function () {
                        RUR_(function () {
                            d(function () {
                                up_f2l();
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase20() {
    console.log("f2120")
    U(function () {
        R(function () {
            U_(function () {
                U_(function () {
                    R_URU_(function () {
                        R_(function () {
                            d(function () {
                                up_f2l();
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase21() {
    console.log("f2121")
    R(function () {
        U_(function () {
            U_(function () {
                R_U_R(function () {
                    U(function () {
                        R_(function () {
                            d(function () {
                                up_f2l();
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase22() {
    console.log("f2122")
    U_(function () {
        RU_R_U(function () {
            U(function () {
                RU_R_(function () {
                    d(function () {
                        up_f2l();
                    })
                })
            })
        })
    })
}

function f2lCase23() {
    console.log("f2123")
    U_(function () {
        RUR_(function () {
            yy_(function () {
                U(function () {
                    R_U_R(function () {
                        up_f2l();
                    })
                })
            })
        })
    })
}

function f2lCase24() {
    console.log("f2124")
    yy_(function () {
        U(function () {
            R_URU_(function () {
                R_U_R(function () {
                    up_f2l();
                })
            })
        })
    })
}

function f2lCase25() {
    console.log("f2125")
    yy_(function () {
        R_U_R(function () {
            up_f2l();
        })
    })
}

function f2lCase26() {
    console.log("f2126")
    yy_(function () {
        U(function () {
            R_U_RU_(function () {
                R_U_R(function () {
                    up_f2l();
                })
            })
        })
    })
}

function f2lCase27() {
    console.log("f2127")
    yy_(function () {
        R(function () {
            U_(function () {
                U_(function () {
                    R_(function () {
                        R_(function () {
                            U_(function () {
                                R(function () {
                                    R(function () {
                                        U_(function () {
                                            R_(function () {
                                                up_f2l();
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase28() {
    console.log("f2128")
    l(function () {
        U(function () {
            r(function () {
                U_(function () {
                    r_(function () {
                        U_(function () {
                            l_(function () {
                                d(function () {
                                    up_f2l();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase29() {
    console.log("f2129")
    U_(function () {
        R(function () {
            U_(function () {
                U_(function () {
                    R_(function () {
                        U(function () {
                            U(function () {
                                RU_R_(function () {
                                    d(function () {
                                        up_f2l();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase30() {
    console.log("f2130")
    U_(function () {
        RUR_U_(function () {
            R(function () {
                U_(function () {
                    U_(function () {
                        R_(function () {
                            d(function () {
                                up_f2l();
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase31() {
    console.log("f2131")
    U(function () {
        R(function () {
            U_(function () {
                R_(function () {
                    d(function () {
                        up_f2l();
                    })
                })
            })
        })
    })
}

function f2lCase32() {
    console.log("f2132")
    U_(function () {
        RU_U_R_U(function () {
            RUR_(function () {
                d(function () {
                    up_f2l();
                })
            })
        })
    })
}

function f2lCase33() {
    console.log("f2133")
    yy_(function () {
        U(function () {
            R_U_R(function () {
                d_(function () {
                    RUR_(function () {
                        up_f2l();
                    })
                })
            })
        })
    })
}

function f2lCase34() {
    console.log("f2134")
    yy_(function () {
        U_(function () {
            R_UR(function () {
                up_f2l();
            })
        })
    })
}

function f2lCase35() {
    console.log("f2135")
    yy_(function () {
        U(function () {
            R_U_R(function () {
                U_(function () {
                    U_(function () {
                        R_UR(function () {
                            up_f2l();
                        })
                    })
                })
            })
        })
    })
}

function f2lCase36() {
    console.log("f2136")
    yy_(function () {
        U(function () {
            R_U2RU_(function () {
                U_(function () {
                    R_UR(function () {
                        up_f2l();
                    })
                })
            })
        })
    })
}

function f2lCase37() {
    console.log("f2137")
    RU_R_U(function () {
        U(function () {
            yy_(function () {
                R_U_R(function () {
                    up_f2l();
                })
            })
        })
    })
}

function f2lCase38() {
    console.log("f2138")
    R_U2(function () {
        R(function () {
            R(function () {
                U(function () {
                    R(function () {
                        R(function () {
                            U(function () {
                                R(function () {
                                    d(function () {
                                        up_f2l();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function f2lCase39() {
    console.log("f2139")
    U_(function () {
        RUR_(function () {
            U(function () {
                RUR_(function () {
                    d(function () {
                        up_f2l();
                    })
                })
            })
        })
    })
}

function f2lCase40() {
    console.log("f2140")
    RUR_(function () {
        d(function () {
            up_f2l();
        })
    })
}

function f2lCase41() {
    console.log("f2141")
    U_(function () {
        RU_R_U(function () {
            RUR_(function () {
                d(function () {
                    up_f2l();
                })
            })
        })
    })
}

function RU_R_U(next) {
    R(function () {
        U_(function () {
            R_(function () {
                U(next)
            })
        })
    })
}

function R_U2RU_(next) {
    R_(function () {
        U(function () {
            U(function () {
                R(function () {
                    U_(next)
                })
            })
        })
    })
}

function R_UR(next) {
    R_(function () {
        U(function () {
            R(next)
        })
    })
}

function URU_R_U_(next) {
    U(function () {
        R(function () {
            U_(function () {
                R_(function () {
                    U_(next)
                })
            })
        })
    })
}

function R_F_RU(next) {
    R_(function () {
        F_(function () {
            R(function () {
                U(next)
            })
        })
    })
}

function RU_R_F(next) {
    R(function () {
        U_(function () {
            R_(function () {
                F(next)
            })
        })
    })
}

function RUR_U_(next) {
    R(function () {
        U(function () {
            R_(function () {
                U_(next)
            })
        })
    })
}

function RU2R_U_(next) {
    R(function () {
        U(function () {
            U(function () {
                R_(function () {
                    U_(next)
                })
            })
        })
    })
}

function RUR_(next) {
    R(function () {
        U(function () {
            R_(next)
        })
    })
}

function RU_R_d(next) {
    R(function () {
        U_(function () {
            R_(function () {
                d(next)
            })
        })
    })
}

function R_U_RU_(next) {
    R_(function () {
        U_(function () {
            R(function () {
                U_(next)
            })
        })
    })
}

function R_U_R(next) {
    R_(function () {
        U_(function () {
            R(next)
        })
    })
}

function R_U_RU(next) {
    R_(function () {
        U_(function () {
            R(function () {
                U(next)
            })
        })
    })
}

function RU_R_(next) {
    R(function () {
        U_(function () {
            R_(next)
        })
    })
}

function RU_U_R_U(next) {
    R(function () {
        U_(function () {
            U_(function () {
                R_(function () {
                    U(next)
                })
            })
        })
    })
}

function RU(next) {
    R(function () {
        U(next)
    })
}

function R_URU_(next) {
    R_(function () {
        U(function () {
            R(function () {
                U_(next)
            })
        })
    })
}

function R_U2(next) {
    R_(function () {
        U(function () {
            U(next)
        })
    })
}

function RUR_U_R(next) {
    R(function () {
        U(function () {
            R_(function () {
                U_(function () {
                    R(next)
                })
            })
        })
    })
}

function RU_R_UR(next) {
    R(function () {
        U_(function () {
            R_(function () {
                U(function () {
                    R(next)
                })
            })
        })
    })
}

function R_URU_U_(next) {
    R_(function () {
        U(function () {
            R(function () {
                U_(function () {
                    U_(next)
                })
            })
        })
    })
}

function RU_R_F_(next) {
    R(function () {
        U_(function () {
            R_(function () {
                F_(next)
            })
        })
    })
}

function RU_R_U_(next) {
    R(function () {
        U_(function () {
            R_(function () {
                U_(next)
            })
        })
    })
}

function oll() {
    if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll1();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll2();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisP) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll3();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll4();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll5();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll6();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll7();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll8();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll9();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll10();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll11();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll12();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll13();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll14();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll15();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll16();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll17();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll18();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll19();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll20();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll21();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll22();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll23();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll24();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll25();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll26();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll27();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll28();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll29();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll30();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll31();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll32();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll33();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll34();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll35();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll36();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll37();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll38();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll39();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll40();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll41();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll42();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll43();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll44();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll45();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll46();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll47();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll48();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll49();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll50();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll51();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], xAxisN) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll52();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        oll53();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], xAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll54();
    } else if (getFaceColorByVector(cubes[0], zAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], zAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], zAxisN) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], zAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll55();
    } else if (getFaceColorByVector(cubes[0], xAxisN) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], xAxisN) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], xAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], xAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll56();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], zAxisN) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], zAxisP) == 1) {
        oll57();
    } else if (getFaceColorByVector(cubes[0], yAxisP) == 1 &&
        getFaceColorByVector(cubes[9], yAxisP) == 1 &&
        getFaceColorByVector(cubes[18], yAxisP) == 1 &&
        getFaceColorByVector(cubes[19], yAxisP) == 1 &&
        getFaceColorByVector(cubes[20], yAxisP) == 1 &&
        getFaceColorByVector(cubes[11], yAxisP) == 1 &&
        getFaceColorByVector(cubes[2], yAxisP) == 1 &&
        getFaceColorByVector(cubes[1], yAxisP) == 1) {
        pll();
    } else {
        U(function () {
            oll();
        })
    }
}

function oll1() {
    console.log("oll1")
    R(function () {
        U_(function () {
            U_(function () {
                R_(function () {
                    R_(function () {
                        F(function () {
                            R(function () {
                                F_(function () {
                                    U(function () {
                                        U(function () {
                                            R_(function () {
                                                F(function () {
                                                    R(function () {
                                                        F_(function () {
                                                            pll();
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll2() {
    console.log("oll2")
    F(function () {
        RUR_U_(function () {
            F_(function () {
                f(function () {
                    RUR_U_(function () {
                        f_(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll3() {
    console.log("oll3")
    f(function () {
        RUR_U_(function () {
            f_(function () {
                U_(function () {
                    F(function () {
                        RUR_U_(function () {
                            F_(function () {
                                pll();
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll4() {
    console.log("oll4")
    f(function () {
        RUR_U_(function () {
            f_(function () {
                U(function () {
                    F(function () {
                        RUR_U_(function () {
                            F_(function () {
                                pll();
                            })
                        })
                    })
                })
            })
        })
    })

}

function oll5() {
    console.log("oll5")
    r_(function () {
        U(function () {
            U(function () {
                RUR_U_(function () {
                    r(function () {
                        pll();
                    })
                })
            })
        })
    })
}

function oll6() {
    console.log("oll6")
    r(function () {
        U_(function () {
            U_(function () {
                R_U_RU_(function () {
                    r_(function () {
                        pll();
                    })
                })
            })
        })
    })
}

function oll7() {
    console.log("oll7")
    r(function () {
        U(function () {
            R_(function () {
                U(function () {
                    R(function () {
                        U_(function () {
                            U_(function () {
                                r_(function () {
                                    pll();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll8() {
    console.log("oll8")
    r_(function () {
        U_(function () {
            RU_R_U(function () {
                U(function () {
                    r(function () {
                        pll();
                    })
                })
            })
        })
    })
}

function oll9() {
    console.log("oll9")
    RUR_U_(function () {
        R_(function () {
            F(function () {
                R(function () {
                    RUR_U_(function () {
                        F_(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll10() {
    console.log("oll10")
    M(function () {
        R_U2(function () {
            RUR_(function () {
                U(function () {
                    R(function () {
                        U(function () {
                            M_(function () {
                                pll();
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll11() {
    console.log("oll11")
    r_(function () {
        R(function () {
            RUR_(function () {
                U(function () {
                    RU_U_R_U(function () {
                        M(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll12() {
    console.log("oll12")
    M(function () {
        R_U_RU_(function () {
            R_U2RU_(function () {
                M_(function () {
                    pll();
                })
            })
        })
    })
}

function oll13() {
    console.log("oll13")
    f(function () {
        RU(function () {
            R(function () {
                RU_R_UR(function () {
                    U_(function () {
                        f_(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll14() {
    console.log("oll14")
    R_(function () {
        F(function () {
            RUR_(function () {
                F_(function () {
                    R(function () {
                        F(function () {
                            U_(function () {
                                F_(function () {
                                    pll();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll15() {
    console.log("oll15")
    r_(function () {
        U_(function () {
            r(function () {
                R_U_RU(function () {
                    r_(function () {
                        U(function () {
                            r(function () {
                                pll();
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll16() {
    console.log("oll16")
    r(function () {
        U(function () {
            r_(function () {
                RUR_U_(function () {
                    r(function () {
                        U_(function () {
                            r_(function () {
                                pll();
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll17() {
    console.log("oll17")
    l(function () {
        U_(function () {
            l_(function () {
                f(function () {
                    R(function () {
                        R(function () {
                            B(function () {
                                R_(function () {
                                    U(function () {
                                        R_(function () {
                                            U_(function () {
                                                f_(function () {
                                                    pll();
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll18() {
    console.log("oll18")
    r(function () {
        U(function () {
            R_URU_U_(function () {
                r_(function () {
                    r_(function () {
                        U_(function () {
                            R(function () {
                                U_(function () {
                                    R_U2(function () {
                                        r(function () {
                                            pll();
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll19() {
    console.log("oll19")
    r_(function () {
        RU(function () {
            RUR_U_(function () {
                r(function () {
                    R_(function () {
                        R_(function () {
                            F(function () {
                                R(function () {
                                    F_(function () {
                                        pll();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll20() {
    console.log("oll20")
    r(function () {
        U(function () {
            R_(function () {
                U_(function () {
                    M(function () {
                        M(function () {
                            U(function () {
                                RU_R_U_(function () {
                                    M(function () {
                                        pll();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll21() {
    console.log("oll21")
    R(function () {
        U_(function () {
            U_(function () {
                R_U_RU(function () {
                    R_U_RU_(function () {
                        R_(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll22() {
    console.log("oll22")
    R(function () {
        U_(function () {
            U_(function () {
                R_(function () {
                    R_(function () {
                        U_(function () {
                            R(function () {
                                R(function () {
                                    U_(function () {
                                        R_(function () {
                                            R_(function () {
                                                U_(function () {
                                                    U_(function () {
                                                        R(function () {
                                                            pll();
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll23() {
    console.log("oll23")
    R(function () {
        R(function () {
            D_(function () {
                R(function () {
                    U_(function () {
                        U_(function () {
                            R_(function () {
                                D(function () {
                                    R(function () {
                                        U_(function () {
                                            U_(function () {
                                                R(function () {
                                                    pll();
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll24() {
    console.log("oll24")
    r(function () {
        U(function () {
            R_(function () {
                U_(function () {
                    r_(function () {
                        F(function () {
                            R(function () {
                                F_(function () {
                                    pll();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll25() {
    console.log("oll25")
    F_(function () {
        r(function () {
            U(function () {
                R_(function () {
                    U_(function () {
                        r_(function () {
                            F(function () {
                                R(function () {
                                    pll();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll26() {
    console.log("oll26")
    R(function () {
        U_(function () {
            U_(function () {
                R_U_RU_(function () {
                    R_(function () {
                        pll();
                    })
                })
            })
        })
    })
}

function oll27() {
    console.log("oll27")
    RUR_(function () {
        U(function () {
            R(function () {
                U_(function () {
                    U_(function () {
                        R_(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll28() {
    console.log("oll28")
    r(function () {
        U(function () {
            R_(function () {
                U_(function () {
                    r_(function () {
                        RU(function () {
                            RU_R_(function () {
                                pll();
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll29() {
    console.log("oll29")
    RUR_U_(function () {
        RU_R_(function () {
            F_(function () {
                U_(function () {
                    F(function () {
                        RUR_(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll30() {
    console.log("oll30")
    f(function () {
        RU(function () {
            R(function () {
                RU_R_U(function () {
                    R(function () {
                        RU_R_(function () {
                            f_(function () {
                                pll();
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll31() {
    console.log("oll31")
    r_(function () {
        F_(function () {
            U(function () {
                F(function () {
                    r(function () {
                        U_(function () {
                            r_(function () {
                                U_(function () {
                                    r(function () {
                                        pll();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll32() {
    console.log("oll32")
    RU(function () {
        B_(function () {
            U_(function () {
                R_UR(function () {
                    B(function () {
                        R_(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll33() {
    console.log("oll33")
    RUR_U_(function () {
        R_(function () {
            F(function () {
                R(function () {
                    F_(function () {
                        pll();
                    })
                })
            })
        })
    })
}

function oll34() {
    console.log("oll34")
    RU(function () {
        R(function () {
            R(function () {
                U_(function () {
                    R_(function () {
                        F(function () {
                            RU(function () {
                                R(function () {
                                    U_(function () {
                                        F_(function () {
                                            pll();
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll35() {
    console.log("oll35")
    R(function () {
        U_(function () {
            U_(function () {
                R_(function () {
                    R_(function () {
                        F(function () {
                            R(function () {
                                F_(function () {
                                    R(function () {
                                        U_(function () {
                                            U_(function () {
                                                R_(function () {
                                                    pll();
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll36() {
    console.log("oll36")
    R_U_RU_(function () {
        R_UR(function () {
            U(function () {
                l(function () {
                    U_(function () {
                        R_(function () {
                            U(function () {
                                pll();
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll37() {
    console.log("oll37")
    F(function () {
        RU_R_U_(function () {
            RUR_(function () {
                F_(function () {
                    pll();
                })
            })
        })
    })
}

function oll38() {
    console.log("oll38")
    RUR_(function () {
        U(function () {
            RU_R_U_(function () {
                R_(function () {
                    F(function () {
                        R(function () {
                            F_(function () {
                                pll();
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll39() {
    console.log("oll39")
    RUR_(function () {
        F_(function () {
            U_(function () {
                F(function () {
                    U(function () {
                        R(function () {
                            U(function () {
                                U(function () {
                                    R_(function () {
                                        pll();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll40() {
    console.log("oll40")
    R_(function () {
        F(function () {
            RUR_U_(function () {
                F_(function () {
                    U(function () {
                        R(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll41() {
    console.log("oll41")
    RUR_(function () {
        U(function () {
            R(function () {
                U_(function () {
                    U_(function () {
                        R_(function () {
                            F(function () {
                                RUR_U_(function () {
                                    F_(function () {
                                        pll();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll42() {
    console.log("oll42")
    r_(function () {
        RU(function () {
            F(function () {
                RUR_U_(function () {
                    F_(function () {
                        M(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll43() {
    console.log("oll43")
    B_(function () {
        U_(function () {
            R_UR(function () {
                B(function () {
                    pll();
                })
            })
        })
    })
}

function oll44() {
    console.log("oll44")
    f(function () {
        RUR_U_(function () {
            f_(function () {
                pll();
            })
        })
    })
}

function oll45() {
    console.log("oll45")
    F(function () {
        RUR_U_(function () {
            F_(function () {
                pll();
            })
        })
    })
}

function oll46() {
    console.log("oll46")
    R_(function () {
        U_(function () {
            R_(function () {
                F(function () {
                    R(function () {
                        F_(function () {
                            U(function () {
                                R(function () {
                                    pll();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll47() {
    console.log("oll47")
    b_(function () {
        U_(function () {
            R_UR(function () {
                U_(function () {
                    R_UR(function () {
                        b(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll48() {
    console.log("oll48")
    F(function () {
        RUR_U_(function () {
            RUR_U_(function () {
                F_(function () {
                    pll();
                })
            })
        })
    })
}

function oll49() {
    console.log("oll49")
    R(function () {
        B_(function () {
            R_(function () {
                R_(function () {
                    F(function () {
                        R(function () {
                            R(function () {
                                B(function () {
                                    R_(function () {
                                        R_(function () {
                                            F_(function () {
                                                R(function () {
                                                    pll();
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll50() {
    console.log("oll50")
    r_(function () {
        U(function () {
            r(function () {
                r(function () {
                    U_(function () {
                        r_(function () {
                            r_(function () {
                                U_(function () {
                                    r(function () {
                                        r(function () {
                                            U(function () {
                                                r_(function () {
                                                    pll();
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll51() {
    console.log("oll51")
    f(function () {
        RUR_U_(function () {
            RUR_U_(function () {
                f_(function () {
                    pll();
                })
            })
        })
    })
}

function oll52() {
    console.log("oll52")
    R_(function () {
        F_(function () {
            U_(function () {
                F(function () {
                    U_(function () {
                        RUR_(function () {
                            U(function () {
                                R(function () {
                                    pll();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll53() {
    console.log("oll53")
    r_(function () {
        U(function () {
            U(function () {
                RUR_U_(function () {
                    RUR_(function () {
                        U(function () {
                            r(function () {
                                pll();
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll54() {
    console.log("oll54")
    r(function () {
        U_(function () {
            U_(function () {
                R_U_RU(function () {
                    R_U_RU_(function () {
                        r_(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

function oll55() {
    console.log("oll55")
    r(function () {
        U_(function () {
            U_(function () {
                R_(function () {
                    U_(function () {
                        r_(function () {
                            R(function () {
                                RUR_(function () {
                                    U_(function () {
                                        r(function () {
                                            U_(function () {
                                                r_(function () {
                                                    pll();
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll56() {
    console.log("56")
    r_(function () {
        U_(function () {
            r(function () {
                U_(function () {
                    R_UR(function () {
                        U_(function () {
                            R_UR(function () {
                                r_(function () {
                                    U(function () {
                                        r(function () {
                                            pll();
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function oll57() {
    console.log("oll57")
    RUR_U_(function () {
        M(function () {
            U(function () {
                R(function () {
                    U_(function () {
                        r_(function () {
                            pll();
                        })
                    })
                })
            })
        })
    })
}

var judge = 0;

function pll() {
    if (judgePll(1) && !judgePll(2) && judgePll(3) && judgePll(4) && judgePll(5) && judgePll(6)
        && judgePll(7) && !judgePll(8) && judgePll(9) && judgePll(10) && !judgePll(11) && judgePll(12)) {
        judge = 0;
        if (getFaceColorByVector(cubes[1], zAxisP) == getFaceColorByVector(cubes[14], xAxisP) &&
            getFaceColorByVector(cubes[11], yAxisP) == getFaceColorByVector(cubes[12], xAxisN) &&
            getFaceColorByVector(cubes[9], xAxisN) == getFaceColorByVector(cubes[4], zAxisP)) {
            pllCase1();
        } else {
            pllCase2();
        }
    }
    else if (judgePll(1) && !judgePll(2) && judgePll(3) && judgePll(4) && !judgePll(5) && judgePll(6)
        && judgePll(7) && !judgePll(8) && judgePll(9) && judgePll(10) && !judgePll(11) && judgePll(12)) {
        judge = 0;
        if (getFaceColorByVector(cubes[1], zAxisP) == getFaceColorByVector(cubes[22], zAxisN) &&
            getFaceColorByVector(cubes[19], zAxisN) == getFaceColorByVector(cubes[4], zAxisP)) {
            pllCase3();
        }else {
            pllCase4();
        }
    }  else if (!judgePll(1) && judgePll(2) && judgePll(3) && judgePll(4) && judgePll(5) && !judgePll(6)
        && !judgePll(7) && judgePll(8) && !judgePll(9) && !judgePll(10) && judgePll(11) && !judgePll(12)) {
        judge = 0;
        if (getFaceColorByVector(cubes[2], zAxisP) == getFaceColorByVector(cubes[14], xAxisP)){
            pllCase6();
        } else {
            pllCase5();
        }
    } else if (!judgePll(1) && judgePll(2) && !judgePll(3) && !judgePll(4) && judgePll(5) && !judgePll(6)
        && !judgePll(7) && judgePll(8) && !judgePll(9) && !judgePll(10) && judgePll(11) && !judgePll(12)) {
        judge = 0;
        pllCase7();
    } else if (judgePll(1) && !judgePll(2) && judgePll(3) && judgePll(4) && judgePll(5) && !judgePll(6)
        && !judgePll(7) && !judgePll(8) && !judgePll(9) && !judgePll(10) && judgePll(11) && judgePll(12)) {
        judge = 0;
        pllCase8();
    } else if (judgePll(1) && judgePll(2) && judgePll(3) && judgePll(4) && !judgePll(5) && !judgePll(6)
        && !judgePll(7) && judgePll(8) && !judgePll(9) && !judgePll(10) && !judgePll(11) && judgePll(12)) {
        judge = 0;
        pllCase9();
    } else if (judgePll(1) && judgePll(2) && !judgePll(3) && !judgePll(4) && !judgePll(5) && judgePll(6)
        && judgePll(7) && !judgePll(8) && !judgePll(9) && !judgePll(10) && judgePll(11) && judgePll(12)) {
        judge = 0;
        pllCase10();
    } else if (judgePll(1) && !judgePll(2) && !judgePll(3) && !judgePll(4) && !judgePll(5) && judgePll(6)
        && judgePll(7) && judgePll(8) && !judgePll(9) && !judgePll(10) && judgePll(11) && judgePll(12)) {
        judge = 0;
        pllCase11();
    } else if (!judgePll(1) && judgePll(2) && judgePll(3) && judgePll(4) && judgePll(5) && judgePll(6)
        && judgePll(7) && !judgePll(8) && !judgePll(9) && !judgePll(10) && !judgePll(11) && !judgePll(12)) {
        judge = 0;
        pllCase12();
    } else if (judgePll(1) && judgePll(2) && judgePll(3) && judgePll(4) && judgePll(5) && !judgePll(6)
        && !judgePll(7) && !judgePll(8) && !judgePll(9) && !judgePll(10) && !judgePll(11) && judgePll(12)) {
        judge = 0;
        pllCase13();
    } else if (judgePll(1) && judgePll(2) && !judgePll(3) && !judgePll(4) && judgePll(5) && !judgePll(6)
        && !judgePll(7) && !judgePll(8) && judgePll(9) && judgePll(10) && !judgePll(11) && judgePll(12)) {
        judge = 0;
        pllCase14();
    } else if (judgePll(1) && !judgePll(2) && judgePll(3) && judgePll(4) && !judgePll(5) && !judgePll(6)
        && !judgePll(7) && judgePll(8) && !judgePll(9) && !judgePll(10) && judgePll(11) && judgePll(12)) {
        judge = 0;
        pllCase15();
    } else if (judgePll(1) && !judgePll(2) && judgePll(3) && !judgePll(4) && judgePll(5) && judgePll(6)
        && !judgePll(7) && !judgePll(8) && !judgePll(9) && !judgePll(10) && !judgePll(11) && !judgePll(12)) {
        judge = 0;
        pllCase16();
    } else if (judgePll(1) && !judgePll(2) && judgePll(3) && !judgePll(4) && !judgePll(5) && !judgePll(6)
        && !judgePll(7) && judgePll(8) && judgePll(9) && !judgePll(10) && !judgePll(11) && !judgePll(12)) {
        judge = 0;
        pllCase17();
    } else if (judgePll(1) && !judgePll(2) && judgePll(3) && !judgePll(4) && !judgePll(5) && !judgePll(6)
        && !judgePll(7) && !judgePll(8) && !judgePll(9) && judgePll(10) && judgePll(11) && !judgePll(12)) {
        judge = 0;
        pllCase18();
    } else if (judgePll(1) && !judgePll(2) && judgePll(3) && !judgePll(4) && !judgePll(5) && !judgePll(6)
        && judgePll(7) && judgePll(8) && !judgePll(9) && !judgePll(10) && !judgePll(11) && !judgePll(12)) {
        judge = 0;
        pllCase19();
    } else if (judgePll(1) && !judgePll(2) && !judgePll(3) && !judgePll(4) && judgePll(5) && judgePll(6)
        && judgePll(7) && !judgePll(8) && !judgePll(9) && !judgePll(10) && judgePll(11) && judgePll(12)) {
        judge = 0;
        pllCase20();
    } else if (!judgePll(1) && !judgePll(2) && judgePll(3) && judgePll(4) && judgePll(5) && !judgePll(6)
        && !judgePll(7) && !judgePll(8) && judgePll(9) && judgePll(10) && judgePll(11) && !judgePll(12)) {
        judge = 0;
        pllCase21();
    } else {
        U(function () {
            judge++;
            if (judge > 3) {
                judge = 0;
                d(function () {
                    pll();
                })
            } else {
                pll();
            }
        })
    }
}

function pllCase1() {
    console.log("pll1")
    M(function () {
        M(function () {
            U(function () {
                M_(function () {
                    U(function () {
                        U(function () {
                            M(function () {
                                U(function () {
                                    M(function () {
                                        M(function () {
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase2() {
    console.log("pll2")
    M(function () {
        M(function () {
            U_(function () {
                M_(function () {
                    U(function () {
                        U(function () {
                            M(function () {
                                U_(function () {
                                    M(function () {
                                        M(function () {
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase3() {
    console.log("pll3")
    M(function () {
        M(function () {
            U(function () {
                M(function () {
                    M(function () {
                        U(function () {
                            U(function () {
                                M(function () {
                                    M(function () {
                                        U(function () {
                                            M(function () {
                                                M(function () {
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase4() {
    console.log("pll4")
    M(function () {
        U(function () {
            M(function () {
                M(function () {
                    U(function () {
                        M(function () {
                            M(function () {
                                U(function () {
                                    M(function () {
                                        U(function () {
                                            U(function () {
                                                M(function () {
                                                    M(function () {
                                                        U_(function () {
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase5() {
    console.log("pll5")
    xx_(function () {
        R(function () {
            R(function () {
                D(function () {
                    D(function () {
                        R_U_R(function () {
                            D(function () {
                                D(function () {
                                    R_(function () {
                                        U(function () {
                                            R_(function () {

                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase6() {
    console.log("pll6")
    xx_(function () {
        R(function () {
            U_(function () {
                R(function () {
                    D(function () {
                        D(function () {
                            R_UR(function () {
                                D(function () {
                                    D(function () {
                                        R_(function () {
                                            R_(function () {

                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase7() {
    console.log("pll7")
    xx_(function () {
        RU_R_(function () {
            D(function () {
                RUR_(function () {
                    D_(function () {
                        RUR_(function () {
                            D(function () {
                                RU_R_(function () {
                                    D_(function () {

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase8() {
    console.log("pll8")
    RUR_(function () {
        U_(function () {
            R_(function () {
                F(function () {
                    R(function () {
                        R(function () {
                            U_(function () {
                                R_U_RU(function () {
                                    R_(function () {
                                        F_(function () {

                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase9() {
    console.log("pll9")
    R_(function () {
        U_(function () {
            F_(function () {
                RUR_(function () {
                    U_(function () {
                        R_(function () {
                            F(function () {
                                R(function () {
                                    RU_R_U_(function () {
                                        RUR_(function () {
                                            U(function () {
                                                R(function () {

                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase10() {
    console.log("pll10")
    R_(function () {
        U(function () {
            R_(function () {
                d_(function () {
                    R_(function () {
                        F_(function () {
                            R(function () {
                                R(function () {
                                    U_(function () {
                                        R_(function () {
                                            U(function () {
                                                R_(function () {
                                                    F(function () {
                                                        R(function () {
                                                            F(function () {

                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase11() {
    console.log("pll11")
    F(function () {
        RU_R_U_(function () {
            RUR_(function () {
                F_(function () {
                    RUR_(function () {
                        U_(function () {
                            R_(function () {
                                F(function () {
                                    R(function () {
                                        F_(function () {

                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase12() {
    console.log("pll12")
    zz(function () {
        U_(function () {
            R(function () {
                D_(function () {
                    R(function () {
                        RUR_U_(function () {
                            R(function () {
                                RU(function () {
                                    D(function () {
                                        R_(function () {

                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase13() {
    console.log("pll13")
    RUR_(function () {
        F_(function () {
            RUR_U_(function () {
                R_(function () {
                    F(function () {
                        R(function () {
                            RU_R_U_(function () {

                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase14() {
    console.log("pll14")
    R_(function () {
        U(function () {
            U(function () {
                R(function () {
                    U_(function () {
                        U_(function () {
                            R_(function () {
                                F(function () {
                                    RUR_U_(function () {
                                        R_(function () {
                                            F_(function () {
                                                R(function () {
                                                    R(function () {
                                                        U_(function () {

                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase15() {
    console.log("pll15")
    RU_R_U_(function () {
        RU(function () {
            R(function () {
                D(function () {
                    R_U_R(function () {
                        D_(function () {
                            R_U2(function () {
                                R_(function () {
                                    U_(function () {

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase16() {
    console.log("pll16")
    R_(function () {
        R_(function () {
            u_(function () {
                R(function () {
                    U_(function () {
                        R(function () {
                            U(function () {
                                R_(function () {
                                    u(function () {
                                        R(function () {
                                            R(function () {
                                                f(function () {
                                                    R_(function () {
                                                        f_(function () {

                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase17() {
    console.log("pll17")
    RUR_(function () {
        yy_(function () {
            R(function () {
                R(function () {
                    u_(function () {
                        R(function () {
                            U_(function () {
                                R_(function () {
                                    U(function () {
                                        R_(function () {
                                            u(function () {
                                                R(function () {
                                                    R(function () {

                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase18() {
    console.log("pll18")
    R(function () {
        R(function () {
            u(function () {
                R_(function () {
                    U(function () {
                        R_U_R(function () {
                            u_(function () {
                                R_(function () {
                                    R_(function () {
                                        F_(function () {
                                            U(function () {
                                                F(function () {

                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase19() {
    console.log("pll19")
    R_(function () {
        d_(function () {
            F(function () {
                R(function () {
                    R(function () {
                        u(function () {
                            R_URU_(function () {
                                R(function () {
                                    u_(function () {
                                        R_(function () {
                                            R_(function () {

                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase20() {
    console.log("pll20")
    R_URU_(function () {
        R_(function () {
            F_(function () {
                U_(function () {
                    F(function () {
                        R(function () {
                            U(function () {
                                R_(function () {
                                    F(function () {
                                        R_(function () {
                                            F_(function () {
                                                R(function () {
                                                    U_(function () {
                                                        R(function () {

                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function pllCase21() {
    console.log("pll21")
    RUR_(function () {
        U(function () {
            RUR_(function () {
                F_(function () {
                    RUR_U_(function () {
                        R_(function () {
                            F(function () {
                                R(function () {
                                    RU_R_U(function () {
                                        U(function () {
                                            RU_R_(function () {

                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function judgePll(num) {
    switch (num) {
        case 1:
            if (getFaceColorByVector(cubes[0], xAxisN) == getFaceColorByVector(cubes[12], xAxisN)) {
                return true;
            }
            break;
        case 2:
            if (getFaceColorByVector(cubes[9], xAxisN) == getFaceColorByVector(cubes[12], xAxisN)) {
                return true;
            }
            break;
        case 3:
            if (getFaceColorByVector(cubes[18], xAxisN) == getFaceColorByVector(cubes[12], xAxisN)) {
                return true;
            }
            break;
        case 4:
            if (getFaceColorByVector(cubes[18], zAxisN) == getFaceColorByVector(cubes[22], zAxisN)) {
                return true;
            }
            break;
        case 5:
            if (getFaceColorByVector(cubes[19], zAxisN) == getFaceColorByVector(cubes[22], zAxisN)) {
                return true;
            }
            break;
        case 6:
            if (getFaceColorByVector(cubes[20], zAxisN) == getFaceColorByVector(cubes[22], zAxisN)) {
                return true;
            }
            break;
        case 7:
            if (getFaceColorByVector(cubes[20], xAxisP) == getFaceColorByVector(cubes[14], xAxisP)) {
                return true;
            }
            break;
        case 8:
            if (getFaceColorByVector(cubes[11], xAxisP) == getFaceColorByVector(cubes[14], xAxisP)) {
                return true;
            }
            break;
        case 9:
            if (getFaceColorByVector(cubes[2], xAxisP) == getFaceColorByVector(cubes[14], xAxisP)) {
                return true;
            }
            break;
        case 10:
            if (getFaceColorByVector(cubes[2], zAxisP) == getFaceColorByVector(cubes[4], zAxisP)) {
                return true;
            }
            break;
        case 11:
            if (getFaceColorByVector(cubes[1], zAxisP) == getFaceColorByVector(cubes[4], zAxisP)) {
                return true;
            }
            break;
        case 12:
            if (getFaceColorByVector(cubes[0], zAxisP) == getFaceColorByVector(cubes[4], zAxisP)) {
                return true;
            }
            break;
    }
    return false;
}




