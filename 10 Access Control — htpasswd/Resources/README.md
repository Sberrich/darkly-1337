We found `http://$IP/whatever/htpasswd` by disclosed `robots.txt` file.

After we dawnload the htpasswd file, we found a user:pwd as `root:8621ffdbc5698829397d97767ac13db3`

We decode the password with the md5 hash and we get 'dragon'

We used the credentions to login in `http://$IP/admin`, we got the flag.

---

> How to secure:
>
> -  Make sure to delete all files not useful, or hide it for public.
