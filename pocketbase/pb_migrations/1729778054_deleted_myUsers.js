/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("s4x1acexxx2g02e");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "s4x1acexxx2g02e",
    "created": "2024-10-24 13:45:36.705Z",
    "updated": "2024-10-24 13:49:44.367Z",
    "name": "myUsers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zhe70lak",
        "name": "email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "lafjgxh5",
        "name": "password",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 4,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ly6nktbf",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tofngbup",
        "name": "surname",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
