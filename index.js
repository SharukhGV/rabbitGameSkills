
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

    if (keys.ArrowDown.pressed && lastkey === "ArrowDown") movables.forEach((back) => { back.position.y -= 3 });
    else if (keys.ArrowUp.pressed && lastkey === "ArrowUp") movables.forEach((back) => { back.position.y += 3 });
    else if (keys.ArrowRight.pressed && lastkey === "ArrowRight") movables.forEach((back) => { back.position.x -= 3 });
    else if (keys.ArrowLeft.pressed && lastkey === "ArrowLeft") movables.forEach((back) => { back.position.x += 3 });

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
earthfacts.innerHTML = '<div style="color: white;font-size:20px">Earth is the third planet from the sun, and the only place we know of so far that’s inhabited by living things. It is the only world in our solar system with liquid water on the surface. Slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the sun, all of which are made of rock and metal.</div>';
// let earthImage = document.getElementById("earthIamge")

}
else{
    let earthfacts = document.getElementById("earthFacts")

    earthfacts.innerHTML = '';

}
// if(background.position.x>=-595 && background.position.y>=-495){
//     drawPopup("Welcome to the East Earth", spaceShip.position.x, spaceShip.position.y);
// console.log(earth)
// }

if(background.position.x<-857 && background.position.y<=-550 && background.position.x>=-943 && background.position.y>=-608){
    drawPopup("Welcome to Mars", spaceShip.position.x, spaceShip.position.y);
let marsFacts = document.getElementById("marsFacts")
marsFacts.innerHTML = '<div style="color: white; font-size: 20px;">Mars, the fourth planet from the sun, is a dusty, cold, desert world with a thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons, and weather. One of the most explored bodies in the solar system, Mars is the only planet where we\'ve sent rovers to roam the alien landscape.</div>';

// let earthImage = document.getElementById("earthIamge")

}
else{
    let marsFacts = document.getElementById("marsFacts")

    marsFacts.innerHTML = '';

}


// VENUS

if(background.position.x<-263 && background.position.y<=-632 && background.position.x>=-331 && background.position.y>=-682){
    drawPopup("Welcome to Venus", spaceShip.position.x, spaceShip.position.y);
let venusFacts = document.getElementById("venusFacts")
venusFacts.innerHTML = "<div style='color: white;font-size:20px'>Venus, the second planet from the sun, is the closest planet to Earth and one of the brightest objects we see in the sky. It is sometimes referred to as Earth's 'sister planet' because of their similar size, mass, composition, and proximity to the sun. It spins slowly in the opposite direction than most planets.</div>";
// let earthImage = document.getElementById("earthIamge")

}
else{
    let venusFacts = document.getElementById("venusFacts")

    venusFacts.innerHTML = '';

}
// console.log(background.position.x)
// console.log(background.position.y)


// Mercury

if(background.position.x<-85 && background.position.y<=-306 && background.position.x>=-139 && background.position.y>=-350){
    drawPopup("Welcome to Mercury", spaceShip.position.x, spaceShip.position.y);
let mercuryFacts = document.getElementById("mercuryFacts")
mercuryFacts.innerHTML = "<div style='color: white;font-size:20px'>Mercury is the closest planet to the Sun and due to its proximity, it is not easily seen except during twilight. For every two orbits of the Sun, Mercury completes three rotations about its axis.</div>";
// let earthImage = document.getElementById("earthIamge")

}
else{
    let mercuryFacts = document.getElementById("mercuryFacts")

    mercuryFacts.innerHTML = '';

}

// Sun

if(background.position.x<261 && background.position.y<=-416 && background.position.x>=93 && background.position.y>=-578){
    drawPopup("Welcome to Sun", spaceShip.position.x, spaceShip.position.y);
let sunFacts = document.getElementById("sunFacts")
sunFacts.innerHTML = "<div style='color: white;font-size:20px'>The Sun is the star at the center of the Solar System. It is a massive, hot ball of plasma, inflated and heated by energy produced by nuclear fusion reactions at its core. Part of this internal energy is emitted from its surface as light, ultraviolet, and infrared radiation, providing most of the energy for life on Earth.</div>";
// let earthImage = document.getElementById("earthIamge")

}
else{
    let sunFacts = document.getElementById("sunFacts")

    sunFacts.innerHTML = '';

}




// Saturn

if(background.position.x<-1435 && background.position.y<=-696 && background.position.x>=-1523 && background.position.y>=-758){
    drawPopup("Welcome to Saturn", spaceShip.position.x, spaceShip.position.y);
let saturnFacts = document.getElementById("saturnFacts")
saturnFacts.innerHTML = "<div style='color: white;font-size:20px'>Saturn, the sixth planet from the sun, is the second-largest planet in our solar system by mass and size and the most distant planet easily visible to the unaided eye from Earth. This gas giant made mostly of hydrogen and helium is easily recognized by its yellowish color, magnificent rings, and oblate—or flattened at the poles—shape.</div>";
// let earthImage = document.getElementById("earthIamge")

}
else{
    let saturnFacts = document.getElementById("saturnFacts")

    saturnFacts.innerHTML = '';

}


// uranusFacts

if(background.position.x<-1635 && background.position.y<=-356 && background.position.x>=-1723 && background.position.y>=-428){
    drawPopup("Welcome to Uranus", spaceShip.position.x, spaceShip.position.y);
let uranusFacts = document.getElementById("uranusFacts")
uranusFacts.innerHTML = "<div style='color: white;font-size:20px'>Uranus is the seventh planet from the sun. It has the third-largest radius of all the planets. It has 13 faint rings and 27 small moons. But a characteristic that sets Uranus apart: It spins on its side as it orbits the sun. That trip takes about 84 Earth years.</div>";
// let earthImage = document.getElementById("earthIamge")

}
else{
    let uranusFacts = document.getElementById("uranusFacts")

    uranusFacts.innerHTML = '';

}


// Neptune

if(background.position.x<-1843 && background.position.y<=-626 && background.position.x>=-1913 && background.position.y>=-674){
    drawPopup("Welcome to Neptune", spaceShip.position.x, spaceShip.position.y);
let neptuneFacts = document.getElementById("neptuneFacts")
neptuneFacts.innerHTML = "<div style='color: white;font-size:20px'>Neptune, the eighth planet from the sun, is the fourth largest planet in the solar system, but because it is so far away, it is not visible to the naked eye. Images from Voyager 1 show a vibrant blue Neptune with 14 moons, including its largest moon, Triton, discovered just 17 days after Neptune was first documented in 1846.</div>";
// let earthImage = document.getElementById("earthIamge")

}
else{
    let neptuneFacts = document.getElementById("neptuneFacts")

    neptuneFacts.innerHTML = '';

}

// console.log(background.position.x)
// console.log(background.position.y)


// JUPITER

if(background.position.x<-1137 && background.position.y<=-166 && background.position.x>=-1253 && background.position.y>=-266){
    drawPopup("Welcome to Jupiter", spaceShip.position.x, spaceShip.position.y);
let jupiterFacts = document.getElementById("jupiterFacts")
jupiterFacts.innerHTML = "<div style='color: white;font-size:20px'>Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter orbits the Sun at a distance of 5.20 AU with an orbital period of 11.86 years. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times.</div>";
// let earthImage = document.getElementById("earthIamge")

}
else{
    let jupiterFacts = document.getElementById("jupiterFacts")

    jupiterFacts.innerHTML = '';

}



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