const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class Sprite {
    constructor({ position, image }) {
        this.position = position;
        this.image = image;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}

class Drawable {
    constructor({ position, image }) {
        this.position = position;
        this.image = image;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}
const collisionBlockImage = new Image()
collisionBlockImage.src = "./assets/collisionBlock.png"

class Boundary extends Drawable {
    constructor({ width, height, position }) {
        super({ position, image:  collisionBlockImage});
        this.width = width;
        this.height = height;
    }
}

