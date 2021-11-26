The goal is to populate given template with given user data. Template contains placeholders, each in the format <key>, key contains only letters. User data are key-value pairs. Matching is case sensitive. The input contains no dangling < or >. If the template placeholder contains an unprovided key, remove that placeholder from the template. A key may be unused or used more than once.
Entrée
Line 1: An integer n for the number of key-value pairs with the user data.
Next n lines: A key-value pair separated by space (key cannot contain spaces, but value can), e.g.

name John Smith

.
Next line: template to be populated.
Sortie
Line 1: Template populated with the user data.
Contraintes
1 <= n <= 20
key-value pair does not contain placeholder separator characters <, >, key contains only letters (no spaces)
Exemple
Entrée

1
user jsmith123
'<user>' logged in.

Sortie

'jsmith123' logged in.



n = int(input())
d={}
for i in range(n):
    arr = input().split()
    key = "<" + arr[0] + ">"
    val = " ".join(arr[1:])
    d[key] = val

template = input()

for key, val in d.items():
    if key in template:
        template = template.replace(key, val)

for word in template.split():
    x = re.search("<.*?>", word)
    if x:
        template = template.replace(x[0], "")

print(template)