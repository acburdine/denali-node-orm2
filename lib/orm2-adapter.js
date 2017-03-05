'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _denali = require('denali');

var _bluebird = require('bluebird');

var _snakeCase = require('lodash/snakeCase');

var _snakeCase2 = _interopRequireDefault(_snakeCase);

var _upperFirst = require('lodash/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NodeORM2Adapter extends _denali.ORMAdapter {

  find(type, id) {
    let OrmModel = this.ormModels[type];
    return (0, _bluebird.fromNode)(function (cb) {
      return OrmModel.get(id, cb);
    });
  }

  queryOne(type, query) {
    let OrmModel = this.ormModels[type];
    return (0, _bluebird.fromNode)(function (cb) {
      return OrmModel.one(query, cb);
    });
  }

  all(type, options = {}) {
    let OrmModel = this.ormModels[type];
    return (0, _bluebird.fromNode)(function (cb) {
      return OrmModel.all(null, options, cb);
    });
  }

  query(type, query, options = {}) {
    let OrmModel = this.ormModels[type];
    return (0, _bluebird.fromNode)(function (cb) {
      return OrmModel.find(query, options, cb);
    });
  }

  createRecord(type, data) {
    let OrmModel = this.ormModels[type];
    return (0, _bluebird.fromNode)(function (cb) {
      return OrmModel.create(data, cb);
    });
  }

  idFor(model) {
    return model.record.id;
  }

  setId(model, id) {
    model.record.id = id;
    return true;
  }

  buildRecord(type, data) {
    let OrmModel = this.ormModels[type];
    return new OrmModel(data);
  }

  getAttribute(model, property) {
    return model.record[property];
  }

  setAttribute(model, property, value) {
    model.record[property] = value;
    return true;
  }

  deleteAttribute(model, property) {
    model.record[property] = null;
    return true;
  }

  getRelated(model, relationship) {
    return (0, _bluebird.fromNode)(function (cb) {
      model.record['get' + (0, _upperFirst2.default)(relationship)](cb);
    });
  }

  setRelated(model, relationshipName, relationshipDefinition, relatedModels) {
    // If relatedRecords is an array (e.g. a hasMany relationship), we need to get all of the actual record instances,
    // so we pass it through a map function. Otherwise, we just get the single record
    let related = Array.isArray(relatedModels) ? relatedModels.map(function (relatedModel) {
      return relatedModel.record;
    }) : relatedModels.record;

    return (0, _bluebird.fromNode)(function (cb) {
      model.record['set' + (0, _upperFirst2.default)(relationshipName)](related, cb);
    });
  }

  addRelated(model, relationshipName, relationshipDefinition, { record: relatedRecord }) {
    return (0, _bluebird.fromNode)(function (cb) {
      model.record['add' + (0, _upperFirst2.default)(relationshipName)](relatedRecord, cb);
    });
  }

  removeRelated(model, relationshipName, relationshipDefintion, { record: relatedRecord }) {
    return (0, _bluebird.fromNode)(function (cb) {
      var _model$record;

      let args = [cb];
      if (relatedRecord) {
        args.unshift([relatedRecord]);
      }
      (_model$record = model.record)['remove' + (0, _upperFirst2.default)(relationshipName)].apply(_model$record, args);
    });
  }

  saveRecord(model) {
    return (0, _bluebird.fromNode)(function (cb) {
      return model.record.save(cb);
    });
  }

  deleteRecord(model) {
    return (0, _bluebird.fromNode)(function (cb) {
      return model.record.remove(cb);
    });
  }

  defineModels(models) {
    var _this = this;

    let db = this.container.lookup('database:orm2');
    this.ormModels = {};

    // Define models
    models.forEach(function (Model) {
      let attributes = {};
      let modelType = _this.container.metaFor(Model).containerName;
      Model.mapAttributeDescriptors(function (attribute, key) {
        attributes[key] = (0, _assign2.default)({
          mapsTo: _this.keyToColumn(key),
          type: _this.denaliTypeToORMType(attribute.type)
        }, attribute.options);
      });
      _this.ormModels[modelType] = db.define(modelType, attributes);
    });

    // Define relationships between models
    models.forEach(function (Model) {
      let modelType = _this.container.metaFor(Model).containerName;
      Model.mapRelationshipDescriptors(function (relationship, key) {
        let OrmModel = _this.ormModels[modelType];
        let Related = _this.ormModels[relationship.type];
        if (relationship.mode === 'hasOne') {
          OrmModel.hasOne(key, Related);
        } else {
          OrmModel.hasMany(key, Related);
        }
      });
    });
  }

  denaliTypeToORMType(denaliType) {
    return denaliType;
  }

  keyToColumn(key) {
    return (0, _snakeCase2.default)(key);
  }

}
exports.default = NodeORM2Adapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9vcm0yLWFkYXB0ZXIuanMiXSwibmFtZXMiOlsiTm9kZU9STTJBZGFwdGVyIiwiZmluZCIsInR5cGUiLCJpZCIsIk9ybU1vZGVsIiwib3JtTW9kZWxzIiwiY2IiLCJnZXQiLCJxdWVyeU9uZSIsInF1ZXJ5Iiwib25lIiwiYWxsIiwib3B0aW9ucyIsImNyZWF0ZVJlY29yZCIsImRhdGEiLCJjcmVhdGUiLCJpZEZvciIsIm1vZGVsIiwicmVjb3JkIiwic2V0SWQiLCJidWlsZFJlY29yZCIsImdldEF0dHJpYnV0ZSIsInByb3BlcnR5Iiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJkZWxldGVBdHRyaWJ1dGUiLCJnZXRSZWxhdGVkIiwicmVsYXRpb25zaGlwIiwic2V0UmVsYXRlZCIsInJlbGF0aW9uc2hpcE5hbWUiLCJyZWxhdGlvbnNoaXBEZWZpbml0aW9uIiwicmVsYXRlZE1vZGVscyIsInJlbGF0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJyZWxhdGVkTW9kZWwiLCJhZGRSZWxhdGVkIiwicmVsYXRlZFJlY29yZCIsInJlbW92ZVJlbGF0ZWQiLCJyZWxhdGlvbnNoaXBEZWZpbnRpb24iLCJhcmdzIiwidW5zaGlmdCIsInNhdmVSZWNvcmQiLCJzYXZlIiwiZGVsZXRlUmVjb3JkIiwicmVtb3ZlIiwiZGVmaW5lTW9kZWxzIiwibW9kZWxzIiwiZGIiLCJjb250YWluZXIiLCJsb29rdXAiLCJmb3JFYWNoIiwiTW9kZWwiLCJhdHRyaWJ1dGVzIiwibW9kZWxUeXBlIiwibWV0YUZvciIsImNvbnRhaW5lck5hbWUiLCJtYXBBdHRyaWJ1dGVEZXNjcmlwdG9ycyIsImF0dHJpYnV0ZSIsImtleSIsIm1hcHNUbyIsImtleVRvQ29sdW1uIiwiZGVuYWxpVHlwZVRvT1JNVHlwZSIsImRlZmluZSIsIm1hcFJlbGF0aW9uc2hpcERlc2NyaXB0b3JzIiwiUmVsYXRlZCIsIm1vZGUiLCJoYXNPbmUiLCJoYXNNYW55IiwiZGVuYWxpVHlwZSJdLCJtYXBwaW5ncyI6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SVcsVUFBVSxNQUFLN0QsU0FBTCxDQUFlc0IsYUFBYXpCLElBQTVCLENBQWQ7QUFDQSxZQUFJeUIsYUFBYXdDLElBQWIsS0FBc0IsUUFBMUIsRUFBb0M7QUFDbEMvRCxtQkFBU2dFLE1BQVQsQ0FBZ0JSLEdBQWhCLEVBQXFCTSxPQUFyQjtBQUNELFNBRkQsTUFFTztBQUNMOUQsbUJBQVNpRSxPQUFULENBQWlCVCxHQUFqQixFQUFzQk0sT0FBdEI7QUFDRDtBQUNGLE9BUkQ7QUFTRCxLQVhEO0FBWUQ7O0FBRURILHNCQUFvQk8sVUFBcEIsRUFBZ0M7QUFDOUIsV0FBT0EsVUFBUDtBQUNEOztBQUVEUixjQUFZRixHQUFaLEVBQWlCO0FBQ2YsV0FBTyx5QkFBVUEsR0FBVixDQUFQO0FBQ0Q7O0FBcklxRDtrQkFBbkM1RCxlIiwiZmlsZSI6ImxpYi9vcm0yLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjYnVyZGluZS9Qcm9qZWN0cy9kZW5hbGkvZGVuYWxpLW5vZGUtb3JtMiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9STUFkYXB0ZXIgfSBmcm9tICdkZW5hbGknO1xuaW1wb3J0IHsgZnJvbU5vZGUgfSBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgc25ha2VDYXNlIGZyb20gJ2xvZGFzaC9zbmFrZUNhc2UnO1xuaW1wb3J0IHVwcGVyRmlyc3QgZnJvbSAnbG9kYXNoL3VwcGVyRmlyc3QnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICdsb2Rhc2gvYXNzaWduJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZU9STTJBZGFwdGVyIGV4dGVuZHMgT1JNQWRhcHRlciB7XG5cbiAgZmluZCh0eXBlLCBpZCkge1xuICAgIGxldCBPcm1Nb2RlbCA9IHRoaXMub3JtTW9kZWxzW3R5cGVdO1xuICAgIHJldHVybiBmcm9tTm9kZSgoY2IpID0+IE9ybU1vZGVsLmdldChpZCwgY2IpKTtcbiAgfVxuXG4gIHF1ZXJ5T25lKHR5cGUsIHF1ZXJ5KSB7XG4gICAgbGV0IE9ybU1vZGVsID0gdGhpcy5vcm1Nb2RlbHNbdHlwZV07XG4gICAgcmV0dXJuIGZyb21Ob2RlKChjYikgPT4gT3JtTW9kZWwub25lKHF1ZXJ5LCBjYikpO1xuICB9XG5cbiAgYWxsKHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBPcm1Nb2RlbCA9IHRoaXMub3JtTW9kZWxzW3R5cGVdO1xuICAgIHJldHVybiBmcm9tTm9kZSgoY2IpID0+IE9ybU1vZGVsLmFsbChudWxsLCBvcHRpb25zLCBjYikpO1xuICB9XG5cbiAgcXVlcnkodHlwZSwgcXVlcnksIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBPcm1Nb2RlbCA9IHRoaXMub3JtTW9kZWxzW3R5cGVdO1xuICAgIHJldHVybiBmcm9tTm9kZSgoY2IpID0+IE9ybU1vZGVsLmZpbmQocXVlcnksIG9wdGlvbnMsIGNiKSk7XG4gIH1cblxuICBjcmVhdGVSZWNvcmQodHlwZSwgZGF0YSkge1xuICAgIGxldCBPcm1Nb2RlbCA9IHRoaXMub3JtTW9kZWxzW3R5cGVdO1xuICAgIHJldHVybiBmcm9tTm9kZSgoY2IpID0+IE9ybU1vZGVsLmNyZWF0ZShkYXRhLCBjYikpO1xuICB9XG5cbiAgaWRGb3IobW9kZWwpIHtcbiAgICByZXR1cm4gbW9kZWwucmVjb3JkLmlkO1xuICB9XG5cbiAgc2V0SWQobW9kZWwsIGlkKSB7XG4gICAgbW9kZWwucmVjb3JkLmlkID0gaWQ7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBidWlsZFJlY29yZCh0eXBlLCBkYXRhKSB7XG4gICAgbGV0IE9ybU1vZGVsID0gdGhpcy5vcm1Nb2RlbHNbdHlwZV07XG4gICAgcmV0dXJuIG5ldyBPcm1Nb2RlbChkYXRhKTtcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShtb2RlbCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gbW9kZWwucmVjb3JkW3Byb3BlcnR5XTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShtb2RlbCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbW9kZWwucmVjb3JkW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZGVsZXRlQXR0cmlidXRlKG1vZGVsLCBwcm9wZXJ0eSkge1xuICAgIG1vZGVsLnJlY29yZFtwcm9wZXJ0eV0gPSBudWxsO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0UmVsYXRlZChtb2RlbCwgcmVsYXRpb25zaGlwKSB7XG4gICAgcmV0dXJuIGZyb21Ob2RlKChjYikgPT4ge1xuICAgICAgbW9kZWwucmVjb3JkW2BnZXQkeyB1cHBlckZpcnN0KHJlbGF0aW9uc2hpcCkgfWBdKGNiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFJlbGF0ZWQobW9kZWwsIHJlbGF0aW9uc2hpcE5hbWUsIHJlbGF0aW9uc2hpcERlZmluaXRpb24sIHJlbGF0ZWRNb2RlbHMpIHtcbiAgICAvLyBJZiByZWxhdGVkUmVjb3JkcyBpcyBhbiBhcnJheSAoZS5nLiBhIGhhc01hbnkgcmVsYXRpb25zaGlwKSwgd2UgbmVlZCB0byBnZXQgYWxsIG9mIHRoZSBhY3R1YWwgcmVjb3JkIGluc3RhbmNlcyxcbiAgICAvLyBzbyB3ZSBwYXNzIGl0IHRocm91Z2ggYSBtYXAgZnVuY3Rpb24uIE90aGVyd2lzZSwgd2UganVzdCBnZXQgdGhlIHNpbmdsZSByZWNvcmRcbiAgICBsZXQgcmVsYXRlZCA9IEFycmF5LmlzQXJyYXkocmVsYXRlZE1vZGVscykgPyByZWxhdGVkTW9kZWxzLm1hcCgocmVsYXRlZE1vZGVsKSA9PiByZWxhdGVkTW9kZWwucmVjb3JkKSA6IHJlbGF0ZWRNb2RlbHMucmVjb3JkO1xuXG4gICAgcmV0dXJuIGZyb21Ob2RlKChjYikgPT4ge1xuICAgICAgbW9kZWwucmVjb3JkW2BzZXQkeyB1cHBlckZpcnN0KHJlbGF0aW9uc2hpcE5hbWUpIH1gXShyZWxhdGVkLCBjYik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRSZWxhdGVkKG1vZGVsLCByZWxhdGlvbnNoaXBOYW1lLCByZWxhdGlvbnNoaXBEZWZpbml0aW9uLCB7IHJlY29yZDogcmVsYXRlZFJlY29yZCB9KSB7XG4gICAgcmV0dXJuIGZyb21Ob2RlKChjYikgPT4ge1xuICAgICAgbW9kZWwucmVjb3JkW2BhZGQkeyB1cHBlckZpcnN0KHJlbGF0aW9uc2hpcE5hbWUpIH1gXShyZWxhdGVkUmVjb3JkLCBjYik7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVSZWxhdGVkKG1vZGVsLCByZWxhdGlvbnNoaXBOYW1lLCByZWxhdGlvbnNoaXBEZWZpbnRpb24sIHsgcmVjb3JkOiByZWxhdGVkUmVjb3JkIH0pIHtcbiAgICByZXR1cm4gZnJvbU5vZGUoKGNiKSA9PiB7XG4gICAgICBsZXQgYXJncyA9IFsgY2IgXTtcbiAgICAgIGlmIChyZWxhdGVkUmVjb3JkKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChbIHJlbGF0ZWRSZWNvcmQgXSk7XG4gICAgICB9XG4gICAgICBtb2RlbC5yZWNvcmRbYHJlbW92ZSR7IHVwcGVyRmlyc3QocmVsYXRpb25zaGlwTmFtZSkgfWBdKC4uLmFyZ3MpO1xuICAgIH0pO1xuICB9XG5cbiAgc2F2ZVJlY29yZChtb2RlbCkge1xuICAgIHJldHVybiBmcm9tTm9kZSgoY2IpID0+IG1vZGVsLnJlY29yZC5zYXZlKGNiKSk7XG4gIH1cblxuICBkZWxldGVSZWNvcmQobW9kZWwpIHtcbiAgICByZXR1cm4gZnJvbU5vZGUoKGNiKSA9PiBtb2RlbC5yZWNvcmQucmVtb3ZlKGNiKSk7XG4gIH1cblxuICBkZWZpbmVNb2RlbHMobW9kZWxzKSB7XG4gICAgbGV0IGRiID0gdGhpcy5jb250YWluZXIubG9va3VwKCdkYXRhYmFzZTpvcm0yJyk7XG4gICAgdGhpcy5vcm1Nb2RlbHMgPSB7fTtcblxuICAgIC8vIERlZmluZSBtb2RlbHNcbiAgICBtb2RlbHMuZm9yRWFjaCgoTW9kZWwpID0+IHtcbiAgICAgIGxldCBhdHRyaWJ1dGVzID0ge307XG4gICAgICBsZXQgbW9kZWxUeXBlID0gdGhpcy5jb250YWluZXIubWV0YUZvcihNb2RlbCkuY29udGFpbmVyTmFtZTtcbiAgICAgIE1vZGVsLm1hcEF0dHJpYnV0ZURlc2NyaXB0b3JzKChhdHRyaWJ1dGUsIGtleSkgPT4ge1xuICAgICAgICBhdHRyaWJ1dGVzW2tleV0gPSBhc3NpZ24oe1xuICAgICAgICAgIG1hcHNUbzogdGhpcy5rZXlUb0NvbHVtbihrZXkpLFxuICAgICAgICAgIHR5cGU6IHRoaXMuZGVuYWxpVHlwZVRvT1JNVHlwZShhdHRyaWJ1dGUudHlwZSlcbiAgICAgICAgfSwgYXR0cmlidXRlLm9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9ybU1vZGVsc1ttb2RlbFR5cGVdID0gZGIuZGVmaW5lKG1vZGVsVHlwZSwgYXR0cmlidXRlcyk7XG4gICAgfSk7XG5cbiAgICAvLyBEZWZpbmUgcmVsYXRpb25zaGlwcyBiZXR3ZWVuIG1vZGVsc1xuICAgIG1vZGVscy5mb3JFYWNoKChNb2RlbCkgPT4ge1xuICAgICAgbGV0IG1vZGVsVHlwZSA9IHRoaXMuY29udGFpbmVyLm1ldGFGb3IoTW9kZWwpLmNvbnRhaW5lck5hbWU7XG4gICAgICBNb2RlbC5tYXBSZWxhdGlvbnNoaXBEZXNjcmlwdG9ycygocmVsYXRpb25zaGlwLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IE9ybU1vZGVsID0gdGhpcy5vcm1Nb2RlbHNbbW9kZWxUeXBlXTtcbiAgICAgICAgbGV0IFJlbGF0ZWQgPSB0aGlzLm9ybU1vZGVsc1tyZWxhdGlvbnNoaXAudHlwZV07XG4gICAgICAgIGlmIChyZWxhdGlvbnNoaXAubW9kZSA9PT0gJ2hhc09uZScpIHtcbiAgICAgICAgICBPcm1Nb2RlbC5oYXNPbmUoa2V5LCBSZWxhdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBPcm1Nb2RlbC5oYXNNYW55KGtleSwgUmVsYXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVuYWxpVHlwZVRvT1JNVHlwZShkZW5hbGlUeXBlKSB7XG4gICAgcmV0dXJuIGRlbmFsaVR5cGU7XG4gIH1cblxuICBrZXlUb0NvbHVtbihrZXkpIHtcbiAgICByZXR1cm4gc25ha2VDYXNlKGtleSk7XG4gIH1cblxufVxuIl19