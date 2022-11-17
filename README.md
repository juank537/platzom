# Platzom

Platzo es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online

## Descripción del idioma

Reglas:
- Si la palabra termina en ar, se le quitan las 2 letras.
- Si la palabra inicia con z, se le añade pe al final.
- Si la palabra traducia tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio.
- Por último, si la palabra originale es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando mayúsculas y minúsculas.

## Instalación

```

npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") // Program
platzom('Zorro') //Zorrope
platzom('Zarpar') //Zarppe
platzom('abecedario')//abece-dario
platzom('sometemos') //SoMeTeMoS
```

## Créditos
- [Juan Carlos Aliaga] (https://www.twitter.com/juank537)


## Licencia 

[MIT](https://opensource.org/licenses/MIT)