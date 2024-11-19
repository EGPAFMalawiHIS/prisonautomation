#!/bin/sh

mkdir -p /backups

# Get database credentials from the Rails config
USERNAME=`ruby -ryaml -e "puts YAML::load_file('/opt/PRISON-API/config/database.yml')['development']['username']"`
PASSWORD=`ruby -ryaml -e "puts YAML::load_file('/opt/PRISON-API/config/database.yml')['development']['password']"`
DATABASE=`ruby -ryaml -e "puts YAML::load_file('/opt/PRISON-API/config/database.yml')['development']['database']"`
HOST=`ruby -ryaml -e "puts YAML::load_file('/opt/PRISON-API/config/database.yml')['development']['host']"`

# Set the backup directory (make sure this is where you want it to be saved)
BACKUP_DIR="/backups"  # Inside the container, this should be mapped to your host machine's directory (e.g., ~/Public)

# Create backup filename with the current date
BACKUP_FILE="$BACKUP_DIR/$(date +%Y-%m-%d)-$DATABASE.sql.gz"

# Perform the backup
if mysqldump --user=$USERNAME --password=$PASSWORD --host=$HOST $DATABASE | gzip > $BACKUP_FILE; then
  echo "Backup successful: $BACKUP_FILE"
  # Optionally, remove backups older than 7 days (uncomment the next line if needed)
  # find $BACKUP_DIR -type f -name "*.sql.gz" -mtime +7 -exec rm {} \;
else
  echo "Backup failed" >&2
fi

