**Instructions**

**clone/git**

1. git clone git@github.com:RyanAsh93/starter-setup.git ProjectName
2. remove origin
3. cd into project
4. git remote rm origin
5. create a new repo and add new origin
6. git add remote origin <ulr>

**Rails**

1. cd ProjectName
2. run bundle
3. in config/database yml replace database name to whatever you called the new project
4. in this case that would be starter_setup_...
5. rails db:create db:migrate db:seed
6. rails s -p 3001
7. check this route http://localhost:3001 

**React**

1. cd ProjectName/client
2. run yarn
3. run yarn start
4. open http://localhost:3000 (make sure rails is on port 3001)
 
