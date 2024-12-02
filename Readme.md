1. Call http://localhost:3000/
2. Press "Login"

3. In routes.ts, the login() function is called or not

```ts
// When I don't use response, login() is not called
const response = await login({ data: 'blubb' })
// When I use response with console.log, login() is called
console.log(response)
```
