#!/bin/bash
# This script takes a URL as an argument, sends an OPTIONS request to the URL, and displays the HTTP methods the server will accepts
curl -sI -X OPTIONS "$1" | grep "Allow:" | cut -d " " -f 2-

