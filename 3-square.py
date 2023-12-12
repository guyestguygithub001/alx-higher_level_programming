#!/usr/bin/python3
"""Defines class Square.."""

class Square:
    """Represents square.."""

    def __init__(self, size=0):
        """Initializes new square..
        Arguments:
            size (int): Size of new square..
        """
        if not isinstance(size, int):
            raise TypeError("size must be an int..")
        elif size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size

    def area(self):
        """Return current area of square.."""
        return (self.__size * self.__size)
