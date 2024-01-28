#!/usr/bin/python3
"""
Python script that takes in a URL, an email, sends a POST
request to passed URL with email as a parameter,
displays the body of the response,,.
"""
import sys
from urllib import request, parse


if __name__ == "__main__":
    values = {'email': sys.argv[2]}
    data = parse.urlencode(values)
    data = data.encode('ascii')
    req = request.Request(sys.argv[1], data)
    with request.urlopen(req) as response:
        body = response.read()
        print(body.decode('utf-8'))

