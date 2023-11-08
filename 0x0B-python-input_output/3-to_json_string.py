#!/usr/bin/python3
"""Defines a string-to-JSON func`,"""
import json


def to_json_string(my_obj):
    """Return JSON rep of string obj,"""
    return json.dumps(my_obj)

