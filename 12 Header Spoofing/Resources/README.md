On `http://$IP/?page=e43ad1fdc54babe674da7c7b8f0127bde61de3fbe01def7d00f151c2fcca6d1c`, While inspecting the page we can find two critical informations in the comments:

```
<!--
You must cumming from : "https://www.nsa.gov/" to go to the next step
-->
```

```
<!--
Let's use this browser : "ft_bornToSec". It will help you a lot.
-->
```

We determine that we need to change the header of the http request with referer and user agent.

```
curl --referer 'https://www.nsa.gov/' --user-agent 'ft_bornToSec' "http://$IP/?page=e43ad1fdc54babe674da7c7b8f0127bde61de3fbe01def7d00f151c2fcca6d1c"
```
