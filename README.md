# Angular4 - Codemirror component
[![npm version](https://badge.fury.io/js/%40ng4%2Fcodemirror.svg)](https://www.npmjs.com/package/@ng4/codemirror)
### Установка
`npm install @ng4/codemirror --save`

### Зависимости
```json
{
  "codemirror": "^5.22.2",
  "@angular/common": "^4.0.0",
  "@angular/compiler": "^4.0.0",
  "@angular/core": "^4.0.0",
  "@angular/forms": "^4.0.0"
}
```

### Пример
```typescript
import {CodemirrorModule} from '@ng4/codemirror';

@NgModule({
  imports:      [
    CodemirrorModule.forRoot()
  ]
})
export class AppModule { }
```

```typescript
import {Component} from 'angular2/core';

@Component({
  selector: 'sample',
  template: `
    <codemirror [(ngModel)]="code" 
        [config]="{lineNumbers: true}"
        (focus)="onFocus()"
        (blur)="onBlur()">
    </codemirror>
  `
})
export class Sample{
  constructor(){
    this.code = `// Некоторый код...`;
  }
}
```

### Конфигурация
`config`: Объект конфигурации для <a href="http://codemirror.net/doc/manual.html#config">CodeMirror</a>

MIT License
