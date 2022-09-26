# COMPARATOR APP

## SERVER ----------------------------------------------------------------

| PATH              | METHOD    	      | RESPONSE                     | ACTION                               |
| ----------------- |:-------------------:| ----------------------------:| ------------------------------------:|
| /api              | GET                 | homepage                     | Página de inicio                     |
| /api/seller       | GET                 | Data                         | Mandar la data al front              |
| /api/auth         | POST                | created                      | Crear usuarios                       |
| /api/auth         | GET                 | Data                         | Manda todos los usuarios             |
| /api/auth/:id     | PUT                 | User New Data                | Actualiza info usuario id            |
| /api/auth/:id     | DELETE              | Deleted                      | Elimina usuario id                   |

## COMPARATOR MODEL
 
| Property 	     | Data type      	| 
|----------------|------------------|
| nombre         | String           | 
| nombre_href    | String           | 
| precio         | String           | 
| pais           | String           | 
| autoridad      | Number           | 
| dominiosDeRef  | Number           | 
| trafico        | Number           | 

## USER MODEL
 
| Property 	          | Data type        | 
|---------------------|------------------|
| email               | String           | 
| password            | String           | 
| role                | String           | 
| speciality          | String           | 
| yearsOfExperience   | String           | 
| name                | String           | 
| lastName            | String           | 
| linkedin            | String           | 
| avatar              | String           | 


