#!/usr/bin/python3
'''Module for lookup method.'''


def lookup(obj):
    '''Looks up obj. attributes and methods,
    Args:
        obj (object): obj to list,

    Returns:
        list: list of attr,
    '''
    return dir(obj)
