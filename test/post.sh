#!/usr/bin/bash
curl -X POST -H "Content-Type: application/json" -d "@data.json" 'http://localhost:5000/books' -i
