#!/usr/bin/python3
# This module takes in a URL and an email, 
# sends a POST request to the URL with the email as a parameter,
# displays the body of the response

import sys
import urllib.request
import urllib.parse

if __name__ == "__main__":
    # Check if the script receives a URL and an email as arguments
    if len(sys.argv) == 3:
        url = sys.argv[1]
        email = sys.argv[2]
        # Encode the email as a query parameter
        data = urllib.parse.urlencode({"email": email})
        # Convert the data to bytes
        data = data.encode("utf-8")
        # Send a POST request to the URL with the data
        with urllib.request.urlopen(url, data) as response:
            # Decode and print the response body
            print(response.read().decode("utf-8"))

