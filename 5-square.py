#!/usr/bin/python3
"""Define class Square."""


class Square:
    """Represents square.."""

    def __init__(self, size):
        """Initializes new square..
        Arguments:
            size (int): Size of new square..
        """
        self.size = size

    @property
    def size(self):
        """Get/set the current size of the square.."""
        return (self.__size)

    @size.setter
    def size(self, value):
        if not isinstance(value, int):
            raise TypeError("size must be an int.")
        elif value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """Return current area of square."""
        return (self.__size * self.__size)

    def my_print(self):
        """Print square with # char.."""
        for i in range(0, self.__size):
            [print("#", end="") for j in range(self.__size)]
            print("")
        if self.__size == 0:
            print("")
