function Bear(){
    this.dBear = 100;
    this.HTMLElement = document.getElementById("bear");
    this.id = this.HTMLElement.id;
    this.x = this.HTMLElement.offsetLeft;
    this.y = this.HTMLElement.offsetTop;

    this.move = function(xDir,yDir){
        this.x += this.dBear * xDir;
        this.y += this.dBear * yDir;
        this.display();
    }

    this.display = function(){
        this.HTMLElement.style.left = this.x +"px";
        this.HTMLElement.style.top = this.y + "px";
        this.HTMLElement.style.display = "block";
    }

}

function start(){
    //create bear
    bear  = new Bear();

    //Add an event listner to the keypress event.
    document.addEventListener("keydown",moveBear,false)
}

// Handle keyboard events
// to move the bear
function moveBear(e){
    //codes of the four keys
    const KEYUP = 38;
    const KEYDOWN = 40;
    const KEYLEFT = 37;
    const KEYRIGHT = 39;

    if (e.keyCode == KEYRIGHT){
        bear.move(1,0);
    } //right key
    if (e.keyCode == KEYLEFT){
        bear.move(0,1);
    } //left key

    if (e.keyCode == KEYUP){
        bear.move(0,-1);
    } //up key
    if(e.keyCode == KEYDOWN){
        bear.move(0,1)
    } //down key
}