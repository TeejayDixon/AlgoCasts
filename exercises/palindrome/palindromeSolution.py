

def isPalindrome(string):
  example = "".join(reversed(string))

  if string is example:
       return False
  else: 
    return True


string_one = "abba"
string_two = "abcdefg"
answer = isPalindrome(string_two)

if (answer == answer):
  print("True")
else:
  print("False")


