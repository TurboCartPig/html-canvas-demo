// 2d canvas drawing context
let ctx

// Setup the canvas and drawing context, and begin drawing frames
function begin() {
	resize()

	const canvas = document.getElementById("canvas")
	ctx = canvas.getContext("2d")

	window.requestAnimationFrame(draw)
}

// Resize the canvas to the size of the viewport
function resize() {
	const canvas = document.getElementById("canvas")
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
}

// Timestamp of last frame
let lastFrame = 0.0
let pos = {
	x: 100.0,
	y: 100.0,
}

// Draw a frame
function draw(sinceBegin) {
	const delta = sinceBegin - lastFrame
	lastFrame = sinceBegin

	pos.x = 200.0 * Math.cos(sinceBegin / 500) + ctx.canvas.width / 2.0
	pos.y = 200.0 * Math.sin(sinceBegin / 500) + ctx.canvas.height / 2.0

	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

	ctx.fillStyle = "GREEN"
	ctx.beginPath()
	ctx.arc(pos.x, pos.y, 100.0, 0, Math.PI * 2.0)
	ctx.fill()

	ctx.fillStyle = "BLACK"
	ctx.font = "24px sans-serif"
	ctx.fillText("Canvas Demo", 20, 50)

	window.requestAnimationFrame(draw)
}

function keydown(event) {
	if (event.repeat) return

	console.log(event.key)
}

// Setup event handlers
window.onload = begin
window.onresize = resize
window.onkeydown = keydown
