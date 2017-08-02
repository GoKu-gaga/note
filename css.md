水平居中
margin: 0 auto;

水平垂直居中
.dad {
    position: relative;
}
.son {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.dad {
    position: relative;
}
.son {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
}

flex布局实现水平垂直居中
#dad {
    display: flex;
    justify-content: center;
    align-items: center
}
