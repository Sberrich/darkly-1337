We did not find a sql injection possibility on the page `http://{IP}/?page=signin`

That's why we try to bruteforce the signin page.

We attacked the login page with a bruteforce script: `bruteForce.sh` that take a list of must used passwords.

We can found lists of password used in: <https://github.com/duyet/bruteforce-database>

---

> How to secure:
>
> -  Request from your users to use hard passwords.
> -  Implement limitation on the number of request possible by an ip and block it.
