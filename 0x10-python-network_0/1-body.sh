#!/bin/bash
# This script takes a URL as an argument, sends a GET request to the URL, and displays the body of the response if the status code is 200
curl -Ls "$1"

