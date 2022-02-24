The File Inclusion vulnerability allows an attacker to include a file, usually exploiting a “dynamic file inclusion” mechanisms implemented in the target application. The vulnerability occurs due to the use of user-supplied input without proper validation.

Oh home page send `../../../../../../../etc/passwd` as a `page` parameters.

---

> How to secure :
>
> - Create a whitelist of acceptable filenames.
