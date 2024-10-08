/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: styckman
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p";
const box = "b";
const goal = "g";
const spike = "s";
const backgroundMusic = tune`
270.27027027027026: B4^270.27027027027026 + F5-270.27027027027026 + E4~270.27027027027026,
270.27027027027026: C4/270.27027027027026 + A4^270.27027027027026 + G5-270.27027027027026 + F4~270.27027027027026,
270.27027027027026: D4/270.27027027027026 + A4^270.27027027027026 + F5-270.27027027027026 + E4~270.27027027027026 + A5-270.27027027027026,
270.27027027027026: C4/270.27027027027026 + C5^270.27027027027026 + E5-270.27027027027026 + F4~270.27027027027026 + B5-270.27027027027026,
270.27027027027026: D4/270.27027027027026 + C5^270.27027027027026 + F5-270.27027027027026 + E4~270.27027027027026 + A5-270.27027027027026,
270.27027027027026: C4/270.27027027027026 + B4^270.27027027027026 + F5-270.27027027027026 + F4~270.27027027027026,
270.27027027027026: D4/270.27027027027026 + B4^270.27027027027026 + E5-270.27027027027026 + E4~270.27027027027026,
270.27027027027026: E4/270.27027027027026 + A4^270.27027027027026 + C5-270.27027027027026 + F4~270.27027027027026 + A5-270.27027027027026,
270.27027027027026: D4/270.27027027027026 + A4^270.27027027027026 + C5-270.27027027027026 + E4~270.27027027027026 + G5-270.27027027027026,
270.27027027027026: C4/270.27027027027026 + B4^270.27027027027026 + D5-270.27027027027026 + F4~270.27027027027026 + F5-270.27027027027026,
270.27027027027026: D4/270.27027027027026 + B4^270.27027027027026 + E5-270.27027027027026 + E4~270.27027027027026,
270.27027027027026: C4/270.27027027027026 + C5^270.27027027027026 + D5-270.27027027027026 + F4~270.27027027027026,
270.27027027027026: D4/270.27027027027026 + C5^270.27027027027026 + E4~270.27027027027026 + G5-270.27027027027026,
270.27027027027026: C4/270.27027027027026 + G4^270.27027027027026 + C5-270.27027027027026 + F4~270.27027027027026 + A5-270.27027027027026,
270.27027027027026: D4/270.27027027027026 + G4^270.27027027027026 + C5-270.27027027027026 + E4~270.27027027027026 + G5-270.27027027027026,
270.27027027027026: C4/270.27027027027026 + G4^270.27027027027026 + D5-270.27027027027026 + F4~270.27027027027026,
270.27027027027026: D4/270.27027027027026 + F4^270.27027027027026 + E5-270.27027027027026 + E4~270.27027027027026,
270.27027027027026: E4/270.27027027027026 + G4^270.27027027027026 + F5-270.27027027027026,
270.27027027027026: D4/270.27027027027026 + A4^270.27027027027026 + G5-270.27027027027026 + E4~270.27027027027026,
270.27027027027026: C4/270.27027027027026 + B4^270.27027027027026 + B5-270.27027027027026 + F4~270.27027027027026,
270.27027027027026: D4/270.27027027027026 + A4^270.27027027027026 + G5-270.27027027027026 + E4~270.27027027027026,
270.27027027027026: C4/270.27027027027026 + G4^270.27027027027026 + F5-270.27027027027026 + F4~270.27027027027026,
270.27027027027026: D4/270.27027027027026 + A4^270.27027027027026 + E5-270.27027027027026 + E4~270.27027027027026,
270.27027027027026: C4/270.27027027027026 + A4^270.27027027027026 + E5-270.27027027027026 + F4~270.27027027027026,
270.27027027027026: D4/270.27027027027026 + B4^270.27027027027026 + E5-270.27027027027026 + E4~270.27027027027026,
270.27027027027026: C4/270.27027027027026 + C5^270.27027027027026 + D5-270.27027027027026 + F4~270.27027027027026,
270.27027027027026: D4/270.27027027027026 + B4^270.27027027027026 + C5-270.27027027027026 + E4~270.27027027027026,
270.27027027027026: E4/270.27027027027026 + A4^270.27027027027026 + B4-270.27027027027026 + F4~270.27027027027026 + G5-270.27027027027026,
270.27027027027026: D4/270.27027027027026 + G4^270.27027027027026 + B4-270.27027027027026 + E4~270.27027027027026 + A5-270.27027027027026,
270.27027027027026: C4/270.27027027027026 + A4^270.27027027027026 + B4-270.27027027027026 + F4~270.27027027027026 + B5-270.27027027027026,
270.27027027027026: D4/270.27027027027026 + G4^270.27027027027026 + B4-270.27027027027026 + E4~270.27027027027026,
270.27027027027026: C4/270.27027027027026 + G4^270.27027027027026 + C5-270.27027027027026 + F4~270.27027027027026 + E5-270.27027027027026`

setLegend(
  [ player, bitmap`
................
................
.....00000......
.....0...0......
.....0...0......
.....00000......
.......0........
.....00000......
.......0........
.......0........
.......0........
......000.......
.....00.00......
....00...00.....
................
................`],
  [ box, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000` ],
  [ goal, bitmap`
................
...LDDDDDDDDDD..
...L020202020D..
...L20202020D...
...L02020202D...
...L202020202D..
...L020202020D..
...L20202020D...
...L02020202D...
...L202020202D..
...LDDDDDDDDDD..
...L............
...L............
...L............
...L............
...L............` ],
  [ spike, bitmap`
................
................
................
................
................
.......33.......
......3333......
.....333333.....
.....333333.....
....33333333....
....33333333....
...3333333333...
...3333333333...
...3333333333...
................
................` ]
)

setSolids([box,player])

let level = 0
const levels = [
  map`
p.....bg.
bbbbb.bb.
....b.b..
.bbbb.b.b
......b.b
.bbbbbb.b
.b.......
.bbbbbbb.
.........`,
  map`
pb.............
.bbbbbb.bbbbbb.
......b..b...b.
bbbbb.b..b.b.b.
......b..b.b.b.
.bbbb.bb.b.b.b.
bb.......b.b.b.
.bbbbbbbbb.b.b.
...........bbb.
.bbbbbbbbb.....
.....b.bbbbbbbb
bbbb.b....bg...
...b.bbbb.b..b.
.bbb....b.bbbb.
.....bb........`,
  map`
p....b......
bbbb.b.bbbb.
.....b.b....
.bbbbb.bbbbb
...........b
bbbbbbbbbb.b
.....b.....b
.bbb.b.bbbbb
bb.b.b.b....
.......bg.b.
.bbbbbbbbbb.
............`,
  map`
p..............
bbbbbbbbbbbbbb.
...............
.bbbbbbbbbbbbbb
...............
bbbbbbbbbbbbbb.
...............
.bbbbbbbbbbbbbb
...............
bbbbbbbbbbbbbb.
...............
.bbbbbbbbbbbbbb
...............
bbbbbbbbbbbbbb.
g..............`,
  map`
.........bbbbbbbb
bbbbbb.b.b......b
.......b.bbbbbb.b
pb...bbb.b.......
.bbb.bs..bbbbb.bs
...b.b.........b.
.bbb.bbbbbbb.bbb.
.bs....b.....b.b.
.b.bb..b.bbbbb.b.
bb..b..b.b.....b.
....b..b..bbb.bb.
.bbsb.bbs.bgb....
..b.b.....b.bbbbb
..b.bbbbb.b......
..b.b...b.bbbbbb.
..b.bbb.b.b......
..b.....b......bs`,
  map`
b...................
b.......bbbbb....b..
bbbbbbbb....bbb..b..
..bb..........b..b..
.........bbb..b..b..
pbbbbbbbb..b..b..b..
b..........b..b..bb.
b..........b..b...b.
b..bbbbbbb....b...b.
b..b.b.......bb...b.
b.bb.........b...bb.
b.b...bbbb..bb..bb..
..b...b..bbbb...b...
..b...bb.......bb...
...b........bbb.....
.b.bbbb.........bbb.
.bb....bbbbbbbbbb.bb
..bbbbb.............
........bbbbbbbbbb..
...bbbbbg...........`
]
const playback = playTune(backgroundMusic, Infinity);
setMap(levels[level])


onInput("w", () => {
  getFirst(player).y -= 1
});
onInput("a", () => {
  getFirst(player).x -= 1
});
onInput("s", () => {
  getFirst(player).y += 1
});
onInput("d", () => {
  getFirst(player).x += 1
});

afterInput(() => {
  // count the number of tiles with goals
  const targetNumber = tilesWith(goal).length;
  
  // count the number of tiles with goals and boxes
  const numberCovered = tilesWith(goal, player).length;
  
  const numberLost = tilesWith(spike, player).length;
  if (numberLost === 1) {
    const currentLevel = levels[level];

    if (currentLevel !== undefined) {
      addText("rip bozo", { y: 4, color: color`3` });
      setMap(currentLevel);
    }
  }
  // if the number of goals is the same as the number of goals covered
  // all goals are covered and we can go to the next level
  if (numberCovered === targetNumber) {
    // increase the current level number
    level = level + 1;

    const currentLevel = levels[level];

    // make sure the level exists and if so set the map
    // otherwise, we have finished the last level, there is no levels
    // after the last level
    if (currentLevel !== undefined) {
      setMap(currentLevel);
    } else {
      addText("you win!", { y: 4, color: color`4` });
    }
  }
});