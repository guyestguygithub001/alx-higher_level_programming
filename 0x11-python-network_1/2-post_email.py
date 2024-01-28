#!/usr/bin/python3
# This module takes in a URL and an email, 
# sends a POST request to the URL with the email as a parameter,
# displays the body of the response

import sys
import urllib.request
import urllib.parse


if __name__ == "__main__":
    values = {'email': sys.argv[2]}
    data = parse.urlencode(values)
    data = data.encode('ascii')
    req = request.Request(sys.argv[1], data)
    with request.urlopen(req) as response:
        body = response.read()
        print(body.decode('utf-8'))
