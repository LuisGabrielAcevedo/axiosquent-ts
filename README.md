# axiosquent-ts

Libreria de Javascript/Typescript basada en axios para hacer consultas en api. Permite recuperar, actualizar y eliminar objectos a través de una sintaxis clara y facil de utilizar.

## Instalación 
```javascript
npm install axiosquent-ts --save
```
## Uso
Crear una clase base que extienda de Model de axiosquent-ts.
```javascript
import { Model, AxiosquentHeaders } from "axiosquent-ts";

export class Base extends Model {
    baseUrl(): string {
        return 'http://localhost:3500/';
    }

    headers(): AxiosquentHeaders {
        const headers: AxiosquentHeaders = {};
        headers['Authorization'] = 'token';
        return headers;
    }
}
```
Crear modelos a partir de la clase base.
```javascript
export class User extends Base {
    resource = 'users';
}
```
De esta forma y utilizando promesas tenemos disponibles los siguientes metodos estáticos para consultas:
```javascript
User
.setUrl('new url', 'force')
.header('pin_code', '123456')
.where('country_id', '1')
.orWhere(['name', 'profile.first_name', 'profile.last_name'], 'Luis')
.option('rules', 'true')
.with(['profile', 'roles', 'settings'])
.orderBy('created_at', 'desc')
.find(1)
.all(1, 20)
```

