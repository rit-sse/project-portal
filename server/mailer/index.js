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

    Promise.all([
      dataUtils.getRequest(id),
      dataUtils.getApproversForId(id)
    ])
    .then( res => {
      return {
        request: res[0],
        approvers: res[1].map( e => e.email )
      }
    })
    .then( res => {

        let subject = `[ACTION REQUIRED] New Purchase Request: ${res.request.name} - ${res.request.part}`;
        let to = res.approvers.pop();

        approver.requestTokenForApprover(id)
          .then( token => {
            let options = {
              project: res.request.name,
              approvelink: `http://${process.env.SERVERURL}/s/v1/approve/${token}`
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
                if (sendError) {
                  console.error(sendError);
                }
                console.log(body);
              });
            });
          });
      });
  }
};
