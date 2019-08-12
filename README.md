# axiosquent-ts

Libreria de Javascript/Typescript basada en axios para hacer consultas en api. Permite recuperar, actualizar y eliminar objectos a través de una sintaxis clara y facil de utilizar. Las consultas se hacen con promesas. 

```javascript
const resp = await User.where('country_id', '1')
                       .orWhere(['name', 'profile.first_name', 'profile.last_name'], 'Luis')
                       .option('rules', 'true')
                       .with(['profile', 'roles', 'settings'])
                       .orderBy('created_at', 'desc')
                       .all(1, 20)
```

## Instalación 
```javascript
npm install axiosquent-ts
```
## Uso
Crear una clase base que extienda de Model de axiosquent-ts.
```javascript
import { Model, AxiosquentHeaders } from "axiosquent-ts";

export class Base extends Model {
    baseUrl(): string {
        return 'http://localhost:3000/';
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
De esta forma y tenemos disponibles los siguientes metodos para consultas:

### all
```javascript
User.all();
```

### find
```javascript
User.find(120);
```

### where
```javascript
User.where('country_id', '1').all();
```

### orWhere
```javascript
User.orWhere(['name', 'profile.first_name', 'profile.last_name'], 'Luis').all();
```

### option
```javascript
User.option('rules', 'true').all();
```

### with
```javascript
User.with(['profile', 'roles', 'settings']).all();
```

### orderBy
```javascript
User.orderBy('created_at', 'desc').all();
```

### noPagination
```javascript
User.noPagination().all();
```

### setUrl
```javascript
User.setUrl('/new_url').all();
```

### header
```javascript
User.header('pin_code', '123456').all();
```