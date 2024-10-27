# nested for loops: 1st goes n and 2nd goes n at some point
# O( n power 2), n being parameter or user input
def oddPyramids(n):
  for i in range(1, n + 1):
    for j in range(1, i + 1):
      print(2 * j - 1, end=" ")
    print()

def main():
  nb_of_rows = int(input("Enter number of rows: "))
  oddPyramids(nb_of_rows)

main()