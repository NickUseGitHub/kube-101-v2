FROM node:10-alpine

ENV HOME /home/node/app
WORKDIR $HOME
COPY ./package.json $HOME

RUN yarn
COPY ./app $HOME

RUN chmod -R 555 ${HOME} \
  && chown -fR node:node ${HOME}

USER node:node

CMD ["yarn", "start"]