# anti-pe.js

[![NPM version](https://img.shields.io/npm/v/anti-pe.js.svg?style=flat)](https://www.npmjs.com/package/anti-pe.js)
[![NPM downloads](https://img.shields.io/npm/dm/anti-pe.js.svg?style=flat)](https://www.npmjs.com/package/anti-pe.js)

Заменяет в исходном тексте все латинские символы на их кириллические (внешне похожие) аналоги.

## Зачем?

Функцию полезно использовать в элементах `<input>` вместо `pattern="[а-яёА-ЯЁ]+"` или `pattern="[^a-zA-Z]+"`. Потому что `pattern` не объясняет что не так, он лишь информирует, что использован неверный формат.

Особенно важно применять функцию для тех строковых данных, по которым в последующем предполагается осуществлять полнотекстовый поиск средствами БД, а источник исходных данных неблагонадёжный, например — наименование организации, скопированное из карточки предприятия.

Посмотреть [демонстрацию](https://spearance.github.io/anti-pe.js/)

## Установка

```
npm install anti-pe.js
```

## Таблица совпадающих символов

|English|Русский|
|:-----:|:-----:|
|   A   | А |
| a | а |
| E | Е |
| e | е |
| T | Т |
| y | у |
| O | О |
| o | о |
| P | Р |
| p | р |
| H | Н |
| K | К |
| X | Х |
| x | х |
| C | С |
| c | с |
| B | В |
| M | М |
