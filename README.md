- for starting the db add this url
  DATABASE_URL="postgresql://postgres:secretpassword@localhost:5432/naukriscore"

  and then run 
  **docker compose -f ./docker-compose.json up -d**

  and then run 
  **npx prisma migrate dev -n "init"**

- for starting the backend or frontend
  look into their **package.json**