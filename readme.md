## Start application
run client dev server from /client directory ```npm start```

run server from /server directory ```npm start```

## UI
https://www.figma.com/file/C8doDUlhtFgwfUpQyelAsW/Web-Surveys---Stormy?node-id=2%3A18

## FRs
https://docs.google.com/document/d/1hx4KGHclCNlZfqCMb8ATGFmyhhlgF0ZI41G85iw7Gio/edit?ts=5e1b9d2b#

## Assumptions made
 - User navigate questions in survey by clicking "pagination" on buttom, no "Submit" button
 - User can skip questions, no checks for empty inputs made
 - Answers sorted by "order" prop
 - Answer deleted after user navigate out of question, no answers stored on client side
 - In Rate question type scale of 3 stars, user should navigate to other question in survey manually to submit this naswer

