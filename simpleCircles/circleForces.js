const NUM_CIRCLES = 150;
const MAX_RADIUS = 25;
const MIN_RADIUS = 5;
//const SET_FORCE = 0.000001;
const SET_FORCE = 1 / (NUM_CIRCLES * NUM_CIRCLES * 10);
const MOUSE_FORCE = 200;

var canvas;
var canvasContext;

var fps = 120; //frames per second
var currentFPS = 0;
var fpsCounter = 0;
var mouseY, mouseX;
var mouseDown = false;

var circles = [];

window.onload = function() {
    canvas = document.getElementById("canvas");
    canvasContext = canvas.getContext("2d");

    for (var i = 0; i < NUM_CIRCLES; i++) {
        var circle = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            rad: Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS
        };
        circles.push(circle);
    }

    // primary logic / display loop for the program
    setInterval(function() {
            console.log("Running");
            fpsCounter++;
            calcForces();
            draw();
        }, 1000 / fps);

    // runs and displays the FPS counter
    /*setInterval(function() {
            currentFPS = fpsCounter;
            fpsCounter = 0;
        }, 1000);*/

    canvas.addEventListener("mousemove", function(evt) {
                var mousePos = calculateMousePos(evt);
                mouseX = mousePos.x;
                mouseY = mousePos.y;
            });
    canvas.addEventListener("mousedown", handleMouseClick);
}

function calcForces() {
    for (var i = NUM_CIRCLES - 1; i >= 0; i--) {
        for (var j = i - 1; j >= 0; j--) {
            var distance = dist(circles[i].x, circles[j].x, circles[i].y,
                    circles[j].y);

            if (distance < 0.3) {
                var xDir = (circles[i].x - circles[j].x) / distance;
                var yDir = (circles[i].y - circles[j].y) / distance;

                var force = SET_FORCE * circles[i].rad * circles[j].rad / (distance * distance);

                circles[i].x += xDir * force / fps;
                circles[i].y += yDir * force / fps;

                circles[j].x -= xDir * force / fps;
                circles[j].y -= yDir * force / fps;

                keepInBounds(i);
                keepInBounds(j);
            }
        }
        if (mouseDown) {
            var distance = dist(circles[i].x, mouseX, circles[i].y,
                    mouseY);

            if (distance < 0.5) {
                var xDir = (circles[i].x - mouseX) / distance;
                var yDir = (circles[i].y - mouseY) / distance;

                var force = SET_FORCE * circles[i].rad * MOUSE_FORCE / (distance * distance);

                circles[i].x += xDir * force / fps;
                circles[i].y += yDir * force / fps;

                keepInBounds(i);
            }
        }
    }
}

function draw() {
    colorRect(0, 0, canvas.width, canvas.height, "black");

    for (var i = 0; i < NUM_CIRCLES; i++) {
        var c = circles[i];
        colorCircle(c.x, c.y, c.rad, "white");
    }

    canvasContext.fillStyle = "springgreen";
    //canvasContext.fillText("FPS: " + currentFPS, 25, 10);
}

function colorRect(leftX, topY, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX, topY, width, height);
}

function colorCircle(centerX, centerY, radius, color) { //Javascript doesn't have a "fillCircle" function, so we use "drawArc" instead
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true); //the 0 to Math.PI*2 are he start / ending angles; the true decides whether we draw the filled in or opposite part of the arc
    canvasContext.fill();
}

function dist(x1, x2, y1, y2) {
    x1 /= canvas.width;
    x2 /= canvas.width;
    y1 /= canvas.height;
    y2 /= canvas.height;
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

function keepInBounds(i) {
    var c = circles[i];
    if (c.x > canvas.width + c.rad) {
        circles[i].x = canvas.width + c.rad;
    } else if (c.x < 0 - c.rad) {
        circles[i].x = 0 - c.rad;
    }

    if (c.y > canvas.height + c.rad) {
        circles[i].y = canvas.height + c.rad;
    } else if (c.y < 0 - c.rad) {
        circles[i].y = 0 - c.rad;
    }
}

function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return { x:mouseX, y:mouseY };
}

function handleMouseClick() {
    mouseDown = !mouseDown;
}
