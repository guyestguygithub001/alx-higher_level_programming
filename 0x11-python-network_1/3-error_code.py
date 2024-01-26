#!/usr/bin/python3
"""
Python script that takes in a URL, sends a request, displays
the value of the X-Request-Id variable found in header
(handling HTTP errors)./,
"""
import sys
from urllib import request, error


if __name__ == "__main__":
    try:
        with request.urlopen(sys.argv[1]) as response:
            body = response.read()
            print(body.decode('utf-8'))
    except error.HTTPError as err:
        print('Error code: {}'.format(err.code))

