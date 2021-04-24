class game{
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        this.loop();
    }
    init(){
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = 400;
        this.canvas.height= 400;
        document.body.appendChild(this.canvas);
        this.vesau = new vesau(this);
        this.qua = new qua(this);

    }
    loop(){
        this.update();
        this.draw();
        setTimeout(()=> this.loop(),100);
    }

    update(){
        this.vesau.update();
        if (this.vesau.anqua(this.qua.x, this.qua.y)){
            this.qua.update();
        }
    }

    draw(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.vesau.draw();
        this.qua.draw();
    }
}
let g = new game();