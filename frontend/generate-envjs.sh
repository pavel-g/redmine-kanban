#!/bin/sh

FILE=$1

echo "window.__env__ = {};" > $FILE

if [ -f .env ]
then
  for line in $(cat .env | grep -E "^REDMINE_KANBAN_FRONTEND_")
  do
    echo $line | awk '{split($0,a,"="); gsub("\"", "\\\"", a[2]); printf "window.__env__.%s = \"%s\";\n", a[1], a[2]}' >> $FILE
  done
fi

for line in $(env | grep -E "^REDMINE_KANBAN_FRONTEND_")
do
  echo $line | awk '{split($0,a,"="); gsub("\"", "\\\"", a[2]); printf "window.__env__.%s = \"%s\";\n", a[1], a[2]}' >> $FILE
done
