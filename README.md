# 컴포넌트 템플릿 프로젝트 -앵귤러 6.1~ 버전으로 작업. ( 향후 앵귤러 7.0 으로 변환 예정. )This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4. -브라우저는 크롬위주로 작업. ( IE 환경은 완전히 배제하고 작업. )  -css는 전처리기 중 하나인 scss 를 적극 수용.  ```ng new 프로젝트명 --style=scss``` or   angular.json에 아래와 같은 코드삽입하면 사스를 사용 할 수 있다.   ```  "schematics": {    "@schematics/angular:component":{        "styleext":"scss"    }  }  ```                            ##빌드  *간단하게  command 에서  ```ng serve --open```