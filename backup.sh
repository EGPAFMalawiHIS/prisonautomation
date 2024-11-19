#!/bin/sh

mkdir -p /backups

while true; do
  if mysqldump -h prisondb -uroot -ppassword --no-tablespaces --skip-lock-tables openmrs_prison |
  gzip > /backups/prison_dump-$(date +%Y-%m-%d).sql.gz; then
    find /backups -type f -name "*.sql.gz" -mtime +7 -delete
  else
    echo "Backup failed at $(date)" >&2
  fi
  sleep 86400
done
