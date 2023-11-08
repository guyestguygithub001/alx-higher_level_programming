#!/usr/bin/python3
"""Defines a file-writing function,"""


def write_file(filename="", text=""):
    """Write a string to a UTF8 text file,

    Arguments:
        filename (str): name of file to write,
        text (str): text to write to file,
    Returns:
        no. of chars given,
    """
    with open(filename, "w", encoding="utf-8") as f:
        return f.write(text)
