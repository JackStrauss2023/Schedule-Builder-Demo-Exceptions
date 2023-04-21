let s = {
    "title":"GA Schedule",
    "type":"object",
    "properties": {
        "stringField": {
            "title":"Fields",
            "type":"string"
        },

      "scheduleDays": {
            "title":"Exceptions",
            "type":"array",
            "items": {
                "$ref":"#/definitions/objectField"
            }
        }
    },

   "definitions": {
        "objectField": {
            "type":"object",
            "properties": {
                "Day of the Rotation": {
                    "type":"integer",
                    "minimum": 1,
                    "maximum": 7  
                },   
               "date": {
                    "title":"Date",
                    "type":"string",
                    "ui": {
                "editor":"date"
            }
              },
            "radioField": {
            "title":"Type",
            "type":"string",
            "enum": [
                "No School","Switch Periods"
            ],
            "ui": {
                "editor":"radio"
            }
        }, 
              
          "selectField1": {
          "title":"1st period",
          "type":"string",
          "enum": [
              "A","B", "C", "D", "E", "F", "G", "H", "Community Time"
          ],
          "ui": {
              "editor":"select"
          }
        },
          "selectField2": {
          "title":"2nd period",
          "type":"string",
          "enum": [
              "A","B", "C", "D", "E", "F", "G", "H", "Community Time"
          ],
          "ui": {
              "editor":"select"
          }
        }
            },

            "required": [
              "name",
              "type"
            ]
    },
      "API": {
            "type":"object",
            "properties": {
                "name": {
                    "type":"string"
                },
                "type": {
                    "type":"string",
                    "enum": [
                        "CREATE",
                        "READ",
                        "UPDATE",
                        "DELETE"
                    ]
                },
                "allowedFields": {
                    "type":"array",
                    "items": {
                        "type":"string"
                    }
                }
            }
        }
   }
}

let v = {
    "stringField":"Input",

  "scheduleDays": [
      {
        "Day of the Rotation":"1",
        "date":"",
        "ratioField" : "",
        "selectField1" : "",
        "selectField2" : ""
            },
    ]
}

var myEditor = $("#jsonEditor").jsonEdit({
    "schema": s,
    "value": v,
    "afterValueChanged": function (newValue, newSchema) {
      $("#jsonValue").html(JSON.stringify(newValue, null, 2));
    },
    "afterWidgetCreated": function (newValue, newSchema) {
      $("#jsonValue").html(JSON.stringify(newValue, null, 2));
    },
    // expanding level
    // -1 = all levels
    expandingLevel: -1,

    // renders the first level as a container
    renderFirstLevel: 'false',

    // auto trims values
    autoTrimValues: 'true',

    // blank space
    indenting: 5,

    // captions when null
    radioNullCaption: 'null',
    selectNullCaption: '',

    // shows expand/collapse buttons
    treeExpandCollapseButton: 'true'  
});

// checks if is valid
myEditor.isValid();

// gets JSON schemas
myEditor.getSchema();

// gets values
let value = myEditor.getValue();

// sets values
myEditor.setValue(value);