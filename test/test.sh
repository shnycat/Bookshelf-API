#!/usr/bin/bash

url_='http://localhost:5000'

function main() {
  case "$1" in
    --add)
      curl -X POST                          \
        -H "Content-Type: application/json" \
        -d "@data.json"                     \
        "$url_/books"
      ;;
    --all)
      curl -X GET "$url_/books"
      ;;
    --id)
      curl -X GET "$url_/books/$2"
      ;;
  esac 
} 

main $1 $2
