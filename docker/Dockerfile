FROM technicallyspeaking/dev-envs:nodejs-centos-master
MAINTAINER "Sophia Hudson" <sophia.hudson@technicallyspeaking.io>
LABEL version "0.1.0"

ENV APP_TITLE=web-server
ENV APP_ROOT=$HOME/$APP_TITLE
ENV NVM_BIN=$HOME/.nvm/versions/node/v$NODE_VERSION/bin
ENV PATH=$PATH:$NVM_BIN

RUN mkdir $APP_ROOT && npm install -g gulp-cli
ADD src/package.json $APP_ROOT
WORKDIR $APP_ROOT
RUN npm install

EXPOSE 443
