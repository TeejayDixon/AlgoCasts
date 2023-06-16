fruit = "abba"
palin = "abcdefg"

def reverse(string):
  string = "".join(reversed(string))

  if string is not reversed(string):
    return False
  else: 
    return True



print(reverse(fruit))