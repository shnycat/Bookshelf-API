#!/usr/bin/env bash

url_='http://localhost:5000'
tmp_=$PREFIX/tmp/response.json

function main() {
  {
    case "$1" in
      --add)
        curl -s -X POST "$url_/books"            \
          -H "Content-Type: application/json" \
          -d "@data.json"
        ;;
      --all)
        curl -s -X GET "$url_/books"
        ;;
      --id)
        curl -s -X GET "$url_/books/$2"
        ;;
      --edit)
        curl -s -X PUT "$url_/books/$2"          \
          -H "Content-Type: application/json" \
          -d "@book.json"
        ;;
      --del)
        curl -s -X DELETE "$url_/books/$2"
        ;;
    esac
  } | jq
} 

main $1 $2
