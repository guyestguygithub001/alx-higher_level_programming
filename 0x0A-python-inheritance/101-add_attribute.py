#!/usr/bin/python3
"""Defines a funct. that adds attr. to objects,"""


def add_attribute(obj, att, value):
    """Add a attribute to object if possible,
    Arguments:
        obj (any): object to add an attr, to,
        att (str): name of attr, to add to obj,
        value (any): value of attr,
    Raises:
        TypeError: If attr. can't be added,
    """
    if not hasattr(obj, "__dict__"):
        raise TypeError("cannot add new attribute,")
    setattr(obj, att, value)
