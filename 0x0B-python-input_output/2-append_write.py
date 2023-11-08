#!/usr/bin/python3
"""Defines a file-appending function,"""


def append_write(filename="", text=""):
    """Appends string to end of a UTF8 text file,

    Arguments:
        filename (str): name of file to append to,
        text (str): string to append to file,
    Returns:
        no. of chars to be appended,
    """
    with open(filename, "a", encoding="utf-8") as f:
        return f.write(text)
