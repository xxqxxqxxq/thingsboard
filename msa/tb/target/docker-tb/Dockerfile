#
# Copyright © 2016-2021 The Thingsboard Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

FROM thingsboard/openjdk11

COPY logback.xml thingsboard.conf start-db.sh stop-db.sh start-tb.sh upgrade-tb.sh install-tb.sh thingsboard.deb /tmp/

RUN chmod a+x /tmp/*.sh \
    && mv /tmp/start-tb.sh /usr/bin \
    && mv /tmp/upgrade-tb.sh /usr/bin \
    && mv /tmp/install-tb.sh /usr/bin \
    && mv /tmp/start-db.sh /usr/bin \
    && mv /tmp/stop-db.sh /usr/bin

RUN dpkg -i /tmp/thingsboard.deb
RUN rm /tmp/thingsboard.deb

RUN systemctl --no-reload disable --now thingsboard.service > /dev/null 2>&1 || :

RUN mv /tmp/logback.xml /usr/share/thingsboard/conf \
    && mv /tmp/thingsboard.conf /usr/share/thingsboard/conf

ENV DATA_FOLDER=/data

ENV HTTP_BIND_PORT=9090
ENV DATABASE_TS_TYPE=sql

ENV SPRING_JPA_DATABASE_PLATFORM=org.hibernate.dialect.HSQLDialect
ENV SPRING_DRIVER_CLASS_NAME=org.hsqldb.jdbc.JDBCDriver
ENV SPRING_DATASOURCE_URL=jdbc:hsqldb:file:/data/db/thingsboardDb;sql.enforce_size=false;hsqldb.log_size=5
ENV SPRING_DATASOURCE_USERNAME=sa
ENV SPRING_DATASOURCE_PASSWORD=

RUN mkdir -p /data
RUN chown -R thingsboard:thingsboard /data

RUN chmod 555 /usr/share/thingsboard/bin/thingsboard.jar

USER thingsboard

EXPOSE 9090
EXPOSE 1883
EXPOSE 5683/udp

VOLUME ["/data"]

CMD ["start-tb.sh"]
