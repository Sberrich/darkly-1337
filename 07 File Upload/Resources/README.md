In the upload file page, we check to upload some images to test and we realized that the uplaod accept just jpg/jpeg files.

And we create a php file to test and we change his content type to image/jpeg. and send a upload request with curl:

```
touch test.php && curl -X POST -H "Content-Type: multipart/form-data" --form "Upload=Upload" --form "uploaded=@test.php;type=image/jpeg" "http://$IP/?page=upload"
```

After running this command we got a new flag in the response.

---

> How to secure:
>
> -  Check the image if a valid image not just the content type or extention.
