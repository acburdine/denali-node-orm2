'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _bluebird = require('bluebird');

var _orm = require('orm');

var _orm2 = _interopRequireDefault(_orm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'node-orm2-connect',
  before: 'define-orm-models',
  initialize: function _callee(application) {
    var container, config, connection;
    return _regenerator2.default.async(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          container = application.container;
          config = application.config;

          if (!(!config.database || !config.database.orm2)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt('return');

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return _regenerator2.default.awrap((0, _bluebird.fromNode)(function (cb) {
            return _orm2.default.connect(config.database.orm2, cb);
          }));

        case 7:
          connection = _context.sent;

          container.register('database:orm2', connection, { singleton: true });
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context['catch'](4);

          application.logger.error('Error initializing the node-orm2 adapter or database connection:');
          application.logger.error(_context.t0.stack);

        case 15:
        case 'end':
          return _context.stop();
      }
    }, null, this, [[4, 11]]);
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9pbml0aWFsaXplcnMvbm9kZS1vcm0yLWNvbm5lY3QuanMiXSwibmFtZXMiOlsibmFtZSIsImJlZm9yZSIsImluaXRpYWxpemUiLCJhcHBsaWNhdGlvbiIsImNvbnRhaW5lciIsImNvbmZpZyIsImRhdGFiYXNlIiwib3JtMiIsImNiIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJyZWdpc3RlciIsInNpbmdsZXRvbiIsImxvZ2dlciIsImVycm9yIiwic3RhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O2tCQUVlO0FBQ2JBLFFBQU0sbUJBRE87QUFFYkMsVUFBUSxtQkFGSztBQUdQQyxZQUhPLG1CQUdJQyxXQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJUEMsbUJBSk8sR0FJS0QsWUFBWUMsU0FKakI7QUFLUEMsZ0JBTE8sR0FLRUYsWUFBWUUsTUFMZDs7QUFBQSxnQkFPUCxDQUFDQSxPQUFPQyxRQUFSLElBQW9CLENBQUNELE9BQU9DLFFBQVAsQ0FBZ0JDLElBUDlCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQWFjLHdCQUFTLFVBQUNDLEVBQUQ7QUFBQSxtQkFBUSxjQUFJQyxPQUFKLENBQVlKLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQTVCLEVBQWtDQyxFQUFsQyxDQUFSO0FBQUEsV0FBVCxDQWJkOztBQUFBO0FBYUxFLG9CQWJLOztBQWNUTixvQkFBVU8sUUFBVixDQUFtQixlQUFuQixFQUFvQ0QsVUFBcEMsRUFBZ0QsRUFBRUUsV0FBVyxJQUFiLEVBQWhEO0FBZFM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBZ0JUVCxzQkFBWVUsTUFBWixDQUFtQkMsS0FBbkIsQ0FBeUIsa0VBQXpCO0FBQ0FYLHNCQUFZVSxNQUFaLENBQW1CQyxLQUFuQixDQUF5QixZQUFNQyxLQUEvQjs7QUFqQlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJjb25maWcvaW5pdGlhbGl6ZXJzL25vZGUtb3JtMi1jb25uZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2J1cmRpbmUvUHJvamVjdHMvZGVuYWxpL2RlbmFsaS1ub2RlLW9ybTIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tTm9kZSB9IGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBvcm0gZnJvbSAnb3JtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbm9kZS1vcm0yLWNvbm5lY3QnLFxuICBiZWZvcmU6ICdkZWZpbmUtb3JtLW1vZGVscycsXG4gIGFzeW5jIGluaXRpYWxpemUoYXBwbGljYXRpb24pIHtcbiAgICBsZXQgY29udGFpbmVyID0gYXBwbGljYXRpb24uY29udGFpbmVyO1xuICAgIGxldCBjb25maWcgPSBhcHBsaWNhdGlvbi5jb25maWc7XG5cbiAgICBpZiAoIWNvbmZpZy5kYXRhYmFzZSB8fCAhY29uZmlnLmRhdGFiYXNlLm9ybTIpIHtcbiAgICAgIC8vIENvbmZpZyBpcyBub3Qgc3BlY2lmaWVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBjb25uZWN0aW9uID0gYXdhaXQgZnJvbU5vZGUoKGNiKSA9PiBvcm0uY29ubmVjdChjb25maWcuZGF0YWJhc2Uub3JtMiwgY2IpKTtcbiAgICAgIGNvbnRhaW5lci5yZWdpc3RlcignZGF0YWJhc2U6b3JtMicsIGNvbm5lY3Rpb24sIHsgc2luZ2xldG9uOiB0cnVlIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhcHBsaWNhdGlvbi5sb2dnZXIuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyB0aGUgbm9kZS1vcm0yIGFkYXB0ZXIgb3IgZGF0YWJhc2UgY29ubmVjdGlvbjonKTtcbiAgICAgIGFwcGxpY2F0aW9uLmxvZ2dlci5lcnJvcihlcnJvci5zdGFjayk7XG4gICAgfVxuICB9XG59O1xuIl19