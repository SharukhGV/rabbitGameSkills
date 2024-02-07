
// const canvas = document.querySelector('canvas')
// const c = canvas.getContext('2d')
console.log(c)


canvas.width=840
canvas.height=480

// 840
// 480

c.fillStyle = "white"

c.fillRect(0, 0, canvas.width, canvas.height)
const image = new Image()
image.src = './assets/planetStyleGameMap.png'

const playerImage = new Image()
playerImage.src = "./assets/spaceshipdown.png"




const spaceShip = new Sprite({
    image: playerImage,
    position: {
        // x: 0,
        // y: 0,
        x: canvas.width / 2,
        y: canvas.height / 2,
    }
});

function drawPopup(text, positionX, positionY) {
    // c.fillStyle = 'rgba(255, 255, 255, 0.8)';
    // c.fillRect(positionX, positionY, 60, 30);
    // c.fillStyle = 'white';
    c.font = '16px Arial white';
    c.fillText(text, positionX, positionY); // Adjust the offset as needed
}

// Example usage:



// const background= new Sprite({ position:{
//     x:-785,
//     y:-550,
// },
// image:image
// })



const keys = {
    ArrowUp: {
        pressed: false
    },
    ArrowDown: { pressed: false },

    ArrowRight: { pressed: false },
    ArrowLeft: { pressed: false },
}

// // EARTH MAPPING
// let earthMap =[]
// for (let i=0;i<earthData.length;i+=70){
//     earthMap.push(earthData.slice(i,70+i))
// }
// let earth = [];
// const collisionBlockSize = 12;

// earthMap.forEach((row, i) => {
//     row.forEach((symbol, j) => {
//         if (symbol === 12) {
//             earth.push(
//                 new Boundary({
//                     position: {
//                         x: j * collisionBlockSize - 735,
//                         y: i * collisionBlockSize - 650
//                     },
//                     width: collisionBlockSize,
//                     height: collisionBlockSize,
//                     image: "./assets/collisionBlock.png"
//                 })
//             );
//         }
//     });
// });



const background = new Drawable({
    position: {
        x: -785,
        y: -550,
    },
    image: image,
});

const movables = [background];
// Function to check collision between two rectangles
// function isCollision(rect1, rect2) {
//     return (
//         rect1.x < rect2.x + rect2.width &&
//         rect1.x + 12 > rect2.x &&
//         rect1.y < rect2.y + rect2.height &&
//         rect1.y + 12 > rect2.y
//     );
// }

// ...
// function checkSpaceShipPosition() {
//     const { x, y } = spaceShip.position;

//     // Check if spaceShip is at a specific position
//     // if (x === 100 && y === 200) {
//         console.log(x,y);
//         // Trigger your events here
//     // }

//     // Add more position checks as needed
// }
function animate() {
    window.requestAnimationFrame(animate);
    background.draw();

    // earth.forEach((planet) => {
    //     planet.draw();
        
    //     // Check for collision between spaceship and planet
    //     if (isCollision(spaceShip.position, planet.position)) {
    //         // Trigger event to change the map or perform other actions
    //         console.log("Collision detected with planet!");
    //     }
    // });

    spaceShip.draw();

    if (keys.ArrowDown.pressed && lastkey === "ArrowDown") movables.forEach((back) => { back.position.y -= 1 });
    else if (keys.ArrowUp.pressed && lastkey === "ArrowUp") movables.forEach((back) => { back.position.y += 1 });
    else if (keys.ArrowRight.pressed && lastkey === "ArrowRight") movables.forEach((back) => { back.position.x -= 1 });
    else if (keys.ArrowLeft.pressed && lastkey === "ArrowLeft") movables.forEach((back) => { back.position.x += 1 });

    // Your existing code for popup based on spaceship position
    // if (spaceShip.position.x === 0 && spaceShip.position.y === -456) {
    //     drawPopup("Welcome to the Sun");
    // }
    // checkSpaceShipPosition()
// console.log(background.position.x)
// console.log(background.position.y)

if(background.position.x<-537 && background.position.y<=-434 && background.position.x>=-595 && background.position.y>=-494){
    drawPopup("Welcome to the Earth", spaceShip.position.x, spaceShip.position.y);
let earthfacts = document.getElementById("earthFacts")
earthfacts.innerHTML = '<div style="color: white;">Third Planet from the Sun</div>';
}
else{
    let earthfacts = document.getElementById("earthFacts")

    earthfacts.innerHTML = '';

}
// if(background.position.x>=-595 && background.position.y>=-495){
//     drawPopup("Welcome to the East Earth", spaceShip.position.x, spaceShip.position.y);
// console.log(earth)
// }

// console.log(background.position.x)
// console.log(background.position.y)


}

animate();

animate()

let lastkey=""
window.addEventListener('keydown', (event) => {
    // console.log(event)
    switch (event.key) {
        
        case 'ArrowUp':
            keys.ArrowUp.pressed = true
            lastkey="ArrowUp"
            playerImage.src = "./assets/spaceship.png"
            // player.velocity.x=-1
            break
            
        case 'ArrowDown':
            keys.ArrowDown.pressed = true
            lastkey="ArrowDown"
            playerImage.src = "./assets/spaceshipdown.png"
            // player.velocity.x=-1
            break
        case 'ArrowRight':
            // player.velocity.x=1
            keys.ArrowRight.pressed = true
            lastkey="ArrowRight"
            playerImage.src = "./assets/spaceshipright.png"
            break
        
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            lastkey="ArrowLeft"
            playerImage.src = "./assets/spaceshipleft.png"
            // player.velocity.x=-1
            break
        
        // case 'w':
        //     player.velocity.y = -20
        //     break
    }
})

// window.addEventListener('keyup', (event) => {
//     console.log(event)
//     switch (event.key) {
//         case 'd':
//             // player.velocity.x=1
//             keys.d.pressed = false
//             break;
//         case 'a':
//             keys.a.pressed = false

//             // player.velocity.x=-1
//             break

//     }
// })

window.addEventListener('keyup', (event) => {
    // console.log(event)
    switch (event.key) {
        
        case 'ArrowUp':
            keys.ArrowUp.pressed = false

            // player.velocity.x=-1
            break
            
        case 'ArrowDown':
            keys.ArrowDown.pressed = false

            // player.velocity.x=-1
            break
        case 'ArrowRight':
            // player.velocity.x=1
            keys.ArrowRight.pressed = false
            break
        
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false

            // player.velocity.x=-1
            break
        
        // case 'w':
        //     player.velocity.y = -20
        //     break
    }
})