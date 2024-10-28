/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s4x1acexxx2g02e")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s4x1acexxx2g02e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lafjgxh5",
    "name": "password",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 4,
      "max": 10,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
