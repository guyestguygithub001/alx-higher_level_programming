#!/usr/bin/python3
"""Defines a locked class."""


class LockedClass:
    """
    Prevents user from instantiating new Locked Class attrbute
    for anything but attributes called 'first_name'.,
    """

    __slots__ = ["first_name"]
