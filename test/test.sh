#!/usr/bin/bash

url_='http://localhost:5000'

function main() {
  case "$1" in
    --add)
      curl -X POST "$url_/books"            \
        -H "Content-Type: application/json" \
        -d "@data.json"
        
      ;;
    --all)
      curl -X GET "$url_/books"
      ;;
    --id)
      curl -X GET "$url_/books/$2"
      ;;
    --edit)
      curl -X PUT "$url_/books/$2"          \
        -H "Content-Type: application/json" \
        -d "@book.json"
      ;;
    --del)
      curl -X DELETE "$url_/books/$2"
      ;;
  esac 
} 

main $1 $2
