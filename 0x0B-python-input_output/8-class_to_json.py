#!/usr/bin/python3
"""Defines a Python class-to-JSON function."""


def class_to_json(obj):
    """Return dictionary represntation of a simple datastructure,"""
    return obj.__dict__

