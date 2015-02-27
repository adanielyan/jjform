var loopback = require('loopback');

module.exports = function(Project) {
    Project.observe('before save', function updateTimestamp(ctx, next) {
        if (ctx.instance) {
            ctx.instance.created = new Date();

            var token = loopback.getCurrentContext().get('accessToken');
            if(token !== undefined) {
                ctx.instance.ownerId = token.userId;
            }
        } else {
            ctx.data.modified = new Date();
        }
        next();
    });
};
