def maxChar(string):
  
  char_feq = {}
  
  for i in string:
    if i in char_feq:
      char_feq[i] = char_feq[i] + 1
    else: 
      char_feq[i] = 1
      
  result = max(char_feq, key = char_feq.get)
  
  return(result)


print(maxChar("woahhhhhhh"))