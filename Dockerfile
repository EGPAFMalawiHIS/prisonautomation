FROM ruby:2.5.3

RUN apt-get update
RUN apt-get install build-essential default-mysql-client default-libmysqlclient-dev pv -y

RUN mkdir /opt/PRISON-API
WORKDIR /opt/PRISON-API
COPY tmp/prisonemr_backend/Gemfile /opt/PRISON-API/Gemfile
COPY tmp/prisonemr_backend/vendor /opt/PRISON-API/vendor
RUN bundle install --local
COPY tmp/prisonemr_backend /opt/PRISON-API

COPY api/bin/initialize_database.sh /usr/bin/initialize_database.sh
RUN chmod +x /usr/bin/initialize_database.sh

COPY api/bin/backup_database.sh /usr/bin/backup_database.sh
RUN chmod +x /usr/bin/backup_database.sh
COPY api/bin/restore_database.sh /usr/bin/restore_database.sh
RUN chmod +x /usr/bin/restore_database.sh

COPY api/bin/change_database_password.sh /usr/bin/change_database_password.sh
RUN chmod +x /usr/bin/change_database_password.sh

COPY api/bin/entrypoint.sh /usr/bin
RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT [ "entrypoint.sh" ]
EXPOSE 3000

CMD ["rails", "s", "-b", "0.0.0.0"]