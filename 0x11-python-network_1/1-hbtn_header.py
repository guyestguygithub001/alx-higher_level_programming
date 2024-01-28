#!/usr/bin/python3
# This module takes in a URL, sends a request to the URL and displays the value of the X-Request-Id variable in the response header

import sys
import urllib.request

if __name__ == "__main__":
    # Check if the script receives a URL as an argument
    if len(sys.argv) == 2:
        url = sys.argv[1]
        # Send a request to the URL and store the response object
        with urllib.request.urlopen(url) as response:
            # Get the value of the X-Request-Id variable from the response header using the get method
            request_id = response.getheader("X-Request-Id")
            # Print the value of the request ID
            print(request_id)

