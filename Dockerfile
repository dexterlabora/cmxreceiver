# Start from argon (latest long term supported version of node)
# - argon : Full node dev env (640 MB) : python inside
# - argon-slim : Light node env (200 MB) : no python, can be an issue for npm installs / builds
FROM node:argon-slim

MAINTAINER Cory Guynn

EXPOSE 1890

# create 'not priviledged' user
RUN useradd -c 'Node.js user' -m -d /home/node -s /bin/bash node

# isolate code distribution
RUN mkdir -p /home/node/cmxreceiver
WORKDIR /home/node/cmxreceiver

# build application 
# [TIP] minimize image rebuilds needs by isolating dependencies from declarative aspects  
COPY . /home/node/cmxreceiver

RUN npm install

# Switch to user mode
RUN chown -R node:node /home/node/cmxreceiver
USER node
ENV HOME /home/node

# Run default sample
CMD /usr/local/bin/node cmxreceiver.js


