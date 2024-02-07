

// const canvas = document.querySelector('canvas')
// const c = canvas.getContext('2d')
// console.log(c)

// canvas.width = 840
// canvas.height = 480


// const collisionsMap = []
// for (let i = 0; i < collisions.length; i += 70) {
//     collisionsMap.push(collisions.slice(i, 70 + i))
// }
// console.log(collisionsMap)
// class Boundary {
//     static width = 36
//     static height = 36
//     constructor({ position }) {
//         this.position = position
//         this.width = 36
//         this.height = 36
//     }

//     draw() {
//         c.fillStyle = 'red'
//         c.fillRect(this.position.x, this.position.y, this.width, this.height)
//     }
// }

// const boundaries = []
// const offset = {
//     x: -785,
//     y: -550
// }
// collisionsMap.forEach((row, i) => {
//     row.forEach((symbol, j) => {
//         if (symbol === 12) {

//             boundaries.push(
//                 new Boundary({
//                     position: {
//                         x: j * Boundary.width + offset.x,
//                         y: i * Boundary.height + offset.y
//                     }
//                 }))
//         }
//     })
// })


// c.fillStyle = "white"

// c.fillRect(0, 0, canvas.width, canvas.height)
// const image = new Image()
// image.src = './assets/planetStyleGameMap.png'

// const playerImage = new Image()
// playerImage.src = "./assets/spaceshipdown.png"

// // image.onload = () => {
// //     c.drawImage(image, -750, -550)
// //     c.drawImage(playerImage, (canvas.width / 2), (canvas.height / 2))

// // }



// // const scaledCanvas={
// //     width: canvas.width/4,
// //     height:canvas.height/4
// // }

// // const gravity = 0


// // class Sprite{
// //     constructor({position,imageSrc}){
// //         this.position=position
// //         this.image=new Image()
// //         this.image.src=imageSrc
// //     }
// //     draw(){
// //         if(!this.image)return
// //         c.drawImage(this.image,this.position.x,this.position.y)
// //     }

// //     update(){
// //         this.draw()
// //     }
// // }


// // class Player {
// //     constructor(position) {
// //         this.position = position
// //         this.velocity = {
// //             x: 0,
// //             y: 1,
// //         }
// //         this.height = 100
// //     }


// //     draw() {
// //         c.fillStyle = "red"
// //         c.fillRect(this.position.x, this.position.y, 100, this.height)

// //     }

// //     update() {
// //         this.draw()
// //         this.position.x += this.velocity.x

// //         this.position.y += this.velocity.y


// //         if (this.position.y + this.height + this.velocity.y < canvas.height) {
// //             this.velocity.y += gravity
// //         }
// //         else this.velocity.y = 0
// //     }
// // }

// // const player = new Player({
// //     x: 0,
// //     y: 0,
// // })


// // const player2 = new Player({
// //     x: 300,
// //     y: 100,
// // })


// // const keys = {
// //     d: {
// //         pressed: false
// //     },
// //     a: { pressed: false },
// // }



// // const background = new Sprite({
// //     position:{
// //         x:0,
// //         y:0
// //     },
// //     imageSrc:'./assets/planetStyleGameMap.png'
// // })




// // function animate() {
// //     window.requestAnimationFrame(animate)
// //     c.fillStyle = "white"
// //     c.fillRect(0, 0, canvas.width, canvas.width)

// // // c.save()    
// // // c.scale(4,4)
// // // c.translate(0,-background.image.height +scaledCanvas.height)
// // background.update()
// //     player.update()
// //     player2.update() 

// //     player.velocity.x=0
// //     // change to make player move faster
// // if(keys.d.pressed)player.velocity.x=5
// // else if(keys.a.pressed)player.velocity.x=-5
// // }

// // animate()


// class Sprite {
//     constructor({ position, image, frames = { max: 1 } }) {
//         this.position = position
//         this.image = image
//         this.frames = frames
// // image.onload=()=>{
// //     this.width=this.image.width/this.frames.max
// //     this.height=this.image.height


// // }    
// }

//     draw() {
//         // c.drawImage(this.image, this.position.x, this.position.y)
//         c.drawImage(this.image, (canvas.width/2),(canvas.height/2))

//     }



// }

// // canvas.width / 2 - this.image.width / 4 / 2, this.image.width / 4


// const player = new Sprite({
//     position: { x: canvas.width }
// })

// const background = new Sprite({
//     position: {
//         x: canvas.width / 2 - 12 / 4 / 2,
//         y: canvas.height / 2 - 12 / 2
//     },
//     image: playerImage
// })



// const keys = {
//     ArrowUp: {
//         pressed: false
//     },
//     ArrowDown: { pressed: false },

//     ArrowRight: { pressed: false },
//     ArrowLeft: { pressed: false },
// }


// const testboundary = new Boundary({
//     position: {
//         x: 400,
//         y: 400
//     }
// })
// const movables = [background, ...boundaries]
// function rectangularCollision({rectangle1,rectangle2}){
//   return(  rectangle1.position.x + rectangle1.width>=rectangle2.position.x && rectangle1.position.x + rectangle2.width && rectangle1.position.y<=rectangle2.position.y + rectangle2.height && rectangle1.position.y +rectangle1.height>= rectangle2.position.y)
// }

// function animate() {
//     window.requestAnimationFrame(animate)
//     background.draw()

//     boundaries.forEach((boundary)=>{
//         boundary.draw()
//     if(rectangularCollision({
//         rectangle1:player,
//         rectangle2:boundary
//     })){
//         console.log("colliding")
//     }
// }) 
//     // testboundary.draw()
// player.draw()
//     // c.drawImage(image, -750, -550)
//     c.drawImage(playerImage, (canvas.width / 2), (canvas.height / 2))




//     if (keys.ArrowDown.pressed && lastkey === "ArrowDown") { movables.forEach((movable) => { movable.position.y -= 3 }) }
//     else if (keys.ArrowUp.pressed && lastkey === "ArrowUp") { movables.forEach((movable) => { movable.position.y += 3 }) }
//     else if (keys.ArrowRight.pressed && lastkey === "ArrowRight") { movables.forEach((movable) => { movable.position.x -= 3 }) }
//     else if (keys.ArrowLeft.pressed && lastkey === "ArrowLeft") { movables.forEach((movable) => { movable.position.x += 3 }) }


// }
// animate()

// let lastkey = ""
// window.addEventListener('keydown', (event) => {
//     console.log(event)
//     switch (event.key) {

//         case 'ArrowUp':
//             keys.ArrowUp.pressed = true
//             lastkey = "ArrowUp"
//             // player.velocity.x=-1
//             break

//         case 'ArrowDown':
//             keys.ArrowDown.pressed = true
//             lastkey = "ArrowDown"

//             // player.velocity.x=-1
//             break
//         case 'ArrowRight':
//             // player.velocity.x=1
//             keys.ArrowRight.pressed = true
//             lastkey = "ArrowRight"

//             break

//         case 'ArrowLeft':
//             keys.ArrowLeft.pressed = true
//             lastkey = "ArrowLeft"

//             // player.velocity.x=-1
//             break

//         // case 'w':
//         //     player.velocity.y = -20
//         //     break
//     }
// })

// // window.addEventListener('keyup', (event) => {
// //     console.log(event)
// //     switch (event.key) {
// //         case 'd':
// //             // player.velocity.x=1
// //             keys.d.pressed = false
// //             break;
// //         case 'a':
// //             keys.a.pressed = false

// //             // player.velocity.x=-1
// //             break

// //     }
// // })

// window.addEventListener('keyup', (event) => {
//     console.log(event)
//     switch (event.key) {

//         case 'ArrowUp':
//             keys.ArrowUp.pressed = false

//             // player.velocity.x=-1
//             break

//         case 'ArrowDown':
//             keys.ArrowDown.pressed = false

//             // player.velocity.x=-1
//             break
//         case 'ArrowRight':
//             // player.velocity.x=1
//             keys.ArrowRight.pressed = false
//             break

//         case 'ArrowLeft':
//             keys.ArrowLeft.pressed = false

//             // player.velocity.x=-1
//             break

//         // case 'w':
//         //     player.velocity.y = -20
//         //     break
//     }
// })



// GRAVITY CODE



// const scaledCanvas={
//     width: canvas.width/4,
//     height:canvas.height/4
// }

// const gravity = 0


// class Sprite{
//     constructor({position,imageSrc}){
//         this.position=position
//         this.image=new Image()
//         this.image.src=imageSrc
//     }
//     draw(){
//         if(!this.image)return
//         c.drawImage(this.image,this.position.x,this.position.y)
//     }

//     update(){
//         this.draw()
//     }
// }


// class Player {
//     constructor(position) {
//         this.position = position
//         this.velocity = {
//             x: 0,
//             y: 1,
//         }
//         this.height = 100
//     }


//     draw() {
//         c.fillStyle = "red"
//         c.fillRect(this.position.x, this.position.y, 100, this.height)

//     }

//     update() {
//         this.draw()
//         this.position.x += this.velocity.x

//         this.position.y += this.velocity.y


//         if (this.position.y + this.height + this.velocity.y < canvas.height) {
//             this.velocity.y += gravity
//         }
//         else this.velocity.y = 0
//     }
// }

// const player = new Player({
//     x: 0,
//     y: 0,
// })


// const player2 = new Player({
//     x: 300,
//     y: 100,
// })


// const keys = {
//     d: {
//         pressed: false
//     },
//     a: { pressed: false },
// }



// const background = new Sprite({
//     position:{
//         x:0,
//         y:0
//     },
//     imageSrc:'./assets/planetStyleGameMap.png'
// })




// function animate() {
//     window.requestAnimationFrame(animate)
//     c.fillStyle = "white"
//     c.fillRect(0, 0, canvas.width, canvas.width)

// // c.save()    
// // c.scale(4,4)
// // c.translate(0,-background.image.height +scaledCanvas.height)
// background.update()
//     player.update()
//     player2.update() 

//     player.velocity.x=0
//     // change to make player move faster
// if(keys.d.pressed)player.velocity.x=5
// else if(keys.a.pressed)player.velocity.x=-5
// }

// animate()



