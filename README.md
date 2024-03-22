Backend

-> The backend is written in organized way where API Endpoints are written in 'data.controller.js' and the Schema is written in 'data.model.js'.

-> Controller.js contains CRUD operations like CreateSample, DeleteSample, GetAllSample, GetSample.

-> Model.js contains dataSchema which contains price as type number and volume as type object defined in another schema as volumeSchema.

-> Routes are handled in separate Route folder.

-> Database is connected with code written in index.js in db folder inside src.

-> Database connection in established in index.js file in src folder.

-> .env contains PORT, CORS policy and MONGODB_URI which are not uploaded on github.


Frontend

-> The frontend is written in organized and for time saving the data is fetched directly in the components rather than using Redux and createasyncthunk for handling backend integration.

-> createdata.jsx manages to handle form for creating data on backend.

-> dispdata.jsc manages to show data from fething it from the API endpoint defined in backend and mapping all the data to dispdatapage.jsx.

-> app.jsx contains outlets for hndling multipage website.

-> main.jsx contains display handling of pages.
