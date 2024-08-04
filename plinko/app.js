function setup(){
    createCanvas(600 , 600);
    fill(0);
    strokeWeight(3);
    rectMode(CENTER);
    
    let space = 60;
    
    for(let x = 0 ; x < width + 50 ; x+=space){
        for(let y = 0 ; y < height + 50 ; y+=space){
            // line(x , y , x + space , y);
            // line(x , y , x , y + space);
            circle(x , y , 10);
            circle(x + space / 2 , y + space / 2 , 10);
        }
    }
}

