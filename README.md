Description

Prison Automation is an installer for prison emr application which has both the frontend and backend.
The frontend uses angular and the backend uses rails.

    MySQL 8.0 --> The installer will do it automatically
    Ruby 2.5 --> The installer will do it automatically
    Rails 5.2 --> The installer will do it automatically
    Node 16
    Python3
    Docker --> The installer will do it automatically

Getting Started

Install Dependacies first on the machine
   
   1. Here is where you can get node version select install with nvm
      https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04

   2. Set default node
       nvm use 16

   2. Here is where you can get python3
       https://docs.python-guide.org/starting/install3/linux/

To set up the app locally, follow these steps:

    1. Clone the Repository:
        https://github.com/EGPAFMalawiHIS/prisonautomation.git

    2. Navigate to the Project Directory:
         cd Prisonautomation

    3. Rename the file
         api/api-config.yml.example To api/api-config.yml

    3. Run the install file:
         python3 ./setup.py

    4. Database Setup:

1. RUN: 
   sudo docker ps --all (To see the images running and the ports)

2. Check database availability
   sudo docker exec -it prisonautomation_prisondb_1 mysql -uuser -ppassword -e 'show databases'

3. If database is not available enter the mysql and create
    sudo docker exec -it prisonautomation_prisondb_1 mysql -uuser -ppassword

4. Use the command to import database 
   sudo sh -c "pv prison.sql | docker exec -i prisonautomation_prisondb_1 mysql -uuser -ppassword openmrsprison -f"

5. sudo docker exec -it 'prisonautomation_api_1' rails db:migrate

    OR Enter api container using bash by running this command
      sudo docker exec -it prisonautomation_api_1 bash
    Run ==> rails db:migrate

6. Check where the api port is and go change the enviroment file.

7. Extra commands for docker knowledge 
      sudo systemctl stop prison <==== all prison images
      sudo systemctl disable prison <===== completely disabled them
      systemctl start docker
      systemctl status docker
      sudo docker container stop prisonautomation_api_1

Contributing

     Feel free to contribute to the development of the vBox App! If you find any issues or have suggestions, please open an issue or submit a pull request.



