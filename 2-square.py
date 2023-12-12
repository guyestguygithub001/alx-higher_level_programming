#!/usr/bin/python3
"""Define class Square."""


class Square:
    """Represents a square."""

    def __init__(self, size=0):
        """Initializes a new Square..
        Arguments:
            size (int): Size of new square..
        """
        if not isinstance(size, int):
            raise TypeError("size must be an int..")
        elif size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size

