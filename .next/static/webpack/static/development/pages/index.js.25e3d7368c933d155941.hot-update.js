webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PlayerList.js":
/*!**********************************!*\
  !*** ./components/PlayerList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);













var teams = [{
  name: 'Anaheim Ducks',
  id: 0
}, {
  name: 'Arizona Coyotes',
  id: 1
}, {
  name: 'Boston Bruins',
  id: 2
}, {
  name: 'Buffalo Sabres',
  id: 3
}, {
  name: 'Calgary Flames',
  id: 4
}, {
  name: 'Carolina Hurricanes',
  id: 5
}, {
  name: 'Chicago Blackhawks',
  id: 6
}, {
  name: 'Colorado Avalanche',
  id: 7
}, {
  name: 'Columbus Blue Jackets',
  id: 8
}, {
  name: 'Dallas Stars',
  id: 9
}, {
  name: 'Detroit Red Wings',
  id: 10
}, {
  name: 'Edmonton Oilers',
  id: 11
}, {
  name: 'Florida Panthers',
  id: 12
}, {
  name: 'Los Angeles Kings',
  id: 13
}, {
  name: 'Minnesota Wild',
  id: 14
}, {
  name: 'Montreal Canadiens',
  id: 15
}, {
  name: 'Nashville Predators',
  id: 16
}, {
  name: 'New Jersey Devils',
  id: 17
}, {
  name: 'New York Islanders',
  id: 18
}, {
  name: 'New York Rangers',
  id: 19
}, {
  name: 'Ottawa Senators',
  id: 20
}, {
  name: 'Philadelphia Flyers',
  id: 21
}, {
  name: 'Pittsburgh Penguins',
  id: 22
}, {
  name: 'San Jose Sharks',
  id: 23
}, {
  name: 'St Louis Blues',
  id: 24
}, {
  name: 'Tampa Bay Lightning',
  id: 25
}, {
  name: 'Toronto Maple Leafs',
  id: 26
}, {
  name: 'Vancouver Canucks',
  id: 27
}, {
  name: 'Vegas Golden Knights',
  id: 28
}, {
  name: 'Washington Capitals',
  id: 29
}, {
  name: 'Winnipeg Jets',
  id: 30
}];

var PlayerList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(PlayerList, _React$Component);

  function PlayerList() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PlayerList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(PlayerList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      players: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "showPlayers",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var teamName, res, json, _json$teams$filter, _json$teams$filter2, team, players;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                teamName = e.target.value;
                _context.prev = 1;
                _context.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster');

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                json = _context.sent;
                // Get the correct team
                _json$teams$filter = json.teams.filter(function (obj) {
                  return obj.name === teamName;
                }), _json$teams$filter2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_json$teams$filter, 1), team = _json$teams$filter2[0]; // Get player names and ids from Roster

                players = team.roster.roster.map(function (obj) {
                  return {
                    name: obj.person.fullName,
                    id: obj.person.id
                  };
                });

                _this.setState({
                  players: players
                });

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);

                _this.setState({
                  players: []
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 13]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(PlayerList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var players = this.state.players;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Find active players"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: ""
      }, "Select a team"), teams.map(function (team) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
          key: team.id,
          value: team.name,
          onClick: _this2.showPlayers
        }, team.name);
      })), players.map(function (player) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          key: player.id
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/player?id=".concat(player.id)
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, player.name)));
      }));
    }
  }]);

  return PlayerList;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PlayerList);

/***/ })

})
//# sourceMappingURL=index.js.25e3d7368c933d155941.hot-update.js.map