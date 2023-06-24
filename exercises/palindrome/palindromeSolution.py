

def isPalindrome(string):
  example = "".join(reversed(string))

  if string == example:
       return True
  else: 
    return False


string_one = "abba"
string_two = "abcdefg"
string_three = "refer"
string_four = "highlight"
string_five = "akjhhkjdfhdkfh"
string_six = "racecar"

print(isPalindrome(string_six))



