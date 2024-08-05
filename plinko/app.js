function setup() {
    let canvas = createCanvas(1150, 550);
    canvas.parent('gameCanvas1'); 
    
    fill(0);
    strokeWeight(3);
    rectMode(CENTER);

    let space = 60;

    for (let x = 0; x < width; x += space) {
        for (let y = 0; y < height; y += space) {
           
            if (y < space / 2) continue;

            if (x < space / 2 || x > width - space / 2) continue;

            if (y > height - space / 2) continue;

            circle(x, y, 10);
            circle(x + space / 2, y + space / 2, 10);
        }
    }
}

