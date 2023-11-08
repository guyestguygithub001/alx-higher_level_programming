#!/usr/bin/python3
# 6-from_json_string.py
"""Defines a JSON-to-obj. function,"""
import json


def from_json_string(my_str):
    """Returns Python object rep of a JSON string,"""
    return json.loads(my_str)
