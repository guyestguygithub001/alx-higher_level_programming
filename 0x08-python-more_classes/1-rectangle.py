#!/usr/bin/python3
"""Define Rectangle class.."""


class Rectangle:
    """Represent rectangle.."""

    def __init__(self, width=0, height=0):
        """Initialize new Rectangle..

        Arguments:
            width (int): width of new rectangle..
            height (int): height of new rectangle..
        """
        self.width = width
        self.height = height

    @property
    def width(self):
        """Get/set width of rectangle.."""
        return self.__width

    @width.setter
    def width(self, value):
        if not isinstance(value, int):
            raise TypeError("width must be an int..")
        if value < 0:
            raise ValueError("width must be >= 0")
        self.__width = value

    @property
    def height(self):
        """Get/set height of rectangle.."""
        return self.__height

    @height.setter
    def height(self, value):
        if not isinstance(value, int):
            raise TypeError("height must be an int.")
        if value < 0:
            raise ValueError("height must be >= 0")
        self.__height = value
