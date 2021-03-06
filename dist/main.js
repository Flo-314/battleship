/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domMethods/gameboard.js":
/*!*************************************!*\
  !*** ./src/domMethods/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboardMethods\": () => (/* binding */ gameboardMethods),\n/* harmony export */   \"cellListeners\": () => (/* binding */ cellListeners)\n/* harmony export */ });\n/* harmony import */ var _factoryF_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factoryF/ship */ \"./src/factoryF/ship.js\");\n/* eslint-disable no-alert */\n\n/* eslint-disable no-restricted-globals */\n\n\nvar gameboardMethods = function () {\n  var createGameboard = function createGameboard(player) {\n    var main = document.querySelector('main');\n    var gameboard = document.createElement('div');\n    gameboard.classList.add('gameboard');\n    gameboard.classList.add(player.name);\n    main.append(gameboard);\n\n    for (var i = 0; i < player.board.length; i += 1) {\n      var cell = document.createElement('div');\n      cell.classList.add('cell');\n      gameboard.appendChild(cell);\n    }\n  };\n\n  return {\n    createGameboard: createGameboard\n  };\n}();\n\nvar cellListeners = function () {\n  var shipCount = 0;\n\n  var checkForWin = function checkForWin(player, ia) {\n    if (player.playerGameboard.allSunked() === true) {\n      prompt('computer wins');\n      location.reload();\n    } else if (ia.playerGameboard.allSunked() === true) {\n      prompt('player wins');\n      location.reload();\n    }\n  };\n\n  var printHit = function printHit(playerName, position) {\n    var cellArray = document.querySelector(\".\".concat(playerName)).children;\n    cellArray[position].textContent = 'X';\n  };\n\n  var hitListener = function hitListener(ia, cordinates, player) {\n    if (ia.playerGameboard.receiveAttack(1, 1, cordinates) === true) {\n      checkForWin(player, ia);\n      printHit('ia', cordinates);\n      printHit('player', ia.iaAttack(player));\n      checkForWin(player, ia);\n    }\n  };\n\n  var addHitListener = function addHitListener(ia, player) {\n    var cellNodes = document.querySelector('.ia').children;\n\n    var _loop = function _loop(index) {\n      var cell = cellNodes[index];\n      cell.addEventListener('click', function () {\n        hitListener(ia, index, player);\n      });\n    };\n\n    for (var index = 0; index < cellNodes.length; index += 1) {\n      _loop(index);\n    }\n  };\n\n  var checkIfPreparationStateEnds = function checkIfPreparationStateEnds(countShip, ia, player) {\n    if (countShip >= 7) {\n      addHitListener(ia, player); // eslint-disable-next-line no-use-before-define\n\n      getRandomIaShips(ia);\n      var shipInfo = document.querySelector('#shipInfo').innerHTML = '';\n    }\n  };\n\n  var createShipList = function createShipList() {\n    var carrier = (0,_factoryF_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\n    carrier.name = 'carrier';\n    var battleship = (0,_factoryF_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\n    battleship.name = 'battleship';\n    var cruiser = (0,_factoryF_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n    cruiser.name = 'cruiser';\n    var submarine = (0,_factoryF_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n    submarine.name = 'submarine';\n    var destroyer = (0,_factoryF_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n    destroyer.name = 'destroyer';\n    var patrolBoat = (0,_factoryF_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1);\n    patrolBoat.name = 'patrol Boat';\n    var ferry = (0,_factoryF_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1);\n    ferry.name = 'ferry';\n    var shipList = [carrier, battleship, cruiser, submarine, destroyer, patrolBoat, ferry];\n    return shipList;\n  };\n\n  var getRandomIaShips = function getRandomIaShips(ia) {\n    var shipList = createShipList();\n    var cords = Math.floor(Math.random() * 100) + 1;\n\n    for (var index = 0; index < shipList.length; index += 1) {\n      var ship = shipList[index]; // eslint-disable-next-line max-len\n\n      while (ia.playerGameboard.putShip(ship, 1, 1, cords) !== true) {\n        cords = Math.floor(Math.random() * 100) + 1;\n      }\n\n      ia.playerGameboard.putShip(ship, 1, 1, cords);\n      console.log(ship);\n      var cellArray = document.querySelector(\".\".concat('ia')).children;\n\n      for (var i = 0; i < ship.length; i += 1) {\n        var cell = cellArray[i + cords];\n        cell.style.color = 'red';\n      }\n    }\n  };\n\n  var printShip = function printShip(ship, cordinates) {\n    var cellArray = document.querySelector(\".\".concat('player')).children;\n\n    for (var index = 0; index < ship.length; index += 1) {\n      var cell = cellArray[index + cordinates - 1];\n      cell.textContent = 'O';\n      cell.style.color = 'blue';\n    }\n  };\n\n  var shipListener = function shipListener(player, cordinates, ia) {\n    var shipList = createShipList();\n    var shipInfo = document.querySelector('#shipInfo'); // eslint-disable-next-line max-len\n\n    if (shipList[shipCount] && player.playerGameboard.putShip(shipList[shipCount], 1, 1, cordinates)) {\n      printShip(shipList[shipCount], cordinates);\n      shipCount += 1;\n      checkIfPreparationStateEnds(shipCount, ia, player);\n\n      if (shipList[shipCount]) {\n        shipInfo.textContent = \"The next Ship will be: \".concat(\"\".concat(shipList[shipCount].name, \"(\").concat(shipList[shipCount].length), \")\");\n      }\n    }\n  };\n\n  var addShipListener = function addShipListener(player, ia) {\n    var cellNodes = document.querySelector(\".\".concat(player.name)).children;\n\n    var _loop2 = function _loop2(index) {\n      var cell = cellNodes[index];\n      cell.addEventListener('click', function () {\n        shipListener(player, index + 1, ia);\n      });\n    };\n\n    for (var index = 0; index < cellNodes.length; index += 1) {\n      _loop2(index);\n    }\n  };\n\n  return {\n    addHitListener: addHitListener,\n    addShipListener: addShipListener,\n    printShip: printShip\n  };\n}();\n\n\n\n//# sourceURL=webpack://battleship/./src/domMethods/gameboard.js?");

/***/ }),

/***/ "./src/factoryF/gameboard.js":
/*!***********************************!*\
  !*** ./src/factoryF/gameboard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar helperMethods = function () {\n  var cordsToIndex = function cordsToIndex(cord1, cord2) {\n    return cord1 + (cord2 - 1) * 10 - 1;\n  };\n\n  var checkIfPositionIsUsed = function checkIfPositionIsUsed(ship, cord1, cord2, cords, board) {\n    var condition = true;\n\n    if (cords) {\n      for (var i = 0; i < ship.length; i += 1) {\n        if (board[cords + i] !== '') {\n          condition = false;\n        }\n      }\n    } else {\n      for (var _i = 0; _i < ship.length; _i += 1) {\n        if (board[cordsToIndex(cord1, cord2) + _i] !== '') {\n          condition = false;\n        }\n      }\n    }\n\n    return condition;\n  };\n\n  var checkIfPositionIsntBorder = function checkIfPositionIsntBorder(ship, cord1, cord2, cords) {\n    var cordinates = cordsToIndex(cord1, cord2) - 1;\n\n    if (cords) {\n      cordinates = cords - 1;\n    }\n\n    var expectedCordinates = cordinates + ship.length;\n    expectedCordinates = expectedCordinates.toString() - 1;\n    cordinates = cordinates.toString();\n\n    if (cordinates.length === 1) {\n      if (expectedCordinates < 10) {\n        return true;\n      }\n    } else if (expectedCordinates.toString()[0] === cordinates[0]) {\n      return true;\n    }\n\n    return false;\n  };\n\n  var checkValidPosition = function checkValidPosition(ship, cord1, cord2, cords, board) {\n    // eslint-disable-next-line max-len\n    if (checkIfPositionIsUsed(ship, cord1, cord2, cords, board) && checkIfPositionIsntBorder(ship, cord1, cord2, cords)) {\n      return true;\n    }\n\n    return false;\n  };\n\n  return {\n    cordsToIndex: cordsToIndex,\n    checkValidPosition: checkValidPosition\n  };\n}();\n\nvar GameboardFactory = function GameboardFactory() {\n  var board = Array(100).fill('');\n  var shipArray = [];\n  var cordsToIndex = helperMethods.cordsToIndex;\n  var checkValidPosition = helperMethods.checkValidPosition;\n\n  var putShip = function putShip(ship, cord1, cord2, cordinates) {\n    var cords = cordsToIndex(cord1, cord2);\n\n    if (cordinates) {\n      cords = cordinates;\n    }\n\n    if (checkValidPosition(ship, cord1, cord2, cords, board)) {\n      for (var i = 0; i < ship.length; i += 1) {\n        board[cords + i] = ship;\n        var infoObject = {\n          position: 1 + i,\n          cord: cords + i\n        };\n        ship.index.unshift(infoObject);\n      }\n\n      shipArray.unshift(ship);\n      return true;\n    }\n\n    return false;\n  };\n\n  var receiveAttack = function receiveAttack(cord1, cord2, cordinates) {\n    var cords = cordsToIndex(cord1, cord2);\n\n    if (cordinates) {\n      cords = cordinates;\n    }\n    /*     console.log(cords);\n    */\n\n\n    if (_typeof(board[cords]) === 'object') {\n      var ship = board[cords];\n      var position = ship.index.find(function (cord) {\n        return cord.cord === cords;\n      });\n      ship.hit(position.position);\n      board[cords] = 'X';\n      return true;\n    }\n\n    if (board[cords] !== 'X') {\n      board[cords] = 'X';\n      return true;\n    }\n\n    return false;\n  };\n\n  var allSunked = function allSunked() {\n    var isSunked = true;\n\n    for (var index = 0; index < shipArray.length; index += 1) {\n      var ship = shipArray[index];\n\n      if (!ship.isSunk()) {\n        isSunked = false;\n      }\n    }\n\n    return isSunked;\n  };\n\n  return {\n    board: board,\n    putShip: putShip,\n    receiveAttack: receiveAttack,\n    allSunked: allSunked,\n    shipArray: shipArray\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardFactory);\n\n//# sourceURL=webpack://battleship/./src/factoryF/gameboard.js?");

/***/ }),

/***/ "./src/factoryF/player.js":
/*!********************************!*\
  !*** ./src/factoryF/player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/factoryF/gameboard.js\");\n/* eslint-disable no-param-reassign */\n\n\nvar PlayerFactory = function PlayerFactory(name) {\n  var turn;\n\n  if (name === 'player') {\n    turn = true;\n  } else {\n    turn = false;\n  }\n\n  var playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var board = playerGameboard.board;\n\n  var attack = function attack(cord1, cord2, player) {\n    if (player.playerGameboard.receiveAttack(cord1, cord2)) {\n      turn = false;\n      player.turn = true;\n      return true;\n    }\n\n    return false;\n  }; // eslint-disable-next-line consistent-return\n\n\n  var iaAttack = function iaAttack(player) {\n    var cord1 = Math.floor(Math.random() * (11 - 1)) + 1;\n    var cord2 = Math.floor(Math.random() * (11 - 1)) + 1; // While the cords arent in a valid position the loops repeats\n\n    while (player.playerGameboard.receiveAttack(cord1, cord2) !== true) {\n      cord1 = Math.floor(Math.random() * (11 - 1)) + 1;\n      cord2 = Math.floor(Math.random() * (11 - 1)) + 1;\n    }\n\n    player.playerGameboard.receiveAttack(cord1, cord2);\n    turn = false;\n    player.turn = true;\n    return cord1 + (cord2 - 1) * 10 - 1;\n  };\n\n  return {\n    playerGameboard: playerGameboard,\n    attack: attack,\n    board: board,\n    turn: turn,\n    iaAttack: iaAttack,\n    name: name\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerFactory);\n\n//# sourceURL=webpack://battleship/./src/factoryF/player.js?");

/***/ }),

/***/ "./src/factoryF/ship.js":
/*!******************************!*\
  !*** ./src/factoryF/ship.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ShipFactory = function ShipFactory(length) {\n  var shipBoard = [];\n  var index = [];\n\n  for (var i = 0; i < length; i += 1) {\n    shipBoard[i] = '';\n  }\n\n  var hit = function hit(position) {\n    shipBoard[position - 1] = 'X';\n  };\n\n  var checkforX = function checkforX(value) {\n    return value === 'X';\n  };\n\n  var isSunk = function isSunk() {\n    if (shipBoard.every(checkforX)) {\n      return true;\n    }\n\n    return false;\n  };\n\n  return {\n    length: length,\n    hit: hit,\n    isSunk: isSunk,\n    shipBoard: shipBoard,\n    index: index\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipFactory);\n\n//# sourceURL=webpack://battleship/./src/factoryF/ship.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factoryF_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryF/player */ \"./src/factoryF/player.js\");\n/* harmony import */ var _domMethods_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domMethods/gameboard */ \"./src/domMethods/gameboard.js\");\n\n\n/* To do :\n\n*Create a loop for putting ships and random ships for ia\n*PUtting the CHeckFORWIN every hit of ia or player.\n*beautify the css\n */\n\n/*\n\n*Un meter barcos state\n\n*Cada vez q metes un barco  se suma un I\n*SI I ES = 5 se termina el barco staate, IAPutSHips()\n\n* se inicia el  war State\n\n*cada tiro que checkie for win.\n\n** si  alguien winnea que tire un prompt horrible y que recargue la pagina.\n\n*/\n\nvar gameMethods = function () {\n  var newGame = function newGame() {\n    var player = (0,_factoryF_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('player');\n    var ia = (0,_factoryF_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ia');\n    _domMethods_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboardMethods.createGameboard(player);\n    _domMethods_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboardMethods.createGameboard(ia);\n    _domMethods_gameboard__WEBPACK_IMPORTED_MODULE_1__.cellListeners.addShipListener(player, ia);\n  };\n\n  return {\n    newGame: newGame\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameMethods);\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newGame();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;