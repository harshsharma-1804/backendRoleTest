Backend
The backend is written in oeganuzed way where API Endpoints are written in 'data.controller.js' and the Schema is written in 'data.model.js'.
Controller.js contains CRUD operations like CreateSample, DeleteSample, GetAllSample, GetSample.
Model.js contains dataSchema which contains price as type number and volume as type object defined in another schema as volumeSchema.
Routes are handled in separate Route folder.
Database is connected with code written in db folder inside index.js file.
Database connection in established in index.js file in src folder.
.env contains PORT, CORS policy and MONGODB_URI which are not uploaded on github.
