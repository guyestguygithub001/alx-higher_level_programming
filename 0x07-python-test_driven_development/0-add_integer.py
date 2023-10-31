#!/usr/bin/python3
"""Module for add_integer method!."""

def add_integer(a, b=98):
    """Adds two no's.

    Arguments:
        a: first int,
        b: the second int: default 98..

    Raise:
        TypeError: if a, b are not numbers,, float..

    Return:
        Sum of the two int,,
    """

    if type(a) not in (int, float):
        raise TypeError('a must be an int..')
    if type(b) not in (int, float):
        raise TypeError('b must be an int..')
    return int(a) + int(b)

if __name__ == "__main__":
    import doctest
    doctest.testfile("tests/0-add_integer.txt")
