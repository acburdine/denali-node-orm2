'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _bluebird = require('bluebird');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'sync-database',
  after: 'define-orm-models',
  initialize: function _callee(application) {
    var container, db;
    return _regenerator2.default.async(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          container = application.container;
          db = container.lookup('database:orm2', { loose: true });

          if (!(db && application.config.database.sync)) {
            _context.next = 5;
            break;
          }

          _context.next = 5;
          return _regenerator2.default.awrap((0, _bluebird.fromNode)(function (cb) {
            return db.sync(cb);
          }));

        case 5:
        case 'end':
          return _context.stop();
      }
    }, null, this);
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9pbml0aWFsaXplcnMvc3luYy1kYXRhYmFzZS5qcyJdLCJuYW1lcyI6WyJuYW1lIiwiYWZ0ZXIiLCJpbml0aWFsaXplIiwiYXBwbGljYXRpb24iLCJjb250YWluZXIiLCJkYiIsImxvb2t1cCIsImxvb3NlIiwiY29uZmlnIiwiZGF0YWJhc2UiLCJzeW5jIiwiY2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztrQkFFZTtBQUNiQSxRQUFNLGVBRE87QUFFYkMsU0FBTyxtQkFGTTtBQUdQQyxZQUhPLG1CQUdJQyxXQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJUEMsbUJBSk8sR0FJS0QsWUFBWUMsU0FKakI7QUFLUEMsWUFMTyxHQUtGRCxVQUFVRSxNQUFWLENBQWlCLGVBQWpCLEVBQWtDLEVBQUVDLE9BQU8sSUFBVCxFQUFsQyxDQUxFOztBQUFBLGdCQU9QRixNQUFNRixZQUFZSyxNQUFaLENBQW1CQyxRQUFuQixDQUE0QkMsSUFQM0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2Q0FRSCx3QkFBUyxVQUFDQyxFQUFEO0FBQUEsbUJBQVFOLEdBQUdLLElBQUgsQ0FBUUMsRUFBUixDQUFSO0FBQUEsV0FBVCxDQVJHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoiY29uZmlnL2luaXRpYWxpemVycy9zeW5jLWRhdGFiYXNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2J1cmRpbmUvUHJvamVjdHMvZGVuYWxpL2RlbmFsaS1ub2RlLW9ybTIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tTm9kZSB9IGZyb20gJ2JsdWViaXJkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnc3luYy1kYXRhYmFzZScsXG4gIGFmdGVyOiAnZGVmaW5lLW9ybS1tb2RlbHMnLFxuICBhc3luYyBpbml0aWFsaXplKGFwcGxpY2F0aW9uKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGFwcGxpY2F0aW9uLmNvbnRhaW5lcjtcbiAgICBsZXQgZGIgPSBjb250YWluZXIubG9va3VwKCdkYXRhYmFzZTpvcm0yJywgeyBsb29zZTogdHJ1ZSB9KTtcblxuICAgIGlmIChkYiAmJiBhcHBsaWNhdGlvbi5jb25maWcuZGF0YWJhc2Uuc3luYykge1xuICAgICAgYXdhaXQgZnJvbU5vZGUoKGNiKSA9PiBkYi5zeW5jKGNiKSk7XG4gICAgfVxuICB9XG59O1xuIl19