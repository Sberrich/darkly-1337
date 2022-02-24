On `http://$IP/?page=recover` we inspect the HTML Page and we found a form with POST method and a hidden input contains an email as a value

Sending a curl request through a terminal, We got the flag.

```
curl -d "Submit=Submit&mail=mesafi@student.1337.ma" -X POST "http://$IP/index.php?page=recover"
```

---

> How to secure :
>
> - Do not send on a hidden field the email for the account.
