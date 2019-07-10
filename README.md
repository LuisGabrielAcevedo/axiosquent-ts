# Libreria axiosquent-ts

Libreria de Javascript/Typescript para hacer consultas en api basada en axios. Permite recuperar actualizar y eliminar objectos a traves de una sintaxis clara y facil de utilizar.

## Instalación 
```
npm install axiosquent-ts --save
```
## Uso
Crear una clase base que extienda de Model de axiosquent-ts.
```
import { Model } from 'axiosquent-ts';

export class Base extends Model {
    getBaseUrl() {
        return 'http://localhost:3500/api/v1';
    }

    getHeaders() {
        return {
            Authorization: 'token'
        };
    }
}
```
Crear modelos a partir de la clase base.
```
export default class User extends Base {
    resource = 'users';
}
```
De esta forma utilizando promesas tenemos disponibles los siguientes metodos estaticos para consultas:
```
User.
.setUrl('new url', 'force')
.header('pin_code', '123456')
.where('country_id', '1')
.orWhere(['name', 'profile.first_name', 'profile.last_name'], 'Luis')
.option('rules', 'true')
.with(['profile, roles', 'settings'])
.orderBy('created_at', 'desc')
.all(1, 20);
```

