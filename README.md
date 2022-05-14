# 736-programacao-web-ii

## Expressões Regulares

### Exemplos
```
CEP: /^[0-9]{5}\-?[0-9]{3}$/ 
EMAIL: /^[a-zA-Z0-9\-\_\.]{1,}\@[A-z0-9]+\.[A-z]+(\.[A-z]{2})?$/ 
```

### Metacaracteres

```
^ Inicio da Linha
$ Fim da Linha
[] Lista Permitida
[i-f] Lista Permitida (Intervalo)
{n} Quantificador
{min,max} Quantificador (Intervalo)
\c Escape (Caracteres Especiais)
? Opcional
+ Repetidor
() Grupos / Agrupador
. Coringa (Qualquer coisa)

\d Qualquer dígito
\D Tudo que não é digito
\w Caracteres Alfanuméricos
\s Espaço
```
