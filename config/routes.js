"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = drawRoutes;
function drawRoutes() {

  /*
   * # Single routes
   *
   * If you have some custom endpoint you want to create, you can always add it
   * via the basic routing DSL:
   *
   *     this.post('/foo', 'foo', 'process')
   *          └┬─┘ └┬───┘  └┬──┘  └┬──────┘
   *           │    │       │      └ action name
   *           │    │       └ controller
   *           │    └ URL pattern
   *           └ HTTP method
   *
   * That will create an endpoint that responds to a POST /foo, and triggers the
   * `process` action on the `foo` controller.
   *
   *
   * # Resources
   *
   * Single routes are useful, but Denali's real power comes from resources.
   * Using just:
   *
   *     this.resource('book')
   *
   * sets up the following routes
   *
   * Method  | URL                                               | Action
   * --------|---------------------------------------------------|-------
   * GET     | /books                                            | list
   * POST    | /books                                            | create
   * GET     | /books/:book_id                                   | show
   * PATCH   | /books/:book_id                                   | update
   * DELETE  | /books/:book_id                                   | destroy
   * GET     | /books/:book_id/:relationship_name                | fetch[relationshipName]
   * GET     | /books/:book_id/relationships/:relationship_name  | fetch[relationshipName]Relationship
   * POST    | /books/:book_id/relationships/:relationship_name  | add[relationshipName]Relationship
   * PATCH   | /books/:book_id/relationships/:relationship_name  | replace[relationshipName]Relationship
   * DELETE  | /books/:book_id/relationships/:relationship_name  | remove[relationshipName]Relationship
   *
   */

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMuanMiXSwibmFtZXMiOlsiZHJhd1JvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXdCQSxVO0FBQVQsU0FBU0EsVUFBVCxHQUFzQjs7QUFFbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNEIiwiZmlsZSI6ImNvbmZpZy9yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjYnVyZGluZS9Qcm9qZWN0cy9kZW5hbGkvZGVuYWxpLW5vZGUtb3JtMiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdSb3V0ZXMoKSB7XG5cbiAgLypcbiAgICogIyBTaW5nbGUgcm91dGVzXG4gICAqXG4gICAqIElmIHlvdSBoYXZlIHNvbWUgY3VzdG9tIGVuZHBvaW50IHlvdSB3YW50IHRvIGNyZWF0ZSwgeW91IGNhbiBhbHdheXMgYWRkIGl0XG4gICAqIHZpYSB0aGUgYmFzaWMgcm91dGluZyBEU0w6XG4gICAqXG4gICAqICAgICB0aGlzLnBvc3QoJy9mb28nLCAnZm9vJywgJ3Byb2Nlc3MnKVxuICAgKiAgICAgICAgICDilJTilKzilIDilJgg4pSU4pSs4pSA4pSA4pSA4pSYICDilJTilKzilIDilIDilJggIOKUlOKUrOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuICAgKiAgICAgICAgICAg4pSCICAgIOKUgiAgICAgICDilIIgICAgICDilJQgYWN0aW9uIG5hbWVcbiAgICogICAgICAgICAgIOKUgiAgICDilIIgICAgICAg4pSUIGNvbnRyb2xsZXJcbiAgICogICAgICAgICAgIOKUgiAgICDilJQgVVJMIHBhdHRlcm5cbiAgICogICAgICAgICAgIOKUlCBIVFRQIG1ldGhvZFxuICAgKlxuICAgKiBUaGF0IHdpbGwgY3JlYXRlIGFuIGVuZHBvaW50IHRoYXQgcmVzcG9uZHMgdG8gYSBQT1NUIC9mb28sIGFuZCB0cmlnZ2VycyB0aGVcbiAgICogYHByb2Nlc3NgIGFjdGlvbiBvbiB0aGUgYGZvb2AgY29udHJvbGxlci5cbiAgICpcbiAgICpcbiAgICogIyBSZXNvdXJjZXNcbiAgICpcbiAgICogU2luZ2xlIHJvdXRlcyBhcmUgdXNlZnVsLCBidXQgRGVuYWxpJ3MgcmVhbCBwb3dlciBjb21lcyBmcm9tIHJlc291cmNlcy5cbiAgICogVXNpbmcganVzdDpcbiAgICpcbiAgICogICAgIHRoaXMucmVzb3VyY2UoJ2Jvb2snKVxuICAgKlxuICAgKiBzZXRzIHVwIHRoZSBmb2xsb3dpbmcgcm91dGVzXG4gICAqXG4gICAqIE1ldGhvZCAgfCBVUkwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQWN0aW9uXG4gICAqIC0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tXG4gICAqIEdFVCAgICAgfCAvYm9va3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGlzdFxuICAgKiBQT1NUICAgIHwgL2Jvb2tzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNyZWF0ZVxuICAgKiBHRVQgICAgIHwgL2Jvb2tzLzpib29rX2lkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNob3dcbiAgICogUEFUQ0ggICB8IC9ib29rcy86Ym9va19pZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1cGRhdGVcbiAgICogREVMRVRFICB8IC9ib29rcy86Ym9va19pZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZXN0cm95XG4gICAqIEdFVCAgICAgfCAvYm9va3MvOmJvb2tfaWQvOnJlbGF0aW9uc2hpcF9uYW1lICAgICAgICAgICAgICAgIHwgZmV0Y2hbcmVsYXRpb25zaGlwTmFtZV1cbiAgICogR0VUICAgICB8IC9ib29rcy86Ym9va19pZC9yZWxhdGlvbnNoaXBzLzpyZWxhdGlvbnNoaXBfbmFtZSAgfCBmZXRjaFtyZWxhdGlvbnNoaXBOYW1lXVJlbGF0aW9uc2hpcFxuICAgKiBQT1NUICAgIHwgL2Jvb2tzLzpib29rX2lkL3JlbGF0aW9uc2hpcHMvOnJlbGF0aW9uc2hpcF9uYW1lICB8IGFkZFtyZWxhdGlvbnNoaXBOYW1lXVJlbGF0aW9uc2hpcFxuICAgKiBQQVRDSCAgIHwgL2Jvb2tzLzpib29rX2lkL3JlbGF0aW9uc2hpcHMvOnJlbGF0aW9uc2hpcF9uYW1lICB8IHJlcGxhY2VbcmVsYXRpb25zaGlwTmFtZV1SZWxhdGlvbnNoaXBcbiAgICogREVMRVRFICB8IC9ib29rcy86Ym9va19pZC9yZWxhdGlvbnNoaXBzLzpyZWxhdGlvbnNoaXBfbmFtZSAgfCByZW1vdmVbcmVsYXRpb25zaGlwTmFtZV1SZWxhdGlvbnNoaXBcbiAgICpcbiAgICovXG5cbn1cbiJdfQ==