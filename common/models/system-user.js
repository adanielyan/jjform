var config = require('../../server/config.json');
var path = require('path');
module.exports = function(SystemUser) {
    //send verification email after registration
    SystemUser.afterRemote('create', function(context, user) {
        console.log('> user.afterRemote triggered');

        var url = 'http://' + config.host + ':' + config.port + 'api/SystemUsers/confirm'
            + '?uid=' + user.id
            + '&token=' + user.verificationToken;
        var html = 'PLEASE verify your email by following this link: '
            + '<a href="' + url + '">' + url + '</a>';

        var options = {
            type: 'email',
            to: user.email,
            from: 'noreply@loopback.com',
            subject: 'Thank you for creating account!',
            //template: path.resolve(__dirname, '../../server/views/verify.ejs'),
            text: html,
            redirect: '/',
            user: user
        };

        user.verify(options, function(err, response) {
            if (err) {
                console.log(err.message);
                return;
            }

            console.log('> verification email sent:', response);

            context.res.render('response', {
                title: 'Signed up successfully',
                content: 'Please check your email and click on the verification link '
                + 'before logging in.',
                redirectTo: '/',
                redirectToLinkText: 'Log in'
            });
        });
    });

    //send password reset link when requested
    //SystemUser.on('resetPasswordRequest', function(info) {
    //    var url = 'http://' + config.host + ':' + config.port + '/reset-password';
    //    var html = 'Click <a href="' + url + '?access_token=' + info.accessToken.id
    //        + '">here</a> to reset your password';
    //
    //    SystemUser.app.models.Email.send({
    //        to: info.email,
    //        from: info.email,
    //        subject: 'Password reset',
    //        html: html
    //    }, function(err) {
    //        if (err) return console.log('> error sending password reset email');
    //        console.log('> sending password reset email to:', info.email);
    //    });
    //});
};
