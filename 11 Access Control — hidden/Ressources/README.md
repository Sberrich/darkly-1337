We accessed that file from `http://$IP/.hidden/` by disclosed `robots.txt` file.

And we found a list of directories and a README file, and each directory has recursively other subdirectories and you got the README file in each directory.

So after open some README file manually we realized that there is a lot of sentences repeated in many files,
so we made a script with Node.js that help us to fetch all files and get just the unique sentences.

---

> How to secure:
>
> -  Make sure to delete all files not useful, or hide it for public.
