chunk_size = 7
my_list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

def split(list_a, chunk_size):

  for i in range(0, len(list_a), chunk_size):
    yield list_a[i:i + chunk_size]


print(list(split(my_list, chunk_size)))