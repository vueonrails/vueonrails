# Legacy

If you are using Rails older than 4.2, you cannot use webpacker in your project. Simply use assets pipeline with vuejs.

# Some Solution for assets pipeline

### Sprockets::FileNotFound: couldn't find file 'vue-validator'

```
Sprockets::FileNotFound: couldn't find file 'vue-validator' with type 'application/javascript'
```

vue-validator has been changed to vue-validator2
and vue-validator3. Use `//= require vue-validator2` or `//= require vue-validator3` instead.

### Sprockets::FileNotFound: couldn't find file 'vuex'

vuex has been updated to vuex2. Therefore use `//= require vuex2` to resolve the error `Sprockets::FileNotFound: couldn't find file 'vuex'`.

### You are running Vue in development mode.

```
  You are running Vue in development mode.
  Make sure to turn on production mode when deploying for production.
  See more tips at https://vuejs.org/guide/deployment.html
```

Try to use `//= require vue2.min` to remove the warning statement from console.


## Requirement

- Rails 
- Webpacker 
- Vue 
- Node
- Webpack