## Setup
Install node

```bash
npm run i && npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Log in using 

u: `mor_2314`

p: `83r5^_`

For tests

```bash
npm run test
```


## Decisions

- [next-auth](https://next-auth.js.org) - for login authentication
- [redux-toolkit](https://redux-toolkit.js.org/) - for data management/caching
- [react-hooks-form](https://react-hook-form.com/) - for form management and validation

## Things to change

The [fakestoreAPI](https://fakestoreapi.com) accepts `https://fakestoreapi.com/products/category/women's clothing` as a valid call?! So I ended up with this in the URL which is then malformed.

