'use strict';
const config    = require('../config'),
      Mailgun   = require('mailgun-js'),
      dataUtils = require('../utils'),
      approver  = require('../utils/hooks'),
      mailcomposer = require('mailcomposer'),
      jade      = require('jade')
;

const mailer = Mailgun(config.mailgun);
const render = jade.compileFile('./mailer/templates/default.jade');

module.exports = {
  scheduleEmail(id) {
    console.log(`Sending email for request ${id}`)
    dataUtils.getRequest(id)
      .then( data => {

        let subject = `[ACTION REQUIRED] New Purchase Request: ${data.title} - ${data.part}`;
        let to = 'timbrook480@gmail.com';

        approver.requestTokenForApprover(1)
          .then( token => {
            let options = {
              project: data.title,
              approvelink: `http://localhost:3000/v1/approve/${token}`
            };

            let html = render(options);

            mailcomposer({
              from: 'Project Portal <project-portal@timbrook.im>',
              to, subject, html
            })
            .build( (err, message) => {
              let dataToSend = {
                to, message: message.toString('ascii')
              };
              mailer.messages().sendMime(dataToSend, function (sendError, body) {
                console.log(body);
              });
            });
          });
      });
  }
};
