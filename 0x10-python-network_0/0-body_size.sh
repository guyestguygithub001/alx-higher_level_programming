#!/bin/bash
# This script takes a URL as an argument, sends a request to that URL, and displays the size of the body of the response in bytes
curl -sI "$1" | grep "Content-Length:" | cut -d " " -f 2

