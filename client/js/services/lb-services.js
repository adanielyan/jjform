(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Email#modelName
    * @propertyOf lbServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Project
 * @header lbServices.Project
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Project` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Project",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Projects/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Project.systemUser() instead.
        "prototype$__get__systemUser": {
          url: urlBase + "/Projects/:id/systemUser",
          method: "GET"
        },

        // INTERNAL. Use Project.regionalData.findById() instead.
        "prototype$__findById__regionalData": {
          url: urlBase + "/Projects/:id/regionalData/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.regionalData.destroyById() instead.
        "prototype$__destroyById__regionalData": {
          url: urlBase + "/Projects/:id/regionalData/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.regionalData.updateById() instead.
        "prototype$__updateById__regionalData": {
          url: urlBase + "/Projects/:id/regionalData/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.location() instead.
        "prototype$__get__location": {
          url: urlBase + "/Projects/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Project.location.create() instead.
        "prototype$__create__location": {
          url: urlBase + "/Projects/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Project.location.update() instead.
        "prototype$__update__location": {
          url: urlBase + "/Projects/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Project.location.destroy() instead.
        "prototype$__destroy__location": {
          url: urlBase + "/Projects/:id/location",
          method: "DELETE"
        },

        // INTERNAL. Use Project.contacts.findById() instead.
        "prototype$__findById__contacts": {
          url: urlBase + "/Projects/:id/contacts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.contacts.destroyById() instead.
        "prototype$__destroyById__contacts": {
          url: urlBase + "/Projects/:id/contacts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.contacts.updateById() instead.
        "prototype$__updateById__contacts": {
          url: urlBase + "/Projects/:id/contacts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.funders.findById() instead.
        "prototype$__findById__funders": {
          url: urlBase + "/Projects/:id/funders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.funders.destroyById() instead.
        "prototype$__destroyById__funders": {
          url: urlBase + "/Projects/:id/funders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.funders.updateById() instead.
        "prototype$__updateById__funders": {
          url: urlBase + "/Projects/:id/funders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.funders.link() instead.
        "prototype$__link__funders": {
          url: urlBase + "/Projects/:id/funders/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.funders.unlink() instead.
        "prototype$__unlink__funders": {
          url: urlBase + "/Projects/:id/funders/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.funders.exists() instead.
        "prototype$__exists__funders": {
          url: urlBase + "/Projects/:id/funders/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Project.regionalData() instead.
        "prototype$__get__regionalData": {
          isArray: true,
          url: urlBase + "/Projects/:id/regionalData",
          method: "GET"
        },

        // INTERNAL. Use Project.regionalData.create() instead.
        "prototype$__create__regionalData": {
          url: urlBase + "/Projects/:id/regionalData",
          method: "POST"
        },

        // INTERNAL. Use Project.regionalData.destroyAll() instead.
        "prototype$__delete__regionalData": {
          url: urlBase + "/Projects/:id/regionalData",
          method: "DELETE"
        },

        // INTERNAL. Use Project.regionalData.count() instead.
        "prototype$__count__regionalData": {
          url: urlBase + "/Projects/:id/regionalData/count",
          method: "GET"
        },

        // INTERNAL. Use Project.contacts() instead.
        "prototype$__get__contacts": {
          isArray: true,
          url: urlBase + "/Projects/:id/contacts",
          method: "GET"
        },

        // INTERNAL. Use Project.contacts.create() instead.
        "prototype$__create__contacts": {
          url: urlBase + "/Projects/:id/contacts",
          method: "POST"
        },

        // INTERNAL. Use Project.contacts.destroyAll() instead.
        "prototype$__delete__contacts": {
          url: urlBase + "/Projects/:id/contacts",
          method: "DELETE"
        },

        // INTERNAL. Use Project.contacts.count() instead.
        "prototype$__count__contacts": {
          url: urlBase + "/Projects/:id/contacts/count",
          method: "GET"
        },

        // INTERNAL. Use Project.funders() instead.
        "prototype$__get__funders": {
          isArray: true,
          url: urlBase + "/Projects/:id/funders",
          method: "GET"
        },

        // INTERNAL. Use Project.funders.create() instead.
        "prototype$__create__funders": {
          url: urlBase + "/Projects/:id/funders",
          method: "POST"
        },

        // INTERNAL. Use Project.funders.destroyAll() instead.
        "prototype$__delete__funders": {
          url: urlBase + "/Projects/:id/funders",
          method: "DELETE"
        },

        // INTERNAL. Use Project.funders.count() instead.
        "prototype$__count__funders": {
          url: urlBase + "/Projects/:id/funders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#create
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Projects",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#upsert
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Projects",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#exists
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Projects/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#findById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Projects/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#find
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Projects",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#findOne
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Projects/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#updateAll
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Projects/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#deleteById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Projects/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#count
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Projects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#prototype$updateAttributes
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Projects/:id",
          method: "PUT"
        },

        // INTERNAL. Use SystemUser.projects.findById() instead.
        "::findById::SystemUser::projects": {
          url: urlBase + "/SystemUsers/:id/projects/:fk",
          method: "GET"
        },

        // INTERNAL. Use SystemUser.projects.destroyById() instead.
        "::destroyById::SystemUser::projects": {
          url: urlBase + "/SystemUsers/:id/projects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SystemUser.projects.updateById() instead.
        "::updateById::SystemUser::projects": {
          url: urlBase + "/SystemUsers/:id/projects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SystemUser.projects() instead.
        "::get::SystemUser::projects": {
          isArray: true,
          url: urlBase + "/SystemUsers/:id/projects",
          method: "GET"
        },

        // INTERNAL. Use SystemUser.projects.create() instead.
        "::create::SystemUser::projects": {
          url: urlBase + "/SystemUsers/:id/projects",
          method: "POST"
        },

        // INTERNAL. Use SystemUser.projects.destroyAll() instead.
        "::delete::SystemUser::projects": {
          url: urlBase + "/SystemUsers/:id/projects",
          method: "DELETE"
        },

        // INTERNAL. Use SystemUser.projects.count() instead.
        "::count::SystemUser::projects": {
          url: urlBase + "/SystemUsers/:id/projects/count",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.project() instead.
        "::get::RegionalData::project": {
          url: urlBase + "/RegionalData/:id/project",
          method: "GET"
        },

        // INTERNAL. Use Location.project() instead.
        "::get::Location::project": {
          url: urlBase + "/Locations/:id/project",
          method: "GET"
        },

        // INTERNAL. Use Organization.projects.findById() instead.
        "::findById::Organization::projects": {
          url: urlBase + "/Organizations/:id/projects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.projects.destroyById() instead.
        "::destroyById::Organization::projects": {
          url: urlBase + "/Organizations/:id/projects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.projects.updateById() instead.
        "::updateById::Organization::projects": {
          url: urlBase + "/Organizations/:id/projects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.projects() instead.
        "::get::Organization::projects": {
          isArray: true,
          url: urlBase + "/Organizations/:id/projects",
          method: "GET"
        },

        // INTERNAL. Use Organization.projects.create() instead.
        "::create::Organization::projects": {
          url: urlBase + "/Organizations/:id/projects",
          method: "POST"
        },

        // INTERNAL. Use Organization.projects.destroyAll() instead.
        "::delete::Organization::projects": {
          url: urlBase + "/Organizations/:id/projects",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.projects.count() instead.
        "::count::Organization::projects": {
          url: urlBase + "/Organizations/:id/projects/count",
          method: "GET"
        },

        // INTERNAL. Use Contact.project() instead.
        "::get::Contact::project": {
          url: urlBase + "/Contacts/:id/project",
          method: "GET"
        },

        // INTERNAL. Use Contribution.project() instead.
        "::get::Contribution::project": {
          url: urlBase + "/Contributions/:id/project",
          method: "GET"
        },

        // INTERNAL. Use Funder.projects.findById() instead.
        "::findById::Funder::projects": {
          url: urlBase + "/Funders/:id/projects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Funder.projects.destroyById() instead.
        "::destroyById::Funder::projects": {
          url: urlBase + "/Funders/:id/projects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Funder.projects.updateById() instead.
        "::updateById::Funder::projects": {
          url: urlBase + "/Funders/:id/projects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Funder.projects.link() instead.
        "::link::Funder::projects": {
          url: urlBase + "/Funders/:id/projects/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Funder.projects.unlink() instead.
        "::unlink::Funder::projects": {
          url: urlBase + "/Funders/:id/projects/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Funder.projects.exists() instead.
        "::exists::Funder::projects": {
          url: urlBase + "/Funders/:id/projects/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Funder.projects() instead.
        "::get::Funder::projects": {
          isArray: true,
          url: urlBase + "/Funders/:id/projects",
          method: "GET"
        },

        // INTERNAL. Use Funder.projects.create() instead.
        "::create::Funder::projects": {
          url: urlBase + "/Funders/:id/projects",
          method: "POST"
        },

        // INTERNAL. Use Funder.projects.destroyAll() instead.
        "::delete::Funder::projects": {
          url: urlBase + "/Funders/:id/projects",
          method: "DELETE"
        },

        // INTERNAL. Use Funder.projects.count() instead.
        "::count::Funder::projects": {
          url: urlBase + "/Funders/:id/projects/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Project#updateOrCreate
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Project#update
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Project#destroyById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Project#removeById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Project#modelName
    * @propertyOf lbServices.Project
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Project`.
    */
    R.modelName = "Project";


        /**
         * @ngdoc method
         * @name lbServices.Project#systemUser
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Fetches belongsTo relation systemUser
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        R.systemUser = function() {
          var TargetResource = $injector.get("SystemUser");
          var action = TargetResource["::get::Project::systemUser"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Project.regionalData
     * @header lbServices.Project.regionalData
     * @object
     * @description
     *
     * The object `Project.regionalData` groups methods
     * manipulating `RegionalData` instances related to `Project`.
     *
     * Call {@link lbServices.Project#regionalData Project.regionalData()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Project#regionalData
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Queries regionalData of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        R.regionalData = function() {
          var TargetResource = $injector.get("RegionalData");
          var action = TargetResource["::get::Project::regionalData"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.regionalData#count
         * @methodOf lbServices.Project.regionalData
         *
         * @description
         *
         * Counts regionalData of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.regionalData.count = function() {
          var TargetResource = $injector.get("RegionalData");
          var action = TargetResource["::count::Project::regionalData"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.regionalData#create
         * @methodOf lbServices.Project.regionalData
         *
         * @description
         *
         * Creates a new instance in regionalData of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        R.regionalData.create = function() {
          var TargetResource = $injector.get("RegionalData");
          var action = TargetResource["::create::Project::regionalData"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.regionalData#destroyAll
         * @methodOf lbServices.Project.regionalData
         *
         * @description
         *
         * Deletes all regionalData of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.regionalData.destroyAll = function() {
          var TargetResource = $injector.get("RegionalData");
          var action = TargetResource["::delete::Project::regionalData"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.regionalData#destroyById
         * @methodOf lbServices.Project.regionalData
         *
         * @description
         *
         * Delete a related item by id for regionalData
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regionalData
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.regionalData.destroyById = function() {
          var TargetResource = $injector.get("RegionalData");
          var action = TargetResource["::destroyById::Project::regionalData"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.regionalData#findById
         * @methodOf lbServices.Project.regionalData
         *
         * @description
         *
         * Find a related item by id for regionalData
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regionalData
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        R.regionalData.findById = function() {
          var TargetResource = $injector.get("RegionalData");
          var action = TargetResource["::findById::Project::regionalData"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.regionalData#updateById
         * @methodOf lbServices.Project.regionalData
         *
         * @description
         *
         * Update a related item by id for regionalData
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regionalData
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        R.regionalData.updateById = function() {
          var TargetResource = $injector.get("RegionalData");
          var action = TargetResource["::updateById::Project::regionalData"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Project.location
     * @header lbServices.Project.location
     * @object
     * @description
     *
     * The object `Project.location` groups methods
     * manipulating `Location` instances related to `Project`.
     *
     * Call {@link lbServices.Project#location Project.location()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Project#location
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Fetches hasOne relation location
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::get::Project::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.location#create
         * @methodOf lbServices.Project.location
         *
         * @description
         *
         * Creates a new instance in location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.create = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::create::Project::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.location#destroy
         * @methodOf lbServices.Project.location
         *
         * @description
         *
         * Deletes location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.location.destroy = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::destroy::Project::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.location#update
         * @methodOf lbServices.Project.location
         *
         * @description
         *
         * Update location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.update = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::update::Project::location"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Project.contacts
     * @header lbServices.Project.contacts
     * @object
     * @description
     *
     * The object `Project.contacts` groups methods
     * manipulating `Contact` instances related to `Project`.
     *
     * Call {@link lbServices.Project#contacts Project.contacts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Project#contacts
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Queries contacts of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R.contacts = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::get::Project::contacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.contacts#count
         * @methodOf lbServices.Project.contacts
         *
         * @description
         *
         * Counts contacts of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.contacts.count = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::count::Project::contacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.contacts#create
         * @methodOf lbServices.Project.contacts
         *
         * @description
         *
         * Creates a new instance in contacts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R.contacts.create = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::create::Project::contacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.contacts#destroyAll
         * @methodOf lbServices.Project.contacts
         *
         * @description
         *
         * Deletes all contacts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contacts.destroyAll = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::delete::Project::contacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.contacts#destroyById
         * @methodOf lbServices.Project.contacts
         *
         * @description
         *
         * Delete a related item by id for contacts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contacts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contacts.destroyById = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::destroyById::Project::contacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.contacts#findById
         * @methodOf lbServices.Project.contacts
         *
         * @description
         *
         * Find a related item by id for contacts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contacts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R.contacts.findById = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::findById::Project::contacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.contacts#updateById
         * @methodOf lbServices.Project.contacts
         *
         * @description
         *
         * Update a related item by id for contacts
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for contacts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R.contacts.updateById = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::updateById::Project::contacts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Project.funders
     * @header lbServices.Project.funders
     * @object
     * @description
     *
     * The object `Project.funders` groups methods
     * manipulating `Funder` instances related to `Project`.
     *
     * Call {@link lbServices.Project#funders Project.funders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Project#funders
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Queries funders of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        R.funders = function() {
          var TargetResource = $injector.get("Funder");
          var action = TargetResource["::get::Project::funders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.funders#count
         * @methodOf lbServices.Project.funders
         *
         * @description
         *
         * Counts funders of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.funders.count = function() {
          var TargetResource = $injector.get("Funder");
          var action = TargetResource["::count::Project::funders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.funders#create
         * @methodOf lbServices.Project.funders
         *
         * @description
         *
         * Creates a new instance in funders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        R.funders.create = function() {
          var TargetResource = $injector.get("Funder");
          var action = TargetResource["::create::Project::funders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.funders#destroyAll
         * @methodOf lbServices.Project.funders
         *
         * @description
         *
         * Deletes all funders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.funders.destroyAll = function() {
          var TargetResource = $injector.get("Funder");
          var action = TargetResource["::delete::Project::funders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.funders#destroyById
         * @methodOf lbServices.Project.funders
         *
         * @description
         *
         * Delete a related item by id for funders
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for funders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.funders.destroyById = function() {
          var TargetResource = $injector.get("Funder");
          var action = TargetResource["::destroyById::Project::funders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.funders#exists
         * @methodOf lbServices.Project.funders
         *
         * @description
         *
         * Check the existence of funders relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for funders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        R.funders.exists = function() {
          var TargetResource = $injector.get("Funder");
          var action = TargetResource["::exists::Project::funders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.funders#findById
         * @methodOf lbServices.Project.funders
         *
         * @description
         *
         * Find a related item by id for funders
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for funders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        R.funders.findById = function() {
          var TargetResource = $injector.get("Funder");
          var action = TargetResource["::findById::Project::funders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.funders#link
         * @methodOf lbServices.Project.funders
         *
         * @description
         *
         * Add a related item by id for funders
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for funders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        R.funders.link = function() {
          var TargetResource = $injector.get("Funder");
          var action = TargetResource["::link::Project::funders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.funders#unlink
         * @methodOf lbServices.Project.funders
         *
         * @description
         *
         * Remove the funders relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for funders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.funders.unlink = function() {
          var TargetResource = $injector.get("Funder");
          var action = TargetResource["::unlink::Project::funders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.funders#updateById
         * @methodOf lbServices.Project.funders
         *
         * @description
         *
         * Update a related item by id for funders
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for funders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        R.funders.updateById = function() {
          var TargetResource = $injector.get("Funder");
          var action = TargetResource["::updateById::Project::funders"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.SystemUser
 * @header lbServices.SystemUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SystemUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SystemUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SystemUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#prototype$__findById__accessTokens
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Find a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/SystemUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#prototype$__destroyById__accessTokens
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Delete a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/SystemUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#prototype$__updateById__accessTokens
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Update a related item by id for accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/SystemUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SystemUser.projects.findById() instead.
        "prototype$__findById__projects": {
          url: urlBase + "/SystemUsers/:id/projects/:fk",
          method: "GET"
        },

        // INTERNAL. Use SystemUser.projects.destroyById() instead.
        "prototype$__destroyById__projects": {
          url: urlBase + "/SystemUsers/:id/projects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SystemUser.projects.updateById() instead.
        "prototype$__updateById__projects": {
          url: urlBase + "/SystemUsers/:id/projects/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#prototype$__get__accessTokens
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Queries accessTokens of SystemUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/SystemUsers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#prototype$__create__accessTokens
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/SystemUsers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#prototype$__delete__accessTokens
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/SystemUsers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#prototype$__count__accessTokens
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Counts accessTokens of SystemUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/SystemUsers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use SystemUser.projects() instead.
        "prototype$__get__projects": {
          isArray: true,
          url: urlBase + "/SystemUsers/:id/projects",
          method: "GET"
        },

        // INTERNAL. Use SystemUser.projects.create() instead.
        "prototype$__create__projects": {
          url: urlBase + "/SystemUsers/:id/projects",
          method: "POST"
        },

        // INTERNAL. Use SystemUser.projects.destroyAll() instead.
        "prototype$__delete__projects": {
          url: urlBase + "/SystemUsers/:id/projects",
          method: "DELETE"
        },

        // INTERNAL. Use SystemUser.projects.count() instead.
        "prototype$__count__projects": {
          url: urlBase + "/SystemUsers/:id/projects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#create
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SystemUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#upsert
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SystemUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#exists
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SystemUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#findById
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SystemUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#find
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SystemUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#findOne
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SystemUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#updateAll
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/SystemUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#deleteById
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/SystemUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#count
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SystemUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#prototype$updateAttributes
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SystemUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#login
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Login a user with username/email and password
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/SystemUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#logout
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/SystemUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#confirm
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/SystemUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#resetPassword
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/SystemUsers/reset",
          method: "POST"
        },

        // INTERNAL. Use Project.systemUser() instead.
        "::get::Project::systemUser": {
          url: urlBase + "/Projects/:id/systemUser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#getCurrent
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/SystemUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.SystemUser#updateOrCreate
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SystemUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#update
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#destroyById
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#removeById
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#getCachedCurrent
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.SystemUser#login} or
         * {@link lbServices.SystemUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A SystemUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#isAuthenticated
         * @methodOf lbServices.SystemUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.SystemUser#getCurrentId
         * @methodOf lbServices.SystemUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.SystemUser#modelName
    * @propertyOf lbServices.SystemUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SystemUser`.
    */
    R.modelName = "SystemUser";

    /**
     * @ngdoc object
     * @name lbServices.SystemUser.projects
     * @header lbServices.SystemUser.projects
     * @object
     * @description
     *
     * The object `SystemUser.projects` groups methods
     * manipulating `Project` instances related to `SystemUser`.
     *
     * Call {@link lbServices.SystemUser#projects SystemUser.projects()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.SystemUser#projects
         * @methodOf lbServices.SystemUser
         *
         * @description
         *
         * Queries projects of SystemUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::SystemUser::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SystemUser.projects#count
         * @methodOf lbServices.SystemUser.projects
         *
         * @description
         *
         * Counts projects of SystemUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.projects.count = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::count::SystemUser::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SystemUser.projects#create
         * @methodOf lbServices.SystemUser.projects
         *
         * @description
         *
         * Creates a new instance in projects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.create = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::create::SystemUser::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SystemUser.projects#destroyAll
         * @methodOf lbServices.SystemUser.projects
         *
         * @description
         *
         * Deletes all projects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.destroyAll = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::delete::SystemUser::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SystemUser.projects#destroyById
         * @methodOf lbServices.SystemUser.projects
         *
         * @description
         *
         * Delete a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.destroyById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::destroyById::SystemUser::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SystemUser.projects#findById
         * @methodOf lbServices.SystemUser.projects
         *
         * @description
         *
         * Find a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.findById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::findById::SystemUser::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SystemUser.projects#updateById
         * @methodOf lbServices.SystemUser.projects
         *
         * @description
         *
         * Update a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.updateById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::updateById::SystemUser::projects"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RegionalData
 * @header lbServices.RegionalData
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RegionalData` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RegionalData",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/RegionalData/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use RegionalData.project() instead.
        "prototype$__get__project": {
          url: urlBase + "/RegionalData/:id/project",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.locations.findById() instead.
        "prototype$__findById__locations": {
          url: urlBase + "/RegionalData/:id/locations/:fk",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.locations.destroyById() instead.
        "prototype$__destroyById__locations": {
          url: urlBase + "/RegionalData/:id/locations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.locations.updateById() instead.
        "prototype$__updateById__locations": {
          url: urlBase + "/RegionalData/:id/locations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RegionalData.contact() instead.
        "prototype$__get__contact": {
          url: urlBase + "/RegionalData/:id/contact",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.contact.create() instead.
        "prototype$__create__contact": {
          url: urlBase + "/RegionalData/:id/contact",
          method: "POST"
        },

        // INTERNAL. Use RegionalData.contact.update() instead.
        "prototype$__update__contact": {
          url: urlBase + "/RegionalData/:id/contact",
          method: "PUT"
        },

        // INTERNAL. Use RegionalData.contact.destroy() instead.
        "prototype$__destroy__contact": {
          url: urlBase + "/RegionalData/:id/contact",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.sectors.findById() instead.
        "prototype$__findById__sectors": {
          url: urlBase + "/RegionalData/:id/sectors/:fk",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.sectors.destroyById() instead.
        "prototype$__destroyById__sectors": {
          url: urlBase + "/RegionalData/:id/sectors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.sectors.updateById() instead.
        "prototype$__updateById__sectors": {
          url: urlBase + "/RegionalData/:id/sectors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RegionalData.subSectors.findById() instead.
        "prototype$__findById__subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors/:fk",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.subSectors.destroyById() instead.
        "prototype$__destroyById__subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.subSectors.updateById() instead.
        "prototype$__updateById__subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RegionalData.locations() instead.
        "prototype$__get__locations": {
          isArray: true,
          url: urlBase + "/RegionalData/:id/locations",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.locations.create() instead.
        "prototype$__create__locations": {
          url: urlBase + "/RegionalData/:id/locations",
          method: "POST"
        },

        // INTERNAL. Use RegionalData.locations.destroyAll() instead.
        "prototype$__delete__locations": {
          url: urlBase + "/RegionalData/:id/locations",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.locations.count() instead.
        "prototype$__count__locations": {
          url: urlBase + "/RegionalData/:id/locations/count",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.sectors() instead.
        "prototype$__get__sectors": {
          isArray: true,
          url: urlBase + "/RegionalData/:id/sectors",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.sectors.create() instead.
        "prototype$__create__sectors": {
          url: urlBase + "/RegionalData/:id/sectors",
          method: "POST"
        },

        // INTERNAL. Use RegionalData.sectors.destroyAll() instead.
        "prototype$__delete__sectors": {
          url: urlBase + "/RegionalData/:id/sectors",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.sectors.count() instead.
        "prototype$__count__sectors": {
          url: urlBase + "/RegionalData/:id/sectors/count",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.subSectors() instead.
        "prototype$__get__subSectors": {
          isArray: true,
          url: urlBase + "/RegionalData/:id/subSectors",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.subSectors.create() instead.
        "prototype$__create__subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors",
          method: "POST"
        },

        // INTERNAL. Use RegionalData.subSectors.destroyAll() instead.
        "prototype$__delete__subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.subSectors.count() instead.
        "prototype$__count__subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#create
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/RegionalData",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#upsert
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/RegionalData",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#exists
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/RegionalData/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#findById
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/RegionalData/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#find
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/RegionalData",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#findOne
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/RegionalData/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#updateAll
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/RegionalData/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#deleteById
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/RegionalData/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#count
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/RegionalData/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#prototype$updateAttributes
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/RegionalData/:id",
          method: "PUT"
        },

        // INTERNAL. Use Project.regionalData.findById() instead.
        "::findById::Project::regionalData": {
          url: urlBase + "/Projects/:id/regionalData/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.regionalData.destroyById() instead.
        "::destroyById::Project::regionalData": {
          url: urlBase + "/Projects/:id/regionalData/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.regionalData.updateById() instead.
        "::updateById::Project::regionalData": {
          url: urlBase + "/Projects/:id/regionalData/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.regionalData() instead.
        "::get::Project::regionalData": {
          isArray: true,
          url: urlBase + "/Projects/:id/regionalData",
          method: "GET"
        },

        // INTERNAL. Use Project.regionalData.create() instead.
        "::create::Project::regionalData": {
          url: urlBase + "/Projects/:id/regionalData",
          method: "POST"
        },

        // INTERNAL. Use Project.regionalData.destroyAll() instead.
        "::delete::Project::regionalData": {
          url: urlBase + "/Projects/:id/regionalData",
          method: "DELETE"
        },

        // INTERNAL. Use Project.regionalData.count() instead.
        "::count::Project::regionalData": {
          url: urlBase + "/Projects/:id/regionalData/count",
          method: "GET"
        },

        // INTERNAL. Use Location.regionalData() instead.
        "::get::Location::regionalData": {
          url: urlBase + "/Locations/:id/regionalData",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RegionalData#updateOrCreate
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#update
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#destroyById
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RegionalData#removeById
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.RegionalData#modelName
    * @propertyOf lbServices.RegionalData
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RegionalData`.
    */
    R.modelName = "RegionalData";


        /**
         * @ngdoc method
         * @name lbServices.RegionalData#project
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Fetches belongsTo relation project
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.project = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::RegionalData::project"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RegionalData.locations
     * @header lbServices.RegionalData.locations
     * @object
     * @description
     *
     * The object `RegionalData.locations` groups methods
     * manipulating `Location` instances related to `RegionalData`.
     *
     * Call {@link lbServices.RegionalData#locations RegionalData.locations()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RegionalData#locations
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Queries locations of RegionalData.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.locations = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::get::RegionalData::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.locations#count
         * @methodOf lbServices.RegionalData.locations
         *
         * @description
         *
         * Counts locations of RegionalData.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.locations.count = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::count::RegionalData::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.locations#create
         * @methodOf lbServices.RegionalData.locations
         *
         * @description
         *
         * Creates a new instance in locations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.locations.create = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::create::RegionalData::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.locations#destroyAll
         * @methodOf lbServices.RegionalData.locations
         *
         * @description
         *
         * Deletes all locations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.locations.destroyAll = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::delete::RegionalData::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.locations#destroyById
         * @methodOf lbServices.RegionalData.locations
         *
         * @description
         *
         * Delete a related item by id for locations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.locations.destroyById = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::destroyById::RegionalData::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.locations#findById
         * @methodOf lbServices.RegionalData.locations
         *
         * @description
         *
         * Find a related item by id for locations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.locations.findById = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::findById::RegionalData::locations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.locations#updateById
         * @methodOf lbServices.RegionalData.locations
         *
         * @description
         *
         * Update a related item by id for locations
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.locations.updateById = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::updateById::RegionalData::locations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RegionalData.contact
     * @header lbServices.RegionalData.contact
     * @object
     * @description
     *
     * The object `RegionalData.contact` groups methods
     * manipulating `Contact` instances related to `RegionalData`.
     *
     * Call {@link lbServices.RegionalData#contact RegionalData.contact()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RegionalData#contact
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Fetches hasOne relation contact
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R.contact = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::get::RegionalData::contact"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.contact#create
         * @methodOf lbServices.RegionalData.contact
         *
         * @description
         *
         * Creates a new instance in contact of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R.contact.create = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::create::RegionalData::contact"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.contact#destroy
         * @methodOf lbServices.RegionalData.contact
         *
         * @description
         *
         * Deletes contact of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.contact.destroy = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::destroy::RegionalData::contact"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.contact#update
         * @methodOf lbServices.RegionalData.contact
         *
         * @description
         *
         * Update contact of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R.contact.update = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::update::RegionalData::contact"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RegionalData.sectors
     * @header lbServices.RegionalData.sectors
     * @object
     * @description
     *
     * The object `RegionalData.sectors` groups methods
     * manipulating `Sector` instances related to `RegionalData`.
     *
     * Call {@link lbServices.RegionalData#sectors RegionalData.sectors()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RegionalData#sectors
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Queries sectors of RegionalData.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        R.sectors = function() {
          var TargetResource = $injector.get("Sector");
          var action = TargetResource["::get::RegionalData::sectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.sectors#count
         * @methodOf lbServices.RegionalData.sectors
         *
         * @description
         *
         * Counts sectors of RegionalData.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.sectors.count = function() {
          var TargetResource = $injector.get("Sector");
          var action = TargetResource["::count::RegionalData::sectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.sectors#create
         * @methodOf lbServices.RegionalData.sectors
         *
         * @description
         *
         * Creates a new instance in sectors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        R.sectors.create = function() {
          var TargetResource = $injector.get("Sector");
          var action = TargetResource["::create::RegionalData::sectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.sectors#destroyAll
         * @methodOf lbServices.RegionalData.sectors
         *
         * @description
         *
         * Deletes all sectors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.sectors.destroyAll = function() {
          var TargetResource = $injector.get("Sector");
          var action = TargetResource["::delete::RegionalData::sectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.sectors#destroyById
         * @methodOf lbServices.RegionalData.sectors
         *
         * @description
         *
         * Delete a related item by id for sectors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for sectors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.sectors.destroyById = function() {
          var TargetResource = $injector.get("Sector");
          var action = TargetResource["::destroyById::RegionalData::sectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.sectors#findById
         * @methodOf lbServices.RegionalData.sectors
         *
         * @description
         *
         * Find a related item by id for sectors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for sectors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        R.sectors.findById = function() {
          var TargetResource = $injector.get("Sector");
          var action = TargetResource["::findById::RegionalData::sectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.sectors#updateById
         * @methodOf lbServices.RegionalData.sectors
         *
         * @description
         *
         * Update a related item by id for sectors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for sectors
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        R.sectors.updateById = function() {
          var TargetResource = $injector.get("Sector");
          var action = TargetResource["::updateById::RegionalData::sectors"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RegionalData.subSectors
     * @header lbServices.RegionalData.subSectors
     * @object
     * @description
     *
     * The object `RegionalData.subSectors` groups methods
     * manipulating `SubSector` instances related to `RegionalData`.
     *
     * Call {@link lbServices.RegionalData#subSectors RegionalData.subSectors()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RegionalData#subSectors
         * @methodOf lbServices.RegionalData
         *
         * @description
         *
         * Queries subSectors of RegionalData.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        R.subSectors = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::get::RegionalData::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.subSectors#count
         * @methodOf lbServices.RegionalData.subSectors
         *
         * @description
         *
         * Counts subSectors of RegionalData.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.subSectors.count = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::count::RegionalData::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.subSectors#create
         * @methodOf lbServices.RegionalData.subSectors
         *
         * @description
         *
         * Creates a new instance in subSectors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        R.subSectors.create = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::create::RegionalData::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.subSectors#destroyAll
         * @methodOf lbServices.RegionalData.subSectors
         *
         * @description
         *
         * Deletes all subSectors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.subSectors.destroyAll = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::delete::RegionalData::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.subSectors#destroyById
         * @methodOf lbServices.RegionalData.subSectors
         *
         * @description
         *
         * Delete a related item by id for subSectors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subSectors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.subSectors.destroyById = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::destroyById::RegionalData::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.subSectors#findById
         * @methodOf lbServices.RegionalData.subSectors
         *
         * @description
         *
         * Find a related item by id for subSectors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subSectors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        R.subSectors.findById = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::findById::RegionalData::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RegionalData.subSectors#updateById
         * @methodOf lbServices.RegionalData.subSectors
         *
         * @description
         *
         * Update a related item by id for subSectors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subSectors
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        R.subSectors.updateById = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::updateById::RegionalData::subSectors"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Location
 * @header lbServices.Location
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Location` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Location",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Locations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Location.regionalData() instead.
        "prototype$__get__regionalData": {
          url: urlBase + "/Locations/:id/regionalData",
          method: "GET"
        },

        // INTERNAL. Use Location.project() instead.
        "prototype$__get__project": {
          url: urlBase + "/Locations/:id/project",
          method: "GET"
        },

        // INTERNAL. Use Location.organization() instead.
        "prototype$__get__organization": {
          url: urlBase + "/Locations/:id/organization",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#create
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Locations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#upsert
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Locations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#exists
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Locations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#findById
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Locations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#find
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Locations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#findOne
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Locations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#updateAll
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Locations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#deleteById
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Locations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#count
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Locations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#prototype$updateAttributes
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Locations/:id",
          method: "PUT"
        },

        // INTERNAL. Use Project.location() instead.
        "::get::Project::location": {
          url: urlBase + "/Projects/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Project.location.create() instead.
        "::create::Project::location": {
          url: urlBase + "/Projects/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Project.location.update() instead.
        "::update::Project::location": {
          url: urlBase + "/Projects/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Project.location.destroy() instead.
        "::destroy::Project::location": {
          url: urlBase + "/Projects/:id/location",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.locations.findById() instead.
        "::findById::RegionalData::locations": {
          url: urlBase + "/RegionalData/:id/locations/:fk",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.locations.destroyById() instead.
        "::destroyById::RegionalData::locations": {
          url: urlBase + "/RegionalData/:id/locations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.locations.updateById() instead.
        "::updateById::RegionalData::locations": {
          url: urlBase + "/RegionalData/:id/locations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RegionalData.locations() instead.
        "::get::RegionalData::locations": {
          isArray: true,
          url: urlBase + "/RegionalData/:id/locations",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.locations.create() instead.
        "::create::RegionalData::locations": {
          url: urlBase + "/RegionalData/:id/locations",
          method: "POST"
        },

        // INTERNAL. Use RegionalData.locations.destroyAll() instead.
        "::delete::RegionalData::locations": {
          url: urlBase + "/RegionalData/:id/locations",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.locations.count() instead.
        "::count::RegionalData::locations": {
          url: urlBase + "/RegionalData/:id/locations/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.location() instead.
        "::get::Organization::location": {
          url: urlBase + "/Organizations/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Organization.location.create() instead.
        "::create::Organization::location": {
          url: urlBase + "/Organizations/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Organization.location.update() instead.
        "::update::Organization::location": {
          url: urlBase + "/Organizations/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Organization.location.destroy() instead.
        "::destroy::Organization::location": {
          url: urlBase + "/Organizations/:id/location",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Location#updateOrCreate
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Location#update
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Location#destroyById
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Location#removeById
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Location#modelName
    * @propertyOf lbServices.Location
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Location`.
    */
    R.modelName = "Location";


        /**
         * @ngdoc method
         * @name lbServices.Location#regionalData
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Fetches belongsTo relation regionalData
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RegionalData` object.)
         * </em>
         */
        R.regionalData = function() {
          var TargetResource = $injector.get("RegionalData");
          var action = TargetResource["::get::Location::regionalData"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location#project
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Fetches belongsTo relation project
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.project = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::Location::project"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location#organization
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Fetches belongsTo relation organization
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organization = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::get::Location::organization"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Organization
 * @header lbServices.Organization
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Organization` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Organization",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Organizations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Organization.location() instead.
        "prototype$__get__location": {
          url: urlBase + "/Organizations/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Organization.location.create() instead.
        "prototype$__create__location": {
          url: urlBase + "/Organizations/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Organization.location.update() instead.
        "prototype$__update__location": {
          url: urlBase + "/Organizations/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Organization.location.destroy() instead.
        "prototype$__destroy__location": {
          url: urlBase + "/Organizations/:id/location",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.projects.findById() instead.
        "prototype$__findById__projects": {
          url: urlBase + "/Organizations/:id/projects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.projects.destroyById() instead.
        "prototype$__destroyById__projects": {
          url: urlBase + "/Organizations/:id/projects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.projects.updateById() instead.
        "prototype$__updateById__projects": {
          url: urlBase + "/Organizations/:id/projects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.projects() instead.
        "prototype$__get__projects": {
          isArray: true,
          url: urlBase + "/Organizations/:id/projects",
          method: "GET"
        },

        // INTERNAL. Use Organization.projects.create() instead.
        "prototype$__create__projects": {
          url: urlBase + "/Organizations/:id/projects",
          method: "POST"
        },

        // INTERNAL. Use Organization.projects.destroyAll() instead.
        "prototype$__delete__projects": {
          url: urlBase + "/Organizations/:id/projects",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.projects.count() instead.
        "prototype$__count__projects": {
          url: urlBase + "/Organizations/:id/projects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#create
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Organizations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#upsert
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Organizations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#exists
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Organizations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#findById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Organizations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#find
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Organizations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#findOne
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Organizations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#updateAll
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Organizations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#deleteById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Organizations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#count
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Organizations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#prototype$updateAttributes
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Organizations/:id",
          method: "PUT"
        },

        // INTERNAL. Use Location.organization() instead.
        "::get::Location::organization": {
          url: urlBase + "/Locations/:id/organization",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Organization#updateOrCreate
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Organization#update
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Organization#destroyById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Organization#removeById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Organization#modelName
    * @propertyOf lbServices.Organization
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Organization`.
    */
    R.modelName = "Organization";

    /**
     * @ngdoc object
     * @name lbServices.Organization.location
     * @header lbServices.Organization.location
     * @object
     * @description
     *
     * The object `Organization.location` groups methods
     * manipulating `Location` instances related to `Organization`.
     *
     * Call {@link lbServices.Organization#location Organization.location()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organization#location
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Fetches hasOne relation location
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::get::Organization::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.location#create
         * @methodOf lbServices.Organization.location
         *
         * @description
         *
         * Creates a new instance in location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.create = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::create::Organization::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.location#destroy
         * @methodOf lbServices.Organization.location
         *
         * @description
         *
         * Deletes location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.location.destroy = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::destroy::Organization::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.location#update
         * @methodOf lbServices.Organization.location
         *
         * @description
         *
         * Update location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.update = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::update::Organization::location"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organization.projects
     * @header lbServices.Organization.projects
     * @object
     * @description
     *
     * The object `Organization.projects` groups methods
     * manipulating `Project` instances related to `Organization`.
     *
     * Call {@link lbServices.Organization#projects Organization.projects()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organization#projects
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Queries projects of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#count
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Counts projects of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.projects.count = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::count::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#create
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Creates a new instance in projects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.create = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::create::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#destroyAll
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Deletes all projects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.destroyAll = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::delete::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#destroyById
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Delete a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.destroyById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::destroyById::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#findById
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Find a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.findById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::findById::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#updateById
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Update a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.updateById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::updateById::Organization::projects"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Contact
 * @header lbServices.Contact
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Contact` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Contact",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Contacts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Contact.project() instead.
        "prototype$__get__project": {
          url: urlBase + "/Contacts/:id/project",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#create
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Contacts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#upsert
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Contacts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#exists
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Contacts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#findById
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Contacts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#find
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Contacts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#findOne
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Contacts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#updateAll
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Contacts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#deleteById
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Contacts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#count
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Contacts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#prototype$updateAttributes
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Contacts/:id",
          method: "PUT"
        },

        // INTERNAL. Use Project.contacts.findById() instead.
        "::findById::Project::contacts": {
          url: urlBase + "/Projects/:id/contacts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.contacts.destroyById() instead.
        "::destroyById::Project::contacts": {
          url: urlBase + "/Projects/:id/contacts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.contacts.updateById() instead.
        "::updateById::Project::contacts": {
          url: urlBase + "/Projects/:id/contacts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.contacts() instead.
        "::get::Project::contacts": {
          isArray: true,
          url: urlBase + "/Projects/:id/contacts",
          method: "GET"
        },

        // INTERNAL. Use Project.contacts.create() instead.
        "::create::Project::contacts": {
          url: urlBase + "/Projects/:id/contacts",
          method: "POST"
        },

        // INTERNAL. Use Project.contacts.destroyAll() instead.
        "::delete::Project::contacts": {
          url: urlBase + "/Projects/:id/contacts",
          method: "DELETE"
        },

        // INTERNAL. Use Project.contacts.count() instead.
        "::count::Project::contacts": {
          url: urlBase + "/Projects/:id/contacts/count",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.contact() instead.
        "::get::RegionalData::contact": {
          url: urlBase + "/RegionalData/:id/contact",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.contact.create() instead.
        "::create::RegionalData::contact": {
          url: urlBase + "/RegionalData/:id/contact",
          method: "POST"
        },

        // INTERNAL. Use RegionalData.contact.update() instead.
        "::update::RegionalData::contact": {
          url: urlBase + "/RegionalData/:id/contact",
          method: "PUT"
        },

        // INTERNAL. Use RegionalData.contact.destroy() instead.
        "::destroy::RegionalData::contact": {
          url: urlBase + "/RegionalData/:id/contact",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Contact#updateOrCreate
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Contact#update
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Contact#destroyById
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Contact#removeById
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Contact#modelName
    * @propertyOf lbServices.Contact
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Contact`.
    */
    R.modelName = "Contact";


        /**
         * @ngdoc method
         * @name lbServices.Contact#project
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Fetches belongsTo relation project
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.project = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::Contact::project"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Contribution
 * @header lbServices.Contribution
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Contribution` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Contribution",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Contributions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Contribution.project() instead.
        "prototype$__get__project": {
          url: urlBase + "/Contributions/:id/project",
          method: "GET"
        },

        // INTERNAL. Use Contribution.funder() instead.
        "prototype$__get__funder": {
          url: urlBase + "/Contributions/:id/funder",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#create
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Contributions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#upsert
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Contributions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#exists
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Contributions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#findById
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Contributions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#find
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Contributions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#findOne
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Contributions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#updateAll
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Contributions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#deleteById
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Contributions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#count
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Contributions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contribution#prototype$updateAttributes
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Contributions/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Contribution#updateOrCreate
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contribution` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Contribution#update
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Contribution#destroyById
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Contribution#removeById
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Contribution#modelName
    * @propertyOf lbServices.Contribution
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Contribution`.
    */
    R.modelName = "Contribution";


        /**
         * @ngdoc method
         * @name lbServices.Contribution#project
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Fetches belongsTo relation project
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.project = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::Contribution::project"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Contribution#funder
         * @methodOf lbServices.Contribution
         *
         * @description
         *
         * Fetches belongsTo relation funder
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        R.funder = function() {
          var TargetResource = $injector.get("Funder");
          var action = TargetResource["::get::Contribution::funder"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Funder
 * @header lbServices.Funder
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Funder` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Funder",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Funders/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Funder.projects.findById() instead.
        "prototype$__findById__projects": {
          url: urlBase + "/Funders/:id/projects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Funder.projects.destroyById() instead.
        "prototype$__destroyById__projects": {
          url: urlBase + "/Funders/:id/projects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Funder.projects.updateById() instead.
        "prototype$__updateById__projects": {
          url: urlBase + "/Funders/:id/projects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Funder.projects.link() instead.
        "prototype$__link__projects": {
          url: urlBase + "/Funders/:id/projects/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Funder.projects.unlink() instead.
        "prototype$__unlink__projects": {
          url: urlBase + "/Funders/:id/projects/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Funder.projects.exists() instead.
        "prototype$__exists__projects": {
          url: urlBase + "/Funders/:id/projects/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Funder.projects() instead.
        "prototype$__get__projects": {
          isArray: true,
          url: urlBase + "/Funders/:id/projects",
          method: "GET"
        },

        // INTERNAL. Use Funder.projects.create() instead.
        "prototype$__create__projects": {
          url: urlBase + "/Funders/:id/projects",
          method: "POST"
        },

        // INTERNAL. Use Funder.projects.destroyAll() instead.
        "prototype$__delete__projects": {
          url: urlBase + "/Funders/:id/projects",
          method: "DELETE"
        },

        // INTERNAL. Use Funder.projects.count() instead.
        "prototype$__count__projects": {
          url: urlBase + "/Funders/:id/projects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Funder#create
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Funders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Funder#upsert
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Funders",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Funder#exists
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Funders/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Funder#findById
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Funders/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Funder#find
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Funders",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Funder#findOne
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Funders/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Funder#updateAll
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Funders/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Funder#deleteById
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Funders/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Funder#count
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Funders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Funder#prototype$updateAttributes
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Funders/:id",
          method: "PUT"
        },

        // INTERNAL. Use Project.funders.findById() instead.
        "::findById::Project::funders": {
          url: urlBase + "/Projects/:id/funders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.funders.destroyById() instead.
        "::destroyById::Project::funders": {
          url: urlBase + "/Projects/:id/funders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.funders.updateById() instead.
        "::updateById::Project::funders": {
          url: urlBase + "/Projects/:id/funders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.funders.link() instead.
        "::link::Project::funders": {
          url: urlBase + "/Projects/:id/funders/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.funders.unlink() instead.
        "::unlink::Project::funders": {
          url: urlBase + "/Projects/:id/funders/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.funders.exists() instead.
        "::exists::Project::funders": {
          url: urlBase + "/Projects/:id/funders/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Project.funders() instead.
        "::get::Project::funders": {
          isArray: true,
          url: urlBase + "/Projects/:id/funders",
          method: "GET"
        },

        // INTERNAL. Use Project.funders.create() instead.
        "::create::Project::funders": {
          url: urlBase + "/Projects/:id/funders",
          method: "POST"
        },

        // INTERNAL. Use Project.funders.destroyAll() instead.
        "::delete::Project::funders": {
          url: urlBase + "/Projects/:id/funders",
          method: "DELETE"
        },

        // INTERNAL. Use Project.funders.count() instead.
        "::count::Project::funders": {
          url: urlBase + "/Projects/:id/funders/count",
          method: "GET"
        },

        // INTERNAL. Use Contribution.funder() instead.
        "::get::Contribution::funder": {
          url: urlBase + "/Contributions/:id/funder",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Funder#updateOrCreate
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Funder` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Funder#update
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Funder#destroyById
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Funder#removeById
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Funder#modelName
    * @propertyOf lbServices.Funder
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Funder`.
    */
    R.modelName = "Funder";

    /**
     * @ngdoc object
     * @name lbServices.Funder.projects
     * @header lbServices.Funder.projects
     * @object
     * @description
     *
     * The object `Funder.projects` groups methods
     * manipulating `Project` instances related to `Funder`.
     *
     * Call {@link lbServices.Funder#projects Funder.projects()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Funder#projects
         * @methodOf lbServices.Funder
         *
         * @description
         *
         * Queries projects of Funder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::Funder::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Funder.projects#count
         * @methodOf lbServices.Funder.projects
         *
         * @description
         *
         * Counts projects of Funder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.projects.count = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::count::Funder::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Funder.projects#create
         * @methodOf lbServices.Funder.projects
         *
         * @description
         *
         * Creates a new instance in projects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.create = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::create::Funder::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Funder.projects#destroyAll
         * @methodOf lbServices.Funder.projects
         *
         * @description
         *
         * Deletes all projects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.destroyAll = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::delete::Funder::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Funder.projects#destroyById
         * @methodOf lbServices.Funder.projects
         *
         * @description
         *
         * Delete a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.destroyById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::destroyById::Funder::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Funder.projects#exists
         * @methodOf lbServices.Funder.projects
         *
         * @description
         *
         * Check the existence of projects relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.exists = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::exists::Funder::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Funder.projects#findById
         * @methodOf lbServices.Funder.projects
         *
         * @description
         *
         * Find a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.findById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::findById::Funder::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Funder.projects#link
         * @methodOf lbServices.Funder.projects
         *
         * @description
         *
         * Add a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.link = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::link::Funder::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Funder.projects#unlink
         * @methodOf lbServices.Funder.projects
         *
         * @description
         *
         * Remove the projects relation to an item by id
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.unlink = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::unlink::Funder::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Funder.projects#updateById
         * @methodOf lbServices.Funder.projects
         *
         * @description
         *
         * Update a related item by id for projects
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.updateById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::updateById::Funder::projects"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Sector
 * @header lbServices.Sector
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Sector` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Sector",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Sectors/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Sector.subSectors.findById() instead.
        "prototype$__findById__subSectors": {
          url: urlBase + "/Sectors/:id/subSectors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Sector.subSectors.destroyById() instead.
        "prototype$__destroyById__subSectors": {
          url: urlBase + "/Sectors/:id/subSectors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Sector.subSectors.updateById() instead.
        "prototype$__updateById__subSectors": {
          url: urlBase + "/Sectors/:id/subSectors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Sector.subSectors() instead.
        "prototype$__get__subSectors": {
          isArray: true,
          url: urlBase + "/Sectors/:id/subSectors",
          method: "GET"
        },

        // INTERNAL. Use Sector.subSectors.create() instead.
        "prototype$__create__subSectors": {
          url: urlBase + "/Sectors/:id/subSectors",
          method: "POST"
        },

        // INTERNAL. Use Sector.subSectors.destroyAll() instead.
        "prototype$__delete__subSectors": {
          url: urlBase + "/Sectors/:id/subSectors",
          method: "DELETE"
        },

        // INTERNAL. Use Sector.subSectors.count() instead.
        "prototype$__count__subSectors": {
          url: urlBase + "/Sectors/:id/subSectors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sector#create
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Sectors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sector#upsert
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Sectors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sector#exists
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Sectors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sector#findById
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Sectors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sector#find
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Sectors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sector#findOne
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Sectors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sector#updateAll
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Sectors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sector#deleteById
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Sectors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sector#count
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Sectors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Sector#prototype$updateAttributes
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Sectors/:id",
          method: "PUT"
        },

        // INTERNAL. Use RegionalData.sectors.findById() instead.
        "::findById::RegionalData::sectors": {
          url: urlBase + "/RegionalData/:id/sectors/:fk",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.sectors.destroyById() instead.
        "::destroyById::RegionalData::sectors": {
          url: urlBase + "/RegionalData/:id/sectors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.sectors.updateById() instead.
        "::updateById::RegionalData::sectors": {
          url: urlBase + "/RegionalData/:id/sectors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RegionalData.sectors() instead.
        "::get::RegionalData::sectors": {
          isArray: true,
          url: urlBase + "/RegionalData/:id/sectors",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.sectors.create() instead.
        "::create::RegionalData::sectors": {
          url: urlBase + "/RegionalData/:id/sectors",
          method: "POST"
        },

        // INTERNAL. Use RegionalData.sectors.destroyAll() instead.
        "::delete::RegionalData::sectors": {
          url: urlBase + "/RegionalData/:id/sectors",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.sectors.count() instead.
        "::count::RegionalData::sectors": {
          url: urlBase + "/RegionalData/:id/sectors/count",
          method: "GET"
        },

        // INTERNAL. Use SubSector.sector() instead.
        "::get::SubSector::sector": {
          url: urlBase + "/SubSectors/:id/sector",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Sector#updateOrCreate
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Sector#update
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Sector#destroyById
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Sector#removeById
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Sector#modelName
    * @propertyOf lbServices.Sector
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Sector`.
    */
    R.modelName = "Sector";

    /**
     * @ngdoc object
     * @name lbServices.Sector.subSectors
     * @header lbServices.Sector.subSectors
     * @object
     * @description
     *
     * The object `Sector.subSectors` groups methods
     * manipulating `SubSector` instances related to `Sector`.
     *
     * Call {@link lbServices.Sector#subSectors Sector.subSectors()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Sector#subSectors
         * @methodOf lbServices.Sector
         *
         * @description
         *
         * Queries subSectors of Sector.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        R.subSectors = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::get::Sector::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Sector.subSectors#count
         * @methodOf lbServices.Sector.subSectors
         *
         * @description
         *
         * Counts subSectors of Sector.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.subSectors.count = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::count::Sector::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Sector.subSectors#create
         * @methodOf lbServices.Sector.subSectors
         *
         * @description
         *
         * Creates a new instance in subSectors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        R.subSectors.create = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::create::Sector::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Sector.subSectors#destroyAll
         * @methodOf lbServices.Sector.subSectors
         *
         * @description
         *
         * Deletes all subSectors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.subSectors.destroyAll = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::delete::Sector::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Sector.subSectors#destroyById
         * @methodOf lbServices.Sector.subSectors
         *
         * @description
         *
         * Delete a related item by id for subSectors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subSectors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.subSectors.destroyById = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::destroyById::Sector::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Sector.subSectors#findById
         * @methodOf lbServices.Sector.subSectors
         *
         * @description
         *
         * Find a related item by id for subSectors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subSectors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        R.subSectors.findById = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::findById::Sector::subSectors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Sector.subSectors#updateById
         * @methodOf lbServices.Sector.subSectors
         *
         * @description
         *
         * Update a related item by id for subSectors
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subSectors
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        R.subSectors.updateById = function() {
          var TargetResource = $injector.get("SubSector");
          var action = TargetResource["::updateById::Sector::subSectors"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.SubSector
 * @header lbServices.SubSector
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SubSector` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SubSector",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SubSectors/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use SubSector.sector() instead.
        "prototype$__get__sector": {
          url: urlBase + "/SubSectors/:id/sector",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubSector#create
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SubSectors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubSector#upsert
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SubSectors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubSector#exists
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SubSectors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubSector#findById
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SubSectors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubSector#find
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SubSectors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubSector#findOne
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SubSectors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubSector#updateAll
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/SubSectors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubSector#deleteById
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/SubSectors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubSector#count
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SubSectors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SubSector#prototype$updateAttributes
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SubSectors/:id",
          method: "PUT"
        },

        // INTERNAL. Use RegionalData.subSectors.findById() instead.
        "::findById::RegionalData::subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors/:fk",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.subSectors.destroyById() instead.
        "::destroyById::RegionalData::subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.subSectors.updateById() instead.
        "::updateById::RegionalData::subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RegionalData.subSectors() instead.
        "::get::RegionalData::subSectors": {
          isArray: true,
          url: urlBase + "/RegionalData/:id/subSectors",
          method: "GET"
        },

        // INTERNAL. Use RegionalData.subSectors.create() instead.
        "::create::RegionalData::subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors",
          method: "POST"
        },

        // INTERNAL. Use RegionalData.subSectors.destroyAll() instead.
        "::delete::RegionalData::subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors",
          method: "DELETE"
        },

        // INTERNAL. Use RegionalData.subSectors.count() instead.
        "::count::RegionalData::subSectors": {
          url: urlBase + "/RegionalData/:id/subSectors/count",
          method: "GET"
        },

        // INTERNAL. Use Sector.subSectors.findById() instead.
        "::findById::Sector::subSectors": {
          url: urlBase + "/Sectors/:id/subSectors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Sector.subSectors.destroyById() instead.
        "::destroyById::Sector::subSectors": {
          url: urlBase + "/Sectors/:id/subSectors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Sector.subSectors.updateById() instead.
        "::updateById::Sector::subSectors": {
          url: urlBase + "/Sectors/:id/subSectors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Sector.subSectors() instead.
        "::get::Sector::subSectors": {
          isArray: true,
          url: urlBase + "/Sectors/:id/subSectors",
          method: "GET"
        },

        // INTERNAL. Use Sector.subSectors.create() instead.
        "::create::Sector::subSectors": {
          url: urlBase + "/Sectors/:id/subSectors",
          method: "POST"
        },

        // INTERNAL. Use Sector.subSectors.destroyAll() instead.
        "::delete::Sector::subSectors": {
          url: urlBase + "/Sectors/:id/subSectors",
          method: "DELETE"
        },

        // INTERNAL. Use Sector.subSectors.count() instead.
        "::count::Sector::subSectors": {
          url: urlBase + "/Sectors/:id/subSectors/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.SubSector#updateOrCreate
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SubSector` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SubSector#update
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.SubSector#destroyById
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SubSector#removeById
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.SubSector#modelName
    * @propertyOf lbServices.SubSector
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SubSector`.
    */
    R.modelName = "SubSector";


        /**
         * @ngdoc method
         * @name lbServices.SubSector#sector
         * @methodOf lbServices.SubSector
         *
         * @description
         *
         * Fetches belongsTo relation sector
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sector` object.)
         * </em>
         */
        R.sector = function() {
          var TargetResource = $injector.get("Sector");
          var action = TargetResource["::get::SubSector::sector"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
