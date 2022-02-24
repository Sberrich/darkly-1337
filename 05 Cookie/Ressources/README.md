Whith a cookie inspector, it is possible to see that a cookie is set by the website:

```
I_am_admin=68934a3e9455fa72420237eb05902327
```

It's a md5 hash which digest is 'false'.

With the cookie editor we change it to 'true' **`b326b5062b2f0e69046810717534cb09`**
After refresh, an alert pops the flag.

---

> How to secure:
>
> - Do not put critical information in cookies, or crypt it very well.
