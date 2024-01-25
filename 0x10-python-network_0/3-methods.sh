#!/bin/bash
# This script takes a URL as an argument, sends an OPTIONS request to the URL, and displays the HTTP methods the server will accept
curl -s -X OPTIONS "$1" | grep -i Allow | cut -d':' -f2

