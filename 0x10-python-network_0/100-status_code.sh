#!/bin/bash
# Script that sends request to URL passed as argument, displays only status code of expected response
curl -so /dev/null -w "%{http_code}" "$1"
