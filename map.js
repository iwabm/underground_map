var width = 1080;
var height = 1920;
var c_land = "#edeee8";
var c_park = "#cfe1a7";
var c_water = "#77bcd3";
var c_frame_base = "#B6976B";
var c_frame_base2 = "#E3DECE";
var c_frame_square = "#123364";
var c_green = "#2f972f";
var c_purple = "#9d1185";
var c_brown = "#723906";
var c_lime = "#7dbd41";
var c_gray = "#9e978e";
var c_black = "#67716d";
var c_yellow = "#fcd501";
var c_orange = "#ff8102";
var c_blue = "#2b59a6";
var c_red = "#f20017";

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var data_frame = [
		{'x':0, 'y':0, 'w':1080, 'h':120, 'c':c_frame_base},
		{'x':0 , 'y':120, 'w':120, 'h':1680, 'c':c_frame_base},
		{'x':960 , 'y':120, 'w':120, 'h':1680, 'c':c_frame_base},
		{'x':0 , 'y':1800, 'w':1080, 'h':120, 'c':c_frame_base},
];

var data_frame_base2 = [
    {'x':40 , 'y':40, 'w':40, 'h':40, 'c':c_frame_base2},
    {'x':1000 , 'y':40, 'w':40, 'h':40, 'c':c_frame_base2},
    {'x':40 , 'y':1840, 'w':40, 'h':40, 'c':c_frame_base2},
    {'x':1000 , 'y':1840, 'w':40, 'h':40, 'c':c_frame_base2},
		{'x':120, 'y':20, 'w':840, 'h':80, 'c':c_frame_base2},
		{'x':20 , 'y':120, 'w':80, 'h':1680, 'c':c_frame_base2},
		{'x':120 , 'y':1820, 'w':840, 'h':80, 'c':c_frame_base2},
		{'x':980 , 'y':120, 'w':80, 'h':1680, 'c':c_frame_base2},
];

// const data_frame_base3 = d3.range(84).map(
//     (n1) => {
//           return {'x': 20, 'y': n1*20+120, 'w':20, 'h':20, 'c':"#E"+getRndInteger(0, 9)+"D"+getRndInteger(0, 9)+"C"+getRndInteger(0, 9)};
//     }
// );
const data_frame_base3 = d3.range(84).map(
    (n1) => {
          return {'x': 20, 'y': n1*20+120, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_base4 = d3.range(84).map(
    (n1) => {
          return {'x': 40, 'y': n1*20+120, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_base5 = d3.range(84).map(
    (n1) => {
          return {'x': 60, 'y': n1*20+120, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_base6 = d3.range(84).map(
    (n1) => {
          return {'x': 80, 'y': n1*20+120, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_base7 = d3.range(84).map(
    (n1) => {
          return {'x': 980, 'y': n1*20+120, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_base8 = d3.range(84).map(
    (n1) => {
          return {'x': 1000, 'y': n1*20+120, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_base9 = d3.range(84).map(
    (n1) => {
          return {'x': 1020, 'y': n1*20+120, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_base10 = d3.range(84).map(
    (n1) => {
          return {'x': 1040, 'y': n1*20+120, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);

const data_frame_h1 = d3.range(42).map(
    (n1) => {
          return {'x': n1*20+120, 'y': 20, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_h2 = d3.range(42).map(
    (n1) => {
          return {'x': n1*20+120, 'y': 40, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_h3 = d3.range(42).map(
    (n1) => {
          return {'x': n1*20+120, 'y': 60, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_h4 = d3.range(42).map(
    (n1) => {
          return {'x': n1*20+120, 'y': 80, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_h5 = d3.range(42).map(
    (n1) => {
          return {'x': n1*20+120, 'y': 1820, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_h6 = d3.range(42).map(
    (n1) => {
          return {'x': n1*20+120, 'y': 1840, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_h7 = d3.range(42).map(
    (n1) => {
          return {'x': n1*20+120, 'y': 1860, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);
const data_frame_h8 = d3.range(42).map(
    (n1) => {
          return {'x': n1*20+120, 'y': 1880, 'w':20, 'h':20, 'c':"rgb("+getRndInteger(0, 100)+","+getRndInteger(0, 100)+","+getRndInteger(100, 255)+")"};
    }
);


var data_frame_4square = [
		{'x':20, 'y':20, 'w':80, 'h':80, 'c':c_frame_square},
		{'x':980 , 'y':20, 'w':80, 'h':80, 'c':c_frame_square},
		{'x':20 , 'y':1820, 'w':80, 'h':80, 'c':c_frame_square},
		{'x':980 , 'y':1820, 'w':80, 'h':80, 'c':c_frame_square},
];

var data_land = [
	{'x':0, 'y':0, 'w':1080, 'h':1920, 'c':c_land},
];

var data_park = [
  {'x':220, 'y':360, 'w':120, 'h':80, 'c':c_park},
  {'x':300, 'y':680, 'w':200, 'h':320, 'c':c_park},
  {'x':620, 'y':560, 'w':80, 'h':60, 'c':c_park},
  {'x':660, 'y':620, 'w':40, 'h':40, 'c':c_park},
  {'x':640, 'y':640, 'w':40, 'h':80, 'c':c_park},
  {'x':640, 'y':120, 'w':100, 'h':40, 'c':c_park},
  {'x':660, 'y':160, 'w':80, 'h':20, 'c':c_park},
  {'x':680, 'y':180, 'w':60, 'h':20, 'c':c_park},
  {'x':700, 'y':200, 'w':40, 'h':20, 'c':c_park},
  {'x':720, 'y':220, 'w':20, 'h':20, 'c':c_park},
];

var data_water = [
		{'x':120, 'y':180, 'w':20, 'h':1620, 'c':c_water},
    {'x':140, 'y':200, 'w':20, 'h':80, 'c':c_water},
    {'x':140, 'y':500, 'w':20, 'h':1300, 'c':c_water},
    {'x':160, 'y':220, 'w':180, 'h':60, 'c':c_water},
    {'x':160, 'y':1180, 'w':20, 'h':620, 'c':c_water},
    {'x':320, 'y':260, 'w':40, 'h':40, 'c':c_water},
    {'x':340, 'y':280, 'w':40, 'h':200, 'c':c_water},
    {'x':360, 'y':460, 'w':40, 'h':40, 'c':c_water},
    {'x':380, 'y':480, 'w':40, 'h':40, 'c':c_water},
    {'x':400, 'y':500, 'w':40, 'h':40, 'c':c_water},
    {'x':420, 'y':520, 'w':40, 'h':60, 'c':c_water},
    {'x':460, 'y':540, 'w':160, 'h':40, 'c':c_water},
    {'x':620, 'y':540, 'w':80, 'h':20, 'c':c_water},
    {'x':700, 'y':540, 'w':260, 'h':100, 'c':c_water},
    {'x':760, 'y':520, 'w':200, 'h':20, 'c':c_water},
    {'x':780, 'y':500, 'w':180, 'h':20, 'c':c_water},
    {'x':900, 'y':420, 'w':60, 'h':80, 'c':c_water},
    {'x':880, 'y':420, 'w':20, 'h':20, 'c':c_water},
    {'x':860, 'y':400, 'w':20, 'h':20, 'c':c_water},
    {'x':840, 'y':380, 'w':20, 'h':20, 'c':c_water},
    {'x':820, 'y':360, 'w':20, 'h':20, 'c':c_water},
    {'x':800, 'y':340, 'w':20, 'h':20, 'c':c_water},
    {'x':780, 'y':320, 'w':20, 'h':20, 'c':c_water},
    {'x':760, 'y':300, 'w':20, 'h':20, 'c':c_water},
    {'x':180, 'y':1200, 'w':40, 'h':600, 'c':c_water},
    {'x':220, 'y':1340, 'w':20, 'h':460, 'c':c_water},
    {'x':240, 'y':1360, 'w':20, 'h':440, 'c':c_water},
    {'x':260, 'y':1380, 'w':20, 'h':420, 'c':c_water},
    {'x':280, 'y':1500, 'w':20, 'h':300, 'c':c_water},
    {'x':300, 'y':1520, 'w':20, 'h':280, 'c':c_water},
    {'x':320, 'y':1660, 'w':20, 'h':140, 'c':c_water},
    {'x':340, 'y':1680, 'w':20, 'h':120, 'c':c_water},
    {'x':360, 'y':1700, 'w':20, 'h':100, 'c':c_water},
    {'x':380, 'y':1720, 'w':20, 'h':80, 'c':c_water},
    {'x':400, 'y':1740, 'w':60, 'h':60, 'c':c_water},
    {'x':460, 'y':1760, 'w':400, 'h':40, 'c':c_water},
    {'x':620, 'y':1720, 'w':240, 'h':40, 'c':c_water},
    {'x':780, 'y':1380, 'w':80, 'h':420, 'c':c_water},
    {'x':760, 'y':1180, 'w':60, 'h':200, 'c':c_water},
    {'x':740, 'y':1120, 'w':20, 'h':240, 'c':c_water},
    {'x':760, 'y':1120, 'w':20, 'h':60, 'c':c_water},
    {'x':780, 'y':1160, 'w':20, 'h':40, 'c':c_water},
    {'x':720, 'y':1100, 'w':20, 'h':120, 'c':c_water},
    {'x':700, 'y':1080, 'w':20, 'h':120, 'c':c_water},
    {'x':640, 'y':1120, 'w':320, 'h':20, 'c':c_water},
    {'x':660, 'y':1060, 'w':20, 'h':100, 'c':c_water},
    {'x':680, 'y':660, 'w':20, 'h':520, 'c':c_water},
    {'x':640, 'y':1060, 'w':20, 'h':80, 'c':c_water},
    {'x':620, 'y':620, 'w':20, 'h':500, 'c':c_water},
    {'x':600, 'y':540, 'w':20, 'h':240, 'c':c_water},
    {'x':640, 'y':720, 'w':40, 'h':140, 'c':c_water},
    {'x':700, 'y':540, 'w':20, 'h':220, 'c':c_water},
    {'x':720, 'y':540, 'w':20, 'h':200, 'c':c_water},
    {'x':640, 'y':620, 'w':20, 'h':20, 'c':c_water},
    {'x':640, 'y':1700, 'w':20, 'h':100, 'c':c_water},
    {'x':660, 'y':1680, 'w':20, 'h':120, 'c':c_water},
    {'x':680, 'y':1660, 'w':20, 'h':140, 'c':c_water},
    {'x':700, 'y':1640, 'w':20, 'h':160, 'c':c_water},
    {'x':720, 'y':1620, 'w':20, 'h':180, 'c':c_water},
    {'x':740, 'y':1600, 'w':20, 'h':200, 'c':c_water},
    {'x':760, 'y':1600, 'w':20, 'h':200, 'c':c_water},
    {'x':580, 'y':580, 'w':20, 'h':20, 'c':c_water},
    {'x':440, 'y':700, 'w':40, 'h':20, 'c':c_water},
    {'x':320, 'y':780, 'w':160, 'h':40, 'c':c_water},
    {'x':320, 'y':860, 'w':40, 'h':40, 'c':c_water},
    {'x':320, 'y':880, 'w':100, 'h':20, 'c':c_water},
	];

var data_green = [
		{'x':550, 'y':120, 'c':c_green},
    {'x':550, 'y':1130, 'c':c_green},
    {'x':530, 'y':1130, 'c':c_green},
    {'x':530, 'y':1270, 'c':c_green},
    {'x':550, 'y':1270, 'c':c_green},
    {'x':550, 'y':1610, 'c':c_green},
    {'x':510, 'y':1650, 'c':c_green},
    {'x':510, 'y':1750, 'c':c_green},
    {'x':830, 'y':1750, 'c':c_green},
    {'x':970, 'y':1590, 'c':c_green},
];
var data_green_sub1 = [
		{'x':560, 'y':490, 'c':c_green},
    {'x':640, 'y':490, 'c':c_green},
    {'x':750, 'y':390, 'c':c_green},
    {'x':750, 'y':300, 'c':c_green},
    {'x':810, 'y':240, 'c':c_green},
    {'x':810, 'y':120, 'c':c_green},
];
var data_green_sub2 = [
    {'x':560, 'y':550, 'c':c_green},
    {'x':590, 'y':550, 'c':c_green},
    {'x':590, 'y':530, 'c':c_green},
    {'x':710, 'y':530, 'c':c_green},
    {'x':810, 'y':430, 'c':c_green},
    {'x':810, 'y':300, 'c':c_green},
    {'x':910, 'y':200, 'c':c_green},
    {'x':910, 'y':120, 'c':c_green},
];

var data_lime = [
		{'x':770, 'y':1040, 'c':c_lime},
    {'x':770, 'y':1130, 'c':c_lime},
    {'x':930, 'y':1270, 'c':c_lime},
    {'x':960, 'y':1270, 'c':c_lime},
	];

var data_purple = [
  		{'x':210, 'y':1160, 'c':c_purple},
      {'x':210, 'y':1090, 'c':c_purple},
      {'x':810, 'y':1090, 'c':c_purple},
      {'x':810, 'y':970, 'c':c_purple},
      {'x':960, 'y':970, 'c':c_purple},
  	];

var data_brown = [
		{'x':570, 'y':1680, 'c':c_brown},
    {'x':570, 'y':1430, 'c':c_brown},
    {'x':810, 'y':1430, 'c':c_brown},
    {'x':850, 'y':1370, 'c':c_brown},
    {'x':960, 'y':1370, 'c':c_brown},
	];

var data_gray = [
    {'x':960, 'y':1250, 'c':c_gray},
		{'x':280, 'y':1250, 'c':c_gray},
];

var data_black = [
    {'x':540, 'y':1070, 'c':c_black},
		{'x':340, 'y':1070, 'c':c_black},
];

var data_orange = [
		{'x':610, 'y':120, 'c':c_orange},
    {'x':610, 'y':370, 'c':c_orange},
    {'x':530, 'y':450, 'c':c_orange},
    {'x':370, 'y':450, 'c':c_orange},
    {'x':290, 'y':530, 'c':c_orange},
    {'x':290, 'y':1010, 'c':c_orange},
    {'x':910, 'y':1010, 'c':c_orange},
];
var data_orange_sub1 = [
		{'x':450, 'y':1000, 'c':c_orange},
    {'x':450, 'y':950, 'c':c_orange},
    {'x':950, 'y':950, 'c':c_orange},
    {'x':950, 'y':920, 'c':c_orange},
];
var data_orange_sub2 = [
		{'x':450, 'y':1020, 'c':c_orange},
    {'x':450, 'y':1370, 'c':c_orange},
    {'x':730, 'y':1370, 'c':c_orange},
    {'x':730, 'y':1450, 'c':c_orange},
    {'x':960, 'y':1450, 'c':c_orange},
];
var data_orange_sub3 = [
		{'x':650, 'y':1380, 'c':c_orange},
    {'x':650, 'y':1490, 'c':c_orange},
    {'x':960, 'y':1490, 'c':c_orange},
];
var data_orange_sub4 = [
		{'x':660, 'y':1410, 'c':c_orange},
    {'x':800, 'y':1410, 'c':c_orange},
    {'x':840, 'y':1350, 'c':c_orange},
    {'x':960, 'y':1350, 'c':c_orange},
];

var data_yellow = [
		{'x':600, 'y':1690, 'c':c_yellow},
    {'x':470, 'y':1690, 'c':c_yellow},
    {'x':470, 'y':1570, 'c':c_yellow},
    {'x':510, 'y':1530, 'c':c_yellow},
    {'x':510, 'y':1210, 'c':c_yellow},
    {'x':370, 'y':1070, 'c':c_yellow},
    {'x':370, 'y':970, 'c':c_yellow},
    {'x':810, 'y':970, 'c':c_yellow},
    {'x':810, 'y':700, 'c':c_yellow},
];
var data_yellow_sub1 = [
		{'x':520, 'y':1490, 'c':c_yellow},
    {'x':550, 'y':1490, 'c':c_yellow},
    {'x':570, 'y':1510, 'c':c_yellow},
    {'x':960, 'y':1510, 'c':c_yellow},
];
var data_yellow_sub2 = [
		{'x':370, 'y':960, 'c':c_yellow},
    {'x':370, 'y':930, 'c':c_yellow},
    {'x':590, 'y':930, 'c':c_yellow},
    {'x':590, 'y':760, 'c':c_yellow},
];

var data_blue = [
		{'x':170, 'y':320, 'c':c_blue},
    {'x':170, 'y':430, 'c':c_blue},
    {'x':270, 'y':530, 'c':c_blue},
    {'x':270, 'y':1290, 'c':c_blue},
    {'x':410, 'y':1290, 'c':c_blue},
    {'x':410, 'y':1330, 'c':c_blue},
    {'x':430, 'y':1330, 'c':c_blue},
    {'x':430, 'y':1590, 'c':c_blue},
    {'x':830, 'y':1590, 'c':c_blue},
    {'x':830, 'y':1570, 'c':c_blue},
    {'x':960, 'y':1570, 'c':c_blue},
];
var data_blue_sub = [
		{'x':280, 'y':1030, 'c':c_blue},
    {'x':890, 'y':1030, 'c':c_blue},
    {'x':970, 'y':950, 'c':c_blue},
];

var data_red = [
		{'x':580, 'y':1710, 'c':c_red},
    {'x':410, 'y':1710, 'c':c_red},
    {'x':410, 'y':1690, 'c':c_red},
    {'x':390, 'y':1690, 'c':c_red},
    {'x':390, 'y':1350, 'c':c_red},
    {'x':370, 'y':1350, 'c':c_red},
    {'x':370, 'y':1070, 'c':c_red},
    {'x':230, 'y':950, 'c':c_red},
    {'x':230, 'y':690, 'c':c_red},
    {'x':210, 'y':690, 'c':c_red},
    {'x':210, 'y':350, 'c':c_red},
    {'x':370, 'y':190, 'c':c_red},
    {'x':370, 'y':120, 'c':c_red},
];
var data_red_sub1 = [
		{'x':960, 'y':1630, 'c':c_red},
    {'x':790, 'y':1630, 'c':c_red},
    {'x':790, 'y':1650, 'c':c_red},
    {'x':610, 'y':1650, 'c':c_red},
    {'x':590, 'y':1630, 'c':c_red},
    {'x':590, 'y':1550, 'c':c_red},
    {'x':400, 'y':1550, 'c':c_red},
];
var data_red_sub2 = [
		{'x':240, 'y':710, 'c':c_red},
    {'x':410, 'y':710, 'c':c_red},
    {'x':410, 'y':570, 'c':c_red},
    {'x':450, 'y':570, 'c':c_red},
    {'x':530, 'y':470, 'c':c_red},
    {'x':630, 'y':470, 'c':c_red},
    {'x':730, 'y':380, 'c':c_red},
    {'x':730, 'y':290, 'c':c_red},
    {'x':750, 'y':270, 'c':c_red},
    {'x':750, 'y':130, 'c':c_red},
    {'x':720, 'y':130, 'c':c_red},
];
var data_letter1 = [
		{'x':190, 'y':100, 'c':c_frame_base2},
    {'x':190, 'y':40, 'c':c_frame_base2},
    {'x':250, 'y':80, 'c':c_frame_base2},
    {'x':250, 'y':20, 'c':c_frame_base2},
];
var data_letter2 = [
		{'x':340, 'y':30, 'c':c_frame_base2},
    {'x':290, 'y':30, 'c':c_frame_base2},
    {'x':290, 'y':90, 'c':c_frame_base2},
    {'x':340, 'y':90, 'c':c_frame_base2},
    {'x':290, 'y':90, 'c':c_frame_base2},
    {'x':290, 'y':60, 'c':c_frame_base2},
    {'x':340, 'y':60, 'c':c_frame_base2},
];
var data_letter3 = [
    {'x':370, 'y':20, 'c':c_frame_base2},
    {'x':390, 'y':100, 'c':c_frame_base2},
		{'x':410, 'y':20, 'c':c_frame_base2},
    {'x':430, 'y':100, 'c':c_frame_base2},
    {'x':450, 'y':20, 'c':c_frame_base2},
];
var data_letter4 = [
    {'x':530, 'y':20, 'c':c_frame_base2},
    {'x':560, 'y':70, 'c':c_frame_base2},
		{'x':590, 'y':20, 'c':c_frame_base2},
    {'x':560, 'y':70, 'c':c_frame_base2},
    {'x':560, 'y':100, 'c':c_frame_base2},
];
var data_letter5= [
    {'x':630, 'y':30, 'c':c_frame_base2},
    {'x':630, 'y':90, 'c':c_frame_base2},
		{'x':690, 'y':90, 'c':c_frame_base2},
    {'x':690, 'y':30, 'c':c_frame_base2},
    {'x':630, 'y':30, 'c':c_frame_base2},
];
var data_letter6= [
    {'x':730, 'y':100, 'c':c_frame_base2},
    {'x':730, 'y':30, 'c':c_frame_base2},
		{'x':790, 'y':30, 'c':c_frame_base2},
    {'x':790, 'y':60, 'c':c_frame_base2},
    {'x':740, 'y':60, 'c':c_frame_base2},
    {'x':770, 'y':90, 'c':c_frame_base2},
    {'x':800, 'y':90, 'c':c_frame_base2},
];
var data_letter7= [
    {'x':830, 'y':20, 'c':c_frame_base2},
    {'x':830, 'y':100, 'c':c_frame_base2},
		{'x':830, 'y':60, 'c':c_frame_base2},
    {'x':840, 'y':60, 'c':c_frame_base2},
    {'x':890, 'y':30, 'c':c_frame_base2},
    {'x':900, 'y':30, 'c':c_frame_base2},
    {'x':890, 'y':30, 'c':c_frame_base2},
    {'x':840, 'y':60, 'c':c_frame_base2},
    {'x':890, 'y':90, 'c':c_frame_base2},
    {'x':900, 'y':90, 'c':c_frame_base2},
];

var land = svg.selectAll(".land")
		.data(data_land)
		.enter()
		.append("g");
var rect = land.append("rect")
    .attr('class','land')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    // .attr("rx", 5)
    .attr("fill", function(d, i) { return d.c;});
    // .attr("stroke", '#8ca934')
    // .attr("stroke-width", 4);

var park= svg.selectAll(".park")
		.data(data_park)
		.enter()
		.append("g");
var rect = park.append("rect")
    .attr('class','park')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    // .attr("rx", 5)
    .attr("fill", function(d, i) { return d.c;});
    // .attr("stroke", '#8ca934')
    // .attr("stroke-width", 4);

var water = svg.selectAll(".water")
		.data(data_water)
		.enter()
		.append("g");
var rect = water.append("rect")
    .attr('class','water')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    // .attr("rx", 5)
    .attr("fill", function(d, i) { return d.c;});
    // .attr("stroke", '#8ca934')
    // .attr("stroke-width", 4);

// LINE
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_gray))
    .attr("stroke", c_gray)
    .attr("stroke-width", 20)
    .attr("fill", "none");

var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_yellow))
    .attr("stroke", c_yellow)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_yellow_sub1))
    .attr("stroke", c_yellow)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_yellow_sub2))
    .attr("stroke", c_yellow)
    .attr("stroke-width", 20)
    .attr("fill", "none");

var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_orange))
    .attr("stroke", c_orange)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_orange_sub1))
    .attr("stroke", c_orange)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_orange_sub2))
    .attr("stroke", c_orange)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_orange_sub3))
    .attr("stroke", c_orange)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_orange_sub4))
    .attr("stroke", c_orange)
    .attr("stroke-width", 20)
    .attr("fill", "none");

var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_red))
    .attr("stroke", c_red)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_red_sub1))
    .attr("stroke", c_red)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_red_sub2))
    .attr("stroke", c_red)
    .attr("stroke-width", 20)
    .attr("fill", "none");

var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_green))
    .attr("stroke", c_green)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_green_sub1))
    .attr("stroke", c_green)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_green_sub2))
    .attr("stroke", c_green)
    .attr("stroke-width", 20)
    .attr("fill", "none");

var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_brown))
    .attr("stroke", c_brown)
    .attr("stroke-width", 20)
    .attr("fill", "none");

var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_lime))
    .attr("stroke", c_lime)
    .attr("stroke-width", 20)
    .attr("fill", "none");

var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_blue))
    .attr("stroke", c_blue)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_blue_sub))
    .attr("stroke", c_blue)
    .attr("stroke-width", 20)
    .attr("fill", "none");

var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_black))
    .attr("stroke", c_black)
    .attr("stroke-width", 20)
    .attr("fill", "none");

var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line')
    .attr("d", line(data_purple))
    .attr("stroke", c_purple)
    .attr("stroke-width", 20)
    .attr("fill", "none");

var frame = svg.selectAll(".frame")
		.data(data_frame)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    // .attr("rx", 5)
    .attr("fill", function(d, i) { return d.c;});
    // .attr("stroke", '#8ca934')
    // .attr("stroke-width", 4);
var frame = svg.selectAll(".frame_4square")
		.data(data_frame_4square)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_4square')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_base2")
		.data(data_frame_base2)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_base2')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_base3")
		.data(data_frame_base3)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_base3')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_base4")
		.data(data_frame_base4)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_base4')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_base5")
		.data(data_frame_base5)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_base5')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_base6")
		.data(data_frame_base6)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_base6')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_base7")
		.data(data_frame_base7)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_base7')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_base8")
		.data(data_frame_base8)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_base8')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_base9")
		.data(data_frame_base9)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_base9')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_base10")
		.data(data_frame_base10)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_base10')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});

var frame = svg.selectAll(".frame_h1")
		.data(data_frame_h1)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_h1')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_h2")
		.data(data_frame_h2)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_h2')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_h3")
		.data(data_frame_h3)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_h3')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_h4")
		.data(data_frame_h4)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_h4')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_h5")
		.data(data_frame_h5)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_h5')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_h6")
		.data(data_frame_h6)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_h6')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_h7")
		.data(data_frame_h7)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_h7')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});
var frame = svg.selectAll(".frame_h8")
		.data(data_frame_h8)
		.enter()
		.append("g");
var rect = frame.append("rect")
    .attr('class','frame_h8')
    .attr("x", function(d, i) { return d.x;})
    .attr("y", function(d, i) { return d.y;})
    .attr("width", function(d, i) { return d.w;})
    .attr("height", function(d, i) { return d.h;})
    .attr("fill", function(d, i) { return d.c;});

var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line2')
    .attr("d", line(data_letter1))
    .attr("stroke", c_frame_base2)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line2')
    .attr("d", line(data_letter2))
    .attr("stroke", c_frame_base2)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line2')
    .attr("d", line(data_letter3))
    .attr("stroke", c_frame_base2)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line2')
    .attr("d", line(data_letter4))
    .attr("stroke", c_frame_base2)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line2')
    .attr("d", line(data_letter5))
    .attr("stroke", c_frame_base2)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line2')
    .attr("d", line(data_letter6))
    .attr("stroke", c_frame_base2)
    .attr("stroke-width", 20)
    .attr("fill", "none");
var line = d3.svg.line()
    .x(function(d,i) { return d.x;})
    .y(function(d,i) { return d.y;})
    .interpolate("linear");//点の繋ぎ方の指定
svg.append("path")
    .attr('class','line2')
    .attr("d", line(data_letter7))
    .attr("stroke", c_frame_base2)
    .attr("stroke-width", 20)
    .attr("fill", "none");
