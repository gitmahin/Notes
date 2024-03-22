# How to get client IP Address using JS

I showed you 4 methods to show client IP Address using JS.

### You can run these methods on my Repl [https://replit.com/@nimahin25]

Just fork my REPL and run the code 😃

## ▶ In Method - 03

The regular expression `/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/` is used to match IP addresses in a string. Here's what each part of the expression means:

1. `[0-9]`: Matches any digit from 0 to 9.

2. `{1,3}`: Specifies that the preceding pattern (i.e., `[0-9]`) should occur between 1 and 3 times.
3. \.: Matches a literal period (dot). Since the dot has special meaning in regular expressions, it needs to be escaped with a backslash (\) to match a literal dot.
4. So, `[0-9]{1,3}\.` will match 1 to 3 digits followed by a dot.
5. The expression is repeated three times to match three groups of 1 to 3 digits separated by dots.
6. Finally, the regex matches the last group of 1 to 3 digits without requiring a trailing dot.
Overall, this regular expression will match **IPv4 addresses** in the format "xxx.xxx.xxx.xxx", where each "xxx" can be any number from 0 to 255.